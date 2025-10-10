'use client'

import { useState, useEffect } from 'react'
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
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
    <div className="marketplace-page">
      <div className="marketplace-container">
        {/* Hero Section */}
        <section className="marketplace-hero">
          <h1>
            <span style={{color: '#ffffff'}}>Data</span>{' '}
            <span style={{color: '#ffffff'}}>Marketplace</span>
          </h1>
          <p className="marketplace-tagline">
            Economic weight drives data quality and pricing
          </p>
          <div className="marketplace-badge">Premium Data Packages</div>
        </section>

        {/* Market Philosophy Section */}
        <section className="philosophy-section">
          <h2>Economic Weight Data Marketplace</h2>
          <div className="philosophy-content">
            <p>
              Traditional data markets rely on subscription models with fixed pricing. 
              Bitcoin Search Marketplace creates an <strong>economically weighted ecosystem</strong> where 
              data quality and pricing are determined by actual usage and micropayments.
            </p>
            <p>
              Vendors compete to provide the best data through economic signals - better data 
              earns more queries and micropayments, creating natural quality incentives.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Quality Competition</h3>
                <p>Data providers compete on accuracy, speed, and coverage</p>
              </div>
              <div className="point">
                <h3>Economic Pricing</h3>
                <p>Prices set by market demand and data quality metrics</p>
              </div>
              <div className="point">
                <h3>Micropayment Flow</h3>
                <p>Pay per query with automatic quality-based routing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="stats-section">
          <h2>Marketplace Statistics</h2>
          <div className="stats-grid">
            {marketStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="stat">
                  <h3>{stat.label}</h3>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">
                    <span className="stat-change">+{stat.change}%</span> this month
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="search-section">
          <h2>Browse Data Packages</h2>
          <div className="search-controls">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search data packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
            
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Prices</option>
              <option value="low">≤ 0.01 BSV</option>
              <option value="medium">0.01 - 0.02 BSV</option>
              <option value="high">≥ 0.02 BSV</option>
            </select>
          </div>
        </section>

        {/* Data Packages Grid */}
        <section className="packages-section">
          <div className="packages-grid">
            {filteredPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
              >
                <div className="package-header">
                  <div className="package-title-row">
                    <h3 className="package-name">{pkg.name}</h3>
                    <span className="package-category">{pkg.category}</span>
                  </div>
                  <p className="package-vendor">{pkg.vendor}</p>
                  <p className="package-description">{pkg.description}</p>
                </div>

                <div className="package-rating">
                  <div className="rating-display">
                    <Star className="star-icon" />
                    <span className="rating-value">{pkg.rating}</span>
                    <span className="review-count">({pkg.reviews} reviews)</span>
                  </div>
                  <span className="query-count">{pkg.queries.toLocaleString()} queries</span>
                </div>

                <div className="package-features">
                  {pkg.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                  {pkg.features.length > 3 && (
                    <span className="more-features">+{pkg.features.length - 3} more</span>
                  )}
                </div>

                {selectedPackage === pkg.id && (
                  <div className="package-performance">
                    <h4>Performance Metrics</h4>
                    <div className="performance-grid">
                      <div className="performance-metric">
                        <span className="metric-label">Response Time</span>
                        <span className="metric-value">{pkg.performance.avgResponse}ms</span>
                      </div>
                      <div className="performance-metric">
                        <span className="metric-label">Accuracy</span>
                        <span className="metric-value accuracy">{pkg.performance.accuracy}%</span>
                      </div>
                      <div className="performance-metric">
                        <span className="metric-label">Coverage</span>
                        <span className="metric-value coverage">{pkg.performance.coverage}%</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="package-footer">
                  <div className="package-price">
                    <span className="price-value">{pkg.price}</span>
                    <span className="price-unit">BSV/query</span>
                  </div>
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vendor CTA Section */}
        <section className="vendor-cta-section">
          <h2>Become a Data Vendor</h2>
          <div className="vendor-cta-card">
            <div className="vendor-icon">
              <Plus />
            </div>
            <div className="vendor-content">
              <h3>Start Selling Your Data</h3>
              <p>
                Have valuable data? Package it and start earning from every query through 
                our economically weighted marketplace. Set your prices, compete on quality, 
                and earn based on actual usage.
              </p>
              <div className="vendor-benefits">
                <div className="benefit">
                  <Check />
                  <span>Economic weight pricing</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Quality-based bonuses</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Automatic micropayments</span>
                </div>
                <div className="benefit">
                  <Check />
                  <span>Performance analytics</span>
                </div>
              </div>
            </div>
            <button className="vendor-cta-btn">Create Package</button>
          </div>
        </section>

        {/* Popular Bundles Section */}
        <section className="bundles-section">
          <h2>Popular Package Bundles</h2>
          <div className="bundles-grid">
            <div className="bundle-card">
              <h3>Developer Bundle</h3>
              <p>Technical docs + Code resources + API access</p>
              <div className="bundle-pricing">
                <span className="bundle-price">0.018 BSV</span>
                <span className="bundle-savings">Save 10%</span>
              </div>
              <div className="bundle-features">
                <span>✅ Full documentation</span>
                <span>✅ Code examples</span>
                <span>✅ Priority support</span>
              </div>
            </div>
            
            <div className="bundle-card featured">
              <h3>Trader Pack</h3>
              <p>Market data + News sentiment + Analytics</p>
              <div className="bundle-pricing">
                <span className="bundle-price">0.023 BSV</span>
                <span className="bundle-savings">Save 12%</span>
              </div>
              <div className="bundle-features">
                <span>✅ Real-time feeds</span>
                <span>✅ Sentiment analysis</span>
                <span>✅ Trading signals</span>
              </div>
            </div>
            
            <div className="bundle-card">
              <h3>Research Suite</h3>
              <p>All historical data + Advanced analytics</p>
              <div className="bundle-pricing">
                <span className="bundle-price">0.028 BSV</span>
                <span className="bundle-savings">Save 15%</span>
              </div>
              <div className="bundle-features">
                <span>✅ Complete history</span>
                <span>✅ ML analytics</span>
                <span>✅ Custom reports</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Start Using Economic Weight Data</h2>
          <div className="cta-buttons">
            <a href="/vendors" className="cta-btn primary">
              Browse All Vendors
            </a>
            <a href="/docs/api" className="cta-btn secondary">
              API Documentation
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Marketplace Page - Same Style as Token Page - Bitcoin Search Blue Theme */
        .marketplace-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px; /* 40px POC banner + 32px taskbar + 24px spacing */
          font-weight: 300;
        }

        .marketplace-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Marketplace Hero - Full Width Black */
        .marketplace-hero {
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

        .marketplace-badge {
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

        .marketplace-hero h1 {
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

        .marketplace-tagline {
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

        .philosophy-content p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }

        .philosophy-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .point {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .point h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #60a5fa;
        }

        .point p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
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

        .stat-change {
          color: #22c55e;
          font-weight: 500;
        }

        /* Search Controls */
        .search-controls {
          display: flex;
          gap: 16px;
          margin: 32px 0;
          flex-wrap: wrap;
        }

        .search-input-wrapper {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: rgba(255, 255, 255, 0.4);
        }

        .search-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
        }

        .search-input:focus {
          outline: none;
          border-color: #60a5fa;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .filter-select {
          padding: 12px 16px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          min-width: 150px;
        }

        .filter-select:focus {
          outline: none;
          border-color: #60a5fa;
        }

        /* Package Cards */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .package-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .package-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .package-card.selected {
          border-color: #60a5fa;
          background: rgba(59, 130, 246, 0.05);
        }

        .package-header {
          margin-bottom: 16px;
        }

        .package-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .package-name {
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          margin: 0;
        }

        .package-category {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
        }

        .package-vendor {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 8px 0;
        }

        .package-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin: 0;
        }

        .package-rating {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 16px 0;
        }

        .rating-display {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .star-icon {
          width: 16px;
          height: 16px;
          color: #eab308;
          fill: currentColor;
        }

        .rating-value {
          font-weight: 500;
          color: #ffffff;
        }

        .review-count {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        .query-count {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .package-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0;
        }

        .feature-tag {
          background: rgba(59, 130, 246, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
        }

        .more-features {
          color: #60a5fa;
          font-size: 12px;
          font-weight: 500;
        }

        .package-performance {
          margin: 16px 0;
          padding: 16px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .package-performance h4 {
          font-size: 14px;
          font-weight: 500;
          color: #60a5fa;
          margin: 0 0 12px 0;
        }

        .performance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .performance-metric {
          text-align: center;
        }

        .metric-label {
          display: block;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }

        .metric-value {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
        }

        .metric-value.accuracy {
          color: #22c55e;
        }

        .metric-value.coverage {
          color: #60a5fa;
        }

        .package-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .package-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .price-value {
          font-size: 20px;
          font-weight: 600;
          color: #60a5fa;
        }

        .price-unit {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .subscribe-btn {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subscribe-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        /* Vendor CTA */
        .vendor-cta-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px;
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .vendor-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vendor-content {
          flex: 1;
        }

        .vendor-content h3 {
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .vendor-content p {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 20px 0;
        }

        .vendor-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .benefit svg {
          width: 16px;
          height: 16px;
          color: #22c55e;
        }

        .vendor-cta-btn {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
          border: none;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .vendor-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        }

        /* Bundles */
        .bundles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .bundle-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .bundle-card.featured {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.02);
        }

        .bundle-card h3 {
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .bundle-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 16px 0;
        }

        .bundle-pricing {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .bundle-price {
          font-size: 20px;
          font-weight: 600;
          color: #60a5fa;
        }

        .bundle-savings {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
        }

        .bundle-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bundle-features span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          text-align: left;
        }

        .cta-section {
          text-align: center;
          padding: 60px 0;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
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
          .marketplace-container {
            padding: 0 20px;
          }
          
          .marketplace-hero h1 {
            font-size: 32px;
          }
          
          .philosophy-points {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .search-controls {
            flex-direction: column;
          }
          
          .search-input-wrapper {
            min-width: auto;
          }
          
          .packages-grid {
            grid-template-columns: 1fr;
          }
          
          .vendor-cta-card {
            flex-direction: column;
            text-align: center;
          }
          
          .vendor-benefits {
            grid-template-columns: 1fr;
          }
          
          .bundles-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}