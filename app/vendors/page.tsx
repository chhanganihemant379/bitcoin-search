'use client'

import { useState, useEffect } from 'react'
import { 
  Package, 
  Star, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Shield,
  Zap,
  Award,
  Filter,
  Search,
  ChevronRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface DataVendor {
  id: string
  name: string
  description: string
  rating: number
  totalSearches: number
  avgResponseTime: number
  pricePerQuery: number
  specialties: string[]
  staked: number
  earnings: number
  status: 'active' | 'inactive' | 'pending'
  qualityScore: number
}

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  const vendors: DataVendor[] = [
    {
      id: '1',
      name: 'TechnicalDocs Pro',
      description: 'Premium technical documentation and whitepaper indexing',
      rating: 4.9,
      totalSearches: 45230,
      avgResponseTime: 32,
      pricePerQuery: 0.005,
      specialties: ['technical', 'bitcoin', 'development'],
      staked: 5000,
      earnings: 234.5,
      status: 'active',
      qualityScore: 98.5
    },
    {
      id: '2',
      name: 'BlockchainWiki',
      description: 'Comprehensive blockchain and cryptocurrency knowledge base',
      rating: 4.7,
      totalSearches: 38456,
      avgResponseTime: 45,
      pricePerQuery: 0.003,
      specialties: ['blockchain', 'education', 'history'],
      staked: 3000,
      earnings: 189.2,
      status: 'active',
      qualityScore: 96.2
    },
    {
      id: '3',
      name: 'MarketData Stream',
      description: 'Real-time market data and price analytics',
      rating: 4.8,
      totalSearches: 52103,
      avgResponseTime: 28,
      pricePerQuery: 0.008,
      specialties: ['market', 'trading', 'analytics'],
      staked: 10000,
      earnings: 456.7,
      status: 'active',
      qualityScore: 97.8
    },
    {
      id: '4',
      name: 'CodeBase Index',
      description: 'Open source code repositories and developer resources',
      rating: 4.6,
      totalSearches: 29847,
      avgResponseTime: 38,
      pricePerQuery: 0.004,
      specialties: ['code', 'github', 'libraries'],
      staked: 2000,
      earnings: 145.3,
      status: 'active',
      qualityScore: 94.5
    },
    {
      id: '5',
      name: 'News Aggregator',
      description: 'Latest Bitcoin and crypto news from verified sources',
      rating: 4.5,
      totalSearches: 41290,
      avgResponseTime: 42,
      pricePerQuery: 0.002,
      specialties: ['news', 'media', 'updates'],
      staked: 1500,
      earnings: 98.4,
      status: 'active',
      qualityScore: 92.3
    }
  ]

  const categories = [
    { value: 'all', label: 'All Vendors' },
    { value: 'technical', label: 'Technical' },
    { value: 'market', label: 'Market Data' },
    { value: 'news', label: 'News & Media' },
    { value: 'code', label: 'Code & Dev' },
    { value: 'blockchain', label: 'Blockchain' }
  ]

  const sortedVendors = [...vendors]
    .filter(vendor => {
      const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = filterCategory === 'all' || 
                            vendor.specialties.includes(filterCategory)
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating
        case 'searches': return b.totalSearches - a.totalSearches
        case 'price': return a.pricePerQuery - b.pricePerQuery
        case 'speed': return a.avgResponseTime - b.avgResponseTime
        default: return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="blue-gradient">Data Vendors</span>
            <span className="text-white ml-2">Marketplace</span>
          </h1>
          <p className="text-gray-400">Choose from competing data vendors for the best search results</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Active Vendors</span>
              <Package className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-white">45</div>
            <div className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+5 this week</span>
            </div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Avg Response</span>
              <Zap className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-white">35ms</div>
            <div className="text-xs text-gray-500">Lightning fast</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total Staked</span>
              <Shield className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-white">125K</div>
            <div className="text-xs text-gray-500">$bSearch locked</div>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Daily Volume</span>
              <DollarSign className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-white">2.5K BSV</div>
            <div className="text-xs text-gray-500">Micropayments</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="rating">Sort by Rating</option>
            <option value="searches">Sort by Searches</option>
            <option value="price">Sort by Price</option>
            <option value="speed">Sort by Speed</option>
          </select>
        </div>

        {/* Vendor Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {sortedVendors.map((vendor) => (
            <div key={vendor.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-blue-800/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{vendor.name}</h3>
                  <p className="text-sm text-gray-400">{vendor.description}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  vendor.status === 'active' ? 'bg-green-900/30 text-green-400' : 'bg-gray-900/30 text-gray-400'
                }`}>
                  {vendor.status}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {vendor.specialties.map((specialty) => (
                  <span key={specialty} className="px-2 py-1 bg-blue-900/20 border border-blue-800/30 rounded text-xs text-blue-400">
                    {specialty}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Rating</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white font-medium">{vendor.rating}</span>
                    <span className="text-gray-500 text-xs">({vendor.totalSearches.toLocaleString()})</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">Response Time</div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-white font-medium">{vendor.avgResponseTime}ms</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">Price per Query</div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-blue-500" />
                    <span className="text-white font-medium">{vendor.pricePerQuery} BSV</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">Quality Score</div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-purple-500" />
                    <span className="text-white font-medium">{vendor.qualityScore}%</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <div>
                  <span className="text-xs text-gray-400">Staked: </span>
                  <span className="text-sm text-white font-medium">{vendor.staked.toLocaleString()} $bSearch</span>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors">
                  Select Vendor
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Vendor CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Become a Data Vendor</h3>
              <p className="text-gray-400 text-sm mb-4">
                Start earning $bSearch tokens by providing high-quality search results. 
                Stake tokens, set your prices, and compete in the free market for information.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Earn from every query</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Set your own prices</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Quality-based rewards</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all">
              Start Earning
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}