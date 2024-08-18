import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
    aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
    const editorRef = useRef<any>(null);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput);
    }, [aiOutput]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(aiOutput);
            setIsCopied(true);
            // Reset the button text after a short delay
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-medium text-lg'>Your Content</h2>
                <Button
                    className={`flex gap-2 ${isCopied ? 'bg-green-500' : 'bg-orange-500'}`}
                    onClick={handleCopy}
                >
                    <Copy className='w-4 h-4' />
                    {isCopied ? 'Copied' : 'Copy'}
                </Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your content will appear here"
                initialEditType="wysiwyg"
                height="600px"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    );
}

export default OutputSection;

