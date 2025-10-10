'use client'

import React, { useState, useEffect } from 'react'
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
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
    <div className="vendors-page">
      <div className="vendors-container">
        {/* Hero Section */}
        <section className="vendors-hero">
          <h1>
            <span style={{color: '#ffffff'}}>Data Vendors</span> Marketplace
          </h1>
          <p className="vendors-tagline">
            Choose from competing data vendors for the best search results
          </p>
          <div className="vendors-badge">Enterprise Quality Data</div>
        </section>

        {/* Marketplace Stats */}
        <section className="stats-section">
          <h2>Marketplace Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-icon">
                <Package size={24} />
              </div>
              <h3>Active Vendors</h3>
              <p className="stat-value">45</p>
              <p className="stat-label">Quality providers</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <Zap size={24} />
              </div>
              <h3>Avg Response</h3>
              <p className="stat-value">35ms</p>
              <p className="stat-label">Lightning fast</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <Shield size={24} />
              </div>
              <h3>Total Staked</h3>
              <p className="stat-value">125K</p>
              <p className="stat-label">$bSearch locked</p>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <DollarSign size={24} />
              </div>
              <h3>Daily Volume</h3>
              <p className="stat-value">2.5K BSV</p>
              <p className="stat-label">Micropayments</p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="search-section">
          <h2>Find Data Vendors</h2>
          <div className="search-controls">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-controls">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Sort by Rating</option>
                <option value="searches">Sort by Searches</option>
                <option value="price">Sort by Price</option>
                <option value="speed">Sort by Speed</option>
              </select>
            </div>
          </div>
        </section>

        {/* Vendors Marketplace */}
        <section className="vendors-section">
          <h2>Available Data Vendors</h2>
          <div className="vendors-grid">
            {sortedVendors.map((vendor) => (
              <div key={vendor.id} className="vendor-card">
                <div className="vendor-header">
                  <div className="vendor-info">
                    <h3>{vendor.name}</h3>
                    <p>{vendor.description}</p>
                  </div>
                  <div className={`vendor-status ${vendor.status}`}>
                    {vendor.status}
                  </div>
                </div>
                
                <div className="vendor-tags">
                  {vendor.specialties.map((specialty) => (
                    <span key={specialty} className="vendor-tag">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="vendor-metrics">
                  <div className="metric">
                    <Star size={16} />
                    <span className="metric-value">{vendor.rating}</span>
                    <span className="metric-label">({vendor.totalSearches.toLocaleString()})</span>
                  </div>
                  <div className="metric">
                    <Clock size={16} />
                    <span className="metric-value">{vendor.avgResponseTime}ms</span>
                  </div>
                  <div className="metric">
                    <DollarSign size={16} />
                    <span className="metric-value">{vendor.pricePerQuery} BSV</span>
                  </div>
                  <div className="metric">
                    <Award size={16} />
                    <span className="metric-value">{vendor.qualityScore}%</span>
                  </div>
                </div>
                
                <div className="vendor-footer">
                  <div className="vendor-stake">
                    Staked: {vendor.staked.toLocaleString()} $bSearch
                  </div>
                  <button className="vendor-select-btn">
                    Select Vendor
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Become a Data Vendor</h2>
          <div className="cta-content">
            <div className="cta-icon">
              <Package size={32} />
            </div>
            <div className="cta-text">
              <p>
                Start earning $bSearch tokens by providing high-quality search results. 
                Stake tokens, set your prices, and compete in the free market for information.
              </p>
              <div className="cta-benefits">
                <div className="benefit">
                  <CheckCircle size={16} />
                  <span>Earn from every query</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={16} />
                  <span>Set your own prices</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={16} />
                  <span>Quality-based rewards</span>
                </div>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/docs" className="cta-btn primary">
                Start Earning
              </a>
              <a href="/docs" className="cta-btn secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Vendors Page - Bitcoin Search Blue Theme */
        .vendors-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 128px; /* 40px POC + 28px taskbar + 60px nav */
          font-weight: 300;
        }

        .vendors-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Vendors Hero - Full Width Black */
        .vendors-hero {
          min-height: 40vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 40px;
          text-align: center;
          margin-bottom: 40px;
          background: #000000;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          margin-top: -24px;
          width: 100vw;
          position: relative;
          left: 0;
          right: 0;
        }

        .vendors-badge {
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 20px;
          color: #ffffff;
        }

        .vendors-hero h1 {
          font-size: 42px;
          font-weight: 200;
          margin: 0 0 16px 0;
          line-height: 1.1;
          letter-spacing: -1px;
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .vendors-tagline {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.4;
          max-width: 600px;
          font-weight: 300;
        }

        /* Section Styling */
        section {
          margin: 60px 0;
        }

        h2 {
          font-size: 28px;
          font-weight: 300;
          margin-bottom: 32px;
          color: #ffffff;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .stat {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
        }

        .stat-icon {
          color: #60a5fa;
          margin: 0 auto 16px;
          display: flex;
          justify-content: center;
        }

        .stat h3 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 600;
          color: #60a5fa;
          margin: 0 0 8px 0;
          line-height: 1;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .search-controls {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 32px 0;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 16px;
        }

        .search-box svg {
          color: rgba(255, 255, 255, 0.5);
          margin-right: 12px;
        }

        .search-box input {
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 16px;
          width: 100%;
          outline: none;
        }

        .search-box input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .filter-controls {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-controls select {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ffffff;
          padding: 8px 12px;
          font-size: 14px;
          outline: none;
        }

        .filter-controls select:focus {
          border-color: rgba(59, 130, 246, 0.5);
        }

        .vendors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .vendor-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .vendor-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .vendor-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .vendor-info h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .vendor-info p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .vendor-status {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .vendor-status.active {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .vendor-status.inactive {
          background: rgba(156, 163, 175, 0.1);
          color: #9ca3af;
        }

        .vendor-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .vendor-tag {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 12px;
          color: #60a5fa;
        }

        .vendor-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .metric svg {
          color: #60a5fa;
        }

        .metric-value {
          color: #ffffff;
          font-weight: 500;
        }

        .metric-label {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
        }

        .vendor-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .vendor-stake {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }

        .vendor-select-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .vendor-select-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .cta-section {
          text-align: center;
          padding: 60px 0;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 40px;
        }

        .cta-icon {
          color: #60a5fa;
        }

        .cta-text p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          line-height: 1.6;
          max-width: 600px;
        }

        .cta-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .benefit svg {
          color: #22c55e;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
        }

        .cta-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        }

        .cta-btn.secondary {
          background: transparent;
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.5);
        }

        .cta-btn.secondary:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: #60a5fa;
        }

        @media (max-width: 768px) {
          .vendors-container {
            padding: 0 20px;
          }
          
          .vendors-hero h1 {
            font-size: 32px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .vendors-grid {
            grid-template-columns: 1fr;
          }
          
          .search-controls {
            flex-direction: column;
          }
          
          .filter-controls {
            flex-direction: column;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .vendor-metrics {
            grid-template-columns: 1fr;
          }
          
          .vendor-footer {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  )
}