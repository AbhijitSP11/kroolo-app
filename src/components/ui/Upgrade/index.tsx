import { MoveUpRight } from 'lucide-react'
import React from 'react'

type Props = {}

const Upgrade = (props: Props) => {
  return (
    <div className="mt-auto p-4 border border-gray-100 rounded-md">
        <div className="text-lg font-medium">Starter Plan</div>
        <div className="flex items-center gap-4 mt-4 text-base text-gray-600 hover:text-gray-900 
            cursor-pointer hover:bg-gray-200 ml-4 px-4 py-2 rounded-md"
        >
          Upgrade Plan
          <MoveUpRight className="size-5" />
        </div>
      </div>
  )
}

export default Upgrade