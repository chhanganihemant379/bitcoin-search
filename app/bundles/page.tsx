'use client'

import { useState, useEffect } from 'react'
import { Package, Search, Coins, Users, TrendingUp, Zap, Target, Shield, Clock, ArrowRight, CheckCircle, Star, Globe, Database } from 'lucide-react'

export default function BundlesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bundles-page">
      <div className="bundles-container">
        {/* Hero Section */}
        <section className="bundles-hero">
          <div className="hero-content">
            <h1>
              <span style={{color: '#ffffff'}}>Search</span>{' '}
              <span style={{color: '#ffffff'}}>Bundles</span>
            </h1>
            <p className="bundles-tagline">
              Two-token economics: Ordinal inscriptions paired with $bSEARCH tokens for enhanced economic weighting
            </p>
            <div className="bundles-badge">Dual-Token Architecture</div>
          </div>
        </section>

        {/* Bundle Concept */}
        <section className="concept-section">
          <h2>The Bundle Model</h2>
          <div className="concept-content">
            <p>
              When you create a search query, it gets inscribed as a <strong>1sat ordinal</strong> on the BSV blockchain. 
              But here's where it gets interesting: you can <em>bundle</em> that ordinal with <strong>$bSEARCH tokens</strong> 
              to create enhanced economic weight and unlock distributed processing capabilities.
            </p>
            <p>
              Think of it like this: users pay for the search (the "taxi passengers"), while data vendors 
              compete to fulfill it (the "taxi drivers"). Both sides benefit from holding $bSEARCH tokens 
              - passengers get priority processing and better results, drivers get access to higher-value 
              queries and improved reputation scores.
            </p>
          </div>
        </section>

        {/* Bundle Architecture */}
        <section className="architecture-section">
          <h2>Bundle Architecture</h2>
          <div className="bundle-structure">
            <div className="bundle-card">
              <div className="bundle-icon">
                <Target />
              </div>
              <h3>1sat Ordinal</h3>
              <p>Your search query inscribed permanently on-chain</p>
              <ul>
                <li>Immutable search record</li>
                <li>Timestamped and traceable</li>
                <li>Forms the computational thread basis</li>
              </ul>
            </div>
            <div className="bundle-connector">+</div>
            <div className="bundle-card">
              <div className="bundle-icon">
                <Coins />
              </div>
              <h3>$bSEARCH Token</h3>
              <p>Economic weight and processing priority</p>
              <ul>
                <li>Vendor payment mechanism</li>
                <li>Quality staking system</li>
                <li>Redeemable for premium features</li>
              </ul>
            </div>
            <div className="bundle-connector">=</div>
            <div className="bundle-card enhanced">
              <div className="bundle-icon">
                <Package />
              </div>
              <h3>Enhanced Bundle</h3>
              <p>Economically weighted search with guaranteed processing</p>
              <ul>
                <li>Priority in vendor queues</li>
                <li>Multi-vendor competition</li>
                <li>Automated quality scoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scaling Benefits */}
        <section className="scaling-section">
          <h2>Scaling Without Full Chain Indexing</h2>
          <div className="scaling-benefits">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Database />
              </div>
              <h3>Selective Chain Reading</h3>
              <p>
                Instead of indexing the entire BSV blockchain, Bitcoin Search only tracks bundles 
                containing $bSEARCH tokens. This reduces data processing from terabytes to gigabytes 
                while maintaining complete economic relevance.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Globe />
              </div>
              <h3>Leverage External Indexing</h3>
              <p>
                Let Google and other major indexers handle raw blockchain data. We focus on the 
                economically weighted subset where users have "paid twice" - creating natural 
                spam filtering and quality assurance.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Zap />
              </div>
              <h3>Economic Filtering</h3>
              <p>
                Bundles create an automatic quality threshold. Only searches someone was willing 
                to stake tokens on get processed, eliminating low-value queries and reducing 
                computational overhead by orders of magnitude.
              </p>
            </div>
          </div>
        </section>

        {/* Taxi Economy */}
        <section className="taxi-section">
          <h2>The Taxi Economy: Passengers & Drivers</h2>
          <div className="taxi-economy">
            <div className="economy-side">
              <div className="side-header">
                <Users />
                <h3>Search Users ("Passengers")</h3>
              </div>
              <div className="side-content">
                <h4>What They Pay:</h4>
                <ul>
                  <li>1sat for ordinal inscription</li>
                  <li>$bSEARCH tokens for economic weight</li>
                  <li>Processing fees to vendors</li>
                </ul>
                <h4>What They Get:</h4>
                <ul>
                  <li>Priority processing of their searches</li>
                  <li>Competition between multiple vendors</li>
                  <li>Quality-guaranteed results</li>
                  <li>Redeemable $bSEARCH rewards for quality queries</li>
                </ul>
                <h4>Why Hold $bSEARCH:</h4>
                <ul>
                  <li>Discounted search processing</li>
                  <li>Access to premium analytics</li>
                  <li>Staking rewards from successful searches</li>
                  <li>Governance rights in the search economy</li>
                </ul>
              </div>
            </div>
            <div className="economy-divider"></div>
            <div className="economy-side">
              <div className="side-header">
                <Target />
                <h3>Data Vendors ("Drivers")</h3>
              </div>
              <div className="side-content">
                <h4>What They Provide:</h4>
                <ul>
                  <li>High-quality search results</li>
                  <li>Fast response times</li>
                  <li>Specialized data access</li>
                  <li>Reliable service uptime</li>
                </ul>
                <h4>What They Earn:</h4>
                <ul>
                  <li>$bSEARCH tokens from successful searches</li>
                  <li>Reputation scores for quality service</li>
                  <li>Access to higher-value query pools</li>
                  <li>Bonus rewards for consistent performance</li>
                </ul>
                <h4>Why Hold $bSEARCH:</h4>
                <ul>
                  <li>Stake on service quality commitments</li>
                  <li>Access to premium vendor tools</li>
                  <li>Participate in vendor governance</li>
                  <li>Earn yield from ecosystem growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Distributed Computation */}
        <section className="computation-section">
          <h2>Distributed Thread-Based Computation</h2>
          <div className="computation-flow">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Bundle Creation</h4>
                <p>User creates search + stakes $bSEARCH tokens</p>
              </div>
            </div>
            <ArrowRight className="flow-arrow" />
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Thread Spawning</h4>
                <p>Computational thread spawns across vendor network</p>
              </div>
            </div>
            <ArrowRight className="flow-arrow" />
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Vendor Competition</h4>
                <p>Multiple vendors compete for the bundle rewards</p>
              </div>
            </div>
            <ArrowRight className="flow-arrow" />
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Result Aggregation</h4>
                <p>Best results win, tokens redistributed based on quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Capture */}
        <section className="value-section">
          <h2>Value Capture Mechanisms</h2>
          <div className="value-mechanisms">
            <div className="mechanism-card">
              <div className="mechanism-icon">
                <Shield />
              </div>
              <h3>Quality Staking</h3>
              <p>
                Users stake $bSEARCH tokens on searches they believe will generate quality results. 
                Successful searches return the stake plus rewards. Failed searches forfeit some stake, 
                creating natural quality improvement incentives.
              </p>
            </div>
            <div className="mechanism-card">
              <div className="mechanism-icon">
                <Clock />
              </div>
              <h3>Processing Priority</h3>
              <p>
                Higher token stakes get priority processing across the vendor network. This creates 
                a natural fee market where urgent or valuable searches get faster service by paying 
                premium rates.
              </p>
            </div>
            <div className="mechanism-card">
              <div className="mechanism-icon">
                <TrendingUp />
              </div>
              <h3>Ecosystem Growth</h3>
              <p>
                As search volume grows, token demand increases. Both users and vendors benefit from 
                ecosystem expansion, creating aligned incentives for network effects and continuous 
                improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Benefits */}
        <section className="technical-section">
          <h2>Technical Implementation Benefits</h2>
          <div className="technical-grid">
            <div className="tech-point">
              <CheckCircle className="tech-icon" />
              <div className="tech-content">
                <h4>Reduced Infrastructure Costs</h4>
                <p>No need to maintain full blockchain indexing infrastructure</p>
              </div>
            </div>
            <div className="tech-point">
              <CheckCircle className="tech-icon" />
              <div className="tech-content">
                <h4>Automatic Spam Filtering</h4>
                <p>Economic barriers eliminate low-value and malicious queries</p>
              </div>
            </div>
            <div className="tech-point">
              <CheckCircle className="tech-icon" />
              <div className="tech-content">
                <h4>Scalable Processing</h4>
                <p>Distributed vendor network scales with demand automatically</p>
              </div>
            </div>
            <div className="tech-point">
              <CheckCircle className="tech-icon" />
              <div className="tech-content">
                <h4>Quality Assurance</h4>
                <p>Economic incentives ensure vendor competition drives quality up</p>
              </div>
            </div>
            <div className="tech-point">
              <CheckCircle className="tech-icon" />
              <div className="tech-content">
                <h4>Transparent Economics</h4>
                <p>All transactions and stakes recorded on-chain for full auditability</p>
              </div>
            </div>
            <div className="tech-point">
              <CheckCircle className="tech-icon" />
              <div className="tech-content">
                <h4>Network Effects</h4>
                <p>More users attract more vendors, creating virtuous growth cycles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="future-section">
          <h2>Future Applications</h2>
          <div className="future-content">
            <p>
              The bundle model extends beyond search into any scenario requiring distributed computation 
              with economic coordination. Imagine bundled requests for:
            </p>
            <div className="future-grid">
              <div className="future-card">
                <Star />
                <h4>AI Model Training</h4>
                <p>Distributed training tasks with quality-staked data contributions</p>
              </div>
              <div className="future-card">
                <Star />
                <h4>Research Collaboration</h4>
                <p>Academic queries with peer review and citation rewards</p>
              </div>
              <div className="future-card">
                <Star />
                <h4>Market Analysis</h4>
                <p>Financial data requests with accuracy-based compensation</p>
              </div>
              <div className="future-card">
                <Star />
                <h4>Content Verification</h4>
                <p>Fact-checking tasks with reputation-based vendor selection</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Start Creating Bundles</h2>
          <div className="cta-buttons">
            <a href="/advanced-search" className="cta-btn primary">
              Create Your First Bundle
            </a>
            <a href="/token" className="cta-btn secondary">
              Get $bSEARCH Tokens
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Bundles Page - Same Style as Token Page - Bitcoin Search Blue Theme */
        .bundles-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px; /* 40px POC banner + 32px taskbar + 24px spacing */
          font-weight: 300;
        }

        .bundles-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Bundles Hero - Full Width Black */
        .bundles-hero {
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

        .bundles-badge {
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

        .bundles-hero h1 {
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

        .bundles-tagline {
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

        h3 {
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 12px;
        }

        h4 {
          font-size: 16px;
          font-weight: 500;
          color: #3b82f6;
          margin-bottom: 8px;
        }

        p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
        }

        /* Concept Section */
        .concept-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .concept-content p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* Bundle Architecture */
        .bundle-structure {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin: 40px 0;
        }

        .bundle-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          max-width: 280px;
          transition: all 0.3s ease;
        }

        .bundle-card:hover {
          border-color: #60a5fa;
          transform: translateY(-4px);
        }

        .bundle-card.enhanced {
          border-color: #60a5fa;
          background: rgba(59, 130, 246, 0.1);
        }

        .bundle-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .bundle-icon svg {
          width: 24px;
          height: 24px;
          color: #ffffff;
        }

        .bundle-connector {
          font-size: 24px;
          font-weight: bold;
          color: #3b82f6;
          margin: 0 10px;
        }

        .bundle-card ul {
          list-style: none;
          padding: 0;
          margin-top: 16px;
        }

        .bundle-card li {
          padding: 4px 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        .bundle-card li:before {
          content: '•';
          color: #3b82f6;
          font-weight: bold;
          margin-right: 8px;
        }

        /* Scaling Benefits */
        .scaling-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin: 40px 0;
        }

        .benefit-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .benefit-icon svg {
          width: 20px;
          height: 20px;
          color: #ffffff;
        }

        /* Taxi Economy */
        .taxi-economy {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 40px;
          margin: 40px 0;
          align-items: start;
        }

        .economy-side {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px;
        }

        .side-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .side-header svg {
          width: 24px;
          height: 24px;
          color: #3b82f6;
        }

        .side-content ul {
          list-style: none;
          padding: 0;
          margin: 12px 0 24px 0;
        }

        .side-content li {
          padding: 6px 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .side-content li:before {
          content: '→';
          color: #3b82f6;
          font-weight: bold;
          margin-right: 8px;
        }

        .economy-divider {
          width: 2px;
          background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
          min-height: 400px;
        }

        /* Computation Flow */
        .computation-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin: 40px 0;
        }

        .flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 200px;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .step-content h4 {
          margin-bottom: 8px;
          color: #ffffff;
        }

        .step-content p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .flow-arrow {
          width: 24px;
          height: 24px;
          color: #3b82f6;
        }

        /* Value Mechanisms */
        .value-mechanisms {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin: 40px 0;
        }

        .mechanism-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .mechanism-card:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
        }

        .mechanism-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .mechanism-icon svg {
          width: 20px;
          height: 20px;
          color: #ffffff;
        }

        /* Technical Grid */
        .technical-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 40px 0;
        }

        .tech-point {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: rgba(15, 15, 15, 0.6);
          border-radius: 8px;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .tech-icon {
          width: 20px;
          height: 20px;
          color: #22c55e;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tech-content h4 {
          margin-bottom: 4px;
          color: #ffffff;
          font-size: 14px;
        }

        .tech-content p {
          margin: 0;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Future Grid */
        .future-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .future-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 32px 0;
        }

        .future-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .future-card:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
        }

        .future-card svg {
          width: 32px;
          height: 32px;
          color: #fbbf24;
          margin-bottom: 12px;
        }

        .future-card h4 {
          margin-bottom: 8px;
          color: #ffffff;
        }

        .future-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          margin: 80px 0 60px;
          padding: 60px 40px;
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 12px 32px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .cta-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: #ffffff;
        }

        .cta-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .cta-btn.secondary {
          background: transparent;
          color: #3b82f6;
          border: 1px solid #3b82f6;
        }

        .cta-btn.secondary:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .bundles-container {
            padding: 0 20px;
          }

          .bundles-hero h1 {
            font-size: 32px;
          }

          .bundle-structure {
            flex-direction: column;
            gap: 16px;
          }

          .bundle-connector {
            transform: rotate(90deg);
            margin: 10px 0;
          }

          .taxi-economy {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .economy-divider {
            display: none;
          }

          .computation-flow {
            flex-direction: column;
            gap: 16px;
          }

          .flow-arrow {
            transform: rotate(90deg);
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  )
}