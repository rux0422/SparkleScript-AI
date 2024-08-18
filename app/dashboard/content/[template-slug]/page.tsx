"use client";
import React, { useContext, useState } from 'react'; // Import useState from React
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ChatSession } from '@google/generative-ai';
import { chatSession } from '@/utils/AIModel';
import { AIOutput } from '@/utils/schema';
import { db } from '@/utils/db';
import { useUser } from '@clerk/clerk-react';
import moment from 'moment';

import { useRouter } from 'next/navigation';

// Function to normalize templates data
const normalizeTemplates = (templates: any[]): TEMPLATE[] => {
    return templates.map(template => ({
        ...template,
        form: template.form?.map((f: any) => ({
            ...f,
            required: f.required === 'true' ? true : f.required === 'false' ? false : undefined,
        })) || [] // Provide default empty array if form is undefined
    }));
};

interface PROPS {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: PROPS) {
    const normalizedTemplates = normalizeTemplates(Templates);
    const selectedTemplate: TEMPLATE | undefined = normalizedTemplates.find(item => item.slug === props.params['template-slug']);
    const [loading, setLoading] = useState(false); // Initialize state
    const [aiOutput, setAIOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter(); // Correctly invoke useRouter
  
    const GenerateAIContent = async (formData: any) => {
        
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAIPrompt = JSON.stringify(formData) + "," + (SelectedPrompt || '');

        try {
            const result = await chatSession.sendMessage(FinalAIPrompt);
            const responseText = await result.response.text(); // Await the text response
            console.log(responseText);
            setAIOutput(responseText);
            await SaveInDb(formData, selectedTemplate?.slug, responseText); // Correctly set AI output
        } catch (error) {
            console.error("Error generating AI content:", error);
        } finally {
            setLoading(false);
        }
    };

    const SaveInDb = async (formData: any, slug: string | undefined, aiResp: string) => {
        if (!slug) {
            console.error("Template slug is missing.");
            return;
        }

        try {
            await db.insert(AIOutput).values({
                formData: formData as string, // Ensure formData is a string
                templateSlug: slug as string, // Ensure slug is a string
                aiResponse: aiResp, // Ensure aiResponse is a string
                createdBy: user?.primaryEmailAddress?.emailAddress || '', // Default to empty string if undefined
                createdAt: moment().format('DD/MM/YYYY'), 
                // Correct format
            });
            
        } catch (error) {
            console.error("Error saving data to DB:", error);
        }
    };

    return (
        <div className='p-10'>
            <Link href="/dashboard">
                <Button className='bg-pink-500'> <ArrowLeft /> Back </Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* FormSection */}
                <FormSection 
                    selectedTemplate={selectedTemplate} 
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loading={loading} 
                />

                {/* OutputSection */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput}/> {/* Pass aiOutput to OutputSection */}
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
