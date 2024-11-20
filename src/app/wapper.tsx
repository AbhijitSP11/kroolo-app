import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'


const Wrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-full flex h-screen overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Wrapper