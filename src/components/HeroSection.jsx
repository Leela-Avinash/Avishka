import React from 'react'
import ParticleCanvas from './ParticleCanvas'
import CountdownTimer from './CountdownTimer'
import { ArrowRight, Trophy, GraduationCap, Users, Building } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative h-screen md:h-[calc(100vh-3.8rem)] py-10 flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
        <ParticleCanvas />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Avishka Project Expo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Showcasing Tomorrow's Technology Today
            </p>
            
            <div className="mb-12">
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300 flex items-center justify-center gap-2 group">
                Register Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <Trophy className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold text-2xl">₹1,00,000</p>
                <p className="text-sm text-indigo-200">First Prize</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <GraduationCap className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold text-2xl">20+</p>
                <p className="text-sm text-indigo-200">Projects</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <Users className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold text-2xl">100+</p>
                <p className="text-sm text-indigo-200">Participants</p>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <Building className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold text-2xl">20+</p>
                <p className="text-sm text-indigo-200">Colleges</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection