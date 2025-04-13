'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo/petrolage_logo.png'
import { Socials } from './data/social'
import { Services } from './data/services'
import { NavData } from './data/nav'

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

    // Floating animation for decorative elements
    gsap.to('.footer-decoration', {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1
    })
  }, { scope: container })

  return (
    <div 
    id = 'above-footer'
      ref={container}
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20 pb-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
        
        {/* Large decorative circles - Darker version */}
        <div className="footer-decoration absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gray-800/20 blur-3xl"></div>
        <div className="footer-decoration absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gray-800/20 blur-3xl"></div>
        
        {/* Diagonal light streaks - Darker version */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent transform -skew-x-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="footer-item">
             {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                <Image src={logo} alt='logo' fill />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                Petrolage
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Innovating solutions for the modern world.
            </p>
            <div className="flex space-x-4">
              {Socials?.length > 0 && Socials.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.link} 
                  target={social.target}
                  className="text-gray-500 hover:text-white transition-all duration-300 group"
                > 
                  <span className="sr-only">{social.name}</span>
                  <div className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center shadow-sm hover:shadow-lg transition-all group-hover:bg-gradient-to-r from-green-400 to-blue-500 group-hover:scale-110">
                    <span className="text-gray-400 group-hover:text-white">
                      {social.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-400 mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NavData?.map((nav, index) => (
                <li key={index}>
                  <Link 
                    href={nav.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-gray-700 mr-3 group-hover:bg-green-400 transition-colors"></span>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-item">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-blue-400 mr-3"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {Services?.length > 0 && Services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-gray-700 mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-400 mr-3"></span>
              Contact Us
            </h3>
            <address className="not-italic text-gray-400 space-y-4">
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                41b, Onikoyi Lane, Ikoyi Lagos
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                support@petrolagegroup.com
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                (+234) 808 381 7440
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-item my-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Copyright */}
        <div className="footer-item flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Petrolage Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacypage" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/termsofservicepage" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 hover:underline">
              Terms of Service
            </Link>
            <Link href="/cookiepolicypage" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Floating animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Footer