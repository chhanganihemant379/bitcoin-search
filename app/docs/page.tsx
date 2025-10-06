'use client'

import { useState } from 'react'
import { 
  Book, 
  Code, 
  Terminal, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  FileText, 
  Package, 
  Database, 
  DollarSign,
  Activity,
  Users,
  Zap,
  Shield
} from 'lucide-react'

interface DocSection {
  id: string
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  content: string
  code?: string
  links?: { title: string; url: string }[]
}

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('getting-started')

  const sections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Book,
      content: 'Bitcoin Search is an economically weighted search engine where content value is determined by actual micropayments rather than arbitrary algorithms. Every search, click, and data exchange generates real economic signals.',
      code: `# Install Bitcoin Search SDK
npm install @bitcoin-search/sdk

# Initialize the client
import { SearchClient } from '@bitcoin-search/sdk'

const client = new SearchClient({
  apiKey: 'your-api-key',
  network: 'mainnet',
  micropaymentWallet: 'your-wallet-address'
})

// Perform an economically weighted search
const results = await client.search('Bitcoin whitepaper', {
  maxPayment: 0.01, // Max BSV to spend
  quality: 'premium' // Request premium data
})`,
      links: [
        { title: 'GitHub Repository', url: 'https://github.com/bitcoin-apps-suite/bitcoin-search' },
        { title: 'API Documentation', url: '/api' },
        { title: '$bSearch Token', url: '/token' }
      ]
    },
    {
      id: 'economic-weight',
      title: 'Economic Weight Model',
      icon: DollarSign,
      content: 'Unlike traditional search engines that use PageRank based on backlinks, Bitcoin Search uses economic weight - the actual value users are willing to pay for content. This creates a true market for information.',
      code: `// Economic Weight Algorithm
interface EconomicWeight {
  contentId: string
  totalPayments: number      // Total BSV received
  uniquePayers: number       // Unique users who paid
  avgPaymentAmount: number   // Average payment size
  qualityScore: number       // Vendor quality rating
  timeDecay: number         // Recent activity weight
}

// Calculate content ranking
function calculateRank(weight: EconomicWeight): number {
  return (
    weight.totalPayments * 0.4 +
    weight.uniquePayers * 0.3 +
    weight.avgPaymentAmount * 0.2 +
    weight.qualityScore * 0.1
  ) * weight.timeDecay
}`,
      links: [
        { title: 'Economic Explorer', url: '/explorer' },
        { title: 'Ranking Algorithm', url: '/ranking' }
      ]
    },
    {
      id: 'data-vendors',
      title: 'Data Vendor API',
      icon: Database,
      content: 'Become a data vendor and earn $bSearch tokens by providing high-quality search results. Vendors compete on quality, speed, and price in a free market for information.',
      code: `// Register as a data vendor
const vendor = await client.registerVendor({
  name: 'Premium Tech Docs',
  specialties: ['technical', 'bitcoin', 'development'],
  stakeAmount: 1000, // $bSearch tokens to stake
  pricing: {
    basic: 0.001,    // BSV per query
    premium: 0.005,  // BSV per premium query
    bulk: 0.0001     // BSV per bulk query
  }
})

// Handle incoming search requests
vendor.onSearchRequest(async (request) => {
  const results = await searchYourDatabase(request.query)
  
  return {
    results,
    confidence: 0.95,
    sources: ['technical-docs', 'github'],
    processingTime: 45 // ms
  }
})`,
      links: [
        { title: 'Vendor Marketplace', url: '/marketplace' },
        { title: 'Quality Metrics', url: '/quality' }
      ]
    },
    {
      id: 'micropayments',
      title: 'Micropayment Integration',
      icon: Zap,
      content: 'Every interaction in Bitcoin Search involves micropayments. Users pay for quality data, vendors earn for providing it, and all revenue capitalizes the $bSearch token.',
      code: `// Configure micropayment settings
const payment = new MicropaymentChannel({
  provider: 'BSV',
  maxPerQuery: 0.01,
  autoRefill: true,
  refillThreshold: 0.1,
  refillAmount: 1.0
})

// Track payment flow
payment.on('payment', (tx) => {
  console.log(\`Paid \${tx.amount} BSV to \${tx.vendor}\`)
  console.log(\`Quality score: \${tx.qualityScore}\`)
  console.log(\`Response time: \${tx.responseTime}ms\`)
})

// Batch payments for efficiency
const batch = await payment.createBatch()
batch.add(vendor1, 0.002)
batch.add(vendor2, 0.003)
batch.add(vendor3, 0.001)
await batch.commit()`,
      links: [
        { title: 'Payment Docs', url: '/docs/payments' },
        { title: 'BSV Integration', url: '/docs/bsv' }
      ]
    },
    {
      id: 'search-api',
      title: 'Search API',
      icon: Terminal,
      content: 'The Bitcoin Search API provides programmatic access to economically weighted search results, vendor marketplace data, and economic metrics.',
      code: `// REST API Example
GET /api/v2/search
{
  "query": "Bitcoin scalability",
  "maxPayment": 0.01,
  "vendors": ["premium-tech", "blockchain-wiki"],
  "quality": "high",
  "limit": 20
}

// WebSocket for real-time data
const ws = new WebSocket('wss://api.bitcoin-search.com/stream')

ws.on('message', (data) => {
  const { type, payload } = JSON.parse(data)
  
  switch(type) {
    case 'SEARCH_RESULT':
      updateResults(payload)
      break
    case 'PAYMENT_CONFIRMED':
      updateBalance(payload)
      break
    case 'VENDOR_UPDATE':
      updateVendorList(payload)
      break
  }
})`,
      links: [
        { title: 'API Reference', url: '/api' },
        { title: 'WebSocket Docs', url: '/docs/websocket' }
      ]
    },
    {
      id: 'token-integration',
      title: '$bSearch Token',
      icon: Activity,
      content: 'The $bSearch token is the economic backbone of the search ecosystem. All search revenue capitalizes the token, creating a direct link between platform usage and token value.',
      code: `// Token interaction
import { bSearchToken } from '@bitcoin-search/token'

// Check balance
const balance = await bSearchToken.balanceOf(address)

// Stake tokens to become vendor
await bSearchToken.stake(1000, {
  vendor: true,
  lockPeriod: 30 // days
})

// Earn rewards
const rewards = await bSearchToken.calculateRewards(address)
await bSearchToken.claimRewards()

// Token economics
const metrics = await bSearchToken.getMetrics()
console.log('Market cap:', metrics.marketCap)
console.log('Daily volume:', metrics.dailyVolume)
console.log('Staked:', metrics.totalStaked)`,
      links: [
        { title: 'Token Page', url: '/token' },
        { title: 'Staking Guide', url: '/docs/staking' }
      ]
    }
  ]

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800 min-h-screen p-4">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          
          <nav className="space-y-1">
            {filteredSections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-900/30 text-blue-400 border-l-2 border-blue-400'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{section.title}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">
                <span className="blue-gradient">Bitcoin Search</span>
                <span className="text-white ml-2">Documentation</span>
              </h1>
              <p className="text-gray-400">Learn how to integrate economically weighted search into your applications</p>
            </div>

            {/* Active Section Content */}
            {filteredSections.map((section) => {
              if (section.id !== activeSection) return null
              const Icon = section.icon
              
              return (
                <div key={section.id} className="space-y-6">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{section.content}</p>
                    
                    {section.code && (
                      <div className="bg-black/50 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="text-gray-300">{section.code}</code>
                        </pre>
                      </div>
                    )}
                    
                    {section.links && section.links.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-800">
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Related Links</h3>
                        <div className="flex flex-wrap gap-3">
                          {section.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-900/20 border border-blue-800/30 rounded-lg text-blue-400 hover:bg-blue-900/30 hover:border-blue-700/50 transition-colors text-sm"
                            >
                              {link.title}
                              {link.url.startsWith('http') ? (
                                <ExternalLink className="w-3 h-3" />
                              ) : (
                                <ChevronRight className="w-3 h-3" />
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}

            {/* Quick Start Guide */}
            <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">Quick Start</h3>
              <ol className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span>Install the Bitcoin Search SDK from npm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span>Configure your micropayment wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span>Start making economically weighted searches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span>Optional: Stake $bSearch to become a data vendor</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}