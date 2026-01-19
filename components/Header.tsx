"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Code2, Briefcase, Award, GraduationCap, Sparkles, Menu, X } from "lucide-react"

interface HeaderProps {
  activeSection: string
  onNavigate: (id: string) => void
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "About", icon: Code2 },
    { id: "experience", label: "Practical Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
  ]

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false)
    onNavigate(id)
  }

  return (
    <>
      {/* Header Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-black/20' 
          : 'bg-transparent'
      }`}>
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo/Brand */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">GC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                  George Chamveka
                </h1>
                <p className="text-xs text-cyan-400">Mobile App Developer & IT Systems Specialist</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                            : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.label}</span>
                        {activeSection === item.id && (
                          <Sparkles className="w-3 h-3 animate-pulse" />
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Desktop Social Links */}
            <div className="hidden lg:flex items-center gap-3">
              {[
                { href: "https://github.com/George233215", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/george-chamveka-811373287", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:georgechamveka@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a 
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center border border-slate-700/50 hover:border-slate-600 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center text-white shadow-lg hover:bg-slate-700/80 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-slate-900/98 backdrop-blur-xl border-l border-slate-700/50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full" />
              <h2 className="text-xl font-bold text-white">Menu</h2>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-white transition-all flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 w-full text-left ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-wider flex-1">
                        {item.label}
                      </span>
                      {activeSection === item.id && (
                        <Sparkles className="w-4 h-4 animate-pulse" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Mobile Social Links */}
          <div className="pt-6 border-t border-slate-700/50">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">Connect</p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://github.com/George233215", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/george-chamveka-811373287", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:georgechamveka@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-12 h-12 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-center hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
