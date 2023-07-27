"use client"

import PreviewModal from '@/components/ui/preview-modal'
import React, { useEffect, useState } from 'react'

const UsePreviewProvider = () => {
    const [Mounted,IsMounted] = useState(false)
    
    useEffect(()=>{
        IsMounted(true)
    },[])

    if(!Mounted) return null
    return <PreviewModal/>
}

export default UsePreviewProvider