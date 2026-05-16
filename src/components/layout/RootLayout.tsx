import { Outlet } from 'react-router-dom'
import SplashCursor from '../splash_cursor'
import { SiteBackground } from '../site/SiteBackground'
import { SiteFooter } from '../site/SiteFooter'
import { SiteHeader } from '../site/SiteHeader'

export function RootLayout() {
  return (
    <div className="app-root relative min-h-screen overflow-x-hidden">
      <SiteBackground />
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-max-width px-gutter pb-24 pt-32">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
