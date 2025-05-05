import Button from '@/components/Button'
import React from 'react'

export default function page() {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md w-full">
        {/* <DonationIcon /> */}
        
        <h1 className="text-2xl font-bold mb-2">Thank you for your donation</h1>
        <p className="text-sm text-gray-500 mb-8">A receipt has been sent to your email</p>
        
       
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-8 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-gray-500"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium">Your Donation</h3>
          <p className="text-xs text-gray-500">{"organization"} • {"date"}</p>
        </div>
      </div>
      <div>
        <span className="font-bold">${300}</span>
      </div>
    </div>
        
        <div className="flex justify-center">
          <Button label="Go to homepage" href="/" />
        </div>
      </div>
    </div>
    </div>
  )
}
