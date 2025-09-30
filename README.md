# Bitcoin Search

Advanced Search Engine for Bitcoin Blockchain Data

## Overview

Bitcoin Search is a powerful search platform that allows users to explore and analyze Bitcoin blockchain data in real-time. Search through transactions, addresses, blocks, tokens, and smart contracts with advanced filtering and analytics capabilities.

## Features

- **Real-time Blockchain Search**: Search millions of transactions, blocks, and addresses
- **Advanced Filtering**: Filter results by date, amount, type, and custom parameters
- **Analytics Dashboard**: Get insights and trends from blockchain activity
- **Bitcoin OS Integration**: Connect your wallet using @bitcoin-os/bridge
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 15.5.4 with TypeScript
- **Styling**: Tailwind CSS
- **Wallet Integration**: @bitcoin-os/bridge
- **Icons**: Lucide React
- **Runtime**: Node.js

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bitcoin-search.git
cd bitcoin-search
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3020](http://localhost:3020) in your browser

## Available Scripts

- `npm run dev` - Start development server on port 3020
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
bitcoin-search/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page with search
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── BitcoinOSIntegration.tsx
│   ├── LayoutClient.tsx
│   └── Providers.tsx
├── public/           # Static assets
└── package.json      # Dependencies
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add any required environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on GitHub or contact the development team.