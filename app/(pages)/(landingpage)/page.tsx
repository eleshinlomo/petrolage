'use client'

import AboutPage from "@/components/aboutUs/popover"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { Services} from "@/components/services"



const Home = () => {
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

    gsap.fromTo(".green-box", 
      { y: 100, opacity: 0, rotation: () => gsap.utils.random(-15, 15) },
      { y: 0, opacity: 1, rotation: 0, duration: 1.2, stagger: { each: 0.15, from: "center" }, delay: 1, ease: "back.out(1.7)" }
    )

    gsap.to(".green-box", {
      y: -20, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: { each: 0.2, from: "random" }, delay: 2.5
    })

    Services.forEach((_, i) => {
      gsap.set(`.box-${i}`, { transformPerspective: 1000 })
      gsap.to(`.box-${i}`, {
        rotationY: 5, rotationX: 5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", duration: 0.5, paused: true, ease: "power2.out"
      })
    })

  }, { scope: container })

  const title = "Welcome to Petrolage Group"
  const titleChars = title.split("")

  return (
    <div ref={container} className="min-h-screen mt-12 py-8 flex flex-col justify-center items-center overflow-hidden relative bg-gray-900">

      {/* Enhanced Background Layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 opacity-100 animate-gradient-shift" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Glowing Particles */}
        {[...Array(40)].map((_, i) => (
          <div 
            key={i}
            className="bg-particle absolute rounded-full blur-md mix-blend-screen animate-float"
            style={{
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(74, 222, 128, 0.6)' : i % 2 === 0 ? 'rgba(96, 165, 250, 0.6)' : 'rgba(192, 132, 252, 0.6)'} 0%, transparent 70%)`,
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
        
        {/* Floating Circles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full opacity-10 mix-blend-overlay animate-float"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(167, 139, 250, 0.8)' : 'rgba(74, 222, 128, 0.8)'} 0%, transparent 70%)`,
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
        
        {/* Subtle Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/3 h-full bg-gradient-to-b from-blue-500/10 to-transparent transform -skew-x-12" />
          <div className="absolute top-0 right-1/4 w-1/3 h-full bg-gradient-to-b from-purple-500/10 to-transparent transform skew-x-12" />
        </div>
      </div>

      {/* Content Layer */}
      <div id='l-top' className="relative z-10 text-center px-4 w-full max-w-6xl">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
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
        
        <div id='services' className="flex flex-wrap justify-center gap-6 md:gap-8">
          {Services?.length > 0 && Services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className={`green-box box-${index} w-44 h-44 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40 hover:bg-white/20`}
              style={{ opacity: 1 }}
              onMouseEnter={() => gsap.to(`.box-${index}`, { rotationY: 5, rotationX: 5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", duration: 0.5 })}
              onMouseLeave={() => gsap.to(`.box-${index}`, { rotationY: 0, rotationX: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", duration: 0.5 })}
            >
              <div className="text-5xl mb-3 transition-transform duration-300 hover:scale-110">
                {service.logo}
              </div>
              <span className="text-lg font-semibold text-white">{service.name}</span>
              {service.status && (
                <span className="text-sm font-medium text-green-400 mt-1 px-3 py-1 bg-green-900/50 rounded-full">
                  {service.status}
                </span>
              )}
            </a>
          ))}
        </div>
        {/* About us button */}
       
        <div id='about-us' className="inherit text-purple-900 ">About us</div>
        <div   className="mt-16">
        <AboutPage />
         
        </div>
      </div>

      <div id="above-footer"></div>

     
    </div>
  )
}

export default Home