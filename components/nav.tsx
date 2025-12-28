"use client"

import { useEffect, useState } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.slice(1))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block mt-16">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={`group flex items-center py-3 transition-all ${
                activeSection === item.href.slice(1) 
                  ? "text-cyan-400" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span
                className={`mr-4 h-px transition-all group-hover:w-16 ${
                  activeSection === item.href.slice(1) 
                    ? "w-16 bg-cyan-400" 
                    : "w-8 bg-slate-600 group-hover:bg-white"
                }`}
              />
              <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}