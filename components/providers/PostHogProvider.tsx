'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { captureUtmParams, captureDeviceType } from '@/lib/analytics'
import { MOBILE_BREAKPOINT } from '@/hooks/useIsMobile'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: '/ingest',
      ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST ?? 'https://us.posthog.com',
      defaults: '2025-11-30',
      person_profiles: 'identified_only',
      capture_pageview: 'history_change',
      capture_pageleave: 'if_capture_pageview',
    })

    captureUtmParams()
    captureDeviceType(window.innerWidth < MOBILE_BREAKPOINT)
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
