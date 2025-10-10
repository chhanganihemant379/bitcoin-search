'use client'

import React, { useState, useEffect } from 'react'

export default function ExchangeMarketsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="markets-page">
      <div className="markets-container">
        {/* Hero Section */}
        <section className="markets-hero">
          <h1>
            <span style={{color: '#ffffff'}}>Bitcoin Search</span>{' '}
            <span style={{color: '#ffffff'}}>Exchange Markets</span>
          </h1>
          <p className="markets-tagline">
            Economic weight drives market data quality
          </p>
          <div className="markets-badge">Live Trading Data</div>
        </section>

        {/* Market Philosophy Section */}
        <section className="philosophy-section">
          <h2>Economic Weight Market Data</h2>
          <div className="philosophy-content">
            <p>
              Traditional market data feeds rely on centralized providers with opaque pricing. 
              Bitcoin Search Exchange creates an <strong>economically weighted marketplace</strong> where 
              market data quality and accuracy are determined by actual micropayments from traders.
            </p>
            <p>
              Our exchange aggregates data from multiple sources, weights it by economic signals, 
              and provides the most accurate real-time pricing through competitive vendor participation.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Economic Weighting</h3>
                <p>Market data ranked by payment volume, not arbitrary feeds</p>
              </div>
              <div className="point">
                <h3>Vendor Competition</h3>
                <p>Data providers compete on accuracy and speed</p>
              </div>
              <div className="point">
                <h3>True Price Discovery</h3>
                <p>Real economic signals determine data quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Markets Section */}
        <section className="live-markets-section">
          <h2>Live Market Data</h2>
          <div className="markets-grid">
            <div className="market-card featured">
              <h3>BSV/USD</h3>
              <div className="price">$47.23</div>
              <div className="change positive">+2.43%</div>
              <div className="volume">Volume: 125,450 BSV</div>
              <div className="data-quality">Quality Score: 98.5%</div>
            </div>
            <div className="market-card">
              <h3>BTC/USD</h3>
              <div className="price">$43,280</div>
              <div className="change negative">-0.82%</div>
              <div className="volume">Volume: 2,340 BTC</div>
              <div className="data-quality">Quality Score: 95.2%</div>
            </div>
            <div className="market-card">
              <h3>$bSEARCH/BSV</h3>
              <div className="price">0.00234 BSV</div>
              <div className="change positive">+12.67%</div>
              <div className="volume">Volume: 450,000 $bSEARCH</div>
              <div className="data-quality">Quality Score: 99.1%</div>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="data-sources-section">
          <h2>Market Data Sources</h2>
          <div className="model-card">
            <h3>Economically Weighted Aggregation</h3>
            <ul>
              <li>
                <strong>Primary Sources:</strong> Real-time feeds from major exchanges 
                weighted by trading volume and data accuracy payments
              </li>
              <li>
                <strong>Vendor Network:</strong> Independent data providers stake $bSearch tokens 
                to participate and earn from high-quality market data
              </li>
              <li>
                <strong>Quality Metrics:</strong> Data accuracy tracked through economic signals - 
                providers with better data receive more micropayments
              </li>
              <li>
                <strong>Latency Rewards:</strong> Fastest, most accurate data providers 
                earn bonus payments from the economic weight algorithm
              </li>
            </ul>
          </div>

          <div className="model-card warning">
            <h3>Data Quality Guarantees</h3>
            <ul>
              <li>
                <strong>Economic Validation:</strong> All market data validated through 
                micropayment flows and vendor competition
              </li>
              <li>
                <strong>Real-time Accuracy:</strong> Data quality scores updated in real-time 
                based on trader payments and satisfaction
              </li>
              <li>
                <strong>Vendor Accountability:</strong> Poor performing data sources lose 
                staking rewards and market access
              </li>
              <li>
                <strong>Transparent Pricing:</strong> All data costs and vendor performance 
                metrics publicly available on-chain
              </li>
            </ul>
          </div>
        </section>

        {/* Trading Integration Section */}
        <section className="business-section">
          <h2>Trading & API Integration</h2>
          <div className="business-content">
            <p className="intro">
              Access professionally-grade market data through our economically weighted 
              exchange API, where data quality is guaranteed by real economic signals.
            </p>

            <div className="business-model">
              <h3>API Pricing</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Basic Market Data</h4>
                  <p>Real-time prices, basic charts</p>
                  <p className="price">0.0001 BSV/query</p>
                </div>
                <div className="stream featured">
                  <h4>Professional Trading</h4>
                  <p>Level 2 data, order book, analytics</p>
                  <p className="price">0.001 BSV/query</p>
                </div>
                <div className="stream">
                  <h4>Enterprise API</h4>
                  <p>Unlimited access, custom endpoints</p>
                  <p className="price">Custom pricing</p>
                </div>
              </div>
              
              <h3 style={{marginTop: '40px'}}>Revenue Distribution</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Data Vendors</h4>
                  <p>Providers earn from quality data</p>
                  <p className="price">70% of payments</p>
                </div>
                <div className="stream featured">
                  <h4>Platform Fee</h4>
                  <p>Exchange operation and development</p>
                  <p className="price">20% of payments</p>
                </div>
                <div className="stream">
                  <h4>$bSearch Buyback</h4>
                  <p>Token value support mechanism</p>
                  <p className="price">10% of payments</p>
                </div>
              </div>
            </div>

            <div className="value-flow">
              <h3>Economic Weight Trading Flow</h3>
              <div className="flow-diagram">
                <div className="flow-item">
                  <span>Trader requests market data</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Micropayment to data vendors</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Quality score updates ranking</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Best vendors get more queries</span>
                </div>
              </div>
              <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)'}}>
                Market data quality improves through economic competition, ensuring traders 
                get the most accurate pricing available.
              </p>
            </div>
          </div>
        </section>

        {/* Trading Features Section */}
        <section className="contribute-section">
          <h2>Trading Features</h2>
          <div className="contribute-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Real-time Data</h3>
              <p>Sub-second market updates with economic weight validation</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Advanced Analytics</h3>
              <p>Economic weight patterns, vendor performance metrics</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>API Trading</h3>
              <p>Programmatic access with micropayment integration</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Quality Guarantees</h3>
              <p>Data accuracy backed by vendor staking and economic signals</p>
            </div>
          </div>

          <div className="contribution-examples">
            <h3>Data Quality Features</h3>
            <ul>
              <li>✅ Real-time quality scoring</li>
              <li>✅ Vendor performance tracking</li>
              <li>✅ Economic weight validation</li>
              <li>✅ Latency under 50ms</li>
              <li>✅ 99.9% uptime guarantee</li>
              <li>✅ Multi-source aggregation</li>
            </ul>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="stats-section">
          <h2>Exchange Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>Daily Volume</h3>
              <p className="stat-value">$2.4M</p>
              <p className="stat-label">Across all pairs</p>
            </div>
            <div className="stat">
              <h3>Data Vendors</h3>
              <p className="stat-value">23</p>
              <p className="stat-label">Active providers</p>
            </div>
            <div className="stat">
              <h3>API Queries</h3>
              <p className="stat-value">340K</p>
              <p className="stat-label">Daily requests</p>
            </div>
            <div className="stat">
              <h3>Avg Latency</h3>
              <p className="stat-value">28ms</p>
              <p className="stat-label">Response time</p>
            </div>
          </div>
        </section>

        {/* Economic Model Section */}
        <section className="legal-section">
          <h2>Economic Model & Data Quality</h2>
          <div className="legal-content">
            <p>
              <strong>Economic Weight Algorithm:</strong> Market data quality is determined by 
              actual micropayments from traders rather than traditional metrics. Vendors compete 
              on accuracy, speed, and reliability to earn more query payments.
            </p>
            <p>
              <strong>Data Vendor Staking:</strong> All market data providers must stake $bSearch 
              tokens to participate. Poor performance results in staking penalties, ensuring 
              only high-quality data reaches traders.
            </p>
            <p>
              <strong>Transparent Economics:</strong> All vendor payments, quality scores, and 
              performance metrics are recorded on-chain via BSV micropayments, creating 
              unprecedented transparency in market data provision.
            </p>
            <p>
              Market data accuracy and vendor performance can be independently verified through 
              on-chain payment records and economic weight calculations.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Start Trading with Economic Weight</h2>
          <div className="cta-buttons">
            <a 
              href="/exchange/trading" 
              className="cta-btn primary"
            >
              Access Trading Platform
            </a>
            <a 
              href="/docs/api" 
              className="cta-btn secondary"
            >
              View API Documentation
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Markets Page - Same Style as Token Page - Bitcoin Search Blue Theme */
        .markets-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px; /* 40px POC banner + 32px taskbar + 24px spacing */
          font-weight: 300;
        }

        .markets-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Markets Hero - Full Width Black */
        .markets-hero {
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

        .markets-badge {
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

        .markets-hero h1 {
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

        .markets-tagline {
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

        /* Live Markets Grid */
        .markets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .market-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .market-card.featured {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.02);
        }

        .market-card h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .market-card .price {
          font-size: 28px;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 8px;
        }

        .market-card .change {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .market-card .change.positive {
          color: #22c55e;
        }

        .market-card .change.negative {
          color: #ef4444;
        }

        .market-card .volume {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 8px;
        }

        .market-card .data-quality {
          font-size: 12px;
          color: #60a5fa;
          font-weight: 500;
        }

        .model-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
        }

        .model-card.warning {
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.05);
        }

        .model-card h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
          color: #60a5fa;
        }

        .model-card ul {
          list-style: none;
          padding: 0;
        }

        .model-card li {
          margin-bottom: 16px;
          font-size: 15px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
        }

        .model-card strong {
          color: #ffffff;
        }

        .business-content .intro {
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 40px;
        }

        .business-model h3 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 24px;
          color: #60a5fa;
          text-align: center;
        }

        .revenue-streams {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stream {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stream.featured {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.05);
        }

        .stream h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .stream p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 8px 0;
        }

        .stream .price {
          font-size: 20px;
          font-weight: 600;
          color: #60a5fa;
          margin-top: 12px;
        }

        .value-flow {
          margin-top: 40px;
        }

        .flow-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin: 32px 0;
        }

        .flow-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          padding: 16px 20px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .arrow {
          color: #60a5fa;
          font-weight: bold;
          font-size: 18px;
        }

        .contribute-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .step {
          text-align: center;
          padding: 24px;
        }

        .step-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 auto 16px;
        }

        .step h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .step p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }

        .contribution-examples {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px;
          margin-top: 40px;
        }

        .contribution-examples h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
          color: #60a5fa;
          text-align: center;
        }

        .contribution-examples ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .contribution-examples li {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          padding: 8px 0;
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

        .legal-content p {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }

        .legal-content strong {
          color: #60a5fa;
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
          .markets-container {
            padding: 0 20px;
          }
          
          .markets-hero h1 {
            font-size: 32px;
          }
          
          .philosophy-points {
            grid-template-columns: 1fr;
          }
          
          .markets-grid {
            grid-template-columns: 1fr;
          }
          
          .revenue-streams {
            grid-template-columns: 1fr;
          }
          
          .contribute-steps {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .flow-diagram {
            flex-direction: column;
          }
          
          .flow-item .arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </div>
  )
}