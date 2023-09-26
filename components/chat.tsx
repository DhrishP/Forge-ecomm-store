'use client'

import { FC } from 'react'
import ChatInput from './chat-input'
// import ChatMessages from './ChatMessages'
import ChatHeader from './chat-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const Chat: FC = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='relative bg-secondary-content z-40 shadow'>
      <AccordionItem value='item-1'>
        <div className='fixed right-8 w-80 bottom-8 bg-primary-content border border-gray-200 rounded-md overflow-hidden'>
          <div className='w-full h-full flex flex-col'>
            <AccordionTrigger className='px-6 border-b border-zinc-300'>
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col h-80'>
                {/* <ChatMessages className='px-2 py-3 flex-1' /> */}
                <ChatInput className='' />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default Chat