'use client'

import React, { useState } from 'react'
import BitcoinOSIntegration from './BitcoinOSIntegration'
import TopMenuBar from './TopMenuBar'
import DevSidebar from './DevSidebar'
import Dock from './Dock'
import ProofOfConceptBar from './ProofOfConceptBar'

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [showDevSidebar, setShowDevSidebar] = useState(true)
  const [showDock, setShowDock] = useState(true)

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Proof of Concept Bar - Always at the very top */}
      <ProofOfConceptBar />

      {/* Top Menu Bar (Taskbar) */}
      <TopMenuBar 
        onOpenApp={(app: string) => console.log('App clicked:', app)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 relative">
        {/* Developer Sidebar */}
        {showDevSidebar && (
          <DevSidebar />
        )}

        {/* Main Content */}
        <main className="flex-grow relative">
          <BitcoinOSIntegration />
          {children}
        </main>
      </div>

      {/* Dock */}
      {showDock && (
        <Dock />
      )}
    </div>
  )
}