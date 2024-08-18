'use client'
import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

// Helper function to convert form data to the expected type
const normalizeTemplates = (templates: any[]): TEMPLATE[] => {
    return templates.map(template => ({
        ...template,
        form: template.form?.map((f: any) => ({
            ...f,
            required: f.required === 'true' ? true : f.required === 'false' ? false : undefined,
        }))
    }));
}

function TemplateListSection({ userSearchInput }: any) {
    const [templatelist, setTemplateList] = useState<TEMPLATE[]>(normalizeTemplates(Templates));

    useEffect(() => {
        if (userSearchInput) {
            const filterData = normalizeTemplates(Templates).filter(item =>
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            );
            setTemplateList(filterData);
        } else {
            setTemplateList(normalizeTemplates(Templates));
        }
    }, [userSearchInput]);

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {templatelist.map((item: TEMPLATE, _index: number) => (
                <TemplateCard {...item} />
            ))}
        </div>
    );
}

export default TemplateListSection;
