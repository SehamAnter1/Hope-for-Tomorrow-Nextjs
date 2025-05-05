'use client'
import React from 'react'
import Button from './Button'
import { donors_heart_icon } from '@/assets/icons'

export default function Donation_Card({project}) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl">
    <h2 className="text-lg font-medium">{project.title}</h2>
    <p className="text-sm text-gray-500">
        {project.category} · {project.country}
    </p>

    <div className="mt-4 mb-2">
        <span className="text-2xl font-bold">${+project?.donations_amount}</span>
        <span className="text-sm text-gray-500"> raised of ${project?.price_goal} goal</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-indigo-500 h-2.5 rounded-full" style={{width: `${+project?.progress}%`}} />
    </div>

    <div className="flex gap-2 mb-4">
        <Button variant="outline" className="w-1/2">
            Share
        </Button>
        <Button href={`${project?.id}/complete-checkout`} className="bg-indigo-500 text-white w-1/2">
            Donate now!
        </Button>
    </div>

    <ul className="text-sm text-gray-700 space-y-2">
        {project?.top_donors?.map((donor, idx) => (
            <li className="flex justify-between items-center" key={idx}>
                <div className="flex items-center gap-2">
                    {donors_heart_icon}
                    <span>{donor.username.split("@")[0]}</span>
                </div>
                <span>${donor.total_donated}</span>
            </li>
        ))}
    </ul>
</div>
  )
}
