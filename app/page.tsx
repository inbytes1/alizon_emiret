"use client"

import { FloatingButterflies } from '@/components/butterfly'
import { MusicPlayer } from '@/components/music-player'
import { 
  HeroSection, 
  DateSection, 
  ParentsSection, 
  CeremonySection, 
  ReceptionSection, 
  CountdownSection,
  FooterSection 
} from '@/components/invitation-sections'

export default function XVAnosInvitation() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Floating butterflies throughout the page */}
      <FloatingButterflies />
      
      {/* Music player */}
      <MusicPlayer />
      
      {/* Main content sections */}
      <HeroSection />
      <DateSection />
      <ParentsSection />
      <CeremonySection />
      <ReceptionSection />
      <CountdownSection />
      <FooterSection />
    </main>
  )
}
