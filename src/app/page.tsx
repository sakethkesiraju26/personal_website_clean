"use client";

import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
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
            <a href="https://augierart.notion.site/Saketh-Kesiraju-1f1a07090435455b9b0e8e9f58b1ee8e?source=copy_link" className="text-gray-500 hover:underline">Design Portfolio</a>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 text-left text-base">
          <h1 className="font-bold text-2xl mb-2 font-serif text-black/90 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Saketh Kesiraju
          </h1>
          <p className="mb-4">learning by doing. doing something new everyday</p>
          <ul className="list-disc list-inside space-y-3 mb-2">
            <li>senior at nyu. hobbies: photojournalism and playing poker.</li>
            <li className="mt-0">took leave from nyu and started a tech-enabled fund formation service and ended up building <a href="https://www.tryswiftlaw.com" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">SwiftLaw</a>, then <a href="https://www.carbonpaper.ai" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">CarbonPaper</a>, AI-powered document editor for lawyers to replace MS Word; bootstrapped to mid 5 figs ARR</li>
            <li>visiting researcher at <a href="https://www.youtube.com/watch?v=qdljfmv_tcw&t=1687s" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Stanford CodeX</a>, built and presented LLM-based applications to automate complex document preparation (LPAs & PPMs) and to predict litigation outcomes.</li>
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
            <li>prev. founded <a href="https://www.notion.so/augierart/Augier-f320ff83c6eb4646994d66a854185364?source=copy_link" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">art tech startup</a> backed by Sotheby’s execs, built 3D sites for <a href="https://www.muse.place/gallardo" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">A$AP Rocky’s creative director</a>, founding designer at <a href="https://vienna.earth/meta" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Vienna Hypertext</a> (now Aqua Voice, YC W24)</li>
          </ul>
          {/* Random Projects Dropdown */}
          <details className="ml-4 mt-0">
            <summary className="cursor-pointer font-semibold text-gray-800">projects</summary>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>
                <a href="https://www.harveylegal.ai/" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">legal super app</a>
              </li>
              <li>
                <a href="https://youtu.be/CbYAkPnKUs8?si=BCjb5KuyhWOim2dd" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">sec-gpt</a>
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
                <a href="https://www.loom.com/share/2f008604e7294de5b63814f6850ae41f?sid=529763b5-2203-48b1-9184-5eb75e503a0d" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">eviction defense</a>
              </li>
            </ul>
          </details>
          <div className="mt-4 text-gray-700">
            people I admire: steve jobs, kanye west (pre 2022), martin margiela, quentin tarantino, dieter rams, marco pierre white, zlatan, john mcafee, zuck, parker conrad and masayoshi son.
          </div>
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
