import React from 'react'
import '../App.css'

const navLinks = [
  { name: 'Blog', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Login', href: '#' },
  { name: 'Register', href: '#' }
]

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Murang'a County</div>
      <nav className="nav">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  )
}