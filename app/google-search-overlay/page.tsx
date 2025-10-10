'use client'

import React, { useState, useEffect } from 'react'

export default function GoogleSearchOverlay() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="overlay-page">
      <div className="overlay-container">
        {/* Hero Section */}
        <section className="overlay-hero">
          <h1>
            <span style={{color: '#ffffff'}}>Strategic Partnership</span> with{' '}
            <span style={{color: '#ffffff'}}>Google Search</span>
          </h1>
          <p className="overlay-tagline">
            Monetizing blockchain data discovery through premium search services
          </p>
          <div className="overlay-badge">B2B Technology Partnership</div>
        </section>

        {/* Executive Summary */}
        <section className="marketplace-section">
          <h2>Executive Summary</h2>
          <div className="marketplace-content">
            <p>
              Bitcoin Search presents a unique opportunity to create new revenue streams for Google through Bitcoin-mediated premium search services, while establishing the first economically-weighted search engine for blockchain data discovery.
            </p>
            <p>
              Our <strong>Dual Authentication Architecture</strong> bridges Google's search infrastructure with Bitcoin micropayment rails, enabling previously impossible business models in the search industry.
            </p>
            <div className="marketplace-points">
              <div className="point">
                <h3>Market Opportunity</h3>
                <p>$600B+ in BSV mempool contracts waiting to be discovered and monetized</p>
              </div>
              <div className="point">
                <h3>Technology Innovation</h3>
                <p>First Bitcoin-native search interface with real-time micropayment integration</p>
              </div>
              <div className="point">
                <h3>Revenue Model</h3>
                <p>Shared revenue from premium search services with transparent blockchain accounting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="discovery-section">
          <h2>Market Analysis: The $600B Opportunity</h2>
          <div className="discovery-card">
            <h3>BitcoinSV Blockchain Scale</h3>
            <p>
              BitcoinSV processes over 1 million transactions per second at peak capacity, creating an unprecedented 
              data discovery challenge and opportunity. With 10-minute block settlements, approximately <strong>600 million 
              transactions</strong> exist in the mempool at any given time, containing valuable commercial contracts, 
              work opportunities, and economic data.
            </p>
            <div className="scale-stats">
              <div className="stat">
                <div className="stat-value">600M</div>
                <div className="stat-label">Active mempool transactions</div>
              </div>
              <div className="stat">
                <div className="stat-value">1M+</div>
                <div className="stat-label">Peak TPS capacity</div>
              </div>
              <div className="stat">
                <div className="stat-value">$600B+</div>
                <div className="stat-label">Estimated contract value</div>
              </div>
            </div>
          </div>

          <div className="discovery-card insight">
            <h3>The Discovery Challenge</h3>
            <p>
              Current blockchain explorers provide raw transaction data but lack intelligent filtering for commercial 
              opportunities. Bitcoin Search addresses this gap by creating the first <strong>economically-weighted 
              search engine</strong> specifically designed for discovering valuable on-chain contracts and work opportunities.
            </p>
          </div>
        </section>

        {/* Strategic Partnership Model */}
        <section className="infrastructure-section">
          <h2>Strategic Partnership with Google</h2>
          <div className="infrastructure-content">
            <p className="intro">
              Rather than competing with Google's massive search infrastructure, Bitcoin Search proposes a strategic 
              partnership that leverages Google's indexing capabilities while creating new revenue streams through 
              Bitcoin-native premium search services.
            </p>

            <div className="architecture-flow">
              <h3>Partnership Architecture</h3>
              <div className="flow-diagram">
                <div className="flow-item">
                  <span>Google indexes blockchain data with existing infrastructure</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Bitcoin Search provides specialized B2B interface layer</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Shared revenue from premium search services</span>
                </div>
              </div>
            </div>

            <div className="competitive-advantages">
              <h3>Mutual Value Proposition</h3>
              <div className="advantages-grid">
                <div className="advantage">
                  <h4>For Google</h4>
                  <p>New revenue streams from Bitcoin-mediated premium search services</p>
                </div>
                <div className="advantage">
                  <h4>For Bitcoin Search</h4>
                  <p>Access to world-class search infrastructure without massive capital investment</p>
                </div>
                <div className="advantage">
                  <h4>For Market</h4>
                  <p>First economically-weighted search engine with transparent pricing</p>
                </div>
                <div className="advantage">
                  <h4>For Users</h4>
                  <p>Access to blockchain contract discovery impossible elsewhere</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Innovation */}
        <section className="auth-section">
          <h2>Core Technology: Dual Authentication Protocol</h2>
          <div className="auth-content">
            <div className="auth-model">
              <h3>Breakthrough Authentication Architecture</h3>
              <div className="auth-streams">
                <div className="auth-stream">
                  <h4>Google OAuth Integration</h4>
                  <p>Seamless access to Google's enterprise search infrastructure and APIs</p>
                </div>
                <div className="auth-stream featured">
                  <h4>Bitcoin Payment Rails</h4>
                  <p>Real-time micropayments enabling previously impossible business models</p>
                </div>
              </div>
            </div>

            <div className="revolutionary-cases">
              <h3>Commercial Applications</h3>
              <div className="use-cases">
                <div className="case">
                  <div className="case-number">1</div>
                  <h4>Premium Search Services</h4>
                  <p>Businesses pay Bitcoin for priority indexing and discovery of specific blockchain contract types across the entire BSV ecosystem</p>
                </div>
                <div className="case">
                  <div className="case-number">2</div>
                  <h4>Contract Visibility Marketplace</h4>
                  <p>Companies pay for enhanced visibility of their on-chain work contracts and business opportunities in search results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="innovation-section">
          <h2>Revenue Model & Financial Projections</h2>
          <div className="innovation-content">
            <p>
              Bitcoin Search transforms traditional search economics by introducing direct monetization of search queries 
              through Bitcoin micropayments, creating a new <strong>B2B premium search market</strong> worth an estimated 
              $2.1B annually by Year 3.
            </p>
            <p>
              Our dual authentication protocol enables micro-transactions that traditional payment rails cannot support, 
              creating sustainable revenue sharing between Google, Bitcoin Search, and content providers.
            </p>

            <div className="middleware-functions">
              <h3>Platform Value Creation</h3>
              <ul>
                <li>✅ Enterprise blockchain data discovery services</li>
                <li>✅ Real-time contract opportunity alerts and notifications</li>
                <li>✅ Premium search API for institutional customers</li>
                <li>✅ Revenue sharing with Google through Bitcoin payment rails</li>
                <li>✅ Transparent blockchain-based accounting and settlements</li>
                <li>✅ First-mover advantage in economically-weighted search</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment Opportunity */}
        <section className="value-section">
          <h2>Investment Opportunity</h2>
          <div className="value-propositions">
            <div className="proposition">
              <h3>First-Mover Advantage</h3>
              <p>First economically-weighted search engine with direct monetization through Bitcoin micropayments</p>
            </div>
            <div className="proposition">
              <h3>Massive Data Moat</h3>
              <p>Exclusive access to 600M+ blockchain transactions containing commercial opportunities</p>
            </div>
            <div className="proposition">
              <h3>Scalable Technology</h3>
              <p>Dual authentication protocol enables partnerships with multiple search providers beyond Google</p>
            </div>
            <div className="proposition">
              <h3>Transparent Economics</h3>
              <p>Blockchain-based accounting provides unprecedented transparency for investors and partners</p>
            </div>
          </div>

          <div className="value-statement">
            <h3>Market Positioning</h3>
            <p className="positioning-text">
              "The world's first economically-weighted search engine for blockchain contract discovery" 
            </p>
            <p>
              Bitcoin Search addresses a $600B+ market opportunity that no existing search engine can access, 
              creating an entirely new category of B2B search services with transparent, Bitcoin-native economics.
            </p>
          </div>
        </section>

        {/* Partnership Opportunity */}
        <section className="partnership-section">
          <h2>Partnership & Joint Venture Opportunities</h2>
          <div className="partnership-content">
            <div className="partnership-model">
              <h3>Strategic Partnership Tracks</h3>
              <div className="partnership-streams">
                <div className="partnership-stream">
                  <h4>Technology Partners</h4>
                  <p>Search providers, cloud infrastructure, blockchain indexing services</p>
                  <p className="partnership-value">Revenue sharing + equity participation</p>
                </div>
                <div className="partnership-stream featured">
                  <h4>Investment Partners</h4>
                  <p>VCs, crypto funds, strategic corporate investors</p>
                  <p className="partnership-value">Series A: $5M for 20% equity</p>
                </div>
                <div className="partnership-stream">
                  <h4>Enterprise Customers</h4>
                  <p>Financial institutions, consulting firms, blockchain companies</p>
                  <p className="partnership-value">Annual contracts: $50K - $500K</p>
                </div>
              </div>
            </div>

            <div className="funding-use">
              <h3>Use of Investment Capital</h3>
              <div className="funding-breakdown">
                <div className="funding-item">
                  <h4>40% - Technology Development</h4>
                  <p>Dual authentication protocol, search algorithms, enterprise APIs</p>
                </div>
                <div className="funding-item">
                  <h4>30% - Partnership Development</h4>
                  <p>Google integration, additional search provider partnerships</p>
                </div>
                <div className="funding-item">
                  <h4>20% - Market Development</h4>
                  <p>Enterprise sales, customer acquisition, marketing</p>
                </div>
                <div className="funding-item">
                  <h4>10% - Operations</h4>
                  <p>Team expansion, legal, compliance, infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Google Search Overlay Page - Bitcoin Search Blue Theme */
        .overlay-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px;
          font-weight: 300;
        }

        .overlay-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Hero Section */
        .overlay-hero {
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

        .overlay-badge {
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

        .overlay-hero h1 {
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

        .overlay-tagline {
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

        .marketplace-content p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }

        .marketplace-points {
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

        .discovery-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
        }

        .discovery-card.insight {
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.05);
        }

        .discovery-card h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
          color: #60a5fa;
        }

        .discovery-card p {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }

        .scale-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .stat {
          text-align: center;
          padding: 16px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
        }

        .infrastructure-content .intro {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 40px;
        }

        .architecture-flow h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 24px;
          color: #60a5fa;
          text-align: center;
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

        .competitive-advantages {
          margin-top: 40px;
        }

        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }

        .advantage {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .advantage h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .advantage p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .auth-streams {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .auth-stream {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .auth-stream.featured {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.02);
        }

        .auth-stream h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .auth-stream p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .use-cases {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        .case {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
        }

        .case-number {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .case h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #60a5fa;
        }

        .case p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        .innovation-content p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }

        .middleware-functions {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px;
          margin-top: 40px;
        }

        .middleware-functions h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
          color: #60a5fa;
          text-align: center;
        }

        .middleware-functions ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .middleware-functions li {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          padding: 8px 0;
        }

        .value-propositions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }

        .proposition {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
        }

        .proposition h3 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 12px;
          color: #60a5fa;
        }

        .proposition p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        .value-statement {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 32px;
          text-align: center;
        }

        .value-statement h3 {
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 20px;
          color: #60a5fa;
        }

        .positioning-text {
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 16px;
          font-style: italic;
        }

        .value-statement p:last-child {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        .partnership-content {
          margin-top: 32px;
        }

        .partnership-streams {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin: 32px 0;
        }

        .partnership-stream {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .partnership-stream.featured {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.02);
        }

        .partnership-stream h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 12px;
          color: #60a5fa;
        }

        .partnership-stream p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 8px 0;
        }

        .partnership-value {
          font-size: 16px;
          font-weight: 600;
          color: #60a5fa !important;
          margin-top: 12px;
        }

        .funding-use {
          margin-top: 40px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px;
        }

        .funding-use h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 24px;
          color: #60a5fa;
          text-align: center;
        }

        .funding-breakdown {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .funding-item {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          padding: 20px;
        }

        .funding-item h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #60a5fa;
        }

        .funding-item p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .overlay-container {
            padding: 0 20px;
          }
          
          .overlay-hero h1 {
            font-size: 32px;
          }
          
          .marketplace-points {
            grid-template-columns: 1fr;
          }
          
          .auth-streams {
            grid-template-columns: 1fr;
          }
          
          .use-cases {
            grid-template-columns: 1fr;
          }
          
          .advantages-grid {
            grid-template-columns: 1fr;
          }
          
          .value-propositions {
            grid-template-columns: 1fr;
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