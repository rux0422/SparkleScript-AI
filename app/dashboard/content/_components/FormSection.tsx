"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput:any
    loading:boolean
}

const defaultIcon = '/path/to/default-icon.png'; // Use a valid path to your default image

function FormSection({ selectedTemplate,userFormInput,loading}: PROPS) {
    const iconSrc = selectedTemplate?.icon || defaultIcon;
    const [formData, setFormData]=useState<any>();

    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormInput(formData)
      
      

    }
   

    const handleInputChange=(event:any)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})

    }
    
    return (
        <div className='p-5 shadow-md border rounded-lg bg-white'>
            <Image src={iconSrc} alt='icon' width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-pink-500'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
            
            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form && selectedTemplate.form.map((item, index) => (
                    <div className='my-2 flex flex-col gap-2 mb-7'>
                        <label className='font-bold'>{item.label}</label>
                        {item.field=='input' ?
                        <Input name={item.name} required={item?.required}
                        onChange={handleInputChange}
                        />
                        :item.field=='textarea'?
                        <Textarea name={item.name} required={item?.required}
                        onChange={handleInputChange}/>:null
                        
                    }
                        <input
                            type={item.field}
                            name={item.name}
                            required={item.required}
                            className='block mt-1'
                        />
                    </div>
                ))}
                <Button type="submit" className='bg-gradient-to-tr from-pink-500 via-pink-700 to-orange-500 w-full py-6' disabled={loading}> {loading&&<Loader2Icon className='animate-spin'/>}Generate Content</Button>
            </form>
        </div>
    )
}

export default FormSection;
