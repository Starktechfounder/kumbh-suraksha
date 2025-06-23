"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      name: "Medical Emergency",
      number: "108",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: "Police Control Room",
      number: "100",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      name: "Fire Emergency",
      number: "101",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    }
  ]

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Emergency Services</h1>
            <p className="mt-2 text-gray-600">Quick access to emergency services during Kumbh Mela</p>
          </div>

          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">{contact.number}</p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => handleEmergencyCall(contact.number)}
                >
                  Call Now
                </Button>
              </Card>
            ))}
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Emergency Guidelines</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Stay Calm</h3>
                  <p className="text-sm text-gray-600">Take deep breaths and try to remain calm during emergencies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Clear Communication</h3>
                  <p className="text-sm text-gray-600">Clearly state your location and the nature of emergency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Follow Instructions</h3>
                  <p className="text-sm text-gray-600">Listen to and follow instructions from emergency personnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
