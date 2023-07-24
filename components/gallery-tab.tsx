"use client"
import { cn } from '@/lib/utils'
import { Tab } from '@headlessui/react'
import React from 'react'
import NextImage from 'next/image'
type GalleryTabprops = {
    Image:Image
}
const GalleryTab = ({Image}:GalleryTabprops) => {
  return (
    <Tab
      className="card flex aspect-square  cursor-pointer rounded-md bg-white"
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square  overflow-hidden rounded-md">
            <NextImage 
              fill 
              src={Image.url} 
              alt="" 
              className="object-cover object-center" 
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab