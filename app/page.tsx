"use client"
import { Header } from "@/components/Header"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Award, Briefcase, GraduationCap, Code2, ChevronRight, Sparkles, Zap, Clock, Star } from "lucide-react"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("about")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({
    projects: 0,
    experience: 0,
    certifications: 0,
    technologies: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      const sections = ["about", "experience", "projects", "certifications", "education"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Animate stats counter
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setStats({
          projects: Math.floor(3 * progress),
          experience: Math.floor(4 * progress),
          certifications: Math.floor(3 * progress),
          technologies: Math.floor(15 * progress)
        })

        if (currentStep >= steps) clearInterval(interval)
      }, stepDuration)
    }

    setTimeout(animateStats, 500)

    // Scroll reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      animatedElements.forEach((el) => observer.observe(el))
    }, 100)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      const animatedElements = document.querySelectorAll('.animate-on-scroll')
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const projects = [
    {
      title: "FarmHub",
      description:
        "A comprehensive Flutter-based farm management application featuring livestock tracking, worker management, financial records, and health monitoring using Firebase Firestore.",
      tags: ["Flutter", "Firebase", "Dart", "Real-time DB"],
      github: "https://github.com/George233215/fam-hub",
      demoVideo: "https://drive.google.com/file/d/1AfPoZL9XYRK3h5V5Indp1dxYxmw5ku3C/view?usp=drive_link",
      demoScreenshots: "https://drive.google.com/file/d/1jnPFXMji0x6Vdzw_YYKXxHBgFjEBSnAL/view?usp=drive_link",
      impact: "Streamlined farm operations for 50+ users",
      color: "from-green-400 to-emerald-600",
      image: "/projects/farmhub.png"
    },
    {
      title: "Occupational Safety App",
      description:
        "Mobile application for workplace incident reporting and role-based safety management with offline support. Features analytics dashboard and comprehensive reporting.",
      tags: ["Flutter", "UX Design", "SQLite", "Analytics"],
      github: "https://github.com/George233215/Occupational_safety",
      demoVideo: "https://drive.google.com/file/d/1vJU3J0KT-MwlvB-bL0PxIhsgwkLASJ_n/view?usp=drive_link",
      impact: "Improved workplace safety compliance by 40%",
      demoScreenshots: "https://drive.google.com/file/d/1K5OlBYryhox4BfQLEOsBZ8uHhYReUldT/view?usp=drive_link",
      color: "from-orange-400 to-red-600",
      image: "/projects/safety-app.png"
    },
    {
      title: "Smart Kangaroo Mother Care",
      description:
        "IoT-based neonatal monitoring system using wearable sensors and microcontrollers to monitor infants' vital signs in real-time with AI-powered health alerts.",
      tags: ["IoT", "Arduino", "Flutter", "Firebase", "Health Tech"],
      github: "https://github.com/George233215/Smart_Kangaroo_Mother_Care",
      demoVideo: "https://drive.google.com/file/d/1qd2m8x58uIkuH5Wj9Jd3q0jmAS9kApuY/view?usp=drive_link",
      impact: "Real-time health monitoring for neonatal care",
      demoScreenshots: "https://drive.google.com/file/d/1bpYBcWxJ6XN8S1GH5bsDkwhWNuGyVi9c/view?usp=drive_link",
      color: "from-pink-400 to-purple-600",
      image: "/projects/kangaroo-care.png"
    },
  ]

  const experience = [
    {
      title: "Mobile App Developer (Project-Based)",
      company: "Academic & Independent Projects",
      period: "2023 – Present",
      description: "Developing Flutter-based mobile applications integrated with Firebase, focusing on real-time data handling, authentication, and user-centered UI/UX design through academic and independent projects.",
      color: "from-blue-400 to-cyan-500"

    },
    {
      title: "IoT Developer (Project-Based)",
      company: "Independent Projects",
      period: "2025 – Present",
      description: "Designed and implemented IoT-based systems using Arduino, ESP8266/ESP32, and Firebase as part of academic and independent projects, focusing on data collection, wireless communication, and real-time monitoring.",
      color: "from-purple-400 to-pink-500"

    },
    {
      title: "UI/UX Designer & Mobile Developer (Project-Based)",
      company: "Academic & Independent Projects",
      period: "2024 – Present",
      description: "Designed mobile application interfaces and implemented UI/UX designs in Flutter for academic and independent projects, focusing on usability, visual clarity, and improved user experience.",
      color: "from-cyan-400 to-blue-500"

    }
  ]

  const education = [
    {
      degree: "Bachelor of Business Information Technology",
      school: "Malawi University of Science and Technology (MUST)",
      year: "2020 - Present",
      achievements: ["Mobile Development Specialization", "IoT Innovation Project"]
    },
    {
      degree: "Malawi School Certificate of Education (MSCE)",
      school: "Mlale Seminary",
      year: "2016-2021",
      achievements: []
    }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Animated particles */}
        {isVisible && [...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
              animation: `float ${5 + (i % 10)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.1) % 5}s`,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Mouse follower glow */}
      {isVisible && (
        <div 
          className="fixed w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 -z-10"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      )}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-700/30 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header Navigation Component */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="relative">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-8">
          <div className="lg:flex lg:gap-16">
            {/* Left Column - Profile */}
            <aside className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-80 lg:flex-shrink-0 lg:flex-col lg:justify-between lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-8">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
                  
                  <div className={`relative overflow-hidden rounded-3xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/30 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                       style={{ transition: 'all 0.7s ease-out' }}>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl pointer-events-none" />
                    
                    <div className="relative w-full max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500">
                      <div className="aspect-[3/4] relative">
                        <img
                          src="projects/profile.png"
                          alt="George Chamveka"
                          className="w-full h-full object-cover object-center rounded-3xl"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                      </div>
                    </div>
                    
                    <div className="absolute top-2 left-2 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-2 right-2 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl" />
                  </div>
                  
                  {/* Available for work badge */}
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-xl shadow-blue-600/50 border border-blue-400">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                      </span>
                      Available for Work
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                    George Chamveka
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full" />
                    <h2 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                      Mobile App Developer & IT Systems Specialist
                    </h2>
                  </div>
                  <p className="max-w-md leading-relaxed text-slate-300 text-base">
                    Crafting innovative mobile experiences and IoT solutions from Malawi. 
                    Specialized in <span className="text-cyan-400 font-semibold">Flutter</span>, <span className="text-blue-400 font-semibold">Firebase</span>, and <span className="text-purple-400 font-semibold">Arduino</span>.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Code2, value: stats.projects, label: "Projects", color: "from-cyan-400 to-blue-500" },
                    { icon: Clock, value: `${stats.experience}+`, label: "Years Exp", color: "from-blue-400 to-purple-500" },
                    { icon: Award, value: stats.certifications, label: "Certificates", color: "from-purple-400 to-pink-500" },
                    { icon: Zap, value: `${stats.technologies}+`, label: "Technologies", color: "from-pink-400 to-red-500" },
                  ].map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={index}
                        className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl`} />
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-slate-400">{stat.label}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="mailto:georgechamveka@gmail.com"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/14ehKmZh7TzSH1d-Akv7IFNkF74C1TQMG/view?usp=drive_link"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-xl border border-slate-600 transition-all hover:shadow-xl hover:border-cyan-500/50 hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  {[
                    { icon: MapPin, text: "Lilongwe, Malawi", color: "from-green-400 to-emerald-500" },
                    { icon: Mail, text: "georgechamveka@gmail.com", href: "mailto:georgechamveka@gmail.com", color: "from-cyan-400 to-blue-500" },
                    { icon: Phone, text: "+265 990 994 287", href: "tel:+265990994287", color: "from-blue-400 to-purple-500" },
                  ].map((item, index) => {
                    const Icon = item.icon
                    const content = (
                      <div key={index} className="group flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-slate-300 text-sm">{item.text}</span>
                      </div>
                    )
                    
                    return "href" in item ? (
                      <a key={index} href={item.href} target={item.href?.startsWith('http') ? '_blank' : undefined} rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 flex items-center gap-4">
                {[
                  { href: "https://github.com/George233215", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/george-chamveka-811373287", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:georgechamveka@gmail.com", icon: Mail, label: "Email" },
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group w-14 h-14 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </aside>

            {/* Right Column - Content Sections */}
            <article className="w-full flex-1 space-y-20 pb-20">
              {/* About Section */}
              <section id="about" className="space-y-6 animate-on-scroll">
                <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                  <span className="w-1 h-10 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full" />
                  About
                </h2>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate Mobile Developer and IoT enthusiast based in Malawi, currently pursuing a degree in Business Information Technology at MUST. With a strong foundation in Flutter, Firebase, and IoT development, I create innovative solutions that solve real-world problems.
                  </p>
                  <p>
                    My expertise spans mobile application development, real-time database management, and hardware integration. I'm particularly interested in healthcare technology, farm automation, and workplace safety solutions.
                  </p>
                </div>

                {/* Technical Skills */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Flutter", level: 95, color: "from-blue-400 to-cyan-500" },
                      { name: "Firebase + Supabase", level: 90, color: "from-yellow-400 to-orange-500" },
                      { name: "Dart", level: 95, color: "from-cyan-400 to-blue-500" },
                      { name: "Next.js", level: 85, color: "from-green-400 to-emerald-500" },
                      { name: "TypeScript", level: 80, color: "from-teal-400 to-green-500" },
                      { name: "Java", level: 75, color: "from-blue-400 to-indigo-500" },
                      { name: "UI/UX Design", level: 88, color: "from-purple-400 to-pink-500" },
                      { name: "Git", level: 85, color: "from-orange-400 to-red-500" },
                      { name: "Tailwind CSS", level: 70, color: "from-yellow-400 to-green-500" },
                      { name: "SQLite", level: 82, color: "from-slate-400 to-slate-600" },
                      { name: "REST APIs", level: 87, color: "from-cyan-400 to-blue-500" },
                      { name: "2D animations", level: 65, color: "from-orange-400 to-amber-500" },
                      { name: "Web Development", level: 80, color: "from-indigo-400 to-purple-500" },
                    ].map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="group relative px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-300 border border-slate-700/50 hover:border-slate-600 transition-all hover:-translate-y-1 cursor-default overflow-hidden"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                        <span className="relative z-10 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Experience & Expertise</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                </div>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/20 p-6">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 blur transition-opacity duration-300`} />
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color} opacity-60 group-hover:opacity-100 transition-opacity" />
                      <div className="relative pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{exp.title}</h3>
                            <p className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>{exp.company}</p>
                          </div>
                          <span className="text-xs font-medium text-slate-400 group-hover:text-slate-300 whitespace-nowrap">{exp.period}</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                </div>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/30">
                      <div className="flex flex-col lg:flex-row gap-6 p-8">
                        {/* Project Image Section */}
                        <div className="w-full lg:w-96 flex-shrink-0">
                          <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={`${project.title} project`}
                              className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </div>

                        {/* Project Info Section */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                                <p className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mt-1`}>{project.impact}</p>
                              </div>
                            </div>
                            <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs px-3 py-1.5 bg-slate-700/60 hover:bg-slate-700 text-cyan-300 rounded-lg border border-slate-600/50 transition-colors">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-cyan-400 rounded-lg border border-slate-600/50 transition-all text-sm font-semibold">
                              <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                              Code
                            </a>
                            <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-purple-400 rounded-lg border border-slate-600/50 transition-all text-sm font-semibold">
                              <Star className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                              Demo
                            </a>
                            <a href={project.demoScreenshots} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-pink-400 rounded-lg border border-slate-600/50 transition-all text-sm font-semibold">
                              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                              Shots
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications Section */}
              <section id="certifications" className="space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Certifications & Recognition</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "React Fundamentals",
                      org: "LinkedIn Learning · Frontend Development",
                      desc: "Mastered core React concepts and components architecture",
                      href: "https://drive.google.com/file/d/1euqhSJiXGWvHFKWaQqRH7ByqkHwYSSzB/view?usp=drive_link",
                      color: "from-blue-500 to-cyan-600",
                      textColor: "text-blue-400"
                    },
                    {
                      title: "Aspire Leadership Program (ALP) Certificate",
                      org: "Aspire Institute · Leadership Development",
                      desc: "Equipped with essential leadership skills for future challenges",
                      href: "https://drive.google.com/file/d/1v65wwTDdi400rP8E3Y-bNn46ZwxmR7m1/view?usp=drive_link",
                      color: "from-purple-400 to-pink-500",
                      textColor: "text-purple-400"
                    },
                    {
                      title: "C++ & Java Programming Courses",
                      org: "Udemy · Beginner Level Certification",
                      desc: "Foundation in programming concepts and versatile languages",
                      href: "https://drive.google.com/file/d/1PzlSb4Nqucw6xGJZihs8nPU7RkqT88WK/view?usp=drive_link",
                      color: "from-emerald-400 to-green-500",
                      textColor: "text-emerald-400"
                    }
                  ].map((cert, index) => (
                    <a
                      key={index}
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/20 p-6"
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 blur transition-opacity duration-300`} />
                      <div className="relative flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg font-bold text-white group-hover:${cert.textColor} transition-colors mb-1`}>
                            {cert.title}
                          </h3>
                          <p className="text-sm text-slate-400 mb-2">{cert.org}</p>
                          <p className="text-sm text-slate-300">{cert.desc}</p>
                        </div>
                        <ExternalLink className={`w-5 h-5 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ${cert.textColor}`} />
                      </div>
                    </a>
                  ))}
                  
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-all p-6">
                    <div className="relative flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-2xl shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                        💡
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">Innovation in Healthcare Technology</h3>
                        <p className="text-sm text-slate-300">Developed Smart Kangaroo Mother Care IoT system for neonatal health monitoring with real-time vital signs tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section id="education" className="space-y-6 animate-on-scroll">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Education</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/20 p-6">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-blue-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <div className="relative pl-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{edu.degree}</h3>
                            <p className="text-cyan-400 font-semibold text-sm mt-1">{edu.school}</p>
                          </div>
                          <span className="text-xs font-medium text-slate-400 group-hover:text-slate-300 whitespace-nowrap">{edu.year}</span>
                        </div>
                        {edu.achievements.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <span key={i} className="text-xs px-3 py-1.5 bg-slate-700/60 hover:bg-slate-700 text-indigo-300 rounded-lg border border-slate-600/50 transition-colors">
                                {achievement}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}
