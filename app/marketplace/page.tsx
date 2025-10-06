'use client'

import { useState } from 'react'
import { 
  Store, 
  Package, 
  Shield, 
  Zap, 
  Star, 
  DollarSign,
  TrendingUp,
  Filter,
  Search,
  Plus,
  Check,
  X,
  AlertCircle,
  Award,
  Users,
  BarChart3
} from 'lucide-react'

interface DataPackage {
  id: string
  name: string
  vendor: string
  description: string
  category: string
  price: number
  queries: number
  rating: number
  reviews: number
  features: string[]
  performance: {
    avgResponse: number
    accuracy: number
    coverage: number
  }
}

interface MarketplaceStats {
  label: string
  value: string
  change: number
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'technical', label: 'Technical Data' },
    { id: 'market', label: 'Market Data' },
    { id: 'historical', label: 'Historical' },
    { id: 'realtime', label: 'Real-time' },
    { id: 'premium', label: 'Premium' }
  ]

  const dataPackages: DataPackage[] = [
    {
      id: 'pkg1',
      name: 'Bitcoin Core Documentation',
      vendor: 'TechnicalDocs Pro',
      description: 'Complete Bitcoin protocol documentation, BIPs, and technical specifications',
      category: 'technical',
      price: 0.01,
      queries: 50000,
      rating: 4.9,
      reviews: 234,
      features: ['Full BIP coverage', 'Code examples', 'API documentation', 'Weekly updates'],
      performance: { avgResponse: 25, accuracy: 99.5, coverage: 98 }
    },
    {
      id: 'pkg2',
      name: 'Real-time Market Feed',
      vendor: 'MarketData Stream',
      description: 'Live price feeds, order book data, and trading volume analytics',
      category: 'market',
      price: 0.02,
      queries: 100000,
      rating: 4.8,
      reviews: 189,
      features: ['1ms latency', '100+ exchanges', 'WebSocket API', 'Historical data'],
      performance: { avgResponse: 15, accuracy: 99.9, coverage: 95 }
    },
    {
      id: 'pkg3',
      name: 'Blockchain Analytics Suite',
      vendor: 'BlockchainWiki',
      description: 'On-chain analytics, address clustering, and transaction graph analysis',
      category: 'historical',
      price: 0.015,
      queries: 75000,
      rating: 4.7,
      reviews: 156,
      features: ['Full chain history', 'Address tags', 'ML clustering', 'Graph visualization'],
      performance: { avgResponse: 35, accuracy: 97.5, coverage: 92 }
    },
    {
      id: 'pkg4',
      name: 'Developer Resources Pack',
      vendor: 'CodeBase Index',
      description: 'Code repositories, libraries, tutorials, and development tools',
      category: 'technical',
      price: 0.008,
      queries: 30000,
      rating: 4.6,
      reviews: 98,
      features: ['GitHub integration', 'Code snippets', 'Tutorial videos', 'Tool recommendations'],
      performance: { avgResponse: 30, accuracy: 96.0, coverage: 88 }
    },
    {
      id: 'pkg5',
      name: 'News & Sentiment Analysis',
      vendor: 'News Aggregator',
      description: 'Real-time news feeds with AI-powered sentiment analysis',
      category: 'realtime',
      price: 0.005,
      queries: 45000,
      rating: 4.5,
      reviews: 167,
      features: ['500+ sources', 'Sentiment scoring', 'Trend detection', 'Alert system'],
      performance: { avgResponse: 40, accuracy: 94.5, coverage: 90 }
    }
  ]

  const marketStats: MarketplaceStats[] = [
    { label: 'Active Packages', value: '156', change: 12, icon: Package },
    { label: 'Total Vendors', value: '45', change: 8, icon: Users },
    { label: 'Daily Transactions', value: '12.5K', change: 24, icon: Zap },
    { label: 'Avg Quality', value: '96.5%', change: 3, icon: Award }
  ]

  const filteredPackages = dataPackages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'low' && pkg.price <= 0.01) ||
                        (priceRange === 'medium' && pkg.price > 0.01 && pkg.price <= 0.02) ||
                        (priceRange === 'high' && pkg.price > 0.02)
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="blue-gradient">Data</span>
            <span className="text-white ml-2">Marketplace</span>
          </h1>
          <p className="text-gray-400">Premium data packages from verified vendors</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {marketStats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                  <Icon className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className={`flex items-center gap-1 text-xs ${stat.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>+{stat.change}%</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search data packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
          
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Prices</option>
            <option value="low">≤ 0.01 BSV</option>
            <option value="medium">0.01 - 0.02 BSV</option>
            <option value="high">≥ 0.02 BSV</option>
          </select>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`bg-gray-900/50 backdrop-blur-sm border ${
                selectedPackage === pkg.id ? 'border-blue-500' : 'border-gray-800'
              } rounded-lg p-6 hover:border-blue-800/50 transition-all cursor-pointer`}
              onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
            >
              {/* Package Header */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                  <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">
                    {pkg.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-2">{pkg.vendor}</p>
                <p className="text-sm text-gray-300">{pkg.description}</p>
              </div>

              {/* Rating & Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-white font-medium">{pkg.rating}</span>
                  </div>
                  <span className="text-gray-500 text-xs">({pkg.reviews} reviews)</span>
                </div>
                <span className="text-gray-400 text-sm">{pkg.queries.toLocaleString()} queries</span>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {pkg.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                  {pkg.features.length > 3 && (
                    <span className="text-xs text-blue-400">+{pkg.features.length - 3} more</span>
                  )}
                </div>
              </div>

              {/* Performance Metrics */}
              {selectedPackage === pkg.id && (
                <div className="mb-4 pt-4 border-t border-gray-800">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white">{pkg.performance.avgResponse}ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-green-400">{pkg.performance.accuracy}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Coverage</span>
                      <span className="text-blue-400">{pkg.performance.coverage}%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div>
                  <span className="text-2xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-1">BSV/query</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Package CTA */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Create Your Data Package</h3>
              <p className="text-gray-400 text-sm mb-4">
                Have valuable data? Package it and start earning from every query. 
                Set your prices, define access levels, and compete in the marketplace.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Set your own prices</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Quality-based bonuses</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Automatic payments</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-medium transition-all">
              Create Package
            </button>
          </div>
        </div>

        {/* Popular Combinations */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Popular Package Combinations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Developer Bundle</h4>
              <p className="text-gray-400 text-sm mb-3">Technical docs + Code resources</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-medium">0.018 BSV</span>
                <span className="text-green-400 text-xs">Save 10%</span>
              </div>
            </div>
            
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Trader Pack</h4>
              <p className="text-gray-400 text-sm mb-3">Market data + News sentiment</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-medium">0.023 BSV</span>
                <span className="text-green-400 text-xs">Save 12%</span>
              </div>
            </div>
            
            <div className="bg-black/30 border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-medium mb-2">Research Suite</h4>
              <p className="text-gray-400 text-sm mb-3">All historical + Analytics</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-medium">0.028 BSV</span>
                <span className="text-green-400 text-xs">Save 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}