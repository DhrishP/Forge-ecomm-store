import { cn } from '@/lib/utils'
import React, { useState} from 'react'
import TextareaAutosize from 'react-textarea-autosize'
type ChatInputProps = {
  className:string,
}
const ChatInput = ({className}:ChatInputProps) => {
    const[input, setInput] = useState('')
    
  return (
    <div className={cn(`border-t border-primary-content`,className)}>
     <TextareaAutosize
    rows={2}
    maxRows={4}
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder='Type a message...'
    className='peer  disabled:opacity-50 pr-14 resize-none blockw-full border-0 bg-primary-content py-1.5 text-primary focus:ring-0 text-sm sm:leading-6'
    />
    </div>

  )
}

export default ChatInput