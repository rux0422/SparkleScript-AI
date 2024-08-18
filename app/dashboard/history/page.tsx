"use client"; // Ensure this directive is at the top for client-side rendering

import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection'
import CopyButton from '@/app/dashboard/history/_components/CopyButton'

export interface HISTORY {
    id: number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
}

const History = () => {
    const [historyList, setHistoryList] = useState<HISTORY[]>([]);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        // Fetch user email
        const fetchUser = async () => {
            const response = await fetch('/api/get-user');
            const userData = await response.json();
            if (userData.email) {
                setUserEmail(userData.email);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        // Fetch history data based on the user's email
        const fetchHistory = async () => {
            if (userEmail) {
                const response = await fetch(`/api/history?email=${userEmail}`);
                const data = await response.json();
                
                if (Array.isArray(data)) {
                    setHistoryList(data);
                } else if (data.error) {
                    console.error('Failed to fetch history:', data.error);
                }
            }
        };

        fetchHistory();
    }, [userEmail]);

    const GetTemplateName = (slug: string) => {
        const template: TEMPLATE | any = Templates?.find((item) => item.slug === slug);
        return template;
    }

    const handleDelete = async (id: number) => {
        const response = await fetch(`/api/deletehistory?id=${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Update the history list after successful deletion
            setHistoryList(historyList.filter(item => item.id !== id));
        } else {
            console.error('Failed to delete entry');
        }
    }

    return (
        <div className='m-5 p-5 border rounded-lg bg-white'>
            <h2 className='font-bold text-3xl'>History</h2>
            <p className='text-gray-500'>Search your previously generated AI content</p>
            <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
                <h2 className='col-span-2'>TEMPLATE</h2>
                <h2 className='col-span-2'>AI RESP</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>ACTIONS</h2>
            </div>
            {historyList.map((item: HISTORY) => (
                <div key={item.id} className='grid grid-cols-7 my-5 py-3 px-3'>
                    <h2 className='col-span-2 flex gap-2 items-center'>
                        <Image src={GetTemplateName(item?.templateSlug)?.icon} width={25} height={25} alt='icon' />
                        {GetTemplateName(item.templateSlug)?.name}
                    </h2>
                    <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse}</h2>
                    <h2>{item.createdAt}</h2>
                    <h2>{item?.aiResponse.length}</h2>
                    <h2>
                        <CopyButton aiResponse={item.aiResponse} />
                        <Button onClick={() => handleDelete(item.id)} className='bg-orange-500'>Delete</Button>
                    </h2>
                </div>
            ))}
        </div>
    )
}

export default History;