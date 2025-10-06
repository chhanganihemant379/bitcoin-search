'use client'

import React, { useState, useEffect } from 'react'

export default function TokenPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="token-page">
      <div className="token-container">
        {/* Hero Section */}
        <section className="token-hero">
          <h1>
            <span style={{color: '#ffffff'}}>The</span> Bitcoin Search{' '}
            <span style={{color: '#ffffff'}}>Token</span>
          </h1>
          <p className="token-tagline">
            Economic weight meets decentralized search
          </p>
          <div className="token-badge">$bSearch</div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <h2>Our Economic Search Philosophy</h2>
          <div className="philosophy-content">
            <p>
              Bitcoin Search is an <strong>economically weighted search engine</strong> where content 
              value is determined by actual micropayments rather than arbitrary algorithms. 
              Our approach creates a true marketplace for information.
            </p>
            <p>
              The $bSearch token represents our vision of search powered by economic signals - 
              where users pay for quality data and vendors compete to provide the best results.
            </p>
            <div className="philosophy-points">
              <div className="point">
                <h3>Economic Weight</h3>
                <p>Content ranked by payment value, not backlinks</p>
              </div>
              <div className="point">
                <h3>Vendor Competition</h3>
                <p>Data providers compete on quality and price</p>
              </div>
              <div className="point">
                <h3>True Value</h3>
                <p>Real economic signals determine content worth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Token Model Section */}
        <section className="token-model-section">
          <h2>The $bSearch Token Model</h2>
          <div className="model-card">
            <h3>How It Works</h3>
            <ul>
              <li>
                <strong>Search Revenue:</strong> All search payments and micropayments flow 
                into the $bSearch token economy, capitalizing the token value
              </li>
              <li>
                <strong>Vendor Staking:</strong> Data vendors stake $bSearch tokens to 
                participate in the marketplace and earn from quality data provision
              </li>
              <li>
                <strong>Quality Rewards:</strong> High-performing vendors receive bonus 
                $bSearch tokens based on user satisfaction and response times
              </li>
              <li>
                <strong>Transparent Economics:</strong> All payments and rewards are 
                recorded on-chain via BSV micropayments
              </li>
            </ul>
          </div>

          <div className="model-card warning">
            <h3>Economic Model Notes</h3>
            <ul>
              <li>
                <strong>Market Driven:</strong> Token value fluctuates based on search 
                volume, data quality, and market demand
              </li>
              <li>
                <strong>Vendor Economy:</strong> Revenue flows between users, vendors, 
                and token holders based on actual utility
              </li>
              <li>
                <strong>Not Investment Advice:</strong> $bSearch tokens are utility tokens 
                for participating in the search economy, not investment instruments
              </li>
              <li>
                <strong>Economic Signals:</strong> Token rewards align with providing 
                genuine value to search users
              </li>
            </ul>
          </div>
        </section>

        {/* Business Model Section */}
        <section className="business-section">
          <h2>The Search Economy</h2>
          <div className="business-content">
            <p className="intro">
              Our vision is to create the first truly economically weighted search engine 
              where content value is determined by real market signals.
            </p>

            <div className="business-model">
              <h3>Revenue Streams</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Basic Search</h4>
                  <p>General queries, standard results</p>
                  <p className="price">0.001 BSV</p>
                </div>
                <div className="stream featured">
                  <h4>Premium Search</h4>
                  <p>High-quality data, fast results</p>
                  <p className="price">0.01 BSV</p>
                </div>
                <div className="stream">
                  <h4>Enterprise API</h4>
                  <p>Bulk queries, custom integration</p>
                  <p className="price">Custom</p>
                </div>
              </div>
              
              <h3 style={{marginTop: '40px'}}>Data Marketplace</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Vendor Fees</h4>
                  <p>Marketplace participation fee</p>
                  <p className="price">2.5% of earnings</p>
                </div>
                <div className="stream featured">
                  <h4>Quality Bonuses</h4>
                  <p>Rewards for high-quality data</p>
                  <p className="price">Up to 50% extra</p>
                </div>
                <div className="stream">
                  <h4>Staking Rewards</h4>
                  <p>$bSearch staking APY</p>
                  <p className="price">15-25% APY</p>
                </div>
              </div>
            </div>

            <div className="value-flow">
              <h3>Economic Weight Flow</h3>
              <div className="flow-diagram">
                <div className="flow-item">
                  <span>User pays for search</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Payment distributed to vendors</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Platform fee capitalizes $bSearch</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Economic weight determines ranking</span>
                </div>
              </div>
              <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)'}}>
                The Bitcoin Search marketplace creates real economic signals where content value 
                is measured by actual payments, not arbitrary algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* How to Earn Section */}
        <section className="contribute-section">
          <h2>How to Earn $bSearch Tokens</h2>
          <div className="contribute-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Become a Vendor</h3>
              <p>Stake $bSearch tokens and provide high-quality search data</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Serve Quality Data</h3>
              <p>Respond to search queries with accurate, fast results</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Earn from Searches</h3>
              <p>Receive micropayments for every query you successfully answer</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Quality Bonuses</h3>
              <p>High-rated vendors earn bonus $bSearch tokens</p>
            </div>
          </div>

          <div className="contribution-examples">
            <h3>What Earns Rewards</h3>
            <ul>
              <li>✅ Fast response times (&lt;100ms)</li>
              <li>✅ High accuracy scores (&gt;95%)</li>
              <li>✅ Comprehensive data coverage</li>
              <li>✅ Unique data sources</li>
              <li>✅ Consistent availability</li>
              <li>✅ User satisfaction ratings</li>
            </ul>
          </div>
        </section>

        {/* Token Stats Section */}
        <section className="stats-section">
          <h2>Token Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>Total Supply</h3>
              <p className="stat-value">100,000,000</p>
              <p className="stat-label">$bSearch tokens</p>
            </div>
            <div className="stat">
              <h3>Daily Searches</h3>
              <p className="stat-value">125,456</p>
              <p className="stat-label">Micropayments generated</p>
            </div>
            <div className="stat">
              <h3>Data Vendors</h3>
              <p className="stat-value">45</p>
              <p className="stat-label">Active providers</p>
            </div>
            <div className="stat">
              <h3>Economic Weight</h3>
              <p className="stat-value">125.7K BSV</p>
              <p className="stat-label">Total value processed</p>
            </div>
          </div>
        </section>

        {/* Economics Section */}
        <section className="legal-section">
          <h2>Economic Model & Utility</h2>
          <div className="legal-content">
            <p>
              <strong>Utility Token:</strong> The $bSearch token is a utility token that enables 
              participation in the economically weighted search marketplace. Token holders can 
              stake to become data vendors or use tokens to access premium search features.
            </p>
            <p>
              <strong>Economic Weight Algorithm:</strong> Content ranking is determined by the 
              total economic weight (micropayments received) rather than traditional metrics. 
              This creates genuine market-driven content valuation.
            </p>
            <p>
              <strong>Vendor Marketplace:</strong> Data vendors stake $bSearch tokens to participate 
              in the marketplace. Higher stakes and better performance lead to more search queries 
              and higher earnings.
            </p>
            <p>
              By participating in the search economy, you acknowledge that token values fluctuate 
              based on market demand, search volume, and economic activity within the platform.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Join the Search Economy?</h2>
          <div className="cta-buttons">
            <a 
              href="/vendors" 
              className="cta-btn primary"
            >
              Become a Data Vendor
            </a>
            <a 
              href="/docs" 
              className="cta-btn secondary"
            >
              Read Integration Docs
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Token Page - Compact Refined Style - Bitcoin Search Blue Theme */
        .token-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px; /* 40px POC banner + 32px taskbar + 24px spacing */
          font-weight: 300;
        }

        .token-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Token Hero - Full Width Black */
        .token-hero {
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

        .token-badge {
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

        .token-hero h1 {
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

        .token-tagline {
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
          .token-container {
            padding: 0 20px;
          }
          
          .token-hero h1 {
            font-size: 32px;
          }
          
          .philosophy-points {
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