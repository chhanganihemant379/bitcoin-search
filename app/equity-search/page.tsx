'use client'

import React, { useState, useEffect } from 'react'

export default function EquitySearch() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="equity-page">
      <div className="equity-container">
        {/* Hero Section */}
        <section className="equity-hero">
          <h1>
            <span style={{color: '#ffffff'}}>Equity-Driven</span> Search{' '}
            <span style={{color: '#ffffff'}}>Economy</span>
          </h1>
          <p className="equity-tagline">
            Every search earns you ownership in the future of search
          </p>
          <div className="equity-badge">$bSearch Dividend Shares</div>
        </section>

        {/* Revolutionary Model */}
        <section className="revolution-section">
          <h2>The Revolutionary Model</h2>
          <div className="revolution-content">
            <p>
              What if every time you searched, you didn't just get results - you got <strong>ownership</strong> in the search platform itself? 
              What if every search made you a stakeholder in the future of information discovery?
            </p>
            <p>
              The $bSearch token represents dividend-bearing equity shares in Bitcoin Search Corporation. While we can't sell these regulated securities to the public directly, we can <strong>mix one token in with every user's search</strong> - essentially giving users equity stakes for using the platform.
            </p>
            <div className="revolution-points">
              <div className="point">
                <h3>Search = Equity</h3>
                <p>Every search query earns you dividend-bearing shares in Bitcoin Search Corporation</p>
              </div>
              <div className="point">
                <h3>Users Become Owners</h3>
                <p>Transform from customers to stakeholders with every interaction</p>
              </div>
              <div className="point">
                <h3>Network Effect Growth</h3>
                <p>User ownership creates powerful incentives for platform growth and word-of-mouth</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Taxi Analogy Extended */}
        <section className="taxi-analogy-section">
          <h2>Beyond the Taxi: The Equity Revolution</h2>
          <div className="analogy-content">
            <div className="traditional-model">
              <h3>Traditional Model (Uber/Google)</h3>
              <div className="model-flow">
                <div className="flow-step">
                  <h4>Passenger pays Uber</h4>
                  <p>Gets to destination but no ownership stake</p>
                </div>
                <div className="flow-step">
                  <h4>Driver earns from Uber</h4>
                  <p>Gets paid but no ownership in the platform</p>
                </div>
                <div className="flow-step">
                  <h4>Uber keeps all equity</h4>
                  <p>Only investors and founders own the growing value</p>
                </div>
              </div>
            </div>

            <div className="equity-model">
              <h3>Bitcoin Search Equity Model</h3>
              <div className="model-flow">
                <div className="flow-step featured">
                  <h4>User pays for search</h4>
                  <p>Gets results PLUS equity shares in the platform</p>
                </div>
                <div className="flow-step featured">
                  <h4>Data provider fulfills query</h4>
                  <p>Gets paid PLUS equity for contributing to platform value</p>
                </div>
                <div className="flow-step featured">
                  <h4>Google/Search providers earn</h4>
                  <p>New revenue stream from Bitcoin-mediated premium searches</p>
                </div>
              </div>
            </div>
          </div>

          <div className="analogy-insight">
            <h3>The Key Insight</h3>
            <p>
              You don't get shares in Uber when you take a ride to work - even though your job pays you more than the taxi costs. 
              But what if you did? What if every stakeholder in the value chain became an owner? 
              <strong>This creates exponentially stronger network effects.</strong>
            </p>
          </div>
        </section>

        {/* Dual Auth Integration */}
        <section className="dual-auth-section">
          <h2>Dual Auth + Equity: The Perfect Storm</h2>
          <div className="integration-content">
            <p className="intro">
              Combining our Google Search overlay with equity distribution creates a unique value proposition 
              that no traditional search engine can match.
            </p>

            <div className="integration-model">
              <h3>How It Works</h3>
              <div className="integration-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Dual Authentication</h4>
                  <p>User signs in with Google + HandCash for Bitcoin payments</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Premium Search Payment</h4>
                  <p>Pay Bitcoin for enhanced Google searches or contract discovery</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Equity Distribution</h4>
                  <p>Receive $bSearch dividend shares with every search transaction</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Compound Ownership</h4>
                  <p>More searches = more equity = more dividends from platform growth</p>
                </div>
              </div>
            </div>

            <div className="value-multipliers">
              <h3>Value Multipliers</h3>
              <div className="multiplier-grid">
                <div className="multiplier">
                  <h4>For Users</h4>
                  <ul>
                    <li>Get better search results</li>
                    <li>Earn equity with every search</li>
                    <li>Receive dividends as platform grows</li>
                    <li>Incentivized to refer others</li>
                  </ul>
                </div>
                <div className="multiplier">
                  <h4>For Data Providers</h4>
                  <ul>
                    <li>Earn from fulfilling queries</li>
                    <li>Gain equity stakes in platform</li>
                    <li>Benefit from network growth</li>
                    <li>Quality incentives through equity rewards</li>
                  </ul>
                </div>
                <div className="multiplier">
                  <h4>For Search Partners (Google)</h4>
                  <ul>
                    <li>New Bitcoin-mediated revenue streams</li>
                    <li>Access to high-value search customers</li>
                    <li>Potential equity partnerships</li>
                    <li>First-mover advantage in crypto search</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Effects */}
        <section className="network-effects-section">
          <h2>Exponential Network Effects</h2>
          <div className="network-content">
            <div className="effect-card">
              <h3>The Ownership Flywheel</h3>
              <div className="flywheel-diagram">
                <div className="flywheel-item">
                  <span>Users search & earn equity</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flywheel-item">
                  <span>More users = higher platform value</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flywheel-item">
                  <span>Higher value = better dividends</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flywheel-item">
                  <span>Better dividends = more user referrals</span>
                  <span className="arrow">→</span>
                </div>
                <div className="flywheel-item">
                  <span>Exponential growth cycle</span>
                </div>
              </div>
            </div>

            <div className="comparison-models">
              <h3>Traditional vs Equity-Driven Growth</h3>
              <div className="model-comparison">
                <div className="traditional">
                  <h4>Traditional Search</h4>
                  <ul>
                    <li>Users pay with attention/data</li>
                    <li>No ownership stake</li>
                    <li>Limited referral incentives</li>
                    <li>Value accrues only to shareholders</li>
                    <li>Linear user acquisition costs</li>
                  </ul>
                </div>
                <div className="equity-driven">
                  <h4>Equity-Driven Search</h4>
                  <ul>
                    <li>Users pay and earn ownership</li>
                    <li>Every user becomes stakeholder</li>
                    <li>Financial incentives to refer</li>
                    <li>Value shared with all participants</li>
                    <li>Self-reinforcing viral growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Model */}
        <section className="economic-model-section">
          <h2>The Economics of Equity Search</h2>
          <div className="economics-content">
            <div className="token-distribution">
              <h3>$bSearch Token Distribution Strategy</h3>
              <div className="distribution-stats">
                <div className="stat">
                  <div className="stat-value">1B</div>
                  <div className="stat-label">Total $bSearch tokens</div>
                </div>
                <div className="stat">
                  <div className="stat-value">1</div>
                  <div className="stat-label">Token per search</div>
                </div>
                <div className="stat">
                  <div className="stat-value">70%</div>
                  <div className="stat-label">Reserved for users</div>
                </div>
                <div className="stat">
                  <div className="stat-value">20%</div>
                  <div className="stat-label">Data provider rewards</div>
                </div>
              </div>
            </div>

            <div className="revenue-model">
              <h3>Revenue & Dividend Model</h3>
              <div className="revenue-streams">
                <div className="stream">
                  <h4>Search Fees</h4>
                  <p>Micropayments for basic and premium searches</p>
                  <p className="percentage">40% to dividends</p>
                </div>
                <div className="stream featured">
                  <h4>Google Premium Payments</h4>
                  <p>Bitcoin payments for enhanced Google searches</p>
                  <p className="percentage">30% to dividends</p>
                </div>
                <div className="stream">
                  <h4>Contract Discovery Fees</h4>
                  <p>BSV mempool contract discovery services</p>
                  <p className="percentage">50% to dividends</p>
                </div>
                <div className="stream">
                  <h4>Enterprise API</h4>
                  <p>Bulk search and data access services</p>
                  <p className="percentage">35% to dividends</p>
                </div>
              </div>
            </div>

            <div className="growth-projections">
              <h3>Growth Scenario Analysis</h3>
              <div className="scenario-grid">
                <div className="scenario">
                  <h4>Conservative Growth</h4>
                  <div className="scenario-stats">
                    <p><strong>1M users</strong> in Year 1</p>
                    <p><strong>10 searches/user/month</strong></p>
                    <p><strong>$0.01 avg fee</strong></p>
                    <p><strong>$120K monthly dividends</strong></p>
                  </div>
                </div>
                <div className="scenario">
                  <h4>Moderate Growth</h4>
                  <div className="scenario-stats">
                    <p><strong>10M users</strong> in Year 2</p>
                    <p><strong>25 searches/user/month</strong></p>
                    <p><strong>$0.05 avg fee</strong></p>
                    <p><strong>$12.5M monthly dividends</strong></p>
                  </div>
                </div>
                <div className="scenario">
                  <h4>Exponential Growth</h4>
                  <div className="scenario-stats">
                    <p><strong>100M users</strong> in Year 3</p>
                    <p><strong>50 searches/user/month</strong></p>
                    <p><strong>$0.10 avg fee</strong></p>
                    <p><strong>$500M monthly dividends</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Considerations */}
        <section className="regulatory-section">
          <h2>Regulatory Framework & Compliance</h2>
          <div className="regulatory-content">
            <div className="compliance-model">
              <h3>Equity Distribution Compliance</h3>
              <p>
                Since $bSearch tokens are dividend-bearing equity shares in Bitcoin Search Corporation, 
                we cannot sell them to the public directly. However, we can distribute them as 
                <strong> utility rewards for platform usage</strong> under specific regulatory frameworks.
              </p>
              
              <div className="compliance-points">
                <div className="point">
                  <h4>Usage-Based Distribution</h4>
                  <p>Tokens earned through platform participation, not purchased</p>
                </div>
                <div className="point">
                  <h4>Utility First</h4>
                  <p>Primary purpose is platform governance and fee discounts</p>
                </div>
                <div className="point">
                  <h4>Dividend Rights</h4>
                  <p>Secondary benefit from platform revenue sharing</p>
                </div>
                <div className="point">
                  <h4>Transparent Distribution</h4>
                  <p>All token distribution recorded on BSV blockchain</p>
                </div>
              </div>
            </div>

            <div className="legal-structure">
              <h3>Corporate Structure</h3>
              <p>
                Bitcoin Search Corporation issues regulated equity tokens that provide:
              </p>
              <ul>
                <li>✅ Voting rights on platform governance</li>
                <li>✅ Revenue sharing from platform operations</li>
                <li>✅ Priority access to premium features</li>
                <li>✅ Discounted search fees</li>
                <li>✅ Transferable ownership stakes (subject to regulations)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Join the Equity Search Revolution</h2>
          <div className="cta-content">
            <p>
              Be among the first to own the future of search. Every search you make today 
              builds your stake in tomorrow's search economy.
            </p>
            <div className="cta-buttons">
              <a 
                href="/marketplace" 
                className="cta-btn primary"
              >
                Start Searching & Earning
              </a>
              <a 
                href="/docs" 
                className="cta-btn secondary"
              >
                Learn More About $bSearch
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Equity Search Page - Bitcoin Search Blue Theme */
        .equity-page {
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          padding-top: 96px;
          font-weight: 300;
        }

        .equity-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Hero Section */
        .equity-hero {
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

        .equity-badge {
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

        .equity-hero h1 {
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

        .equity-tagline {
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

        .revolution-content p {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
          text-align: center;
        }

        .revolution-points {
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

        .analogy-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .traditional-model, .equity-model {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 32px;
        }

        .equity-model {
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.05);
        }

        .traditional-model h3, .equity-model h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
          color: #60a5fa;
          text-align: center;
        }

        .model-flow {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .flow-step {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 16px;
        }

        .flow-step.featured {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .flow-step h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 4px;
          color: #ffffff;
        }

        .flow-step p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .analogy-insight {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 32px;
          text-align: center;
        }

        .analogy-insight h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 16px;
          color: #60a5fa;
        }

        .integration-content .intro {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          margin-bottom: 40px;
        }

        .integration-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin: 32px 0;
        }

        .step {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 auto 16px;
        }

        .step h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #60a5fa;
        }

        .step p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        .multiplier-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        .multiplier {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
        }

        .multiplier h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 16px;
          color: #60a5fa;
          text-align: center;
        }

        .multiplier ul {
          list-style: none;
          padding: 0;
        }

        .multiplier li {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          padding: 4px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .multiplier li:last-child {
          border-bottom: none;
        }

        .effect-card {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 40px;
        }

        .effect-card h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 24px;
          color: #60a5fa;
          text-align: center;
        }

        .flywheel-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin: 24px 0;
        }

        .flywheel-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .arrow {
          color: #60a5fa;
          font-weight: bold;
          font-size: 16px;
        }

        .model-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 24px;
        }

        .traditional, .equity-driven {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
        }

        .equity-driven {
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.05);
        }

        .traditional h4, .equity-driven h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 16px;
          color: #60a5fa;
          text-align: center;
        }

        .traditional ul, .equity-driven ul {
          list-style: none;
          padding: 0;
        }

        .traditional li, .equity-driven li {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .distribution-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin: 32px 0;
        }

        .stat {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .revenue-streams {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 32px 0;
        }

        .stream {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .stream.featured {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.1);
          transform: scale(1.02);
        }

        .stream h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .stream p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 8px 0;
        }

        .percentage {
          font-size: 18px;
          font-weight: 600;
          color: #60a5fa !important;
          margin-top: 12px;
        }

        .scenario-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        .scenario {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
        }

        .scenario h4 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 16px;
          color: #60a5fa;
        }

        .scenario-stats p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin: 8px 0;
        }

        .compliance-points {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 32px 0;
        }

        .compliance-points .point {
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .compliance-points .point h4 {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          color: #60a5fa;
        }

        .legal-structure {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 32px;
          margin-top: 32px;
        }

        .legal-structure h3 {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 16px;
          color: #60a5fa;
        }

        .legal-structure p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
        }

        .legal-structure ul {
          list-style: none;
          padding: 0;
        }

        .legal-structure li {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-section {
          text-align: center;
          padding: 60px 0;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
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
          .equity-container {
            padding: 0 20px;
          }
          
          .equity-hero h1 {
            font-size: 32px;
          }
          
          .revolution-points {
            grid-template-columns: 1fr;
          }
          
          .analogy-content {
            grid-template-columns: 1fr;
          }
          
          .integration-steps {
            grid-template-columns: 1fr;
          }
          
          .multiplier-grid {
            grid-template-columns: 1fr;
          }
          
          .model-comparison {
            grid-template-columns: 1fr;
          }
          
          .revenue-streams {
            grid-template-columns: 1fr;
          }
          
          .scenario-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .flywheel-diagram {
            flex-direction: column;
          }
          
          .flywheel-item .arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </div>
  )
}