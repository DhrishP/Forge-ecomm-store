'use client'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

import React from 'react'

type QueryProviderProps = {
    children:React.ReactNode
}

const QueryProvider = ({children}:QueryProviderProps) => {
    const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default QueryProvider