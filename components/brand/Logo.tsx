import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  light?: boolean
}

const sizeMap = {
  sm: 40,
  md: 48,
  lg: 64,
}

export default function Logo({ size = 'md', showText = false, light = false }: LogoProps) {
  const s = sizeMap[size]
  const primary = light ? '#FFFFFF' : '#1B3A6B'
  const gold = '#F59E0B'
  const white = '#FFFFFF'
  const textColor = light ? 'text-white' : 'text-primary'

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Master Jesus Academy Home">
      <svg
        width={s}
        height={s}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Shield / Crest shape */}
        <path
          d="M50 4L12 20V52C12 72 28 90 50 96C72 90 88 72 88 52V20L50 4Z"
          fill={primary}
          stroke={gold}
          strokeWidth="2.5"
        />

        {/* Inner shield highlight */}
        <path
          d="M50 10L18 24V52C18 69 32 85 50 90C68 85 82 69 82 52V24L50 10Z"
          fill={light ? 'rgba(255,255,255,0.08)' : '#152D54'}
        />

        {/* Rising sun / star rays at top */}
        <g opacity="0.9">
          <line x1="50" y1="22" x2="50" y2="14" stroke={gold} strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="24" x2="38" y2="17" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="58" y1="24" x2="62" y2="17" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Star / sun circle */}
        <circle cx="50" cy="30" r="7" fill={gold} />
        <circle cx="50" cy="30" r="4" fill={light ? '#152D54' : primary} />
        <circle cx="50" cy="30" r="2" fill={gold} />

        {/* Cross */}
        <rect x="47.5" y="38" width="5" height="22" rx="1" fill={white} opacity="0.95" />
        <rect x="40" y="44" width="20" height="5" rx="1" fill={white} opacity="0.95" />

        {/* Open book at bottom */}
        <g transform="translate(50,74)">
          {/* Left page */}
          <path
            d="M-2 -6C-2 -6 -4 -8 -16 -8C-16 -8 -16 6 -16 6C-4 6 -2 4 -2 4Z"
            fill={white}
            opacity="0.9"
          />
          {/* Right page */}
          <path
            d="M2 -6C2 -6 4 -8 16 -8C16 -8 16 6 16 6C4 6 2 4 2 4Z"
            fill={white}
            opacity="0.9"
          />
          {/* Spine */}
          <line x1="0" y1="-8" x2="0" y2="5" stroke={gold} strokeWidth="1.5" />
          {/* Page lines left */}
          <line x1="-13" y1="-4" x2="-5" y2="-4" stroke={primary} strokeWidth="0.7" opacity="0.4" />
          <line x1="-13" y1="-1" x2="-5" y2="-1" stroke={primary} strokeWidth="0.7" opacity="0.4" />
          <line x1="-13" y1="2" x2="-5" y2="2" stroke={primary} strokeWidth="0.7" opacity="0.4" />
          {/* Page lines right */}
          <line x1="5" y1="-4" x2="13" y2="-4" stroke={primary} strokeWidth="0.7" opacity="0.4" />
          <line x1="5" y1="-1" x2="13" y2="-1" stroke={primary} strokeWidth="0.7" opacity="0.4" />
          <line x1="5" y1="2" x2="13" y2="2" stroke={primary} strokeWidth="0.7" opacity="0.4" />
        </g>

        {/* MJA letters - small, at the bottom of the cross */}
        <text
          x="50"
          y="65"
          textAnchor="middle"
          fill={gold}
          fontSize="7"
          fontWeight="700"
          fontFamily="serif"
          letterSpacing="1"
        >
          MJA
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-serif font-bold leading-tight tracking-tight ${
            size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-xl'
          } ${textColor}`}>
            Master Jesus
          </span>
          <span className={`font-serif font-bold leading-tight tracking-tight ${
            size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-xl'
          } ${textColor}`}>
            Academy
          </span>
        </div>
      )}
    </Link>
  )
}
