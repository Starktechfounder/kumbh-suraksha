"use client"

export function EmergencySOS() {
  const handleEmergency = () => {
    alert('Emergency SOS Triggered!')
  }

  return (
    <button 
      className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full shadow-lg flex items-center space-x-2 transition-transform hover:scale-105"
      onClick={handleEmergency}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
      <span>SOS</span>
    </button>
  )
}
