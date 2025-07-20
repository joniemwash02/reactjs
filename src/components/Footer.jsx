import React from 'react'
import '../App.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Murang'a County Blog. All rights reserved.</span>
        <span> | Designed with <span style={{color: '#006400'}}>Murang'a</span> pride.</span>
      </div>
    </footer>
  )
}