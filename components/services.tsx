'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { Services } from "@/components/data/services"

const Service = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(".bg-particle", 
      { scale: 0, opacity: 0, y: () => gsap.utils.random(-100, 100), x: () => gsap.utils.random(-100, 100) },
      { scale: 1, opacity: 0.1, duration: 2, stagger: 0.1, ease: "elastic.out(1, 0.5)" }
    )

    gsap.fromTo(".title-gradient", 
      { backgroundPosition: "0% 50%" },
      { backgroundPosition: "100% 50%", duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true }
    )

    gsap.from(".title-char", {
      y: -50, opacity: 0, duration: 0.8, stagger: 0.05, ease: "back.out(1.7)", delay: 0.3
    })

    gsap.fromTo(".subtitle", 
      { y: 30, opacity: 0, filter: "blur(5px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, delay: 0.8, ease: "power3.out" }
    )

    gsap.fromTo(".service-card", 
      { y: 100, opacity: 0, rotation: () => gsap.utils.random(-15, 15) },
      { y: 0, opacity: 1, rotation: 0, duration: 1.2, stagger: { each: 0.15, from: "center" }, delay: 1, ease: "back.out(1.7)" }
    )

    gsap.to(".service-card", {
      y: -20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: { each: 0.2, from: "random" }, delay: 2.5
    })

    Services.forEach((_, i) => {
      gsap.set(`.card-${i}`, { transformPerspective: 1000 })
      gsap.to(`.card-${i}`, {
        rotationY: 5, rotationX: 5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", duration: 0.5, paused: true, ease: "power2.out"
      })
    })

  }, { scope: container })

  const title = "Welcome to Petrolage Group"
  const titleChars = title.split("")

  return (
    <div ref={container} className="min-h-screen pt-24 py-8 flex flex-col justify-center items-center overflow-hidden relative bg-black">

      {/* Enhanced Background Layer - Darker Version */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Darker Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-100" />
        
        {/* Dark Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Darker Glowing Particles */}
        {[...Array(40)].map((_, i) => (
          <div 
            key={i}
            className="bg-particle absolute rounded-full blur-md mix-blend-screen animate-float"
            style={{
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(74, 222, 128, 0.3)' : i % 2 === 0 ? 'rgba(96, 165, 250, 0.3)' : 'rgba(192, 132, 252, 0.3)'} 0%, transparent 70%)`,
              width: `${gsap.utils.random(80, 200)}px`,
              height: `${gsap.utils.random(80, 200)}px`,
              top: `${gsap.utils.random(0, 100)}%`,
              left: `${gsap.utils.random(0, 100)}%`,
              filter: `blur(${gsap.utils.random(8, 15)}px)`,
              opacity: 0,
              animationDelay: `${gsap.utils.random(0, 3)}s`,
              animationDuration: `${gsap.utils.random(6, 12)}s`
            }}
          />
        ))}
        
        {/* Darker Floating Circles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full opacity-5 mix-blend-overlay animate-float"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(167, 139, 250, 0.4)' : 'rgba(74, 222, 128, 0.4)'} 0%, transparent 70%)`,
              width: `${gsap.utils.random(100, 400)}px`,
              height: `${gsap.utils.random(100, 400)}px`,
              top: `${gsap.utils.random(0, 100)}%`,
              left: `${gsap.utils.random(0, 100)}%`,
              filter: `blur(${gsap.utils.random(10, 20)}px)`,
              animationDelay: `${gsap.utils.random(0, 5)}s`,
              animationDuration: `${gsap.utils.random(10, 20)}s`
            }}
          />
        ))}
        
        {/* Darker Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/3 h-full bg-gradient-to-b from-blue-500/5 to-transparent transform -skew-x-12" />
          <div className="absolute top-0 right-1/4 w-1/3 h-full bg-gradient-to-b from-purple-500/5 to-transparent transform skew-x-12" />
        </div>
      </div>

      {/* Content Layer */}
      <div id='l-top' className="relative z-10 text-center px-4 w-full max-w-7xl">
        <h1 className="text-xl md:text-4xl font-bold text-white mb-6 leading-tight">
          {titleChars.map((char, i) => (
            <span 
              key={i} 
              className={`title-char inline-block ${char === ' ' ? 'w-1 md:w-4' : ''}`}
            >
              {char === 'P' ? (
                <span className="title-gradient text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                  {char}
                </span>
              ) : char}
            </span>
          ))}
        </h1>
        
        <p className="subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Registered in 2015 (RC 1275201)
        </p>
        
        {/* Enhanced Services Section */}
        <div id='services' className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {Services?.length > 0 && Services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                target={service.target}
                className={`service-card card-${index} w-full h-80 bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-gray-800 hover:border-gray-600 relative overflow-hidden group`}
                onMouseEnter={() => gsap.to(`.card-${index}`, { rotationY: 5, rotationX: 5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", duration: 0.5 })}
                onMouseLeave={() => gsap.to(`.card-${index}`, { rotationY: 0, rotationX: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", duration: 0.5 })}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(74,222,128,0.2)_0deg,rgba(74,222,128,0)_60deg,rgba(74,222,128,0)_310deg,rgba(74,222,128,0.2)_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 text-green-400">
                    {service.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.name}</p>
                  <div className="flex flex-col flex-wrap gap-2 justify-center mt-auto">
                    <span className="text-xs font-medium text-white px-3 py-1 bg-gray-800 rounded-full">
                      {service.text}
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full text-green-400 bg-gray-900/70`}>
                      {service.status}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        

      </div>

      <div id="above-footer"></div>
    </div>
  )
}

export default Service