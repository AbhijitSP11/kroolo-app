import React from 'react'

const HomePage = () => {
  return (
    <div className="p-6">
    <div className="bg-white rounded-md p-4 shadow">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-medium">Projects</h1>
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Demo Project</h2>
            <p className="text-gray-500">Manage all projects within this Workspace.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-rose-100 text-rose-500 px-2 py-1 rounded-full">0%</span>
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md w-full">
          + Create Project
        </button>
      </div>
    </div>
  </div>
  )
}

export default HomePage