'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo/petrolage_logo.png'
import { NavData } from './data/nav'
import AboutPage from './aboutUs/popover'

const Navbar = () => {
  const container = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const path = usePathname()

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
          ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-800' 
          : 'bg-black/90 backdrop-blur-md border-b border-gray-800/50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="logo flex items-center space-x-2 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Image src={logo} alt='logo' fill />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              Petrolage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NavData?.map((nav, index) => (
              <div key={index}>
              {nav.name === 'About' ? <AboutPage />
                
                :<Link 
                
                href={nav.href} 
                className={`nav-item relative px-1 py-2 ${
                  path === nav.href ? 'text-white' : 'text-gray-400'
                } hover:text-white transition-colors duration-300 font-medium`}
                onMouseEnter={handleNavLinkHover}
                onMouseLeave={handleNavLinkLeave}
              >
                {nav.name}
                <span className="nav-link-underline absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transform origin-left"></span>
              </Link>}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none transition duration-300"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <div className="flex flex-col space-y-1.5">
                  <span className="w-6 h-0.5 bg-gray-400 transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-gray-400 transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-gray-400 transition-all duration-300"></span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="w-6 h-0.5 bg-gray-400 transform rotate-45 translate-y-0.5 transition-all duration-300"></span>
                  <span className="w-6 h-0.5 bg-gray-400 transform -rotate-45 -translate-y-0.5 transition-all duration-300"></span>
                </div>
              )}
            </button>
          </div>
       
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href={path === '/' ? "#l-top" : '/'}
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 mt-16 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {NavData?.map((nav, index) => (
                  <Link 
                    key={index}
                    href={nav.href}
                    onClick={toggleMenu}
                    className={`px-4 py-3 rounded-lg text-lg font-medium ${
                      path === nav.href ? 'text-white' : 'text-gray-400'
                    } hover:text-white hover:bg-gray-800/50 transition-all duration-300 flex items-center`}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-3"></span>
                    {nav.name}
                  </Link>
                ))}
               
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