'use client'

import { useEffect, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'

export function PostHogSuccess() {
  const posthog = usePostHog()
  const hasCaptured = useRef(false)

  useEffect(() => {
    if (hasCaptured.current) return
    posthog?.capture('early_bird_purchase_success_page')
    hasCaptured.current = true
  }, [posthog])

  return null
}
