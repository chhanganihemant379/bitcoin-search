'use client'

import { useState, useRef, useEffect } from 'react'
import { Github, BookOpen, FileText, ExternalLink } from 'lucide-react'
import './TopMenuBar.css'

interface MenuItem {
  label?: string
  action?: () => void
  href?: string
  divider?: boolean
  shortcut?: string
  icon?: string
  external?: boolean
}

interface Menu {
  label: string
  items: MenuItem[]
}

interface TopMenuBarProps {
  onOpenApp?: (appName: string) => void
}

export default function TopMenuBar({ onOpenApp }: TopMenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showBAppsMenu, setShowBAppsMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const bitcoinApps = [
    { name: 'Bitcoin Auth', color: '#ef4444', url: '#' },
    { name: 'Bitcoin Calendar', color: '#d946ef', url: 'https://bitcoin-calendar.vercel.app' },
    { name: 'Bitcoin Chat', color: '#ff6500', url: '#' },
    { name: 'Bitcoin Domains', color: '#eab308', url: '#' },
    { name: 'Bitcoin Draw', color: '#10b981', url: '#' },
    { name: 'Bitcoin Drive', color: '#22c55e', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin Email', color: '#06b6d4', url: 'https://bitcoin-email.vercel.app' },
    { name: 'Bitcoin Exchange', color: '#3b82f6', url: 'https://bitcoin-exchange.vercel.app' },
    { name: 'Bitcoin Jobs', color: '#6b7280', url: '#' },
    { name: 'Bitcoin Music', color: '#8b5cf6', url: 'https://bitcoin-music.vercel.app' },
    { name: 'Bitcoin Paint', color: '#a855f7', url: '#' },
    { name: 'Bitcoin Pics', color: '#ec4899', url: '#' },
    { name: 'Bitcoin Registry', color: '#f43f5e', url: '#' },
    { name: 'Bitcoin Search', color: '#6b7280', url: 'https://bitcoin-search.vercel.app' },
    { name: 'Bitcoin Shares', color: '#f43f5e', url: 'https://bitcoin-shares.vercel.app' },
    { name: 'Bitcoin Spreadsheets', color: '#3b82f6', url: 'https://bitcoin-spreadsheet.vercel.app' },
    { name: 'Bitcoin Video', color: '#65a30d', url: '#' },
    { name: 'Bitcoin Wallet', color: '#f59e0b', url: 'https://bitcoin-wallet-sable.vercel.app' },
    { name: 'Bitcoin Writer', color: '#ff9500', url: 'https://bitcoin-writer.vercel.app' }
  ]

  const menus: Menu[] = [
    {
      label: 'Bitcoin Search',
      items: [
        { 
          label: '🏠 Home', 
          shortcut: '⌘H',
          action: () => window.location.href = '/'
        },
        { 
          label: 'About Bitcoin Search', 
          action: () => alert('Bitcoin Search v1.0\n\nThe Search Engine for Bitcoin\n\n© 2025 The Bitcoin Corporation LTD\nRegistered in England and Wales • Company No. 16735102') 
        },
        { divider: true },
        { 
          label: 'System Preferences', 
          shortcut: '⌘,',
          action: () => onOpenApp?.('Settings')
        },
        { divider: true },
        { 
          label: 'Lock Screen', 
          shortcut: '⌘L',
          action: () => console.log('Lock Screen')
        },
        { 
          label: 'Log Out', 
          action: () => console.log('Log Out')
        },
        { 
          label: 'Shut Down', 
          action: () => console.log('Shut Down')
        },
      ]
    },
    {
      label: 'File',
      items: [
        { 
          label: 'New Window', 
          shortcut: '⌘N',
          action: () => console.log('New Window')
        },
        { 
          label: 'New Folder', 
          shortcut: '⇧⌘N',
          action: () => console.log('New Folder')
        },
        { divider: true },
        { 
          label: 'Open', 
          shortcut: '⌘O',
          action: () => console.log('Open')
        },
        { 
          label: 'Save', 
          shortcut: '⌘S',
          action: () => console.log('Save')
        },
        { divider: true },
        { 
          label: 'Close Window', 
          shortcut: '⌘W',
          action: () => console.log('Close')
        }
      ]
    },
    {
      label: 'Edit',
      items: [
        { 
          label: 'Undo', 
          shortcut: '⌘Z',
          action: () => document.execCommand('undo')
        },
        { 
          label: 'Redo', 
          shortcut: '⇧⌘Z',
          action: () => document.execCommand('redo')
        },
        { divider: true },
        { 
          label: 'Cut', 
          shortcut: '⌘X',
          action: () => document.execCommand('cut')
        },
        { 
          label: 'Copy', 
          shortcut: '⌘C',
          action: () => document.execCommand('copy')
        },
        { 
          label: 'Paste', 
          shortcut: '⌘V',
          action: () => document.execCommand('paste')
        },
        { divider: true },
        { 
          label: 'Select All', 
          shortcut: '⌘A',
          action: () => document.execCommand('selectAll')
        },
        { 
          label: 'Find...', 
          shortcut: '⌘F',
          action: () => console.log('Find')
        }
      ]
    },
    {
      label: 'Search',
      items: [
        { 
          label: '🔍 Search Home', 
          shortcut: '⌘N',
          action: () => window.location.href = '/'
        },
        { 
          label: '📈 Equity Search', 
          action: () => window.location.href = '/equity-search'
        },
        { 
          label: '🔗 Google Search Overlay', 
          action: () => window.location.href = '/google-search-overlay'
        },
        { divider: true },
        { 
          label: 'Advanced Search', 
          shortcut: '⌘⇧F',
          action: () => window.location.href = '/advanced-search'
        },
        { 
          label: 'Search History', 
          action: () => console.log('Search History')
        },
        { 
          label: 'Saved Searches', 
          action: () => console.log('Saved Searches')
        },
        { divider: true },
        { 
          label: 'Export Results', 
          action: () => console.log('Export Results')
        },
        { 
          label: 'Share Search', 
          action: () => console.log('Share Search')
        }
      ]
    },
    {
      label: 'Tools',
      items: [
        {
          label: '🏪 Marketplace',
          action: () => window.location.href = '/marketplace'
        },
        {
          label: '🏢 Vendors',
          action: () => window.location.href = '/vendors'
        },
        { divider: true },
        {
          label: 'Search Analytics',
          icon: '📊',
          shortcut: '⌘⌥A',
          action: () => window.location.href = '/analytics'
        },
        { divider: true },
        { 
          label: 'Index Management', 
          action: () => window.location.href = '/admin/index'
        },
        { 
          label: 'Weight Configuration', 
          action: () => window.location.href = '/admin/weights'
        },
        { divider: true },
        { 
          label: 'API Documentation', 
          href: '/docs/api',
          external: false
        },
        { 
          label: 'Search API Tester', 
          action: () => window.location.href = '/tools/api-tester'
        },
        { divider: true },
        { 
          label: 'Economic Weight Calculator', 
          action: () => window.location.href = '/tools/weight-calculator'
        }
      ]
    },
    {
      label: 'Blockchain',
      items: [
        { 
          label: '🪙 Token', 
          action: () => window.location.href = '/token'
        },
        { divider: true },
        { 
          label: 'Exchange', 
          action: () => window.location.href = '/exchange'
        },
        { 
          label: 'Live Trading', 
          action: () => window.location.href = '/exchange/trading'
        },
        { 
          label: 'Market Data', 
          action: () => window.location.href = '/exchange/markets'
        },
        { divider: true },
        { 
          label: 'BSV Blockchain Explorer', 
          href: 'https://whatsonchain.com/',
          external: true
        },
        { 
          label: 'Network Status', 
          action: () => window.location.href = '/blockchain/status'
        },
        { 
          label: 'Mempool Monitor', 
          action: () => window.location.href = '/blockchain/mempool'
        },
        { divider: true },
        { 
          label: 'Transaction Search', 
          shortcut: '⌘T',
          action: () => window.location.href = '/blockchain/transactions'
        },
        { 
          label: 'Address Lookup', 
          shortcut: '⌘⇧A',
          action: () => window.location.href = '/blockchain/addresses'
        },
        { 
          label: 'Block Explorer', 
          action: () => window.location.href = '/blockchain/blocks'
        }
      ]
    },
    {
      label: 'View',
      items: [
        { 
          label: 'Show Desktop', 
          action: () => window.location.href = '/'
        },
        { 
          label: 'Show All Windows', 
          action: () => console.log('Show All Windows')
        },
        { divider: true },
        { 
          label: 'Toggle Developer Sidebar', 
          shortcut: '⌘D',
          action: () => {
            const event = new KeyboardEvent('keydown', { metaKey: true, key: 'd' })
            document.dispatchEvent(event)
          }
        },
        { 
          label: 'Enter Full Screen', 
          shortcut: '⌃⌘F',
          action: () => document.documentElement.requestFullscreen()
        },
        { divider: true },
        { 
          label: 'Search Results View', 
          action: () => console.log('Results View')
        },
        { 
          label: 'List View', 
          shortcut: '⌘1',
          action: () => console.log('List View')
        },
        { 
          label: 'Grid View', 
          shortcut: '⌘2',
          action: () => console.log('Grid View')
        },
        { 
          label: 'Detailed View', 
          shortcut: '⌘3',
          action: () => console.log('Detailed View')
        },
        { divider: true },
        { 
          label: 'Actual Size', 
          shortcut: '⌘0',
          action: () => (document.body.style as any).zoom = '100%'
        },
        { 
          label: 'Zoom In', 
          shortcut: '⌘+',
          action: () => (document.body.style as any).zoom = '110%'
        },
        { 
          label: 'Zoom Out', 
          shortcut: '⌘-',
          action: () => (document.body.style as any).zoom = '90%'
        }
      ]
    },
    {
      label: 'Window',
      items: [
        { 
          label: 'App Mode: Fullscreen URLs', 
          action: () => {
            localStorage.setItem('appMode', 'fullscreen')
            alert('Apps will now open in fullscreen mode (current page)')
          }
        },
        { 
          label: 'App Mode: Windowed Apps', 
          action: () => {
            localStorage.setItem('appMode', 'windowed')
            alert('Apps will now open in draggable windows')
          }
        },
        { divider: true },
        { 
          label: 'Minimize', 
          shortcut: '⌘M',
          action: () => console.log('Minimize')
        },
        { 
          label: 'Zoom', 
          action: () => console.log('Zoom')
        },
        { divider: true },
        { 
          label: 'Bring All to Front', 
          action: () => console.log('Bring All to Front')
        },
        { divider: true },
        { 
          label: 'Documentation', 
          action: () => window.location.href = '/docs'
        },
        { 
          label: 'Tasks', 
          action: () => window.location.href = '/tasks'
        },
        { 
          label: 'Contracts', 
          action: () => window.location.href = '/contracts'
        },
        { 
          label: 'Token', 
          action: () => window.location.href = '/token'
        }
      ]
    },
    {
      label: 'Help',
      items: [
        { 
          label: 'Bitcoin Search Help', 
          shortcut: '⌘?',
          action: () => alert('Bitcoin Search v1.0\n\nEconomically weighted search engine powered by Bitcoin\n\n© 2025 The Bitcoin Corporation LTD\nRegistered in England and Wales • Company No. 16735102')
        },
        { divider: true },
        { 
          label: '📚 Documentation', 
          action: () => window.location.href = '/docs'
        },
        { 
          label: 'Search Tutorial', 
          action: () => window.location.href = '/docs/tutorial'
        },
        { 
          label: 'Economic Weighting Guide', 
          action: () => window.location.href = '/docs/weighting'
        },
        { 
          label: 'API Documentation', 
          action: () => window.location.href = '/docs/api'
        },
        { divider: true },
        { 
          label: 'GitHub Repository', 
          href: 'https://github.com/bitcoin-apps-suite/bitcoin-search',
          external: true
        },
        { divider: true },
        { 
          label: 'Report an Issue', 
          href: 'https://github.com/bitcoin-apps-suite/bitcoin-search/issues',
          external: true
        },
        { 
          label: 'Feature Request', 
          href: 'https://github.com/bitcoin-apps-suite/bitcoin-search/issues/new?template=feature_request.md',
          external: true
        }
      ]
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setShowBAppsMenu(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setShowBAppsMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div ref={menuRef} className="bitcoin-os-taskbar">
      {/* Bitcoin Logo with BApps Menu */}
      <div style={{ position: 'relative' }}>
        <button 
          className={`taskbar-logo ${showBAppsMenu ? 'menu-open' : ''}`}
          onClick={() => {
            setShowBAppsMenu(!showBAppsMenu)
            setActiveMenu(null)
          }}
          onDoubleClick={() => window.location.href = '/'}
          title="Click for apps • Double-click to go home"
          style={{ 
            background: showBAppsMenu ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0 12px',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            transition: 'background 0.15s ease'
          }}
        >
          <span className="bitcoin-symbol">₿</span>
        </button>
        
        {/* BApps Dropdown */}
        {showBAppsMenu && (
          <div style={{
            position: 'absolute',
            top: '28px',
            left: 0,
            minWidth: '220px',
            background: '#1a1a1a',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
            padding: '8px 0',
            zIndex: 1000
          }}>
            <div style={{
              padding: '8px 16px',
              fontSize: '12px',
              color: '#d946ef',
              fontWeight: '600',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '4px'
            }}>
              Bitcoin Apps
            </div>
            
            {bitcoinApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 16px',
                  color: '#ffffff',
                  background: 'transparent',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'background 0.15s ease',
                  cursor: 'pointer'
                }}
                onClick={(e) => {
                  if (app.url === '#') {
                    e.preventDefault()
                  } else {
                    e.preventDefault()
                    window.location.href = app.url
                  }
                  setShowBAppsMenu(false)
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span 
                  style={{ 
                    color: app.color,
                    marginRight: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  ₿
                </span>
                <span>
                  {app.name}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="taskbar-menus">
        {menus.map((menu) => (
          <div key={menu.label} className="menu-container">
            <button
              className={`menu-button ${activeMenu === menu.label ? 'active' : ''}`}
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
            >
              {menu.label}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.label && (
              <div className="dropdown-menu">
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div key={index} className="menu-divider" />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="menu-item"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="menu-item-content">
                        {item.icon && <span className="menu-icon">{item.icon}</span>}
                        <span className="menu-label">{item.label}</span>
                      </span>
                      {item.shortcut && (
                        <span className="menu-shortcut">{item.shortcut}</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={index}
                      className="menu-item"
                      onClick={() => {
                        item.action?.()
                        setActiveMenu(null)
                      }}
                    >
                      <span className="menu-item-content">
                        {item.icon && <span className="menu-icon">{item.icon}</span>}
                        <span className="menu-label">{item.label}</span>
                      </span>
                      {item.shortcut && (
                        <span className="menu-shortcut">{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
        
      </div>

      {/* Right side - Status */}
      <div className="taskbar-status">
        <a 
          href="https://github.com/bitcoin-apps-suite/bitcoin-search" 
          target="_blank" 
          rel="noopener noreferrer"
          className="taskbar-link"
          title="GitHub"
        >
          <Github className="taskbar-link-icon" />
        </a>
        <a 
          href="/docs" 
          className="taskbar-link"
          title="Documentation"
        >
          <BookOpen className="taskbar-link-icon" />
        </a>
      </div>
    </div>
  )
}