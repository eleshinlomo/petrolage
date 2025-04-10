import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import React from "react"

interface PagesProps {
    children: React.ReactNode
}


const PagesLayout = ({children}: PagesProps)=>{

    return (
        <div>
         <Navbar />
         {children}
         <Footer />
        </div>
    )
}

export default PagesLayout