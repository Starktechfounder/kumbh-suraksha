"use client"

import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-black/95 z-50 backdrop-blur-sm">
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors flex items-center gap-2"
            >
              <span>🕉️</span>
              Kumbh Suraksha
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="px-4 py-2 text-white hover:text-red-400 transition-colors">
              <span>🏠 Home</span>
            </Link>
            <Link href="/map" className="px-4 py-2 text-white hover:text-red-400 transition-colors">
              <span>🗺️ Interactive Map</span>
            </Link>
            <Link href="/lost-found" className="px-4 py-2 text-white hover:text-red-400 transition-colors">
              <span>👥 Lost & Found</span>
            </Link>
            <Link href="/emergency" className="px-4 py-2 text-white hover:text-red-400 transition-colors">
              <span>🚨 Emergency</span>
            </Link>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden relative">
            <button 
              className="p-2 text-white hover:text-red-400 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-sm border border-red-500/20 rounded-lg shadow-lg py-2 z-50">
                <div className="h-0.5 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 mb-2"></div>
                <Link href="/" className="block px-4 py-2 text-white hover:text-red-400 transition-colors">
                  <span>🏠 Home</span>
                </Link>
                <Link href="/map" className="block px-4 py-2 text-white hover:text-red-400 transition-colors">
                  <span>🗺️ Interactive Map</span>
                </Link>
                <Link href="/lost-found" className="block px-4 py-2 text-white hover:text-red-400 transition-colors">
                  <span>👥 Lost & Found</span>
                </Link>
                <Link href="/emergency" className="block px-4 py-2 text-white hover:text-red-400 transition-colors">
                  <span>🚨 Emergency</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
