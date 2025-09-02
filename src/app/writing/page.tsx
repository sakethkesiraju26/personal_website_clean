"use client";

import { useState } from "react";

const essays = [
  {
    id: "customer-experience",
    title: "The customer experience >>> everything else",
    date: "April 12, 2025",
    content: (
      <>
        <p className="mb-4">Most startups assume superior technology creates lasting advantage. It doesn't. As AI becomes commoditized, technical differentiation is fleeting. The companies that will fail build AI on legacy workflows, only making internal processes faster while leaving customer experience unchanged. <strong>They digitize pain instead of removing it.</strong></p>
        <p className="mb-4">Consider a law firm that buys AI to draft contracts 3x faster, but clients still wait weeks for responses and get surprised by bills. The firm got faster at producing the same frustrating service.</p>
        <p className="mb-4">If you analyze the unicorns, you'll see they took the opposite approach. Zappos reached $1B not through selling better shoes, but 365-day returns, surprise upgrades, and 10-hour support calls. The product wasn't shoes—it was a trustworthy e-commerce experience driving 75% repeat customers. Stripe hit $95B by making integration seven lines of code instead of weeks. They said no to early enterprise deals to perfect developer experience through beautiful documentation. Perplexity reimagined how AI answers should feel, conversational with clear citations that feel like talking to a friend, not querying a database. While the well-funded competitors with superior models are failing by optimizing only for model precision.</p>
        <p className="mb-4">The pattern is clear: winners obsess over onboarding, support, and billing (the end-to-end experience) while competitors chase perceived core feature velocity. The greats have a vision of how their service should <strong>feel</strong> if built from scratch today, then design every touchpoint to deliver that feeling consistently.</p>
        <p className="mb-4">In the next wave of AI companies, winners won't have "the best models". They'll make customers <strong>feel</strong> something new.</p>
      </>
    ),
  },
  {
    id: "vc-temperature",
    title: "VCs Evaluate Temperature",
    date: "January 18, 2025",
    content: (
      <>
        <div className="mb-4">
          <a href="https://youtu.be/saTVtle091Q?si=uHN2ez7zJXQeX4aa" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">Watch: Ari Gold on YouTube</a>
        </div>
        <p className="mb-4"><em>Ari Gold tells an actor: "I don't represent talent, I represent temperature. And he's not hot." <span className='text-xs text-gray-500'>(2:36)</span></em></p>
        <p className="mb-4">This is the founder-VC dynamic in a nutshell.</p>
        <p className="mb-4">Early-stage VCs aren't really looking for the "best" ideas or the "smartest" founders. What they want is momentum. They want to back the companies that everyone else wants to back. What they're really funding is "temperature."</p>
        <p className="mb-4">Most founders get it wrong. They think they need a flawless product or a perfectly validated market. But VCs are making social bets, not analytical ones. The real question is: "Is this founder hot right now?"</p>
        <p className="mb-4">Temperature is about speed and FOMO. When you go all in, hire great people, move fast, and make bold moves, you create heat. Suddenly, everyone wants in. Momentum builds on itself.</p>
        <p className="mb-4">If you play it safe, hoard runway, move cautiously, and hire slow, you stay cold. It doesn't matter how solid your fundamentals are; cold companies don't get funded.</p>
        <p className="mb-4">The founders who understand this focus on creating heat. They build exceptional teams, show rapid progress, and tell a story people can't ignore.</p>
        <p className="mb-4">VCs will say they're investing in your vision or your market, but what they're really buying is your temperature.</p>
        <p className="mb-4">So go all in. Create heat. Stay hot.</p>
      </>
    ),
  },
  {
    id: "performance-art",
    title: "Young Founders Think Startups Are Performance Art",
    date: "September 2, 2024",
    content: (
      <>
        <p className="mb-4">Since dropping out and moving to Silicon Valley, I've spent two years building alongside and advising dozens of founders. What I've witnessed is 90% doing elaborate performance art masquerading as business. The most promising people get trapped building founder personas instead of solving real problems. They perfect their pitch decks while their products sit broken.</p>
        <p className="mb-4">Most startups today are performance art, not science. And the performers have forgotten they're on stage.</p>
        <h3 className="font-semibold mt-6 mb-2 text-lg">The Identity Trap</h3>
        <p className="mb-4">Many young founders start their journeys asking "who do I need to be to found a company?" or "what do I need to say to get investors" instead of "what problem am I uniquely positioned to solve?" The first questions put you in character-building mode; the latter puts you in problem-solving mode.</p>
        <p className="mb-4">People act a certain way because they want to be seen as that kind of person. This makes them act that way more, which strengthens the belief. There's nothing inherent about it, it's pure performance. Startup culture validates this from day one, rewarding founder identity before you've solved a single real problem.</p>
        <p className="mb-4">The real work isn't building identity, it's developing internal coherence with your actual curiosity. It's the difference between starting a startup because that's what smart people do versus solving a problem you genuinely care about. One drains you, the other energizes you.</p>
        <h3 className="font-semibold mt-6 mb-2 text-lg">When Performance Meets Reality</h3>
        <p className="mb-4">I've watched brilliant founders pitch flawlessly but can't get users to stick around. 'Visionaries' whose roadmaps change monthly based on trends. 'Product people' who've never shipped anything people actually use. They become method actors who've forgotten they're in a play.</p>
        <p className="mb-4">The most painful cases refuse to pivot despite years without progress. They've built an identity around their original idea and defending that identity becomes more important than solving problems. When you build an identity around your hypothesis, you stop being a scientist and become a defender of predetermined conclusions.</p>
        <p className="mb-4">You end up missing real opportunities while defending a fake self.</p>
        <h3 className="font-semibold mt-6 mb-2 text-lg">The System Rewards This</h3>
        <p className="mb-4">The early-stage startup ecosystem naturally emphasizes vision and communication skills when there's little else to evaluate. At pre-product stages, investors necessarily bet on founders' ability to think clearly and execute - which means storytelling becomes a legitimate signal. The challenge is that founders can mistake this early validation for business success and get stuck optimizing for the wrong audience.</p>
        <p className="mb-4">You can build a founder identity in months and raise money on a compelling story. But you can't fake product-market fit. There's no prize for working on the wrong thing really hard.</p>
        <h3 className="font-semibold mt-6 mb-2 text-lg">The Way Out</h3>
        <p className="mb-4">Start asking "How do I develop internal coherence?" Pay attention to problems that bother you when no one's watching. Notice what you research at 2 AM, what you can't stop thinking about.</p>
        <p className="mb-4">Test ideas against reality quickly. Build something small, show it to people, watch their genuine reactions. Stay curious about being wrong. The moment you start defending ideas instead of testing them, you've stopped doing science.</p>
        <p className="mb-4">The real winners don't gamble on their identities, they gamble on finding truth faster than everyone else. They don't care about being seen as visionaries; they care about seeing clearly. When users don't stick around, that's not identity failure. It's information, the kind that separates main characters from extras.</p>
        <p className="mb-4">Stop trying to be someone. Just do the work.</p>
      </>
    ),
  },
];

export default function Writing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-white/80 text-black font-sans backdrop-blur-xl">
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white border border-gray-300 rounded shadow"
          aria-label="Open sidebar navigation"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        {/* Main Navigation Sidebar */}
        <aside
          className={`flex flex-col w-64 min-h-auto md:min-h-screen px-4 md:px-8 py-6 md:py-12 bg-white text-sm border-b md:border-b-0 md:border-r border-gray-200 h-auto md:h-screen z-20 transition-transform duration-300 md:translate-x-0 fixed md:static top-0 left-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:flex md:w-64 md:translate-x-0`}
          style={{ maxWidth: "16rem" }}
        >
          {/* Close button for mobile */}
          <button
            className="md:hidden self-end mb-4 p-2 text-gray-500"
            aria-label="Close sidebar navigation"
            onClick={() => setSidebarOpen(false)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <nav className="flex flex-col gap-2 mb-10">
            <a href="/" className="text-gray-500 hover:underline">Home</a>
            <a href="/writing" className="font-medium text-black hover:underline">Writing</a>
            <a href="https://augierart.notion.site/Saketh-Kesiraju-1f1a07090435455b9b0e8e9f58b1ee8e?source=copy_link" className="text-gray-500 hover:underline">Design Portfolio</a>
          </nav>
          {/* Essay Navigation (desktop only) */}
          <div className="hidden md:block">
            <div className="font-bold mb-8 tracking-wide text-xs uppercase text-gray-700">Essays</div>
            <nav className="flex flex-col gap-2">
              {essays.map((essay) => (
                <a
                  key={essay.id}
                  href={`#${essay.id}`}
                  className="text-sm font-medium text-gray-700 hover:text-black hover:underline transition-colors"
                >
                  {essay.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 text-left text-base">
          {/* Essay Navigation (mobile only) */}
          <div className="block md:hidden mb-8">
            <div className="font-bold mb-4 tracking-wide text-xs uppercase text-gray-700">Essays</div>
            <nav className="flex flex-col gap-2">
              {essays.map((essay) => (
                <a
                  key={essay.id}
                  href={`#${essay.id}`}
                  className="text-sm font-medium text-gray-700 hover:text-black hover:underline transition-colors"
                >
                  {essay.title}
                </a>
              ))}
            </nav>
          </div>
          {essays.map((essay) => (
            <section
              key={essay.id}
              id={essay.id}
              className="mb-24 border-0 p-0"
            >
              <h2
                className="font-bold text-4xl mb-10 font-serif text-black/90 tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {essay.title}
              </h2>
              <div className="mb-6 text-sm italic text-gray-500">{essay.date}</div>
              <div className="prose prose-lg max-w-none text-gray-900 leading-relaxed bg-transparent p-0">
                {essay.content}
              </div>
            </section>
          ))}
        </main>
      </div>
      {/* Social/Contact Links at Bottom */}
      <footer className="w-full px-6 py-8 border-t border-gray-200 bg-white text-xs flex flex-col items-center gap-2 mt-2">
        <div className="font-bold mb-2 text-xs uppercase text-gray-700">Reach Me On</div>
        <nav className="flex flex-row gap-6 items-center">
          <a href="mailto:saketh@nyu.edu" className="text-gray-500 hover:text-black" aria-label="Email">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://www.instagram.com/jahsaonketh" className="text-gray-500 hover:text-black" aria-label="Instagram">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/><circle cx="12" cy="12" r="5" strokeWidth="2"/><circle cx="17" cy="7" r="1.5"/></svg>
          </a>
          <a href="https://github.com/sakethkesiraju26" className="text-gray-500 hover:text-black" aria-label="GitHub">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/saketh-kesiraju-0a945617b/" className="text-gray-500 hover:text-black" aria-label="LinkedIn">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/><path d="M7 10v7M7 7v.01M12 10v7m0-7c0-1.1.9-2 2-2s2 .9 2 2v7" strokeWidth="2" strokeLinecap="round"/></svg>
          </a>
        </nav>
      </footer>
    </>
  );
} 