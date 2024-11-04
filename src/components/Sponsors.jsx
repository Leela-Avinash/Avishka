import React from 'react'

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center p-4 pb-6 gap-6" id="themes">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                Sponsors
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-700 tracking-tight">Platinum</span>{" "} Sponsors (1 Lakh)
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ae8625] to-[#D4Ac47] tracking-tight">Gold</span>{" "} Sponsors (50 K)
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A8A9AD] to-[#C0C0C3] tracking-tight">Silver</span>{" "} Sponsors (25 K)
            </h1>
            <h1 className="dark:text-white text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CE8946] to-[#CD7F32] tracking-tight">Bronze</span>{" "} Sponsors (10 K)
            </h1>
    </div>
  )
}

export default Sponsors