import { useState, type ReactNode } from 'react'
import { AiOutlineHome, AiOutlineStar, AiOutlineAppstore, AiOutlineFolderOpen } from 'react-icons/ai'
import { BiEnvelope, BiUser } from 'react-icons/bi'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import './nav.css'

interface NavLink {
  href: string
  icon: ReactNode
  label: string
}

const navLinks: NavLink[] = [
  { href: '#', icon: <AiOutlineHome />, label: 'Inicio' },
  { href: '#about', icon: <BiUser />, label: 'Sobre mí' },
  { href: '#experience', icon: <AiOutlineStar />, label: 'Experiencia' },
  { href: '#services', icon: <AiOutlineAppstore />, label: 'Servicios' },
  { href: '#portfolio', icon: <AiOutlineFolderOpen />, label: 'Proyectos' },
  { href: '#contact', icon: <BiEnvelope />, label: 'Contacto' },
]

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </button>
      <nav className={menuOpen ? 'nav__menu-open' : ''}>
        {navLinks.map(({ href, icon, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => { setActiveNav(href); setMenuOpen(false) }}
            className={activeNav === href ? 'active' : ''}
            title={label}
          >
            {icon}
            <span className="nav__label">{label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
