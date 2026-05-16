import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type NavItem = { to: string; label: string; end?: boolean }

const nav: NavItem[] = [
  { to: '/', label: '首页', end: true },
  { to: '/portfolio', label: '案例' },
  { to: '/skills', label: '技能' },
  { to: '/writing', label: '写作' },
  { to: '/contact', label: '联系' },
]

function linkClass(isActive: boolean) {
  if (isActive) {
    return 'border-b-2 border-primary pb-1 font-bold text-primary font-body-md text-body-md'
  }
  return 'font-body-md font-medium text-body-md text-on-surface-variant transition-colors hover:text-primary'
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface/80 shadow-header backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-max-width items-center justify-between px-gutter">
        <NavLink
          to="/"
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
        >
          PM/AI
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => linkClass(isActive)}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-primary-container px-5 py-2 font-body-md text-body-md font-semibold text-on-primary-container shadow-[0_0_15px_rgba(94,106,210,0.3)] transition-all hover:scale-[1.02] active:scale-95 md:px-6"
          >
            「下载简历」
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-on-surface md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-surface/95 px-gutter py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-body-md font-medium ${isActive ? 'bg-primary/10 text-primary' : 'text-on-surface-variant'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
