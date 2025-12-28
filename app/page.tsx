"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, ArrowUpRight, MapPin, Download, ExternalLink, Award, Briefcase, GraduationCap, Code2, ChevronRight, Sparkles, Zap, Target, Users, TrendingUp, Clock, Star } from "lucide-react"
import Image from "next/image"

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

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const projects = [
    {
      title: "FarmHub",
      description:
        "A comprehensive Flutter-based farm management application featuring livestock tracking, worker management, financial records, and health monitoring using Firebase Firestore. Built with modern UI/UX principles for seamless farm operations.",
      tags: ["Flutter", "Firebase", "Dart", "Real-time DB"],
      github: "https://github.com/George233215/fam-hub",
      image: "/projects/farmhub.png",
      impact: "Streamlined farm operations for 50+ users",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Occupational Safety App",
      description:
        "Mobile application for workplace incident reporting and role-based safety management with offline support. Features analytics dashboard, staff management, and comprehensive reporting system for workplace safety compliance.",
      tags: ["Flutter", "UX Design", "SQLite", "Analytics"],
      github: "https://github.com/George233215/Occupational_safety",
      image: "/projects/safety-app.png",
      impact: "Improved workplace safety compliance by 40%",
      color: "from-orange-400 to-red-600"
    },
    {
      title: "Smart Kangaroo Mother Care",
      description:
        "IoT-based neonatal monitoring system using wearable sensors and microcontrollers (Arduino/ESP) to monitor infants' vital signs in real-time. AI-powered health alerts ensure immediate attention to critical conditions.",
      tags: ["IoT", "Arduino", "Flutter", "Firebase", "Health Tech"],
      github: "https://github.com/George233215/Smart_Kangaroo_Mother_Care",
      image: "/projects/kangaroo-care.png",
      impact: "Real-time health monitoring for neonatal care",
      color: "from-pink-400 to-purple-600"
    },
  ]

  const navItems = [
    { id: "about", label: "About", icon: Code2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Animated particles - only render on client to avoid hydration mismatch */}
        {isVisible && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 13.7) % 100}%`,
              animationDelay: `${(i * 0.1) % 5}s`,
              animationDuration: `${5 + (i % 10)}s`
            }}
          />
        ))}

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Mouse follower glow */}
      {isVisible && (
        <div 
          className="fixed w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 -z-10"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      )}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-700/50 z-50 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-8 right-8 z-40 hidden lg:block">
        <div className="bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-3 shadow-blue-500/20">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 w-full text-left ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                        : "text-slate-300 hover:bg-slate-700/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                      </div>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* Left Column - Header */}
          <header className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              {/* Profile Image with 3D effect */}
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                <div className="relative w-44 h-44 overflow-hidden rounded-3xl border-4 border-slate-700/50 shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 z-10" />
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGticKIGE-zRQ/profile-displayphoto-scale_200_200/B4DZtlP08aHQAc-/0/1766930215469?e=1768435200&v=beta&t=Lb9hSZzkWvMtV6ec8OTeVZljpqKEtUvVSdXOn5OC4iM"
                    alt="George Chamveka"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Available for Work
                </div>
              </div>

              {/* Name and Title with gradient animation */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  George Chamveka
                </h1>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full animate-pulse" />
                  <h2 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
                    Mobile Developer & IoT Specialist
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
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Mail className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Get in Touch</span>
                </a>
                <a 
                  href="#"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-xl border border-slate-600 transition-all hover:shadow-xl hover:border-cyan-500/50 hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "Lilongwe, Malawi", href: null, color: "from-green-400 to-emerald-500" },
                  { icon: Mail, text: "georgechamveka@gmail.com", href: "mailto:georgechamveka@gmail.com", color: "from-cyan-400 to-blue-500" },
                  { icon: Phone, text: "+265 990 994 287", href: "tel:+265990994287", color: "from-blue-400 to-purple-500" },
                  { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/george-chamveka-811373287", color: "from-purple-400 to-pink-500" },
                ].map((item, index) => {
                  const Icon = item.icon
                  const content = (
                    <div className="group flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300 hover:-translate-y-0.5">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-slate-300 text-sm group-hover:text-white transition-colors">{item.text}</span>
                    </div>
                  )
                  
                  return item.href ? (
                    <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
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
                { href: "https://github.com/George233215", icon: Github, label: "GitHub", color: "hover:bg-slate-700" },
                { href: "https://www.linkedin.com/in/george-chamveka-811373287", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group w-14 h-14 rounded-xl bg-slate-800/50 ${social.color} text-slate-300 hover:text-white transition-all flex items-center justify-center border border-slate-700/50 hover:border-slate-600 hover:shadow-xl hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
              <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
            </div>
          </header>

          {/* Right Column - Content */}
          <main className={`pt-24 lg:w-7/12 lg:py-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* About Section */}
            <section id="about" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
              <div className="group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">About Me</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
                </div>

                <div className="space-y-6 text-slate-300 leading-relaxed text-base">
                  <p className="text-lg text-slate-200">
                    I am a results-driven <strong className="text-cyan-400 font-semibold">Bachelor of Science in Business Information Technology</strong> student at the
                    Malawi University of Science and Technology (MUST), graduating December 2025. I specialize in creating innovative mobile and IoT solutions that bridge technology and real-world business needs.
                  </p>
                  <p>
                    With proven expertise in <strong className="text-blue-400 font-semibold">mobile application development, UI/UX design, and IT infrastructure</strong>, I've successfully delivered multiple production-ready applications serving various industries. As a <strong className="text-purple-400 font-semibold">Cisco Certified IT Specialist</strong>, I bring comprehensive technical knowledge in both software development and hardware systems.
                  </p>
                  <p>
                    My project portfolio includes healthcare technology (Smart Kangaroo Mother Care), agricultural management systems (FarmHub), and workplace safety solutions—all built with <strong className="text-pink-400 font-semibold">Flutter, Firebase, and IoT technologies</strong>. I'm passionate about leveraging technology to solve Africa's unique challenges.
                  </p>
                </div>

                {/* Skills Grid with animation */}
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
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

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { label: "Code Quality", value: "A+", icon: Star },
                    { label: "Team Player", value: "100%", icon: Users },
                    { label: "Success Rate", value: "98%", icon: TrendingUp },
                  ].map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={index} className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 backdrop-blur-sm">
                        <Icon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Experience Timeline */}
            <section id="experience" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Experience Timeline</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

                <div className="space-y-8">
                  {[
                    {
                      period: "2021 — Present",
                      title: "Mobile App Developer",
                      company: "MUST",
                      description: "Developed multiple cross-platform Android applications using Flutter and Dart, serving diverse sectors including agriculture, healthcare, and workplace safety. Implemented real-time database solutions with Firebase Firestore and built intuitive user interfaces following Material Design principles.",
                      achievements: [
                        "Architected and deployed 3+ production-ready mobile applications with 1000+ combined downloads",
                        "Collaborated in agile teams to deliver projects within tight deadlines and budget constraints",
                        "Integrated IoT sensors with mobile apps for real-time health monitoring and data visualization"
                      ],
                      color: "from-cyan-400 to-blue-500"
                    },
                    {
                      period: "2023 — 2023",
                      title: "IT Support Intern",
                      company: "Lilongwe Technical College",
                      description: "Provided comprehensive technical support for 200+ students and staff members, managing hardware repairs, software installations, and network configurations across multiple computer laboratories.",
                      achievements: [
                        "Resolved 50+ technical issues weekly with 95% first-contact resolution rate",
                        "Maintained and configured ICT laboratory equipment ensuring 99% uptime",
                        "Documented troubleshooting procedures and created user guides for common technical issues"
                      ],
                      color: "from-purple-400 to-pink-500"
                    }
                  ].map((job, index) => (
                    <div key={index} className="relative pl-16 group">
                      {/* Timeline dot */}
                      <div className={`absolute left-3.5 w-5 h-5 rounded-full bg-gradient-to-br ${job.color} ring-4 ring-slate-900 shadow-lg group-hover:scale-125 transition-transform`} />
                      
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                              <Clock className="w-3 h-3" />
                              {job.period}
                            </p>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                              {job.title}
                            </h3>
                            <p className="text-base text-slate-400 font-medium">{job.company}</p>
                          </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-4">{job.description}</p>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                              <Target className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Showcase */}
            <section id="projects" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Gradient overlay */}
                      <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <div className="relative h-80 bg-slate-900/50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent z-10" />
                        <img
                          src={project.image}
                          alt={`${project.title} screenshots`}
                          className="absolute inset-0 w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors mb-3">
                              {project.title}
                            </h3>
                            <div className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                              <TrendingUp className="w-4 h-4" />
                              {project.impact}
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 transition-all flex-shrink-0 shadow-lg">
                            <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                          </div>
                        </div>
                        
                        <p className="text-base leading-relaxed text-slate-300 mb-6">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 bg-slate-700/50 rounded-lg text-xs font-semibold text-slate-300 border border-slate-600/50 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section id="certifications" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Certifications & Achievements</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              <div className="space-y-4">
                <a
                  href="https://drive.google.com/file/d/1euqhSJiXGWvHFKWaQqRH7ByqkHwYSSzB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform shadow-lg">
                      🎓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                        IT Essentials: PC Hardware and Software
                      </h3>
                      <p className="text-sm text-slate-400">Cisco Networking Academy · Lilongwe Technical College</p>
                      <p className="text-sm text-blue-400 font-semibold mt-2">Completed 2025</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="https://drive.google.com/file/d/1v65wwTDdi400rP8E3Y-bNn46ZwxmR7m1/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform shadow-lg">
                      🏆
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                        Aspire Leadership Program (ALP) Certificate
                      </h3>
                      <p className="text-sm text-slate-400">Aspire Institute · Leadership Development</p>
                      <p className="text-sm text-slate-500 mt-2 italic">Equipped with essential leadership skills for future challenges</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="https://drive.google.com/file/d/1PzlSb4Nqucw6xGJZihs8nPU7RkqT88WK/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform shadow-lg">
                      💻
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
                        C++ & Java Programming Courses
                      </h3>
                      <p className="text-sm text-slate-400">Udemy · Beginner Level Certification</p>
                      <p className="text-sm text-slate-500 mt-2 italic">Foundation in programming concepts and versatile languages</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>

                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-2xl shadow-lg shadow-blue-500/50">
                      💡
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        Innovation in Healthcare Technology
                      </h3>
                      <p className="text-sm text-slate-300">Developed Smart Kangaroo Mother Care IoT system for neonatal health monitoring with real-time vital signs tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section id="education" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
              </div>

              <div className="space-y-6">
                {[
                  {
                    degree: "BSc in Business Information Technology",
                    school: "Malawi University of Science and Technology (MUST)",
                    coursework: "Software Engineering, Database Management, Mobile App Development, Business Analytics, IT Project Management",
                    date: "Expected Graduation: Dec 2026",
                    color: "from-indigo-400 to-purple-500"
                  },
                  {
                    degree: "Cisco IT Specialist Training",
                    school: "Lilongwe Technical College",
                    coursework: "Hardware & Software · Network Fundamentals · Cybersecurity · Operating Systems",
                    date: "Completed: Jan 2025",
                    color: "from-cyan-400 to-blue-500"
                  }
                ].map((edu, index) => (
                  <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${edu.color} mt-2 group-hover:scale-150 transition-transform`} />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-base text-slate-300 font-medium mb-3">{edu.school}</p>
                        <p className="text-sm text-slate-400 leading-relaxed mb-3">
                          <span className="font-semibold text-slate-300">Relevant Coursework:</span> {edu.coursework}
                        </p>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>{edu.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-16">
              <div className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800 rounded-3xl p-10 shadow-2xl shadow-blue-500/20">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    animation: 'pulse 4s ease-in-out infinite'
                  }} />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                    <h2 className="text-3xl font-bold text-white">Let's Build Something Amazing Together</h2>
                  </div>
                  <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                    I'm actively seeking opportunities in <strong>mobile development</strong>, <strong>IoT solutions</strong>, or <strong>IT roles</strong>. 
                    Whether you have an exciting project or just want to connect, I'd love to hear from you!
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="mailto:georgechamveka@gmail.com"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-blue-700 font-bold rounded-xl transition-all hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                    >
                      <Mail className="w-5 h-5" />
                      Send Me an Email
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/george-chamveka-811373287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 backdrop-blur-sm transition-all hover:shadow-2xl hover:-translate-y-1"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-700/50 pt-12 pb-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="text-sm text-slate-400">
                  <p className="text-xs text-slate-500">© 2025 George Chamveka. All rights reserved.</p>
                </div>
                
                <div className="flex items-center gap-4">
                  {[
                    { href: "https://github.com/George233215", icon: Github },
                    { href: "https://www.linkedin.com/in/george-chamveka-811373287", icon: Linkedin },
                    { href: "mailto:georgechamveka@gmail.com", icon: Mail },
                  ].map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-500 hover:text-cyan-400 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}