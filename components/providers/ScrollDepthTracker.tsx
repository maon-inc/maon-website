'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

const THRESHOLDS = [25, 50, 75, 100]

export function ScrollDepthTracker() {
  const reached = useRef(new Set<number>())

  useEffect(() => {
    let ticking = false

    const checkScrollDepth = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight <= 0 ? 100 : Math.round((scrollTop / docHeight) * 100)

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !reached.current.has(threshold)) {
          reached.current.add(threshold)
          trackScrollDepth(threshold)
        }
      }
    }

    checkScrollDepth()

    const onScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        checkScrollDepth()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
