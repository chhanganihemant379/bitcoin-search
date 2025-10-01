'use client'

import React, { useState } from 'react'
import { Activity, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, DollarSign, Users, Zap, Scale, Search, Grid3X3 } from 'lucide-react'

export default function ActivityPage() {
  const [filter, setFilter] = useState('all')

  const activities = [
    {
      type: 'block',
      hash: '00000000000000000002a7c4c1e48d76c5a37902165a270156b7a8d72728a054',
      height: 750123,
      time: '2 minutes ago',
      transactions: 2451,
      size: '1.32 MB',
      miner: 'AntPool',
      reward: '6.25 BSV'
    },
    {
      type: 'transaction',
      hash: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
      time: '5 minutes ago',
      from: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      to: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
      amount: '150.5 BSV',
      fee: '0.0001 BSV',
      confirmations: 3
    },
    {
      type: 'block',
      hash: '00000000000000000001f9a2f2c3b5e8d7a6e5c4b3a2b1c0d9e8f7a6b5c4d3e2f1',
      height: 750122,
      time: '15 minutes ago',
      transactions: 1876,
      size: '1.18 MB',
      miner: 'F2Pool',
      reward: '6.25 BSV'
    },
    {
      type: 'transaction',
      hash: '7b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5',
      time: '18 minutes ago',
      from: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      to: '3FyVFsEyyBPzHjj3qXTJAiEVqHdcZBueno',
      amount: '500.0 BSV',
      fee: '0.0002 BSV',
      confirmations: 8
    },
    {
      type: 'transaction',
      hash: '9e8f7d6c5b4a3e2d1c0b9a8f7e6d5c4b3a2e1d0c9b8a7f6e5d4c3b2a1e0d9c8b7',
      time: '22 minutes ago',
      from: '1HLoD9E4SDFFPDiYfNYnkBLQ85Y51J3Zb1',
      to: '1FvzCLoTPGANNjWoUo6jUGuAG3wg1w4YjR',
      amount: '25.75 BSV',
      fee: '0.0001 BSV',
      confirmations: 12
    },
    {
      type: 'block',
      hash: '00000000000000000003b8c9d2e1a7f6c5d4b3a2e1f0c9d8e7f6a5b4c3d2e1f0',
      height: 750121,
      time: '28 minutes ago',
      transactions: 2103,
      size: '1.41 MB',
      miner: 'ViaBTC',
      reward: '6.25 BSV'
    }
  ]

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(a => a.type === filter)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-light mb-4">
            <span className="blue-gradient">Economic</span> Activity
          </h1>
          <p className="text-gray-400 text-lg">
            Real-time economic weight metrics and micropayment flows
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Scale, label: 'Total Weight', value: '125.7K BSV', change: '+12.5%', trend: 'up' },
            { icon: DollarSign, label: 'Micropayments/hr', value: '450K', change: '+8.3%', trend: 'up' },
            { icon: Users, label: 'Active Searchers', value: '25.6K', change: '+15.2%', trend: 'up' },
            { icon: Zap, label: 'Avg Weight/Result', value: '0.0125 BSV', change: '+2.1%', trend: 'up' },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-light text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {['all', 'search', 'content', 'payment'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-xl capitalize transition-all ${
                filter === type ? 'text-white' : 'text-gray-400'
              }`}
              style={{
                background: filter === type 
                  ? 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              {type === 'all' ? 'All Activity' : type + 's'}
            </button>
          ))}
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <div
              key={index}
              className="rounded-xl p-6 transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
              }}
            >
              {activity.type === 'block' ? (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' }}>
                        <Grid3X3 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Block #{activity.height}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-mono text-lg">{activity.reward}</p>
                      <p className="text-gray-400 text-sm">Reward</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-gray-400 text-xs">Hash</p>
                      <p className="text-white font-mono text-xs truncate">{activity.hash}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Miner</p>
                      <p className="text-white">{activity.miner}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Transactions</p>
                      <p className="text-white">{activity.transactions}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Size</p>
                      <p className="text-white">{activity.size}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg">Transaction</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {activity.time} • {activity.confirmations} confirmations
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-mono text-lg">{activity.amount}</p>
                      <p className="text-gray-400 text-sm">Fee: {activity.fee}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-400 text-xs">Transaction Hash</p>
                      <p className="text-white font-mono text-xs truncate">{activity.hash}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-xs">From</p>
                        <p className="text-white font-mono text-xs truncate">{activity.from}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">To</p>
                        <p className="text-white font-mono text-xs truncate">{activity.to}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button
            className="px-8 py-3 rounded-xl font-medium transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
              e.currentTarget.style.borderColor = '#3b82f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
            }}
          >
            Load More Activity
          </button>
        </div>
      </div>
    </div>
  )
}