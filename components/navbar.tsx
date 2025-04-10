'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useGSAP(() => {
    // Navbar entry animation
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power2.out'
    })

    // Logo animation
    gsap.from('.logo', {
      scale: 0,
      rotation: 180,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.3
    })
  }, { scope: container })

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      id='top'
      ref={container}
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="logo flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Petrolage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#top" className="nav-item text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="#top" className="nav-item text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="#above-footer" className="nav-item text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="#above-footer" className="nav-item text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="nav-item inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none transition duration-300"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="nav-item px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-2">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                href="#top" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                href="/services" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Services
              </Link>
              <Link 
                href="#above-footer" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Contact
              </Link>
              <div className="pt-4">
                <Link 
                  href="#above-footer" 
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar