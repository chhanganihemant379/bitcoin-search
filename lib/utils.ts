export function getBitcoinApps() {
  return [
    {
      id: 'bitcoin-search',
      name: 'Bitcoin Search',
      icon: '🔍',
      url: '/',
      description: 'Economically Weighted Search Engine'
    },
    {
      id: 'bitcoin-wallet',
      name: 'Bitcoin Wallet',
      icon: '💰',
      url: '/wallet',
      description: 'BSV Wallet'
    },
    {
      id: 'bitcoin-exchange',
      name: 'Bitcoin Exchange',
      icon: '💱',
      url: '/exchange',
      description: 'Token Exchange'
    },
    {
      id: 'bitcoin-explorer',
      name: 'Block Explorer',
      icon: '🔗',
      url: '/explorer',
      description: 'Blockchain Explorer'
    },
    {
      id: 'bitcoin-docs',
      name: 'Documentation',
      icon: '📚',
      url: '/docs',
      description: 'Developer Documentation'
    }
  ]
}

export function formatNumber(num: number): string {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B'
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M'
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K'
  return num.toString()
}

export function getSystemInfo() {
  return {
    os: 'Bitcoin OS',
    version: '2.0.0',
    network: 'BSV Mainnet',
    blockHeight: 750123,
    connections: 8
  }
}