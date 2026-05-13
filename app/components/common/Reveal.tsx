'use client'

import { useEffect, useRef } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
}

const directionClass: Record<Direction, string> = {
  up: 'reveal',
  left: 'reveal-right',
  right: 'reveal-left',
  scale: 'reveal-scale',
  fade: 'reveal',
}

export function Reveal({ children, delay = 0, direction = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('on')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    if (ref.current) {
      ref.current.classList.add(directionClass[direction])
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, direction])

  return <div ref={ref}>{children}</div>
}
