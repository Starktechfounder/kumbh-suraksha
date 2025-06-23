"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function LostAndFoundPage() {
  const [activeTab, setActiveTab] = useState("register")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Form submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Lost & Found System</h1>
            <p className="mt-2 text-gray-600">Quick and efficient way to reunite lost individuals with their families</p>
          </div>

          <Card className="p-6">
            <Tabs defaultValue="register" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="register">Register Missing Person</TabsTrigger>
                <TabsTrigger value="search">Search Database</TabsTrigger>
              </TabsList>

              <TabsContent value="register">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="Age" required />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender</Label>
                        <select 
                          id="gender" 
                          className="w-full h-10 px-3 rounded-md border border-input bg-background"
                          required
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Physical Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Height, build, clothing, distinctive features..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="last-seen">Last Seen Location</Label>
                      <Input id="last-seen" placeholder="Where was the person last seen?" required />
                    </div>

                    <div>
                      <Label htmlFor="contact">Contact Number</Label>
                      <Input id="contact" type="tel" placeholder="Emergency contact number" required />
                    </div>

                    <div>
                      <Label htmlFor="photo">Upload Photo</Label>
                      <div className="mt-1 flex items-center">
                        <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Upload Photo
                          <input type="file" className="hidden" accept="image/*" required />
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Register Missing Person"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="search">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="search">Search by Name or Description</Label>
                    <Input 
                      id="search" 
                      placeholder="Enter name, physical description, or location..."
                      className="mb-4"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {/* Sample search results */}
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">John Doe</h3>
                          <p className="text-sm text-gray-500">Age: 35 • Male</p>
                          <p className="text-sm text-gray-500">Last seen: Sector 5, Near Medical Camp</p>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Quick Tips */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Stay Calm</h3>
                    <p className="text-sm text-gray-600">Visit the nearest help desk or police booth immediately</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Recent Photo</h3>
                    <p className="text-sm text-gray-600">Upload the most recent photo available</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
