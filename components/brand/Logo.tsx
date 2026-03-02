import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  light?: boolean
}

const sizeMap = {
  sm: 42,
  md: 50,
  lg: 64,
}

export default function Logo({ size = 'md', showText = false, light = false }: LogoProps) {
  const s = sizeMap[size]
  const textColor = light ? 'text-white' : 'text-primary'

  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Master Jesus Academy Home">
      <div
        className={`overflow-hidden rounded-full border ${light ? 'border-white/30 bg-white/10' : 'border-primary/15 bg-white'} shadow-sm`}
        style={{ width: s, height: s }}
      >
        <Image
          src="/images/school/logo.jpeg"
          alt="Master Jesus Academy logo"
          width={s}
          height={s}
          className="h-full w-full object-cover"
          priority={size === 'lg'}
        />
      </div>

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
