import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary:
    'bg-[#0f7a4f] text-white hover:bg-[#0a5c3b] shadow-sm shadow-[#0f7a4f]/25',
  secondary: 'bg-[#5ed29c] text-[#070b0a] hover:bg-[#4fc48d] font-bold',
  outline:
    'border-2 border-[#0f7a4f] text-[#0f7a4f] bg-transparent hover:bg-[#e8f6ef]',
  ghost: 'bg-white/10 text-white border border-white/30 hover:bg-white/20',
  dark: 'bg-[#070b0a] text-white hover:bg-[#123028]',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-sm md:text-base',
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-[family-name:var(--font-inter)] font-semibold uppercase tracking-wide transition-colors ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
