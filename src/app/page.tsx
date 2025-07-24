"use client";

import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white text-black font-sans">
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
      {/* Sidebar Navigation */}
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
          <a href="#" className="font-medium text-black hover:underline">Home</a>
          <a href="/writing" className="text-gray-500 hover:underline">Writing</a>
        </nav>
        <div className="font-bold mb-2 text-xs uppercase text-gray-700">Find me on</div>
        <nav className="flex flex-col gap-2">
          <a href="mailto:saketh@nyu.edu" className="text-gray-500 hover:underline">Email</a>
          <a href="https://www.instagram.com/jahsaonketh" className="text-gray-500 hover:underline">Instagram</a>
          <a href="https://github.com/sakethkesiraju26" className="text-gray-500 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/saketh-kesiraju-0a945617b/" className="text-gray-500 hover:underline">LinkedIn</a>
          <a href="https://augierart.notion.site/Saketh-Kesiraju-1f1a07090435455b9b0e8e9f58b1ee8e?source=copy_link" className="text-gray-500 hover:underline">Design Portfolio</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 text-left">
        <h1 className="font-bold text-4xl mb-2 font-serif text-black/90 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Saketh Kesiraju
        </h1>
        <p className="text-lg mb-4">learning by doing. doing something new everyday</p>
        <ul className="list-disc list-inside space-y-3 text-base mb-2">
          <li>senior at nyu. hobbies: photojournalism and playing poker.</li>
          <li className="mt-0">took leave from nyu and founded <a href="https://www.tryswiftlaw.com" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">SwiftLaw</a> and <a href="https://www.carbonpaper.ai" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">CarbonPaper</a> → started as flat-fee fund formation service, pivoted to AI Paralegal used by 15+ law firms; bootstrapped to mid 5 figs ARR</li>
          <li>visiting researcher at <a href="https://www.youtube.com/watch?v=qdljfmv_tcw&t=1687s" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Stanford CodeX</a>, presented research and prototypes using LLMs to automate document preparation and litigation finance decision modeling</li>
          <li>
            founded NYU EEG&apos;s Entrepreneurs in Residence program. helped the best NYU startups launch and fundraise with 10 weeks of programming from General Catalyst, a16z, and top operators in AI.
            <details className="ml-4 mt-2">
              <summary className="cursor-pointer font-semibold text-gray-800">portfolio companies</summary>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><a href="https://www.flite.city/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Flite</a> (backed by Jason Calcanis)</li>
                <li><a href="https://www.synaptrix-labs.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Synaptrix Labs</a> (backed by Underdog Labs and top neurotech angels)</li>
                <li><a href="https://blockhouse.app/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Blockhouse</a> (backed by Soma Capital, Antler, and top operators)</li>
                <li><a href="https://www.useterra.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Terra</a> (backed by Y Combinator, Floodgate, and Kyber Knight)</li>
                <li><span className="text-gray-700">PE due diligence software (founders now work at top banks)</span></li>
                <li><a href="https://www.playslap.com/irl" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">IRL</a> (backed by Princeton Alumni Angels, Broad Street Angels)</li>
              </ul>
            </details>
          </li>
          <li>prev. founded <a href="https://www.notion.so/augierart/Augier-f320ff83c6eb4646994d66a854185364?source=copy_link" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">art tech startup</a> backed by Sotheby's execs, built 3D sites for <a href="https://www.muse.place/gallardo" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">A$AP Rocky's creative director</a>, founding designer at <a href="https://vienna.earth/meta" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Vienna Earth</a> (now Aqua Voice, YC W24)</li>
        </ul>
        {/* Random Projects Dropdown */}
        <details className="ml-4 mt-0">
          <summary className="cursor-pointer font-semibold text-gray-800">projects</summary>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li>
              <a href="https://youtu.be/CbYAkPnKUs8?si=BCjb5KuyhWOim2dd" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">sec-gpt</a>
            </li>
            <li>
              <a href="https://www.litigationprediction.com/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">predict contract breach outcomes</a>
            </li>
            <li>
              <a href="https://youtu.be/gftXzEZ93j4" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">blockchain-based art marketplace</a>
            </li>
            <li>
              <a href="https://muse.place/vht" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">3d space for vienna</a>
            </li>
            <li>
              <a href="https://vienna.earth/plate/Saketh/closet%20organization" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">closet organization</a>
            </li>
            <li>
              <a href="https://vienna.earth/plate/Saketh/intellectual%20tech%20bro%20bookshelf%20but%20it%20gets%20more%20and%20more%20online" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">intellectual tech bro bookshelf but it gets more and more online</a>
            </li>
            <li>
              <a href="https://pitch.com/v/eveai-fht6cv/13f444ac-a80f-4dac-9239-754d6ee2a7b1" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">eviction defense</a>
            </li>
          </ul>
        </details>
        <div className="mt-4 text-base text-gray-700">
          some of my fav people include: steve jobs, kanye west (pre 2022), martin margiela, quentin tarantino, dieter rams, marco pierre white, slim aarons and masayoshi son.
        </div>
      </main>
    </div>
  );
}
