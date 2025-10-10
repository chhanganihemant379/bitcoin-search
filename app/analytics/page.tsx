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
  const [mounted, setMounted] = useState(false)
  const [timeRange, setTimeRange] = useState('7d')
  const [category, setCategory] = useState('all')
  const [exportDropdown, setExportDropdown] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
    <div className="analytics-page">
      <div className="analytics-container">
        {/* Hero Section */}
        <section className="analytics-hero">
          <div className="hero-content">
            <h1>
              <span style={{color: '#ffffff'}}>Search</span>{' '}
              <span style={{color: '#ffffff'}}>Analytics</span>
            </h1>
            <p className="analytics-tagline">
              Economic weight insights and performance metrics
            </p>
            <div className="analytics-badge">Real-time Data</div>
          </div>
          <div className="export-controls">
            <button 
              onClick={() => setExportDropdown(!exportDropdown)}
              className="export-btn"
            >
              <Download />
              Export Data
              <ChevronDown />
            </button>
            {exportDropdown && (
              <div className="export-dropdown">
                <button onClick={() => exportData('csv')}>Export as CSV</button>
                <button onClick={() => exportData('json')}>Export as JSON</button>
                <button onClick={() => exportData('pdf')}>Export as PDF</button>
              </div>
            )}
          </div>
        </section>

        {/* Analytics Philosophy */}
        <section className="philosophy-section">
          <h2>Economic Weight Analytics</h2>
          <div className="philosophy-content">
            <p>
              Traditional search analytics focus on pageviews and clicks. Bitcoin Search Analytics 
              tracks <strong>economic weight patterns</strong> - showing how micropayments flow 
              through the search ecosystem and which queries generate the most value.
            </p>
            <p>
              Every search query represents real economic activity, creating transparent 
              insights into data quality, vendor performance, and market demand patterns.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Economic Signals</h3>
                <p>Track actual micropayment flows and value creation</p>
              </div>
              <div className="point">
                <h3>Vendor Performance</h3>
                <p>Monitor data quality and response times in real-time</p>
              </div>
              <div className="point">
                <h3>Market Insights</h3>
                <p>Understand demand patterns and pricing optimization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Time Range Controls */}
        <section className="time-controls-section">
          <h2>Time Range Analysis</h2>
          <div className="time-range-controls">
            {['24h', '7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`time-btn ${timeRange === range ? 'active' : ''}`}
              >
                {range}
              </button>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="stats-section">
          <h2>Key Performance Metrics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>Total Searches</h3>
              <p className="stat-value">{totalSearches.toLocaleString()}</p>
              <p className="stat-label">
                <span className="stat-change">+18.5%</span> vs last period
              </p>
            </div>
            <div className="stat">
              <h3>Economic Weight</h3>
              <p className="stat-value">{totalRevenue.toFixed(1)} BSV</p>
              <p className="stat-label">
                <span className="stat-change">+24.7%</span> vs last period
              </p>
            </div>
            <div className="stat">
              <h3>Avg Payment</h3>
              <p className="stat-value">0.0045 BSV</p>
              <p className="stat-label">
                <span className="stat-change">+5.2%</span> vs last period
              </p>
            </div>
            <div className="stat">
              <h3>Quality Score</h3>
              <p className="stat-value">{avgQuality.toFixed(1)}%</p>
              <p className="stat-label">
                <span className="stat-change">+2.1%</span> vs last period
              </p>
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          <h2>Economic Weight Flow Analysis</h2>
          <div className="charts-grid">
            <div className="chart-card">
              <h3>Search Volume Trends</h3>
              <div className="chart-container">
                <div className="chart-bars">
                  {analyticsData.searchVolume.map((value, index) => (
                    <div key={index} className="chart-bar-wrapper">
                      <span className="chart-value">{value}</span>
                      <div 
                        className="chart-bar search-bar"
                        style={{ height: `${(value / Math.max(...analyticsData.searchVolume)) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="chart-labels">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="chart-card">
              <h3>Economic Weight Distribution</h3>
              <div className="chart-container">
                <div className="chart-bars">
                  {analyticsData.economicWeight.map((value, index) => (
                    <div key={index} className="chart-bar-wrapper">
                      <span className="chart-value">{value.toFixed(1)}</span>
                      <div 
                        className="chart-bar weight-bar"
                        style={{ height: `${(value / Math.max(...analyticsData.economicWeight)) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="chart-labels">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Performance */}
        <section className="vendor-section">
          <h2>Data Vendor Performance</h2>
          <div className="vendor-table-container">
            <div className="vendor-table">
              <div className="table-header">
                <div className="header-cell">Vendor</div>
                <div className="header-cell">Queries</div>
                <div className="header-cell">Revenue (BSV)</div>
                <div className="header-cell">Quality Score</div>
                <div className="header-cell">Avg Payment</div>
              </div>
              <div className="table-body">
                {analyticsData.vendorPerformance.map((vendor, index) => (
                  <div key={index} className="table-row">
                    <div className="table-cell vendor-name">{vendor.name}</div>
                    <div className="table-cell">{vendor.queries.toLocaleString()}</div>
                    <div className="table-cell">{vendor.revenue.toFixed(2)}</div>
                    <div className="table-cell">
                      <span className={`quality-score ${vendor.quality >= 97 ? 'excellent' : vendor.quality >= 95 ? 'good' : 'fair'}`}>
                        <Award />
                        {vendor.quality}%
                      </span>
                    </div>
                    <div className="table-cell">{(vendor.revenue / vendor.queries).toFixed(6)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Queries & Time Distribution */}
        <section className="insights-section">
          <h2>Search Patterns & Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <h3>Top Search Queries</h3>
              <div className="queries-list">
                {analyticsData.popularQueries.map((item, index) => (
                  <div key={index} className="query-item">
                    <div className="query-info">
                      <span className="query-rank">{index + 1}.</span>
                      <span className="query-text">{item.query}</span>
                    </div>
                    <div className="query-stats">
                      <span className="query-count">{item.count} searches</span>
                      <span className="query-payment">{item.avgPayment} BSV</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="insight-card">
              <h3>Search Activity by Hour</h3>
              <div className="time-chart">
                <div className="time-bars">
                  {analyticsData.timeDistribution.map((item, index) => (
                    <div 
                      key={index} 
                      className="time-bar"
                      style={{ height: `${(item.searches / Math.max(...analyticsData.timeDistribution.map(t => t.searches))) * 100}%` }}
                      title={`${item.hour}:00 - ${item.searches} searches`}
                    />
                  ))}
                </div>
                <div className="time-labels">
                  <span>00</span>
                  <span>06</span>
                  <span>12</span>
                  <span>18</span>
                  <span>24</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="key-insights-section">
          <h2>Economic Weight Insights</h2>
          <div className="insights-cards">
            <div className="insight-point">
              <div className="insight-icon" style={{background: '#22c55e'}}></div>
              <div className="insight-content">
                <h4>Peak Search Hours</h4>
                <p>Highest economic activity between 14:00-18:00 UTC, correlating with global business hours and increased data demand.</p>
              </div>
            </div>
            <div className="insight-point">
              <div className="insight-icon" style={{background: '#3b82f6'}}></div>
              <div className="insight-content">
                <h4>Premium Query Growth</h4>
                <p>35% increase in high-value searches as users discover quality data sources through economic weight rankings.</p>
              </div>
            </div>
            <div className="insight-point">
              <div className="insight-icon" style={{background: '#8b5cf6'}}></div>
              <div className="insight-content">
                <h4>Vendor Competition</h4>
                <p>Quality scores improving across all vendors as economic incentives drive better data provision and faster response times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Optimize Your Search Strategy</h2>
          <div className="cta-buttons">
            <a href="/vendors" className="cta-btn primary">
              View All Vendors
            </a>
            <a href="/docs/api" className="cta-btn secondary">
              API Documentation
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Analytics Page - Same Style as Token Page - Bitcoin Search Blue Theme */
        .analytics-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px; /* 40px POC banner + 32px taskbar + 24px spacing */
          font-weight: 300;
        }

        .analytics-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Analytics Hero - Full Width Black */
        .analytics-hero {
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

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .analytics-badge {
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

        .analytics-hero h1 {
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

        .analytics-tagline {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.4;
          max-width: 600px;
          font-weight: 300;
        }

        .export-controls {
          position: absolute;
          top: 40px;
          right: 40px;
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .export-btn:hover {
          border-color: #60a5fa;
          background: rgba(59, 130, 246, 0.1);
        }

        .export-btn svg {
          width: 16px;
          height: 16px;
        }

        .export-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background: rgba(15, 15, 15, 0.95);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          padding: 8px 0;
          min-width: 160px;
          backdrop-filter: blur(10px);
        }

        .export-dropdown button {
          width: 100%;
          padding: 8px 16px;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .export-dropdown button:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #ffffff;
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

        /* Time Controls */
        .time-range-controls {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .time-btn {
          padding: 8px 16px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .time-btn:hover {
          border-color: #60a5fa;
          color: #ffffff;
        }

        .time-btn.active {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-color: #3b82f6;
          color: #ffffff;
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

        /* Charts */
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 32px;
          margin: 40px 0;
        }

        .chart-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
        }

        .chart-card h3 {
          font-size: 18px;
          font-weight: 500;
          color: #60a5fa;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .chart-container {
          height: 200px;
        }

        .chart-bars {
          display: flex;
          align-items: end;
          justify-content: space-between;
          height: 160px;
          gap: 8px;
        }

        .chart-bar-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .chart-value {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .chart-bar {
          width: 100%;
          border-radius: 4px 4px 0 0;
          transition: all 0.3s ease;
        }

        .search-bar {
          background: linear-gradient(to top, #3b82f6, #60a5fa);
        }

        .weight-bar {
          background: linear-gradient(to top, #8b5cf6, #a78bfa);
        }

        .chart-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Vendor Table */
        .vendor-table-container {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }

        .vendor-table {
          width: 100%;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          background: rgba(59, 130, 246, 0.1);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .header-cell {
          padding: 16px;
          font-size: 14px;
          font-weight: 500;
          color: #60a5fa;
          text-align: left;
        }

        .table-body {
          display: flex;
          flex-direction: column;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: background 0.3s ease;
        }

        .table-row:hover {
          background: rgba(59, 130, 246, 0.05);
        }

        .table-cell {
          padding: 16px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
        }

        .vendor-name {
          font-weight: 500;
          color: #ffffff;
        }

        .quality-score {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
        }

        .quality-score.excellent {
          color: #22c55e;
        }

        .quality-score.good {
          color: #eab308;
        }

        .quality-score.fair {
          color: #f97316;
        }

        .quality-score svg {
          width: 14px;
          height: 14px;
        }

        /* Insights */
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          margin: 40px 0;
        }

        .insight-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
        }

        .insight-card h3 {
          font-size: 18px;
          font-weight: 500;
          color: #60a5fa;
          margin: 0 0 20px 0;
          text-align: center;
        }

        .queries-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .query-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .query-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .query-rank {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          width: 20px;
        }

        .query-text {
          color: #ffffff;
          font-size: 14px;
        }

        .query-stats {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .query-count {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .query-payment {
          font-size: 12px;
          color: #60a5fa;
          font-weight: 500;
        }

        .time-chart {
          height: 160px;
        }

        .time-bars {
          display: flex;
          align-items: end;
          justify-content: space-between;
          height: 120px;
          gap: 2px;
        }

        .time-bar {
          flex: 1;
          background: linear-gradient(to top, #22c55e, #4ade80);
          border-radius: 2px 2px 0 0;
          min-height: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .time-bar:hover {
          background: linear-gradient(to top, #16a34a, #22c55e);
        }

        .time-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
        }

        .insights-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .insight-point {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
        }

        .insight-icon {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }

        .insight-content h4 {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .insight-content p {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
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
          .analytics-container {
            padding: 0 20px;
          }
          
          .analytics-hero h1 {
            font-size: 32px;
          }
          
          .export-controls {
            position: static;
            margin-top: 20px;
          }
          
          .philosophy-points {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .charts-grid {
            grid-template-columns: 1fr;
          }
          
          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          
          .header-cell,
          .table-cell {
            padding: 8px 16px;
          }
          
          .insights-grid {
            grid-template-columns: 1fr;
          }
          
          .insights-cards {
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