'use client'

import React, { useState } from 'react'

export default function BitcoinOSIntegration() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const handleConnect = async () => {
    try {
      // Simulated connection for now
      setIsConnected(true)
      setAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa')
    } catch (error) {
      console.error('Failed to connect:', error)
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isConnected ? (
        <button
          onClick={handleConnect}
          className="px-4 py-2 rounded-lg font-medium text-black transition-all"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="px-4 py-2 rounded-lg backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
          }}
        >
          <span className="text-sm text-gray-300">
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connected'}
          </span>
        </div>
      )}
    </div>
  )
}