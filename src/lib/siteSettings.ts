import { useEffect, useState } from 'react'
import { site as defaultSite } from '@/data/site'
import type { LanguageCode } from '@/lib/i18n'

const SETTINGS_KEY = 'garut_journey_site_settings_v2'
const SETTINGS_EVENT = 'garut_site_settings_updated'

export type HeaderAnimationType = 'none' | 'subtle-glow' | 'floating-particles' | 'gradient-shimmer'
export type FooterAnimationType = 'none' | 'subtle-glow' | 'floating-particles' | 'wave-motion'
export type HeroDarkness = 'light' | 'medium' | 'dark'

export interface SiteSettings {
  name: string
  tagline: string
  subtitle: string
  address: string
  whatsapp: string
  whatsappDigits: string
  email: string
  // New Appearance & Language Settings
  defaultLanguage: LanguageCode
  heroBackground: string
  heroBgDarkness: HeroDarkness
  heroZoomEffect: boolean
  headerAnimation: HeaderAnimationType
  footerAnimation: FooterAnimationType
}

export const initialSiteSettings: SiteSettings = {
  name: defaultSite.name,
  tagline: defaultSite.tagline,
  subtitle: 'Explore Swiss van Java',
  address: defaultSite.address,
  whatsapp: defaultSite.whatsapp,
  whatsappDigits: defaultSite.whatsappDigits,
  email: defaultSite.email,
  defaultLanguage: 'id',
  heroBackground: 'hero.png',
  heroBgDarkness: 'medium',
  heroZoomEffect: false,
  headerAnimation: 'subtle-glow',
  footerAnimation: 'floating-particles',
}

export function getStoredSiteSettings(): SiteSettings {
  if (typeof window === 'undefined') return initialSiteSettings
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    if (raw) {
      return { ...initialSiteSettings, ...JSON.parse(raw) }
    }
  } catch (err) {
    console.error('Failed to parse site settings:', err)
  }
  return initialSiteSettings
}

export function saveSiteSettings(settings: Partial<SiteSettings>): boolean {
  if (typeof window === 'undefined') return false
  try {
    const current = getStoredSiteSettings()
    const updated = { ...current, ...settings }
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated))
    window.dispatchEvent(new CustomEvent(SETTINGS_EVENT, { detail: updated }))
    return true
  } catch (err) {
    console.error('Failed to save site settings:', err)
    return false
  }
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(initialSiteSettings)

  useEffect(() => {
    setSettings(getStoredSiteSettings())
    const handler = () => setSettings(getStoredSiteSettings())
    window.addEventListener(SETTINGS_EVENT, handler)
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener(SETTINGS_EVENT, handler)
      window.removeEventListener('storage', handler)
    }
  }, [])

  return { settings, saveSiteSettings }
}
