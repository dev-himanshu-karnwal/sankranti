import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'HOME',    to: '/home' },
  { label: 'MENU',    to: '/menu' },
  { label: 'SCAN',    to: '#' },
  { label: 'REORDER', to: '#' },
  { label: 'REWARDS', to: '/reward' },
]

function PanelFooter() {
  const { pathname } = useLocation()

  return (
    <footer className="bg-surface-subtle flex justify-between items-center px-8 text-[12px] font-semibold leading-none tracking-normal text-center w-full max-w-[428px] h-[61px] mx-auto relative z-50">
      {navItems.map(({ label, to }) => {
        const isActive = pathname === to || (to === '/menu' && (pathname.startsWith('/menu') || pathname.startsWith('/category') || pathname.startsWith('/builder')))
        return (
          <Link
            key={label}
            to={to}
            className={`relative transition-colors duration-200 pb-1 ${
              isActive ? 'text-primary' : 'text-text-primary hover:text-primary'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </footer>
  )
}

export default PanelFooter