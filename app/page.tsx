'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

interface ServiceProps  {
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
      status: '',
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
      status: '',
      logo: '📧',
      href: '#'
     }
  ]

  useGSAP(() => {
    // Title animation (will stay visible after animating in)
    gsap.fromTo(".title", 
      { y: -50, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    )

    // Subtitle animation (will stay visible after animating in)
    gsap.fromTo(".subtitle", 
      { y: 20, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
      }
    )

    // Box entry animations (will stay visible after animating in)
    gsap.fromTo(".green-box", 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.2,
          from: "center"
        },
        duration: 1,
        delay: 0.6,
        ease: "back.out(1.7)"
      }
    )

    // Continuous floating animation (runs after entry)
    gsap.to(".green-box", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.1,
        from: "random"
      },
      delay: 1.8 // Start after entry animations complete
    })

    // Background elements animation
    gsap.fromTo(".bg-circle", 
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.3,
        duration: 1.5,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      }
    )

  }, { scope: container })

  return (
    <div 
      ref={container}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 flex flex-col justify-center items-center overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-circle absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-200 opacity-0"></div>
        <div className="bg-circle absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-green-200 opacity-0"></div>
        <div className="bg-circle absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-blue-200 opacity-0"></div>
        <div className="bg-circle absolute bottom-1/3 left-1/3 w-56 h-56 rounded-full bg-purple-200 opacity-0"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="title text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Petolage</span> Group
        </h1>
        
        <p className="subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Now that you are here, what would you like to do today?
        </p>
        
        <div className='stagger-box flex flex-wrap justify-center gap-6'>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="green-box w-40 h-40 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-2">
                {item.logo}
              </div>
              <span className="text-lg font-semibold text-gray-700">{item.service}</span>
              <span className="text-lg font-semibold text-green-700">{item.status}</span>
            </a>
          ))}
        </div>

        <div className="mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            About us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home