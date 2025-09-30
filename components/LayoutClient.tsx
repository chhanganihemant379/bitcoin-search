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
        context="bitcoin-search"
        showSystemStatus={true}
        onAppClick={(app: string) => console.log('App clicked:', app)}
      />

      {/* Main Content Area */}
      <div className="flex flex-1 relative">
        {/* Developer Sidebar */}
        {showDevSidebar && (
          <DevSidebar 
            context="bitcoin-search"
            githubRepo="https://github.com/bitcoin-apps-suite/bitcoin-search"
            statsOverride={{
              searches: '125K',
              micropayments: '2.5M',
              dataVendors: '45',
              economicWeight: '125.7K BSV'
            }}
            customMenuItems={[
              { icon: '🔍', label: 'Search Analytics' },
              { icon: '💰', label: '$bSearch Token' },
              { icon: '📊', label: 'Economic Weight Graph' },
              { icon: '🔗', label: 'Data Vendors' }
            ]}
          />
        )}

        {/* Main Content */}
        <main className="flex-grow relative">
          <BitcoinOSIntegration />
          {children}
        </main>
      </div>

      {/* Dock */}
      {showDock && (
        <Dock 
          context="bitcoin-search"
          customApps={[
            { 
              id: 'search', 
              name: 'Bitcoin Search', 
              icon: '🔍',
              description: 'Economically Weighted Search'
            },
            {
              id: 'explorer',
              name: 'Block Explorer',
              icon: '🔗',
              description: 'On-chain Data Verification'
            },
            {
              id: 'token',
              name: '$bSearch Token',
              icon: '💰',
              description: 'Search Economy Token'
            }
          ]}
          showSystemStatus={true}
          onAppClick={(app: any) => console.log('Dock app clicked:', app)}
        />
      )}
    </div>
  )
}