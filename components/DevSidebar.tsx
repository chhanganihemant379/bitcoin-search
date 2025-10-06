'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { 
  ChevronLeft,
  ChevronRight,
  Monitor,
  FileCode,
  Users,
  FileText,
  Coins,
  Github,
  GitPullRequest,
  ExternalLink,
  BookOpen,
  History,
  CheckCircle,
  ListTodo,
  Briefcase,
  Terminal,
  Package,
  Download,
  Upload,
  Lock,
  Unlock,
  Activity,
  Clock
} from 'lucide-react'
import './DevSidebar.css'

export default function DevSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(true) // Always start with true for consistent hydration
  const [mounted, setMounted] = useState(false)
  const [issueCount, setIssueCount] = useState<number>(0)

  useEffect(() => {
    setMounted(true)
    // Load saved state after mount
    const saved = localStorage.getItem('devSidebarCollapsed')
    if (saved !== null) {
      setIsCollapsed(saved === 'true')
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('devSidebarCollapsed', isCollapsed.toString())
    }
  }, [isCollapsed, mounted])

  // Fetch GitHub issues count
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bitcoin-apps-suite/bitcoin-OS/issues?state=open')
        const data = await response.json()
        setIssueCount(Array.isArray(data) ? data.length : 0)
      } catch (error) {
        console.error('Error fetching issues:', error)
        setIssueCount(0)
      }
    }
    // fetchIssues() // Disabled for now as repo may not exist yet
  }, [])

  const menuItems: Array<{
    path?: string
    icon?: React.ComponentType<{ size?: number; className?: string }>
    label?: string
    badge?: string
    divider?: boolean
    section?: string
    external?: boolean
  }> = [
    // Search & Economy at top
    { path: '/token', icon: Coins, label: '$bSearch Token', badge: 'LIVE' },
    { path: '/vendors', icon: Package, label: 'Data Vendors', badge: '45' },
    { path: '/explorer', icon: Activity, label: 'Economic Explorer' },
    
    // Search Operations
    { divider: true },
    { section: 'SEARCH ENGINE' },
    { path: '/analytics', icon: Activity, label: 'Search Analytics' },
    { path: '/ranking', icon: ListTodo, label: 'Economic Ranking' },
    { path: '/api', icon: Terminal, label: 'Search API', badge: 'v2' },
    
    // Data Marketplace
    { divider: true },
    { section: 'DATA MARKETPLACE' },
    { path: '/marketplace', icon: Users, label: 'Vendor Marketplace' },
    { path: '/quality', icon: CheckCircle, label: 'Quality Metrics', badge: '98.5%' },
    { path: '/docs', icon: BookOpen, label: 'Integration Docs' },
    
    // Development
    { divider: true },
    { section: 'DEVELOPMENT' },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-search', icon: Github, label: 'GitHub Repository', external: true },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-search/issues', icon: FileCode, label: 'Issues', badge: issueCount > 0 ? String(issueCount) : '0', external: true },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-search/pulls', icon: GitPullRequest, label: 'Pull Requests', external: true },
    
    // System Status
    { divider: true },
    { path: '/changelog', icon: History, label: 'Changelog' },
    { path: '/status', icon: CheckCircle, label: 'Search Status', badge: 'FAST' }
  ]

  const stats = {
    searches: '125K',
    micropayments: '2.5M', 
    dataVendors: '45',
    economicWeight: '125.7K BSV',
    avgSearchValue: '0.002 BSV'
  }

  return (
    <div className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="dev-sidebar-header">
        {!isCollapsed && (
          <div className="dev-sidebar-title">
            <Monitor className="dev-sidebar-logo" />
            <span>Search Dashboard</span>
          </div>
        )}
        <button 
          className="dev-sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="dev-sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="dev-sidebar-divider" />
          }

          if (item.section) {
            return !isCollapsed ? (
              <div key={index} className="dev-sidebar-section">
                {item.section}
              </div>
            ) : null
          }

          const Icon = item.icon
          const isActive = pathname === item.path

          if (item.external) {
            return (
              <a
                key={`${item.path}-${index}`}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                {Icon && <Icon size={20} />}
                {!isCollapsed && (
                  <>
                    <span className="dev-sidebar-label">{item.label}</span>
                    {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                  </>
                )}
              </a>
            )
          }

          return (
            <a
              key={`${item.path}-${index}`}
              href={item.path || '/'}
              className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              {Icon && <Icon size={20} />}
              {!isCollapsed && (
                <>
                  <span className="dev-sidebar-label">{item.label}</span>
                  {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                </>
              )}
            </a>
          )
        })}
      </nav>

      {/* Stats section */}
      {!isCollapsed && (
        <div className="dev-sidebar-stats">
          <h4>Search Economy</h4>
          <div className="dev-stat">
            <span className="dev-stat-label">Daily Searches</span>
            <span className="dev-stat-value">{stats.searches}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Micropayments</span>
            <span className="dev-stat-value">{stats.micropayments}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Data Vendors</span>
            <span className="dev-stat-value">{stats.dataVendors}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Economic Weight</span>
            <span className="dev-stat-value">{stats.economicWeight}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Avg Search Value</span>
            <span className="dev-stat-value">{stats.avgSearchValue}</span>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      {!isCollapsed && (
        <div className="dev-sidebar-footer">
          <div className="dev-sidebar-cta">
            <p>Become a Data Vendor</p>
            <a 
              href="/vendors" 
              className="dev-sidebar-cta-button"
            >
              Start Earning
            </a>
          </div>
        </div>
      )}
    </div>
  )
}