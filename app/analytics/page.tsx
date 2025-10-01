'use client'

import { useState, useEffect } from 'react'
import { 
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  Activity,
  Globe,
  Database,
  Clock,
  Award,
  Filter,
  Download,
  ChevronDown
} from 'lucide-react'

interface AnalyticsData {
  searchVolume: number[]
  economicWeight: number[]
  vendorPerformance: { name: string; queries: number; revenue: number; quality: number }[]
  popularQueries: { query: string; count: number; avgPayment: number }[]
  timeDistribution: { hour: number; searches: number }[]
}

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d')
  const [category, setCategory] = useState('all')
  const [exportDropdown, setExportDropdown] = useState(false)

  // Simulated analytics data
  const analyticsData: AnalyticsData = {
    searchVolume: [2100, 2450, 2300, 2800, 2600, 3100, 2900],
    economicWeight: [105.2, 122.5, 115.3, 140.1, 130.5, 155.7, 145.2],
    vendorPerformance: [
      { name: 'TechnicalDocs Pro', queries: 12450, revenue: 62.25, quality: 98.5 },
      { name: 'BlockchainWiki', queries: 10230, revenue: 30.69, quality: 96.2 },
      { name: 'MarketData Stream', queries: 15678, revenue: 125.42, quality: 97.8 },
      { name: 'CodeBase Index', queries: 8945, revenue: 35.78, quality: 94.5 },
      { name: 'News Aggregator', queries: 11234, revenue: 22.47, quality: 92.3 }
    ],
    popularQueries: [
      { query: 'Bitcoin whitepaper', count: 1245, avgPayment: 0.005 },
      { query: 'BSV scaling', count: 987, avgPayment: 0.004 },
      { query: 'Micropayment channels', count: 876, avgPayment: 0.006 },
      { query: 'Smart contracts BSV', count: 765, avgPayment: 0.007 },
      { query: 'Bitcoin mining', count: 654, avgPayment: 0.003 }
    ],
    timeDistribution: Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      searches: Math.floor(Math.random() * 200) + 50
    }))
  }

  const totalSearches = analyticsData.searchVolume.reduce((a, b) => a + b, 0)
  const totalRevenue = analyticsData.economicWeight.reduce((a, b) => a + b, 0)
  const avgQuality = analyticsData.vendorPerformance.reduce((a, b) => a + b.quality, 0) / analyticsData.vendorPerformance.length

  const exportData = (format: string) => {
    console.log(`Exporting data as ${format}`)
    setExportDropdown(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="blue-gradient">Search</span>
                <span className="text-white ml-2">Analytics</span>
              </h1>
              <p className="text-gray-400">Deep insights into economic search patterns</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setExportDropdown(!exportDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white hover:bg-gray-800/50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export
                <ChevronDown className="w-3 h-3" />
              </button>
              {exportDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <button onClick={() => exportData('csv')} className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">Export as CSV</button>
                  <button onClick={() => exportData('json')} className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">Export as JSON</button>
                  <button onClick={() => exportData('pdf')} className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-800">Export as PDF</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex gap-2 mb-8">
          {['24h', '7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-900/50 border border-gray-700 text-gray-400 hover:bg-gray-800/50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total Searches</span>
              <Search className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-white">{totalSearches.toLocaleString()}</div>
            <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+18.5% vs last period</span>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Economic Weight</span>
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-white">{totalRevenue.toFixed(1)} BSV</div>
            <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+24.7% vs last period</span>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Avg Payment</span>
              <DollarSign className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-white">0.0045 BSV</div>
            <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+5.2% vs last period</span>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Quality Score</span>
              <Award className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-white">{avgQuality.toFixed(1)}%</div>
            <div className="flex items-center gap-1 text-xs text-green-500 mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+2.1% vs last period</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Search Volume Chart */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Search Volume</h3>
            <div className="h-48 flex items-end justify-between gap-2">
              {analyticsData.searchVolume.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-gray-500">{value}</span>
                  <div 
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                    style={{ height: `${(value / Math.max(...analyticsData.searchVolume)) * 100}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Economic Weight Chart */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Economic Weight Flow</h3>
            <div className="h-48 flex items-end justify-between gap-2">
              {analyticsData.economicWeight.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-gray-500">{value.toFixed(1)}</span>
                  <div 
                    className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"
                    style={{ height: `${(value / Math.max(...analyticsData.economicWeight)) * 100}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Vendor Performance Table */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-800">
            <h3 className="text-lg font-bold text-white">Vendor Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-400">Vendor</th>
                  <th className="text-right px-6 py-3 text-sm font-medium text-gray-400">Queries Handled</th>
                  <th className="text-right px-6 py-3 text-sm font-medium text-gray-400">Revenue (BSV)</th>
                  <th className="text-right px-6 py-3 text-sm font-medium text-gray-400">Quality Score</th>
                  <th className="text-right px-6 py-3 text-sm font-medium text-gray-400">Avg Payment</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.vendorPerformance.map((vendor, index) => (
                  <tr key={index} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{vendor.name}</td>
                    <td className="text-right px-6 py-4 text-gray-300">{vendor.queries.toLocaleString()}</td>
                    <td className="text-right px-6 py-4 text-gray-300">{vendor.revenue.toFixed(2)}</td>
                    <td className="text-right px-6 py-4">
                      <span className={`inline-flex items-center gap-1 ${
                        vendor.quality >= 97 ? 'text-green-400' : 
                        vendor.quality >= 95 ? 'text-yellow-400' : 'text-orange-400'
                      }`}>
                        <Award className="w-3 h-3" />
                        {vendor.quality}%
                      </span>
                    </td>
                    <td className="text-right px-6 py-4 text-gray-300">
                      {(vendor.revenue / vendor.queries).toFixed(6)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular Queries & Time Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Popular Queries */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Top Search Queries</h3>
            <div className="space-y-3">
              {analyticsData.popularQueries.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-sm w-6">{index + 1}.</span>
                    <span className="text-white">{item.query}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">{item.count} searches</span>
                    <span className="text-blue-400 text-sm font-medium">{item.avgPayment} BSV</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Time Distribution */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Search Activity by Hour</h3>
            <div className="h-40 flex items-end justify-between gap-1">
              {analyticsData.timeDistribution.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-1 bg-gradient-to-t from-green-600 to-green-400 rounded-t hover:from-green-500 hover:to-green-300 transition-colors"
                  style={{ height: `${(item.searches / Math.max(...analyticsData.timeDistribution.map(t => t.searches))) * 100}%` }}
                  title={`${item.hour}:00 - ${item.searches} searches`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>00</span>
              <span>06</span>
              <span>12</span>
              <span>18</span>
              <span>24</span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
              <div>
                <p className="text-white font-medium">Peak Search Hours</p>
                <p className="text-gray-400">Most activity between 14:00-18:00 UTC</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
              <div>
                <p className="text-white font-medium">Premium Queries Growing</p>
                <p className="text-gray-400">35% increase in high-value searches</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
              <div>
                <p className="text-white font-medium">Vendor Competition</p>
                <p className="text-gray-400">Quality scores improving across all vendors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}