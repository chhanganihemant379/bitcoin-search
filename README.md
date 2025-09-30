# Bitcoin Search

Economically Weighted Search - Where Value Determines Relevance

## Overview

Bitcoin Search revolutionizes web search by using **economic weight** instead of traditional backlinks to rank content. Built on BSV micropayments, every search query, data request, and content view involves real economic transactions, creating a true signal of value. This creates an economically weighted search graph where content that people actually pay to access rises to the top - no gaming, no manipulation, just pure economic truth.

## How It Works

### The $bSearch Token Economy
- **Revenue Capitalization**: All search revenue capitalizes the $bSearch token
- **Data Marketplace**: Users buy premium data directly from competing vendors
- **Quality Incentives**: Data vendors compete on accuracy, speed, and price
- **Better Than Free**: Paid data is verified, fast, and accurate - unlike "free" alternatives

### Core Features

- **Economic Weight Ranking**: Content ranked by actual micropayment value, not arbitrary algorithms
- **Micropayment Powered**: Every search costs sats, ensuring quality results
- **Data Vendor Network**: Multiple data providers compete to serve the best results
- **Blockchain Explorer**: Built-in explorer for on-chain data verification
- **Indexer Infrastructure**: Distributed indexers track economic weight across the network
- **Real Economic Signals**: True content value measured through payment flows
- **$bSearch Token**: Captures search economy value and rewards participants

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