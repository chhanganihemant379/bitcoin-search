'use client'

import React, { useState } from 'react'
import { Search, TrendingUp, Database, Filter, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('all')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery, 'Type:', searchType)
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center mb-12">
            <div className="p-8 rounded-full" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' }}>
              <Search className="w-20 h-20 text-white" />
            </div>
          </div>
          <h1 className="mb-6" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: '200', letterSpacing: '-0.02em', lineHeight: '1' }}>
            <span className="blue-gradient">Bitcoin</span>{' '}
            <span style={{ fontWeight: '100' }}>Search</span>
          </h1>
          <p className="mb-12 max-w-3xl mx-auto" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: '300', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '0.01em', lineHeight: '1.4' }}>
            Advanced Search Engine for Bitcoin Blockchain Data
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search transactions, addresses, blocks, or data..."
                  className="w-full px-6 py-4 pr-12 rounded-xl text-white placeholder-gray-400 outline-none transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="px-6 py-4 rounded-xl text-white outline-none cursor-pointer transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(64, 224, 208, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <option value="all">All Data</option>
                <option value="transactions">Transactions</option>
                <option value="addresses">Addresses</option>
                <option value="blocks">Blocks</option>
                <option value="tokens">Tokens</option>
                <option value="contracts">Smart Contracts</option>
              </select>
              <button
                type="submit"
                className="px-8 py-4 font-medium text-black rounded-xl transition-all"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick Search Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Recent Blocks', 'Top Addresses', 'Large Transactions', 'Token Activity'].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                  e.currentTarget.style.borderColor = '#3b82f6'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Database,
              title: 'Blockchain Data',
              description: 'Search through millions of transactions, blocks, and addresses in real-time',
            },
            {
              icon: Filter,
              title: 'Advanced Filters',
              description: 'Filter results by date, amount, type, and custom parameters',
            },
            {
              icon: TrendingUp,
              title: 'Analytics',
              description: 'Get insights and analytics on blockchain activity and trends',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="p-4 rounded-full w-fit mb-6" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' }}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl p-8 backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-light text-white flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-400" />
              Recent Activity
            </h2>
            <Link href="/activity" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between py-3 px-4 rounded-lg transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)'
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div>
                  <p className="text-white font-medium">Block #{750000 + item}</p>
                  <p className="text-gray-400 text-sm">2 minutes ago</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-400 font-mono">125.5 BSV</p>
                  <p className="text-gray-400 text-sm">15 transactions</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Total Blocks', value: '750,123' },
            { label: 'Transactions', value: '1.2B+' },
            { label: 'Active Addresses', value: '2.5M' },
            { label: 'Network Hash Rate', value: '120 EH/s' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-light blue-gradient mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}