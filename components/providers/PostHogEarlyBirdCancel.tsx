'use client'

import { Suspense, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { usePostHog } from 'posthog-js/react'

function EarlyBirdCancelTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()
  const hasCaptured = useRef(false)

  useEffect(() => {
    if (hasCaptured.current) return
    if (pathname !== '/') return
    if (searchParams.get('early_bird') !== 'canceled') return

    posthog?.capture('early_bird_checkout_canceled')
    hasCaptured.current = true
  }, [pathname, searchParams, posthog])

  return null
}

export function PostHogEarlyBirdCancel() {
  return (
    <Suspense fallback={null}>
      <EarlyBirdCancelTracker />
    </Suspense>
  )
}
