'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

interface ServiceProps {
  service: string
  status: string
  logo: string
  href: string
}

const Home = () => {
  const container = useRef<HTMLDivElement>(null)
  
  const items: ServiceProps[] = [
    {
      service: 'Store',
      status: 'Coming soon...',
      logo: '🛍️',
      href: '#'
    },
    {
      service: 'Staffing',
      status: 'visit',
      logo: '👥',
      href: 'https://staffing.petrolage.tech'
    },
    {
      service: 'Travel',
      status: 'Coming soon...',
      logo: '✈️',
      href: '#'
    },
    {
      service: 'Contact',
      status: 'send',
      logo: '📧',
      href: '#above-footer'
    }
  ]

  useGSAP(() => {
    // Background elements animation
    gsap.fromTo(".bg-particle", 
      { 
        scale: 0, 
        opacity: 0,
        y: () => gsap.utils.random(-100, 100),
        x: () => gsap.utils.random(-100, 100)
      },
      {
        scale: 1,
        opacity: 0.1,
        duration: 2,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      }
    )

    // Title animation with gradient sweep
    gsap.fromTo(".title-gradient", 
      { backgroundPosition: "0% 50%" },
      { 
        backgroundPosition: "100% 50%",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      }
    )

    // Main title entry
    gsap.from(".title-char", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "back.out(1.7)",
      delay: 0.3
    })

    // Subtitle animation
    gsap.fromTo(".subtitle", 
      { 
        y: 30,
        opacity: 0,
        filter: "blur(5px)"
      },
      { 
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        delay: 0.8,
        ease: "power3.out"
      }
    )

    // Box entry animations - UPDATED TO ENSURE OPACITY STAYS AT 1
    gsap.fromTo(".green-box", 
      { 
        y: 100, 
        opacity: 0,
        rotation: () => gsap.utils.random(-15, 15)
      },
      {
        y: 0,
        opacity: 1, // Explicitly set final opacity to 1
        rotation: 0,
        duration: 1.2,
        stagger: {
          each: 0.15,
          from: "center"
        },
        delay: 1,
        ease: "back.out(1.7)"
      }
    )

    // Continuous floating animation
    gsap.to(".green-box", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random"
      },
      delay: 2.5
    })

    // Hover effects for boxes
    items.forEach((_, i) => {
      gsap.set(`.box-${i}`, { transformPerspective: 1000 })
      
      gsap.to(`.box-${i}`, {
        rotationY: 5,
        rotationX: 5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.5,
        paused: true,
        ease: "power2.out"
      })
    })

  }, { scope: container })

  // Split title into characters for animation
  const title = "Welcome to Petrolage Group"
  const titleChars = title.split("")

  return (
    <div 
  
      ref={container}
      className="min-h-screen mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 flex flex-col justify-center items-center overflow-hidden relative"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="bg-particle absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(74, 222, 128, 0.3)' : i % 2 === 0 ? 'rgba(96, 165, 250, 0.3)' : 'rgba(168, 85, 247, 0.3)'} 0%, transparent 70%)`,
              width: `${gsap.utils.random(100, 300)}px`,
              height: `${gsap.utils.random(100, 300)}px`,
              top: `${gsap.utils.random(0, 100)}%`,
              left: `${gsap.utils.random(0, 100)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-6xl">
        <h1 className="text-xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          {titleChars.map((char, i) => (
            <span 
              key={i} 
              className={`title-char inline-block ${char === ' ' ? 'w-1 md:w-4' : ''}`}
            >
              {char === 'P' ? (
                <span className="title-gradient text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-600">
                  {char}
                </span>
              ) : char}
            </span>
          ))}
        </h1>
        
        <p className="subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Registered in 2015 (RC 1275201)
          
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`green-box box-${index} w-44 h-44 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40`}
              style={{ opacity: 1 }} // Explicitly set opacity to 1 in style
              onMouseEnter={() => gsap.to(`.box-${index}`, { rotationY: 5, rotationX: 5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", duration: 0.5 })}
              onMouseLeave={() => gsap.to(`.box-${index}`, { rotationY: 0, rotationX: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", duration: 0.5 })}
            >
              <div className="text-5xl mb-3 transition-transform duration-300 hover:scale-110">
                {item.logo}
              </div>
              <span className="text-lg font-semibold text-gray-700">{item.service}</span>
              {item.status && (
                <span className="text-sm font-medium text-green-600 mt-1 px-3 py-1 bg-green-100/50 rounded-full">
                  {item.status}
                </span>
              )}
            </a>
          ))}
        </div>

        <div className="mt-16">
          <button className="group px-8 py-3.5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden relative">
            <span className="relative z-10">About us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </div>
      </div>
      <div id='above-footer'></div>
    </div>
  )
}

export default Home