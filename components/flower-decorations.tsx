"use client"

interface FlowerProps {
  className?: string
  size?: number
  color?: string
}

export function Flower({ className = "", size = 60, color = "#87CEEB" }: FlowerProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      className={className}
    >
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="30"
          rx="15"
          ry="25"
          fill={color}
          opacity={0.7 + (i * 0.05)}
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {/* Center */}
      <circle cx="50" cy="50" r="12" fill="#f4d03f" />
      <circle cx="50" cy="50" r="8" fill="#f39c12" />
    </svg>
  )
}

export function Rose({ className = "", size = 80, color = "#F8BBD9" }: FlowerProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      className={className}
    >
      {/* Outer petals */}
      <path 
        d="M50 20 C65 25, 80 40, 75 55 C70 70, 55 75, 50 75 C45 75, 30 70, 25 55 C20 40, 35 25, 50 20"
        fill={color}
        opacity="0.5"
      />
      {/* Middle petals */}
      <path 
        d="M50 28 C60 32, 70 42, 67 52 C64 62, 55 65, 50 65 C45 65, 36 62, 33 52 C30 42, 40 32, 50 28"
        fill={color}
        opacity="0.7"
      />
      {/* Inner petals */}
      <path 
        d="M50 35 C55 38, 60 45, 58 52 C56 58, 52 60, 50 60 C48 60, 44 58, 42 52 C40 45, 45 38, 50 35"
        fill={color}
        opacity="0.9"
      />
      {/* Center swirl */}
      <circle cx="50" cy="48" r="6" fill={color} />
    </svg>
  )
}

export function Leaf({ className = "", size = 40, flip = false }: { className?: string; size?: number; flip?: boolean }) {
  return (
    <svg 
      viewBox="0 0 50 100" 
      width={size * 0.5} 
      height={size}
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path 
        d="M25 5 C40 25, 45 50, 40 75 C35 90, 25 95, 25 95 C25 95, 15 90, 10 75 C5 50, 10 25, 25 5"
        fill="#7CB342"
        opacity="0.7"
      />
      <path 
        d="M25 15 L25 85"
        stroke="#558B2F"
        strokeWidth="1.5"
        fill="none"
      />
      <path 
        d="M25 30 C30 35, 35 40, 35 45"
        stroke="#558B2F"
        strokeWidth="1"
        fill="none"
      />
      <path 
        d="M25 50 C20 55, 15 60, 15 65"
        stroke="#558B2F"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

export function FloralCorner({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180'
  }
  
  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 md:w-48 md:h-48 opacity-60`}>
      <div className="relative w-full h-full">
        <Flower className="absolute top-2 left-2 animate-float" size={40} color="#87CEEB" />
        <Rose className="absolute top-8 left-10 animate-float stagger-2" size={50} color="#ADD8E6" />
        <Flower className="absolute top-16 left-4 animate-float stagger-3" size={30} color="#B0E0E6" />
        <Leaf className="absolute top-4 left-14" size={35} />
        <Leaf className="absolute top-12 left-20" size={30} flip />
      </div>
    </div>
  )
}

export function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="decorative-line flex-1 max-w-24" />
      <Flower size={30} color="#87CEEB" className="animate-float" />
      <Rose size={35} color="#ADD8E6" className="animate-float stagger-1" />
      <Flower size={30} color="#B0E0E6" className="animate-float stagger-2" />
      <div className="decorative-line flex-1 max-w-24" />
    </div>
  )
}
