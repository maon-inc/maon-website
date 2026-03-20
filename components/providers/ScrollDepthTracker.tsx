'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

const THRESHOLDS = [25, 50, 75, 100]

export function ScrollDepthTracker() {
  const reached = useRef(new Set<number>())

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        if (docHeight <= 0) {
          ticking = false
          return
        }

        const percent = Math.round((scrollTop / docHeight) * 100)

        for (const threshold of THRESHOLDS) {
          if (percent >= threshold && !reached.current.has(threshold)) {
            reached.current.add(threshold)
            trackScrollDepth(threshold)
          }
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
