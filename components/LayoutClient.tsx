'use client'

import React from 'react'
import StandardPocBar from './StandardPocBar'
import Navigation from './Navigation'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Standard POC Bar - Always at the very top */}
      <StandardPocBar 
        appName="Bitcoin Search"
        primaryColor="#3b82f6"
        secondaryColor="#2563eb"
        isDismissible={true}
        showBitcoinLogo={true}
        links={[
          { label: 'Exchange', href: '/exchange', external: true },
          { label: 'GitHub', href: 'https://github.com/bitcoin-apps-suite/bitcoin-search', external: true }
        ]}
      />

      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-grow relative page-with-nav">
        {children}
      </main>
    </div>
  )
}