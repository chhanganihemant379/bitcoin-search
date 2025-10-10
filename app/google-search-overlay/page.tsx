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
            <span style={{color: '#ffffff'}}>Google Search</span> Overlay{' '}
            <span style={{color: '#ffffff'}}>Architecture</span>
          </h1>
          <p className="overlay-tagline">
            Bitcoin-mediated payments for enhanced search services
          </p>
          <div className="overlay-badge">Contract Discovery Engine</div>
        </section>

        {/* The Marketplace Model */}
        <section className="marketplace-section">
          <h2>The Marketplace Model</h2>
          <div className="marketplace-content">
            <p>
              In Bitcoin Search, when users make a search they have to pay a tiny fee. This is a bit like hailing a taxi cab on a wet London streetcorner. The offerer is putting a contract out to tender and the acceptor of the offer (the taxi driver) is accepting the contract and taking the payment on completion of the journey.
            </p>
            <p>
              Bitcoin Search operates as a <strong>marketplace for data</strong> where search queries become paid contracts that data providers can choose to fulfill.
            </p>
            <div className="marketplace-points">
              <div className="point">
                <h3>Users (Buyers)</h3>
                <p>Submit search queries with small payments attached, like hailing a taxi and offering fare</p>
              </div>
              <div className="point">
                <h3>Data Providers (Sellers)</h3>
                <p>Accept search requests and fulfill them in exchange for payment</p>
              </div>
              <div className="point">
                <h3>Payment on Delivery</h3>
                <p>Payment occurs after successful delivery of search results</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contract Discovery Engine */}
        <section className="discovery-section">
          <h2>The Real Opportunity: Contract Discovery Engine</h2>
          <div className="discovery-card">
            <h3>The BSV Mempool Scale</h3>
            <p>
              BitcoinSV processes over 1M TPS sometimes. With blocks settled every ten minutes, that's 
              1,000,000 × 60 × 10 = around <strong>half a billion latent transactions</strong> to search 
              through, many containing valuable inscribed contracts for tender.
            </p>
            <div className="scale-stats">
              <div className="stat">
                <div className="stat-value">600M</div>
                <div className="stat-label">Potential TX in mempool</div>
              </div>
              <div className="stat">
                <div className="stat-value">1M+</div>
                <div className="stat-label">Transactions per second</div>
              </div>
              <div className="stat">
                <div className="stat-value">10min</div>
                <div className="stat-label">Block settlement time</div>
              </div>
            </div>
          </div>

          <div className="discovery-card insight">
            <h3>Signal vs Noise Problem</h3>
            <p>
              <strong>SOME of them will be very valuable to find</strong>, because they represent real work, 
              to be really done, by real people (or AI) that offers real money. This transforms Bitcoin Search 
              from "yet another search engine" into something unique: a <strong>real-time marketplace scanner</strong> 
              for on-chain work contracts.
            </p>
          </div>
        </section>

        {/* Leveraging Google's Infrastructure */}
        <section className="infrastructure-section">
          <h2>Leveraging Google's Infrastructure</h2>
          <div className="infrastructure-content">
            <p className="intro">
              We would want to use Google search as our way of indexing this stuff ideally since they've got the heavy guns. 
              That's brilliant - leverage Google's massive infrastructure instead of building your own indexing system.
            </p>

            <div className="architecture-flow">
              <h3>The Architecture</h3>
              <div className="flow-diagram">
                <div className="flow-item">
                  <span>Google indexes BSV blockchain data</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Bitcoin Search acts as specialized interface</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flow-item">
                  <span>Focus on value-add: filtering & presenting opportunities</span>
                </div>
              </div>
            </div>

            <div className="competitive-advantages">
              <h3>Your Competitive Advantage</h3>
              <div className="advantages-grid">
                <div className="advantage">
                  <h4>Domain Expertise</h4>
                  <p>Identifying valuable contracts vs noise</p>
                </div>
                <div className="advantage">
                  <h4>Economic Filtering</h4>
                  <p>Surfacing opportunities by potential payout/value</p>
                </div>
                <div className="advantage">
                  <h4>Marketplace Mechanics</h4>
                  <p>Payment rails, reputation, contract matching</p>
                </div>
                <div className="advantage">
                  <h4>Real-time Alerting</h4>
                  <p>New high-value opportunities as they appear</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bitcoin Auth */}
        <section className="auth-section">
          <h2>Bitcoin Auth: Dual Authentication</h2>
          <div className="auth-content">
            <div className="auth-model">
              <h3>Dual Authentication Bridge</h3>
              <div className="auth-streams">
                <div className="auth-stream">
                  <h4>Google Identity</h4>
                  <p>Access to their search infrastructure</p>
                </div>
                <div className="auth-stream featured">
                  <h4>HandCash Identity</h4>
                  <p>Ability to make micropayments for premium search</p>
                </div>
              </div>
            </div>

            <div className="revolutionary-cases">
              <h3>Revolutionary Use Cases</h3>
              <div className="use-cases">
                <div className="case">
                  <div className="case-number">1</div>
                  <h4>Pay Google for Deeper Search</h4>
                  <p>"I'll pay $10 in Bitcoin to have Google prioritize searching for [specific contract type] across the entire BSV mempool"</p>
                </div>
                <div className="case">
                  <div className="case-number">2</div>
                  <h4>Pay Google for Contract Amplification</h4>
                  <p>"I'll pay $50 to boost visibility of my inscribed work contract so it appears in relevant searches"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Innovation */}
        <section className="innovation-section">
          <h2>The Innovation</h2>
          <div className="innovation-content">
            <p>
              This transforms the relationship with Google from "free user" to "paying customer with specific Bitcoin-denominated needs." 
              You're essentially creating a <strong>B2B micropayment layer</strong> on top of Google Search.
            </p>
            <p>
              The innovation is that Bitcoin enables these micro-transactions that traditional payment rails make uneconomical. 
              Google gets new revenue streams, users get better search results, and contract creators get better discovery.
            </p>

            <div className="middleware-functions">
              <h3>Bitcoin Search as Middleware</h3>
              <ul>
                <li>✅ Authenticates users with both systems</li>
                <li>✅ Handles Bitcoin payments to Google</li>
                <li>✅ Provides specialized interface for contract discovery</li>
                <li>✅ Creates new revenue streams for Google</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Value Propositions */}
        <section className="value-section">
          <h2>Key Value Propositions</h2>
          <div className="value-propositions">
            <div className="proposition">
              <h3>Speed Isn't the Constraint</h3>
              <p>You're not competing with Google's instant results, you're offering discovery of economic opportunities that Google can't see</p>
            </div>
            <div className="proposition">
              <h3>Data Already Exists</h3>
              <p>Inscribed in the mempool, just needs intelligent filtering/searching</p>
            </div>
            <div className="proposition">
              <h3>Network Effects</h3>
              <p>As more contracts get inscribed, the search becomes more valuable</p>
            </div>
            <div className="proposition">
              <h3>Proof of Work</h3>
              <p>Hash trail provides verifiable evidence of what was searched and delivered</p>
            </div>
          </div>

          <div className="value-statement">
            <h3>The Product Positioning</h3>
            <p className="positioning-text">
              "Pay a sat to search for profitable work contracts inscribed on BSV" 
              rather than "Pay a sat to search the web."
            </p>
            <p>
              This is actually a compelling positioning - you're not competing with free search, 
              you're offering paid access to exclusive economic opportunities that literally can't be found anywhere else.
            </p>
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