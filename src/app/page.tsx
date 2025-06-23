"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black py-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.2),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-red-600">
              Welcome to Kumbh Suraksha
            </h1>
            <p className="text-xl mb-8 text-white">
              Your comprehensive safety and navigation companion for Kumbh Mela
            </p>
            <Button 
              className="bg-red-600 text-white hover:bg-red-700 hover:scale-105 transition-all duration-200 font-semibold py-3 px-8 rounded-lg text-lg shadow-lg shadow-red-600/30"
              onClick={() => router.push('/map')}
            >
              Open Interactive Map
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Navigation Feature */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Navigation</h3>
              <p className="text-gray-600">GPS-enabled maps showing essential facilities with real-time directions</p>
            </Card>

            {/* Crowd Management Feature */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crowd Management</h3>
              <p className="text-gray-600">Real-time crowd density monitoring and safe route guidance</p>
            </Card>

            {/* Lost & Found Feature */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lost & Found System</h3>
              <p className="text-gray-600">Digital registration and facial recognition for quick reunions</p>
            </Card>

            {/* Emergency Feature */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Assistance</h3>
              <p className="text-gray-600">One-tap SOS button with instant access to help</p>
            </Card>

            {/* Notifications Feature */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
              <p className="text-gray-600">Push notifications for safety advisories and updates</p>
            </Card>

            {/* Language Support Feature */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-gray-600">AI-powered chatbot with multiple language support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Navigate Safely?</h2>
          <Button 
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg text-lg"
            onClick={() => router.push('/map')}
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}
