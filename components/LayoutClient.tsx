'use client'

import React from 'react'
import BitcoinOSIntegration from './BitcoinOSIntegration'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <BitcoinOSIntegration />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}