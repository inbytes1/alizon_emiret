"use client"

import { useEffect, useRef, useState } from 'react'
import { Butterfly } from './butterfly'
import { FloralDivider, Flower, Rose } from './flower-decorations'
import { Church, PartyPopper, Clock, MapPin, Heart, Sparkles, Calendar } from 'lucide-react'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return { ref, isVisible }
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f4fc] via-[#f0f9ff] to-[#ffffff]" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 animate-float opacity-40">
        <Flower size={80} color="#87CEEB" />
      </div>
      <div className="absolute top-20 right-16 animate-float stagger-2 opacity-40">
        <Rose size={70} color="#ADD8E6" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float stagger-3 opacity-40">
        <Rose size={60} color="#B0E0E6" />
      </div>
      <div className="absolute bottom-40 right-10 animate-float stagger-4 opacity-40">
        <Flower size={50} color="#87CEEB" />
      </div>
      
      {/* Content */}
      <div className={`relative z-20 text-center ${mounted ? 'animate-fade-in-scale' : 'opacity-0'}`}>
        <p className="text-[#5a8fa8] text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-serif font-light">
          Mis XV Años
        </p>
        
        <div className="relative inline-block">
          <Butterfly 
            className="absolute -top-8 -left-8 animate-flutter" 
            size="md" 
            color="#87CEEB"
          />
          <h1 className="font-[var(--font-script)] text-6xl md:text-8xl lg:text-9xl text-[#4a7c91] mb-6 leading-tight">
            Alizón Emiret
          </h1>
          <Butterfly 
            className="absolute -bottom-4 -right-6 animate-flutter stagger-2" 
            size="sm" 
            color="#ADD8E6"
          />
        </div>
        
        <div className="flex items-center justify-center gap-3 mt-8 mb-6">
          <Sparkles className="w-5 h-5 text-[#c4a35a] animate-sparkle" />
          <p className="text-[#6a9bb0] text-xl md:text-2xl font-serif font-light italic">
            Te invito a celebrar conmigo
          </p>
          <Sparkles className="w-5 h-5 text-[#c4a35a] animate-sparkle stagger-1" />
        </div>
        
        <div className="mt-10 animate-pulse-glow rounded-full inline-block p-4">
          <Heart className="w-8 h-8 text-[#e8a4b8] animate-float" fill="#e8a4b8" />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#87CEEB] flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#87CEEB] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export function DateSection() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <section ref={ref} className="relative py-24 px-4 bg-white">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <FloralDivider />
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <Calendar className="w-8 h-8 text-[#87CEEB]" />
          <h2 className="font-[var(--font-script)] text-5xl md:text-6xl text-[#4a7c91]">
            Guarda la Fecha
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e8f4fc] rounded-3xl p-8 md:p-12 shadow-lg border border-[#d4e8f2]">
          <p className="text-[#5a8fa8] text-2xl md:text-3xl font-serif font-light mb-4">
            Sábado
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <div className="text-center border-r border-[#d4e8f2] pr-8">
              <p className="font-[var(--font-script)] text-6xl md:text-8xl text-[#4a7c91]">11</p>
              <p className="text-[#5a8fa8] text-lg uppercase tracking-wider font-serif">Día</p>
            </div>
            <div className="text-center border-r border-[#d4e8f2] pr-8">
              <p className="font-[var(--font-script)] text-6xl md:text-8xl text-[#4a7c91]">Abril</p>
              <p className="text-[#5a8fa8] text-lg uppercase tracking-wider font-serif">Mes</p>
            </div>
            <div className="text-center">
              <p className="font-[var(--font-script)] text-6xl md:text-8xl text-[#4a7c91]">2026</p>
              <p className="text-[#5a8fa8] text-lg uppercase tracking-wider font-serif">Año</p>
            </div>
          </div>
        </div>
        
        <FloralDivider />
      </div>
    </section>
  )
}

export function ParentsSection() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-white via-[#f8fcfe] to-white">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-[var(--font-script)] text-5xl md:text-6xl text-[#4a7c91] mb-4">
          Con la bendición de mis Padres
        </h2>
        
        <p className="text-[#6a9bb0] text-lg font-serif italic mb-12">
          Quienes con amor me han guiado en este camino
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d4e8f2] hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e8f4fc] to-[#d4e8f2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-[#87CEEB]" />
            </div>
            <p className="font-[var(--font-script)] text-3xl text-[#4a7c91] mb-2">Mi Mamá</p>
            <p className="text-[#5a8fa8] text-xl font-serif">Juanita Guillermo Cerda</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#d4e8f2] hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#e8f4fc] to-[#d4e8f2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-[#87CEEB]" />
            </div>
            <p className="font-[var(--font-script)] text-3xl text-[#4a7c91] mb-2">Mi Papá</p>
            <p className="text-[#5a8fa8] text-xl font-serif">Leobardo Márquez Cordova</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CeremonySection() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-br from-[#e8f4fc] via-[#f0f9ff] to-[#e8f4fc]">
      {/* Decorative butterflies */}
      <div className="absolute top-10 right-10 animate-flutter opacity-50">
        <Butterfly size="lg" color="#87CEEB" />
      </div>
      <div className="absolute bottom-10 left-10 animate-flutter stagger-2 opacity-50">
        <Butterfly size="md" color="#ADD8E6" />
      </div>
      
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg mb-8">
          <Church className="w-12 h-12 text-[#4a7c91]" />
        </div>
        
        <h2 className="font-[var(--font-script)] text-5xl md:text-6xl text-[#4a7c91] mb-4">
          Misa de Acción de Gracias
        </h2>
        
        <p className="text-[#6a9bb0] text-lg font-serif italic mb-12">
          Te invito a acompañarme a dar gracias a Dios
        </p>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#d4e8f2]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                <Clock className="w-8 h-8 text-[#4a7c91]" />
              </div>
              <div className="text-left">
                <p className="text-[#5a8fa8] text-sm uppercase tracking-wider">Hora</p>
                <p className="font-[var(--font-script)] text-3xl text-[#4a7c91]">6:00 PM</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-[#87CEEB] to-transparent" />
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#e8f4fc] flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#4a7c91]" />
              </div>
              <div className="text-left">
                <p className="text-[#5a8fa8] text-sm uppercase tracking-wider">Lugar</p>
                <p className="font-serif text-xl text-[#4a7c91] font-medium">Iglesia del Sagrado Corazón</p>
                <p className="text-[#6a9bb0] text-sm font-serif">Ejido Santa Teresa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ReceptionSection() {
  const { ref, isVisible } = useScrollReveal()
  
  return (
    <section ref={ref} className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Decorative flowers */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-30">
        <Flower size={100} color="#87CEEB" className="animate-float" />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-30">
        <Rose size={100} color="#ADD8E6" className="animate-float stagger-3" />
      </div>
      
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#e8f4fc] to-[#d4e8f2] shadow-lg mb-8">
          <PartyPopper className="w-12 h-12 text-[#4a7c91]" />
        </div>
        
        <h2 className="font-[var(--font-script)] text-5xl md:text-6xl text-[#4a7c91] mb-4">
          Recepción
        </h2>
        
        <p className="text-[#6a9bb0] text-lg font-serif italic mb-12">
          Y después continuemos la celebración
        </p>
        
        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e8f4fc] rounded-3xl p-8 md:p-12 shadow-xl border border-[#d4e8f2]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Clock className="w-8 h-8 text-[#4a7c91]" />
              </div>
              <div className="text-left">
                <p className="text-[#5a8fa8] text-sm uppercase tracking-wider">Hora</p>
                <p className="font-[var(--font-script)] text-3xl text-[#4a7c91]">7:00 PM</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-[#87CEEB] to-transparent" />
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <MapPin className="w-8 h-8 text-[#4a7c91]" />
              </div>
              <div className="text-left">
                <p className="text-[#5a8fa8] text-sm uppercase tracking-wider">Lugar</p>
                <p className="font-serif text-xl text-[#4a7c91] font-medium">Salón Santa Teresa</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-[#c4a35a] animate-sparkle" />
          <p className="text-[#6a9bb0] font-serif italic">¡Te esperamos para festejar juntos!</p>
          <Sparkles className="w-5 h-5 text-[#c4a35a] animate-sparkle stagger-1" />
        </div>
      </div>
    </section>
  )
}

export function CountdownSection() {
  const { ref, isVisible } = useScrollReveal()
  
  // Fecha del evento: 11 de abril de 2026 a las 6:00 PM
  const targetDate = new Date('2026-04-11T18:00:00')
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now
    
    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' }
  ]
  
  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-[#e8f4fc] via-[#d4e8f2] to-[#e8f4fc]">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-[var(--font-script)] text-5xl md:text-6xl text-[#4a7c91] mb-4">
          Cuenta Regresiva
        </h2>
        <p className="text-[#6a9bb0] text-lg font-serif italic mb-12">
          Faltan...
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeUnits.map((unit, index) => (
            <div 
              key={unit.label}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#d4e8f2] hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="font-[var(--font-script)] text-5xl md:text-6xl text-[#4a7c91]">
                {unit.value.toString().padStart(2, '0')}
              </p>
              <p className="text-[#5a8fa8] text-sm uppercase tracking-wider mt-2 font-serif">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FooterSection() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-white to-[#e8f4fc]">
      <div className="max-w-4xl mx-auto text-center">
        <FloralDivider />
        
        <div className="relative inline-block mb-8">
          <Butterfly className="absolute -top-6 -left-10 animate-flutter" size="sm" color="#87CEEB" />
          <h2 className="font-[var(--font-script)] text-4xl md:text-5xl text-[#4a7c91]">
            ¡Te Espero!
          </h2>
          <Butterfly className="absolute -top-4 -right-8 animate-flutter stagger-2" size="sm" color="#ADD8E6" />
        </div>
        
        <p className="text-[#6a9bb0] font-serif text-lg mb-8 max-w-md mx-auto">
          Tu presencia es el mejor regalo que puedo recibir en este día tan especial
        </p>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-5 h-5 text-[#e8a4b8]" fill="#e8a4b8" />
          <p className="font-[var(--font-script)] text-2xl text-[#4a7c91]">Alizón Emiret</p>
          <Heart className="w-5 h-5 text-[#e8a4b8]" fill="#e8a4b8" />
        </div>
        
        <div className="decorative-line max-w-xs mx-auto mb-8" />
        
        <p className="text-[#5a8fa8] text-sm font-serif">
          Mis XV Años • 11 de Abril de 2026
        </p>
      </div>
    </footer>
  )
}
