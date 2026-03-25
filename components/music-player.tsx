"use client"

import { useState, useRef, useEffect } from 'react'
import { Music, Volume2, VolumeX } from 'lucide-react'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Intentar reproducir automáticamente al cargar la página
    if (audioRef.current) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false)) // Falla si el navegador bloquea el autoplay
      }
    }
  }, [])
  
  const togglePlay = () => {
    setHasInteracted(true)
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }
  
  return (
    <>
      {/* Elemento de audio con tu canción conectada al botón revisada para GitHub Pages */}
      <audio 
        ref={audioRef} 
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/If Only.mp3`} 
        loop 
        autoPlay 
        preload="auto" 
      />
      
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-[#d4e8f2] flex items-center justify-center hover:scale-110 transition-all duration-300 group"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <div className="relative">
          <Music 
            className={`w-6 h-6 text-[#4a7c91] transition-transform ${isPlaying ? 'animate-pulse' : ''}`} 
          />
          {!hasInteracted && (
            <span className="absolute -top-8 -left-8 bg-[#4a7c91] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Música
            </span>
          )}
        </div>
        
        {isPlaying ? (
          <Volume2 className="w-3 h-3 text-[#87CEEB] absolute bottom-1 right-1" />
        ) : (
          <VolumeX className="w-3 h-3 text-[#5a8fa8] absolute bottom-1 right-1" />
        )}
      </button>
    </>
  )
}
