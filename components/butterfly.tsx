"use client"

import { useEffect, useState } from 'react'

interface ButterflyProps {
  className?: string
  style?: React.CSSProperties
  size?: 'sm' | 'md' | 'lg'
  color?: string
  delay?: number
}
//

export function Butterfly({
  className = "",
  style = {},
  size = 'md',
  color = '#87CEEB',
  delay = 0
}: ButterflyProps) {
  const sizes = {
    sm: 24,
    md: 40,
    lg: 60
  }

  const s = sizes[size]

  return (
    <svg
      viewBox="0 0 100 100"
      width={s}
      height={s}
      className={`${className}`}
      style={{
        ...style,
        animationDelay: `${delay}s`,
        filter: 'drop-shadow(0 2px 4px rgba(135, 206, 235, 0.3))'
      }}
    >
      {/* Left wing */}
      <path
        d="M50 50 C30 30, 10 35, 15 55 C20 75, 40 70, 50 50"
        fill={color}
        opacity="0.8"
      >
        <animate
          attributeName="d"
          dur="0.5s"
          repeatCount="indefinite"
          values="
            M50 50 C30 30, 10 35, 15 55 C20 75, 40 70, 50 50;
            M50 50 C35 35, 20 40, 25 55 C30 70, 42 68, 50 50;
            M50 50 C30 30, 10 35, 15 55 C20 75, 40 70, 50 50
          "
        />
      </path>
      {/* Right wing */}
      <path
        d="M50 50 C70 30, 90 35, 85 55 C80 75, 60 70, 50 50"
        fill={color}
        opacity="0.8"
      >
        <animate
          attributeName="d"
          dur="0.5s"
          repeatCount="indefinite"
          values="
            M50 50 C70 30, 90 35, 85 55 C80 75, 60 70, 50 50;
            M50 50 C65 35, 80 40, 75 55 C70 70, 58 68, 50 50;
            M50 50 C70 30, 90 35, 85 55 C80 75, 60 70, 50 50
          "
        />
      </path>
      {/* Upper left wing */}
      <path
        d="M50 50 C35 25, 15 15, 20 35 C25 50, 45 48, 50 50"
        fill={color}
        opacity="0.6"
      >
        <animate
          attributeName="d"
          dur="0.5s"
          repeatCount="indefinite"
          values="
            M50 50 C35 25, 15 15, 20 35 C25 50, 45 48, 50 50;
            M50 50 C40 30, 25 25, 30 40 C35 52, 46 49, 50 50;
            M50 50 C35 25, 15 15, 20 35 C25 50, 45 48, 50 50
          "
        />
      </path>
      {/* Upper right wing */}
      <path
        d="M50 50 C65 25, 85 15, 80 35 C75 50, 55 48, 50 50"
        fill={color}
        opacity="0.6"
      >
        <animate
          attributeName="d"
          dur="0.5s"
          repeatCount="indefinite"
          values="
            M50 50 C65 25, 85 15, 80 35 C75 50, 55 48, 50 50;
            M50 50 C60 30, 75 25, 70 40 C65 52, 54 49, 50 50;
            M50 50 C65 25, 85 15, 80 35 C75 50, 55 48, 50 50
          "
        />
      </path>
      {/* Body */}
      <ellipse cx="50" cy="50" rx="3" ry="12" fill="#3a6b7c" />
      {/* Antennae */}
      <path d="M48 40 Q45 32, 42 28" stroke="#3a6b7c" strokeWidth="1" fill="none" />
      <path d="M52 40 Q55 32, 58 28" stroke="#3a6b7c" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function FloatingButterflies() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const butterflies = [
    { top: '10%', left: '5%', size: 'sm' as const, delay: 0, color: '#87CEEB' },
    { top: '20%', right: '10%', size: 'md' as const, delay: 0.5, color: '#ADD8E6' },
    { top: '35%', left: '8%', size: 'lg' as const, delay: 1, color: '#B0E0E6' },
    { top: '50%', right: '5%', size: 'sm' as const, delay: 1.5, color: '#87CEEB' },
    { top: '65%', left: '3%', size: 'md' as const, delay: 2, color: '#ADD8E6' },
    { top: '75%', right: '8%', size: 'sm' as const, delay: 2.5, color: '#B0E0E6' },
    { top: '85%', left: '10%', size: 'lg' as const, delay: 3, color: '#87CEEB' },
    { top: '45%', left: '2%', size: 'sm' as const, delay: 0.8, color: '#ADD8E6' },
    { top: '15%', right: '3%', size: 'md' as const, delay: 1.2, color: '#B0E0E6' },
    { top: '90%', right: '15%', size: 'sm' as const, delay: 1.8, color: '#87CEEB' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {butterflies.map((butterfly, index) => (
        <div
          key={index}
          className="absolute animate-flutter"
          style={{
            top: butterfly.top,
            left: butterfly.left,
            right: butterfly.right,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${4 + index * 0.5}s`
          }}
        >
          <Butterfly
            size={butterfly.size}
            color={butterfly.color}
            delay={butterfly.delay}
          />
        </div>
      ))}
    </div>
  )
}
