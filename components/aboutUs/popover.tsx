import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import AboutUs from "./aboutUs"

export function PopoverDemo() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = ()=>{
    setIsOpen(!isOpen)
  }

  
  return (
    <Popover>
      <PopoverTrigger asChild>
      <button className="group px-8 py-3.5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden relative"
      onClick={handleOpen}
      >
            <span className="relative z-10">About us</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-h-screen and overflow-y-scroll">
       <div>
        <AboutUs />
       </div>
      </PopoverContent>
    </Popover>
  )
}
