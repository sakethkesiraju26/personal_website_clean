"use client";

import { useState } from "react";

// Placeholder data for the photography grid
const photographyData = [
  { id: "170323", title: "Urban Geometry", description: "Abstract cityscape patterns" },
  { id: "176312", title: "Industrial Lines", description: "Modern architecture study" },
  { id: "170311", title: "Natural Forms", description: "Organic shapes in nature" },
  { id: "170304", title: "Minimalist Design", description: "Clean geometric composition" },
  { id: "170226", title: "Dynamic Movement", description: "Flowing lines and curves" },
  { id: "170225", title: "Contrast Study", description: "Light and shadow interplay" },
  { id: "170224", title: "Textural Elements", description: "Surface and material exploration" },
  { id: "170223", title: "Perspective Lines", description: "Depth and dimension" },
  { id: "170222", title: "Layered Composition", description: "Multi-level visual structure" },
  { id: "170221", title: "Geometric Harmony", description: "Balanced abstract forms" },
  { id: "170220", title: "Modern Typography", description: "Letterform exploration" },
  { id: "170219", title: "Curved Elements", description: "Fluid organic shapes" },
  { id: "170218", title: "Structural Design", description: "Architectural abstraction" },
  { id: "170217", title: "Negative Space", description: "Minimalist composition" },
  { id: "170216", title: "Angular Forms", description: "Sharp geometric patterns" },
  { id: "170215", title: "Functional Art", description: "Design meets utility" },
  { id: "170214", title: "3D Perspective", description: "Spatial depth exploration" },
  { id: "170213", title: "Pattern Study", description: "Repetitive visual elements" },
  { id: "170212", title: "Curved Lines", description: "Organic flow and movement" },
  { id: "170211", title: "Symmetrical Balance", description: "Centered composition" },
  { id: "170210", title: "Cross Patterns", description: "Intersecting geometric forms" },
  { id: "170209", title: "Fragmented Design", description: "Broken and reassembled forms" },
  { id: "170208", title: "Circular Focus", description: "Centered circular composition" },
  { id: "170207", title: "Arc Patterns", description: "Curved geometric elements" },
  { id: "170206", title: "Diagonal Movement", description: "Dynamic directional lines" },
  { id: "170205", title: "Vertical Rhythm", description: "Repeating vertical elements" },
  { id: "170264", title: "Suspended Forms", description: "Floating geometric shapes" },
  { id: "170203", title: "Vanishing Point", description: "Perspective convergence" },
];

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (id: string) => {
    setSelectedImage(id);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col md:flex-row bg-white text-black font-sans">
        {/* Sidebar Navigation */}
        <aside className="flex flex-col w-64 min-h-auto md:min-h-screen px-4 md:px-8 py-6 md:py-12 bg-white text-sm border-b md:border-b-0 md:border-r border-gray-200 h-auto md:h-screen z-20">
          <nav className="flex flex-col gap-2 mb-10">
            <a href="/" className="text-gray-500 hover:underline">Home</a>
            <a href="/writing" className="text-gray-500 hover:underline">Writing</a>
            <a href="/photography" className="font-medium text-black hover:underline">Photography</a>
            <a href="https://augierart.notion.site/Saketh-Kesiraju-1f1a07090435455b9b0e8e9f58b1ee8e?source=copy_link" className="text-gray-500 hover:underline">Design Portfolio</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-16">
          <h1 className="font-bold text-2xl mb-8 font-serif text-black/90 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Photography
          </h1>
          
          {/* Photography Grid */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {photographyData.map((item) => (
              <div key={item.id} className="relative group">
                <div 
                  className="aspect-square bg-gray-100 border border-gray-200 rounded-sm cursor-pointer hover:border-gray-400 transition-colors duration-200 flex items-center justify-center"
                  onClick={() => handleImageClick(item.id)}
                >
                  {/* Placeholder content - replace with actual images */}
                  <div className="text-xs text-gray-500 text-center p-2">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-sm flex items-center justify-center">
                      <span className="text-gray-600 font-mono">{item.id}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-1 text-center font-mono">
                  {item.id}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal for larger image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-gray-900 z-10 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-2xl shadow-2xl border border-gray-200">
              <div className="aspect-square bg-gray-100 border border-gray-200 rounded-sm flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-4xl font-mono text-gray-600 mb-2">{selectedImage}</div>
                  <div className="text-gray-500">
                    {photographyData.find(item => item.id === selectedImage)?.title}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {photographyData.find(item => item.id === selectedImage)?.description}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Click anywhere to close
              </p>
            </div>
          </div>
        </div>
      )}

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