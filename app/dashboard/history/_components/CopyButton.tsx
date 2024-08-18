"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

function CopyButton({ aiResponse }: { aiResponse: string }) {
  const [copied, setCopied] = useState(false); // State to track copied status

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse).then(() => {
      setCopied(true); // Update state to indicate text has been copied
      setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
    });
  };

  return (
    <div>
      <Button 
        variant='ghost' 
        className='text-primary'
        onClick={handleCopy}
      >
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  )
}

export default CopyButton
