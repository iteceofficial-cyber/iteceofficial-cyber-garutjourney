import { HeadContent, Link, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { WhatsAppFab } from '@/components/WhatsAppFab'
import { site } from '@/data/site'
import { img } from '@/lib/img'

import '../styles.css'

const title = 'Garut Journey — Explore Garut, Feel the Story.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title },
      { name: 'description', content: site.description },
      { name: 'theme-color', content: '#1F5D42' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: img('hero.png', 1200) },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,50;1,9..144,300..700,50&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TravelAgency',
          name: site.name,
          slogan: site.tagline,
          description: site.description,
          areaServed: 'Garut, West Java, Indonesia',
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-forest px-6 pt-24 text-center text-cream">
      <div>
        <p className="eyebrow !text-ember">Lost in the highlands</p>
        <h1 className="font-display mt-4 text-5xl sm:text-7xl">This trail doesn’t exist.</h1>
        <p className="mx-auto mt-5 max-w-md text-cream/70">The page you’re looking for has moved or never existed. Let’s get you back on the map.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-white">
          Back to Garut
        </Link>
      </div>
    </section>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isAdminPage = pathname.startsWith('/admin') || pathname.startsWith('/wp-admin')

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body id="top">
        {!isAdminPage && <SiteHeader overHero />}
        <main id="main">{children}</main>
        {!isAdminPage && <SiteFooter />}
        {!isAdminPage && <WhatsAppFab />}
        <Scripts />
      </body>
    </html>
  )
}
