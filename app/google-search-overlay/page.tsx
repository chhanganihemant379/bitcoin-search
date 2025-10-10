export default function GoogleSearchOverlay() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Google Search Overlay</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Marketplace Model</h2>
          <p className="mb-4">
            In Bitcoin Search, when users make a search they have to pay a tiny fee. This is a bit like hailing a taxi cab on a wet London streetcorner. The offerer is putting a contract out to tender and the acceptor of the offer (the taxi driver) is accepting the contract and taking the payment on completion of the journey. So Bitcoin Search is a typical marketplace for data.
          </p>
          
          <p className="mb-4">
            Bitcoin Search operates as a marketplace where:
          </p>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li><strong>Users (buyers)</strong> submit search queries with a small payment attached, like hailing a taxi and offering fare</li>
            <li><strong>Data providers (sellers)</strong> accept these search requests and fulfill them in exchange for the payment</li>
            <li><strong>Payment occurs</strong> after successful delivery of search results, similar to paying the taxi driver upon reaching your destination</li>
          </ol>
          
          <p className="mb-4">
            It's a classic two-sided marketplace model where search queries become paid contracts that data providers can choose to fulfill. The small fee creates an incentive structure for quality data provision while filtering out spam queries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Real Opportunity: Contract Discovery Engine</h2>
          <p className="mb-4">
            The question is, 'How does this all work'? We need it such that a user inscribes their query (as an inscription) on a 1sat ordinal. However if that takes any time at all, it will be slow, and search by Google is so fast, it wouldn't be competitive unless there was some deeper search engineering attached.
          </p>
          
          <p className="mb-4">
            But there's a bigger market here - one we're not quite understanding yet, which is a market for data inscribed on chain. The problem with BitcoinSV is that there are so many TXs/sec (over 1mTPS sometimes now), that there are lots and lots and lots of transactions in the mempool.
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
            <p className="font-semibold mb-2">The Scale:</p>
            <p>If you think about it, a block is settled every ten minutes, so at a million transactions per second, that's 1,000,000 × 60 × 10, around <strong>half a billion latent TXs</strong> to search through, many of which will have inscriptions, and many of those inscriptions will be ordinals, or inscriptions in a series of inscriptions, and many of those will have these contracts for tender inscribed on them.</p>
          </div>
          
          <p className="mb-4">
            <strong>SOME of them will be very valuable to find</strong>, because they represent real work, to be really done, by real people (or AI) that offers real money.
          </p>
          
          <p className="mb-4">
            This transforms Bitcoin Search from "yet another search engine" into something unique: a <strong>real-time marketplace scanner</strong> for on-chain work contracts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Leveraging Google's Infrastructure</h2>
          <p className="mb-4">
            We would want to use Google search as our way of indexing this stuff ideally since they've got the heavy guns. That's brilliant - leverage Google's massive infrastructure instead of building your own indexing system.
          </p>
          
          <p className="mb-4">The architecture becomes:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li><strong>Google indexes BSV blockchain data</strong> (transactions, inscriptions, ordinals)</li>
            <li><strong>Bitcoin Search acts as the specialized interface</strong> - users pay sats to search specifically for contract opportunities</li>
            <li><strong>You focus on the value-add</strong>: filtering, categorizing, and presenting economic opportunities rather than raw search infrastructure</li>
          </ol>
          
          <p className="mb-4">
            This is much smarter than reinventing search. Google already crawls blockchain explorers and BSV data. Your competitive advantage becomes:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Domain expertise</strong> in identifying valuable contracts vs noise</li>
            <li><strong>Economic filtering</strong> - surfacing opportunities by potential payout/value</li>
            <li><strong>Marketplace mechanics</strong> - payment rails, reputation, contract matching</li>
            <li><strong>Real-time alerting</strong> for new high-value opportunities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bitcoin Auth: Dual Authentication</h2>
          <p className="mb-4">
            So you'd sign into Google AND sign in with HandCash. 'Dual Auth' or 'Bitcoin Auth' as I call it. One of the key innovations is that you're also potentially (and quite reasonably perhaps), able to offer Google itself money to search for data or contracts that you want to find... or you could pay them to proliferate a contract you want filled.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold mb-2">This is a game-changing concept - Bitcoin-mediated payments to Google for enhanced search services.</p>
          </div>
          
          <p className="mb-4">The "Bitcoin Auth" dual authentication creates a powerful bridge:</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Google identity</strong> = access to their search infrastructure</li>
            <li><strong>HandCash identity</strong> = ability to make micropayments for premium search</li>
          </ul>
          
          <p className="mb-4">Two revolutionary use cases emerge:</p>
          <ol className="list-decimal list-inside mb-4 space-y-2">
            <li><strong>Pay Google for deeper search</strong>: "I'll pay $10 in Bitcoin to have Google prioritize searching for [specific contract type] across the entire BSV mempool"</li>
            <li><strong>Pay Google for contract amplification</strong>: "I'll pay $50 to boost visibility of my inscribed work contract so it appears in relevant searches"</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Innovation</h2>
          <p className="mb-4">
            This transforms the relationship with Google from "free user" to "paying customer with specific Bitcoin-denominated needs." You're essentially creating a <strong>B2B micropayment layer</strong> on top of Google Search.
          </p>
          
          <p className="mb-4">
            The innovation is that Bitcoin enables these micro-transactions that traditional payment rails make uneconomical. Google gets new revenue streams, users get better search results, and contract creators get better discovery.
          </p>
          
          <p className="mb-4">
            Bitcoin Search becomes the <strong>middleware</strong> that:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>Authenticates users with both systems</li>
            <li>Handles Bitcoin payments to Google</li>
            <li>Provides the specialized interface for contract discovery</li>
          </ul>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
            <p className="font-semibold">Key Insight:</p>
            <p>This could actually interest Google commercially - new revenue from Bitcoin-native search services they couldn't easily monetize before.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Value Propositions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Speed isn't the constraint</strong> - you're not competing with Google's instant results, you're offering discovery of economic opportunities that Google can't see</li>
            <li><strong>The data is already there</strong> - inscribed in the mempool, just needs intelligent filtering/searching</li>
            <li><strong>Network effects</strong> - as more contracts get inscribed, the search becomes more valuable</li>
            <li><strong>Proof of work</strong> - the hash trail provides verifiable evidence of what was searched and delivered</li>
          </ul>
          
          <p className="mt-4 text-lg font-semibold text-orange-600">
            The product becomes: "Pay a sat to search for profitable work contracts inscribed on BSV" rather than "Pay a sat to search the web."
          </p>
          
          <p className="mt-4">
            This is actually a compelling positioning - you're not competing with free search, you're offering paid access to exclusive economic opportunities that literally can't be found anywhere else.
          </p>
        </section>
      </div>
    </div>
  );
}