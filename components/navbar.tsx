'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo/petrolage_logo.png'

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

    // Underline animation for nav links
    gsap.to('.nav-link-underline', {
      scaleX: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }, { scope: container })

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const handleNavLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget.querySelector('.nav-link-underline'), {
      scaleX: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleNavLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget.querySelector('.nav-link-underline'), {
      scaleX: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <div 
      id='top'
      ref={container}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="logo flex items-center space-x-2 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Image src={logo} alt='logo' fill />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              Petrolage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#top" 
              className="nav-item relative px-1 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkLeave}
            >
              Home
              <span className="nav-link-underline absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform origin-left"></span>
            </Link>
            <Link 
              href="#about-us" 
              className="nav-item relative px-1 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkLeave}
            >
              About
              <span className="nav-link-underline absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform origin-left"></span>
            </Link>
            <Link 
              href="#above-footer" 
              className="nav-item relative px-1 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkLeave}
            >
              Services
              <span className="nav-link-underline absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform origin-left"></span>
            </Link>
            <Link 
              href="#above-footer" 
              className="nav-item relative px-1 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkLeave}
            >
              Contact
              <span className="nav-link-underline absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform origin-left"></span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="nav-item inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none transition duration-300"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <div className="flex flex-col space-y-1.5">
                  <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-gray-700 transition-all duration-300"></span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="w-6 h-0.5 bg-gray-700 transform rotate-45 translate-y-0.5 transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-gray-700 transform -rotate-45 -translate-y-0.5 transition-all duration-300"></span>
                </div>
              )}
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="#l-top" 
              className=" relative px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 mt-16 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  onClick={toggleMenu}
                  className="px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-300 flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-3"></span>
                  Home
                </Link>
                <Link 
                  href="#top" 
                  onClick={toggleMenu}
                  className="px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-300 flex items-center"
                >
                  <span  className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                  About
                </Link>
                <Link 
                  href="/services" 
                  onClick={toggleMenu}
                  className="px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-300 flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                  Services
                </Link>
                <Link 
                  href="#above-footer" 
                  onClick={toggleMenu}
                  className="px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-300 flex items-center"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3"></span>
                  Contact
                </Link>
                <div className="pt-6">
                  <Link 
                    href="#about-us" 
                    onClick={toggleMenu}
                    className="block w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar