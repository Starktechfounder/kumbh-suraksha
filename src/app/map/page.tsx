"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MapPage() {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const facilities = [
    { type: "medical", name: "Medical Camp 1", distance: "0.5 km" },
    { type: "police", name: "Police Booth A", distance: "0.8 km" },
    { type: "water", name: "Water Station 3", distance: "0.3 km" },
    { type: "toilet", name: "Toilet Block B", distance: "0.4 km" },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r h-screen fixed left-0 overflow-y-auto">
        <div className="p-4">
          <Input
            type="search"
            placeholder="Search facilities..."
            className="mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="police">Police</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-3">
            {facilities.map((facility, index) => (
              <Card 
                key={index}
                className={`p-3 cursor-pointer transition-all ${
                  selectedFacility === facility.name 
                    ? "border-blue-500 shadow-md" 
                    : "hover:border-gray-300"
                }`}
                onClick={() => setSelectedFacility(facility.name)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{facility.name}</h3>
                    <p className="text-sm text-gray-500">{facility.distance}</p>
                  </div>
                  <Badge variant="outline">{facility.type}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 ml-80">
        <div className="p-4 border-b bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                My Location
              </Button>
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Heatmap
              </Button>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="h-[calc(100vh-8rem)] bg-gray-100 relative">
          {/* Placeholder for actual map */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Interactive Map will be loaded here</p>
          </div>

          {/* Crowd Density Indicator */}
          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg">
            <h4 className="font-semibold mb-2">Current Crowd Density</h4>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Low</span>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm">Medium</span>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
