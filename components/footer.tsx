'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Link from 'next/link'

const Footer = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Footer elements animation
    gsap.from('.footer-item', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.3,
      ease: 'power2.out'
    })

    // Decorative elements animation
    gsap.from('.footer-decoration', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.5
    })
  }, { scope: container })

  return (
    <div 
      ref={container}
      className="relative bg-gradient-to-br from-blue-50 to-indigo-100 border-t border-white/20 pt-16 pb-8 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="footer-decoration absolute top-1/4 left-10 w-32 h-32 rounded-full bg-indigo-200/30 blur-xl"></div>
        <div className="footer-decoration absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-green-200/30 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="footer-item">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                Petrolage
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Innovating solutions for the modern world.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <Link 
                  key={social} 
                  href="#" 
                  className="text-gray-500 hover:text-green-600 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                    {/* Icon placeholder - replace with actual icons */}
                    {social.charAt(0).toUpperCase()}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href='#top'
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-item">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2">
              {['Staffing', 'Store', 'Travel', 'Consulting'].map((service) => (
                <li key={service}>
                  <Link 
                    href={`/services#${service.toLowerCase()}`} 
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>41b, Onikoyi Lane, Ikoyi Lagos</p>
              <p>Email: support@petrolagegroup.com</p>
              <p>Phone: (+234) 808 381 7440</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-item border-t border-white/30 my-8"></div>

        {/* Copyright */}
        <div className="footer-item flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Petrolage Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-green-600 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-green-600 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer