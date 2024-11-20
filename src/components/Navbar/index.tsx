import { ArrowDown, ChevronDown } from 'lucide-react'
import React from 'react'
import ThemeToggle from '../ui/ThemeToggle'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full justify-between flex p-4 bg-white border-b border-gray-200'>
        <div>

        </div>
        <div className='flex items-center gap-4'>
            <div className='flex gap-2 items-center bg-gray-100 p-2 rounded-md'>
                <p>Abhijit Panchal</p>
                <ChevronDown className='size-4'/>
            </div>
            <ThemeToggle/>
            <div className='flex items-center justify-center px-4 py-2 rounded-full bg-blue-500'>
              <p className='text-lg text-white'>A</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar