import { NavLink } from 'react-router-dom'

type NavItem = { to: string; label: string; end?: boolean }

const nav: NavItem[] = [
  { to: '/', label: '首页', end: true },
  { to: '/portfolio', label: '案例' },
  { to: '/skills', label: '技能' },
  { to: '/writing', label: '写作' },
  { to: '/contact', label: '联系' },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full border-t border-white/5 bg-surface py-12">
      <div className="mx-auto flex max-w-max-width flex-col items-center justify-between gap-6 px-gutter md:flex-row">
        <div className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
          PM/AI
        </div>
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {nav.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `font-label-mono text-label-mono transition-colors ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="font-label-mono text-label-mono text-on-surface-variant/50">
          使用 Framer 与 AI 搭建
        </div>
      </div>
    </footer>
  )
}
