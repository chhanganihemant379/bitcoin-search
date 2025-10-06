'use client'

import { useState, useEffect } from 'react'
import { 
  Activity, 
  Search, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Hash,
  Zap,
  Database,
  Globe,
  BarChart3
} from 'lucide-react'

interface EconomicTransaction {
  id: string
  type: 'search' | 'vendor_payout' | 'token_transfer' | 'stake' | 'quality_bonus'
  from: string
  to: string
  amount: number
  token: 'BSV' | '$bSearch'
  timestamp: Date
  query?: string
  vendor?: string
  weight: number
}

interface EconomicMetric {
  label: string
  value: string
  change: number
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTx, setSelectedTx] = useState<string | null>(null)
  const [timeRange, setTimeRange] = useState('1h')

  // Simulated real-time transactions
  const [transactions, setTransactions] = useState<EconomicTransaction[]>([
    {
      id: 'tx_001',
      type: 'search',
      from: '1A1zP1...',
      to: 'vendor_pool',
      amount: 0.005,
      token: 'BSV',
      timestamp: new Date(Date.now() - 1000),
      query: 'Bitcoin whitepaper',
      weight: 0.005
    },
    {
      id: 'tx_002',
      type: 'vendor_payout',
      from: 'vendor_pool',
      to: 'TechnicalDocs',
      amount: 0.002,
      token: 'BSV',
      timestamp: new Date(Date.now() - 2000),
      vendor: 'TechnicalDocs Pro',
      weight: 0.002
    },
    {
      id: 'tx_003',
      type: 'quality_bonus',
      from: 'reward_pool',
      to: 'BlockchainWiki',
      amount: 50,
      token: '$bSearch',
      timestamp: new Date(Date.now() - 3000),
      weight: 0.0045
    },
    {
      id: 'tx_004',
      type: 'stake',
      from: '1BoatS...',
      to: 'stake_pool',
      amount: 1000,
      token: '$bSearch',
      timestamp: new Date(Date.now() - 4000),
      weight: 0.089
    },
    {
      id: 'tx_005',
      type: 'search',
      from: '1Dorian...',
      to: 'vendor_pool',
      amount: 0.003,
      token: 'BSV',
      timestamp: new Date(Date.now() - 5000),
      query: 'BSV scaling solutions',
      weight: 0.003
    }
  ])

  // Add new transaction every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const types: EconomicTransaction['type'][] = ['search', 'vendor_payout', 'token_transfer', 'stake', 'quality_bonus']
      const randomType = types[Math.floor(Math.random() * types.length)]
      
      const newTx: EconomicTransaction = {
        id: `tx_${Date.now()}`,
        type: randomType,
        from: `1${Math.random().toString(36).substring(7)}...`,
        to: randomType === 'search' ? 'vendor_pool' : `vendor_${Math.floor(Math.random() * 10)}`,
        amount: randomType === 'stake' ? Math.floor(Math.random() * 5000) : Math.random() * 0.01,
        token: ['stake', 'quality_bonus', 'token_transfer'].includes(randomType) ? '$bSearch' : 'BSV',
        timestamp: new Date(),
        query: randomType === 'search' ? 'Sample query' : undefined,
        vendor: randomType === 'vendor_payout' ? 'Sample Vendor' : undefined,
        weight: Math.random() * 0.1
      }
      
      setTransactions(prev => [newTx, ...prev].slice(0, 100))
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const metrics: EconomicMetric[] = [
    { label: 'Total Economic Weight', value: '125.7K BSV', change: 24.5, icon: Activity },
    { label: 'Active Searches', value: '2,456', change: 18.2, icon: Search },
    { label: 'Vendor Payouts', value: '845 BSV', change: 15.8, icon: DollarSign },
    { label: 'Token Velocity', value: '3.2x', change: 12.1, icon: TrendingUp },
  ]

  const getTypeColor = (type: EconomicTransaction['type']) => {
    switch(type) {
      case 'search': return 'text-blue-400 bg-blue-900/20'
      case 'vendor_payout': return 'text-green-400 bg-green-900/20'
      case 'token_transfer': return 'text-purple-400 bg-purple-900/20'
      case 'stake': return 'text-yellow-400 bg-yellow-900/20'
      case 'quality_bonus': return 'text-pink-400 bg-pink-900/20'
      default: return 'text-gray-400 bg-gray-900/20'
    }
  }

  const formatAddress = (addr: string) => {
    if (addr.length > 10) {
      return `${addr.slice(0, 6)}...${addr.slice(-4)}`
    }
    return addr
  }

  const formatTime = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  const filteredTransactions = transactions.filter(tx => {
    if (!searchQuery) return true
    return tx.id.includes(searchQuery) ||
           tx.from.includes(searchQuery) ||
           tx.to.includes(searchQuery) ||
           tx.query?.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="blue-gradient">Economic</span>
            <span className="text-white ml-2">Explorer</span>
          </h1>
          <p className="text-gray-400">Real-time economic weight and micropayment flows</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.label} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">{metric.label}</span>
                  <Icon className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className={`flex items-center gap-1 text-sm ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Economic Weight Chart */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Economic Weight Distribution</h3>
            <div className="flex gap-2">
              {['1h', '24h', '7d', '30d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <div className="h-64 bg-black/30 rounded-lg border border-gray-700 p-4">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                <p className="text-gray-500">Economic weight flow visualization</p>
                <p className="text-xs text-gray-600 mt-1">Showing {timeRange} timeframe</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 text-xs">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-400">Search Volume</span>
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-400">Vendor Payouts</span>
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-400">Token Transfers</span>
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-400">Staking Activity</span>
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by transaction ID, address, or query..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Transaction List */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800">
            <h3 className="text-lg font-bold text-white">Live Economic Activity</h3>
            <p className="text-sm text-gray-400 mt-1">Real-time micropayment and token flows</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Type</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">From → To</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Amount</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Economic Weight</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Details</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr 
                    key={tx.id}
                    onClick={() => setSelectedTx(tx.id)}
                    className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors cursor-pointer ${
                      selectedTx === tx.id ? 'bg-gray-800/40' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(tx.type)}`}>
                        {tx.type.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">{formatAddress(tx.from)}</span>
                        <ArrowRight className="w-3 h-3 text-gray-500" />
                        <span className="text-white">{formatAddress(tx.to)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-white font-medium">
                          {tx.amount < 1 ? tx.amount.toFixed(6) : tx.amount.toLocaleString()}
                        </span>
                        <span className={`text-xs ${tx.token === 'BSV' ? 'text-orange-400' : 'text-blue-400'}`}>
                          {tx.token}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        <span className="text-yellow-400 font-medium">{tx.weight.toFixed(4)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-400">
                        {tx.query ? `"${tx.query}"` : tx.vendor || '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500">{formatTime(tx.timestamp)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Network Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <h4 className="text-white font-medium">Network Health</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Response Time</span>
                <span className="text-white">35ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Vendors</span>
                <span className="text-white">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network Uptime</span>
                <span className="text-green-400">99.99%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-5 h-5 text-purple-400" />
              <h4 className="text-white font-medium">Data Quality</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Quality Score</span>
                <span className="text-white">98.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Verified Sources</span>
                <span className="text-white">2,345</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Freshness</span>
                <span className="text-green-400">Real-time</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-5 h-5 text-green-400" />
              <h4 className="text-white font-medium">Economic Flow</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">24h Volume</span>
                <span className="text-white">2,450 BSV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Token Velocity</span>
                <span className="text-white">3.2x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Market Efficiency</span>
                <span className="text-green-400">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}