import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Menu, X, CheckCircle, Zap, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const T = {
  sage:       '#3D5A45',
  sageDark:   '#2a3e2f',
  sageLight:  '#6b9377',
  terracotta: '#D4622A',
  cream:      '#FAF7F2',
  creamMid:   '#F0EBE1',
  charcoal:   '#1A1A1A',
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const textColor = scrolled ? T.sageDark : 'rgba(250,247,242,0.9)'

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500 rounded-[50px] px-6 py-3 flex items-center justify-between"
      style={scrolled ? { background: 'rgba(250,247,242,0.75)', backdropFilter: 'blur(20px)', border: '1px solid #F0EBE1', boxShadow: '0 4px 30px rgba(42,62,47,0.1)' } : {}}
    >
      <span className="font-serif font-bold text-xl tracking-tight" style={{ color: textColor }}>
        Ridwa<span style={{ color: T.terracotta }}>.</span>
      </span>

      <div className="hidden md:flex gap-8 items-center">
        {['Story', 'Products', 'Protocol', 'Pricing'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            className="nav-link font-sans text-sm font-medium"
            style={{ color: textColor }}>{l}</a>
        ))}
      </div>

      <a href="#waitlist"
        className="btn-magnetic hidden md:flex items-center gap-2 px-5 py-2.5 rounded-[50px] text-sm font-semibold"
        style={{ background: T.terracotta, color: T.cream }}>
        <span className="btn-slide rounded-[50px]" style={{ background: T.sageDark }} />
        <span className="relative z-10">Join Waitlist</span>
        <ArrowRight size={13} className="relative z-10" />
      </a>

      <button className="md:hidden" style={{ color: textColor }} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-[2rem] p-6 shadow-xl flex flex-col gap-4 md:hidden"
          style={{ background: T.cream }}>
          {['Story', 'Products', 'Protocol', 'Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-sans text-base font-medium"
              style={{ color: T.sageDark }} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#waitlist"
            className="btn-magnetic flex items-center justify-center gap-2 px-5 py-3 rounded-[50px] text-sm font-semibold"
            style={{ background: T.terracotta, color: T.cream }}>
            <span className="btn-slide rounded-[50px]" style={{ background: T.sageDark }} />
            <span className="relative z-10">Join Waitlist</span>
          </a>
        </div>
      )}
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const refs = useRef([])
  const secRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(refs.current.filter(Boolean), {
        y: 40, opacity: 0, duration: 1.1,
        stagger: 0.12, ease: 'power3.out', delay: 0.3,
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} className="relative overflow-hidden" style={{ height: '100dvh', minHeight: 640 }} id="story">
      <img
        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1800&auto=format&fit=crop&q=80"
        alt="Fresh produce"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #2a3e2f 0%, rgba(42,62,47,0.65) 45%, rgba(42,62,47,0.15) 100%)' }} />

      <div className="absolute inset-0 flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-24">
        <div ref={el => refs.current[0] = el}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: T.terracotta }}>— Personalized Nutrition</span>
        </div>
        <h1 ref={el => refs.current[1] = el}
          className="font-sans font-bold text-4xl md:text-6xl leading-tight mt-3"
          style={{ color: '#FAF7F2' }}>
          Health is the
        </h1>
        <h1 ref={el => refs.current[2] = el}
          className="font-serif italic font-black text-6xl md:text-[9rem] leading-none"
          style={{ color: '#FAF7F2', letterSpacing: '-0.02em' }}>
          Foundation.
        </h1>
        <p ref={el => refs.current[3] = el}
          className="mt-5 font-sans text-base md:text-lg max-w-md leading-relaxed"
          style={{ color: 'rgba(250,247,242,0.7)' }}>
          Ridwa builds nutrition programs as unique as your biology — rooted in real science, made for real life.
        </p>
        <div ref={el => refs.current[4] = el} className="mt-8 flex flex-wrap gap-4">
          <a href="#waitlist"
            className="btn-magnetic flex items-center gap-2 px-7 py-4 rounded-[50px] font-semibold text-sm"
            style={{ background: T.terracotta, color: T.cream, boxShadow: '0 8px 32px rgba(212,98,42,0.4)' }}>
            <span className="btn-slide rounded-[50px]" style={{ background: T.sageDark }} />
            <span className="relative z-10">Join the Waitlist</span>
            <ArrowRight size={15} className="relative z-10" />
          </a>
          <a href="#products"
            className="btn-magnetic flex items-center gap-2 px-7 py-4 rounded-[50px] font-semibold text-sm border"
            style={{ color: '#FAF7F2', borderColor: 'rgba(250,247,242,0.3)' }}>
            <span className="btn-slide rounded-[50px]" style={{ background: 'rgba(250,247,242,0.1)' }} />
            <span className="relative z-10">Explore Products</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Feature Card 1 — Diagnostic Shuffler ────────────────────────────────────
function ShufflerCard() {
  const items = [
    { label: 'Gut Microbiome',       sub: 'Diversity: 94%',    color: T.sage },
    { label: 'Metabolic Rate',       sub: '+12% above avg',    color: T.terracotta },
    { label: 'Nutrient Absorption',  sub: 'Iron & B12 optimal', color: '#5a7c63' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const id = setInterval(() => {
      setStack(prev => { const n = [...prev]; n.unshift(n.pop()); return n })
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[2rem] h-full shadow-md border"
      style={{ background: T.cream, borderColor: T.creamMid }}>
      <div className="flex items-center gap-2">
        <CheckCircle size={15} style={{ color: T.sage }} />
        <span className="font-sans font-semibold text-sm" style={{ color: T.sageDark }}>Know Your Body</span>
      </div>
      <p className="font-sans text-xs" style={{ color: '#7a6f65' }}>Your biology, decoded and personalised.</p>
      <div className="relative" style={{ height: 120 }}>
        {stack.map((item, i) => (
          <div key={item.label}
            className="absolute left-0 right-0 rounded-[1.5rem] px-4 py-3 flex justify-between items-center"
            style={{
              background: i === 0 ? item.color : '#F0EBE1',
              top: i * 18, zIndex: stack.length - i,
              opacity: 1 - i * 0.22,
              transform: `scale(${1 - i * 0.04})`,
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
            <span className="font-sans font-semibold text-sm" style={{ color: i === 0 ? '#FAF7F2' : T.charcoal }}>{item.label}</span>
            <span className="font-mono text-xs" style={{ color: i === 0 ? 'rgba(250,247,242,0.75)' : '#9a9087' }}>{item.sub}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Feature Card 2 — Telemetry Typewriter ────────────────────────────────────
function TypewriterCard() {
  const lines = [
    'Analysing dietary patterns...',
    'Mapping macro balance:  ✓',
    'Adjusting omega-3 intake...',
    'Meal timing optimised:  ✓',
    'Personalised plan ready.',
  ]
  const [lIdx, setLIdx] = useState(0)
  const [cIdx, setCIdx] = useState(0)
  const [txt, setTxt]   = useState('')

  useEffect(() => {
    if (cIdx < lines[lIdx].length) {
      const t = setTimeout(() => { setTxt(p => p + lines[lIdx][cIdx]); setCIdx(c => c + 1) }, 45)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => { setTxt(''); setCIdx(0); setLIdx(i => (i + 1) % lines.length) }, 1200)
    return () => clearTimeout(t)
  }, [cIdx, lIdx])

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[2rem] h-full shadow-md border"
      style={{ background: T.cream, borderColor: T.creamMid }}>
      <div className="flex items-center gap-2">
        <Zap size={15} style={{ color: T.terracotta }} />
        <span className="font-sans font-semibold text-sm" style={{ color: T.sageDark }}>Eat with Intention</span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-xs" style={{ color: T.sageLight }}>
          <span className="pulse-dot w-1.5 h-1.5 rounded-full inline-block" style={{ background: T.sageLight }} />
          Live Feed
        </span>
      </div>
      <p className="font-sans text-xs" style={{ color: '#7a6f65' }}>Real-time adaptive meal intelligence.</p>
      <div className="rounded-[1.5rem] p-4 font-mono text-sm flex-1 min-h-[80px]"
        style={{ background: T.sageDark, color: '#a8c9b0' }}>
        <span style={{ color: T.terracotta }}>ridwa</span>
        <span style={{ color: '#6b9377' }}>:~$ </span>
        <span>{txt}</span>
        <span className="cursor-blink" style={{ color: T.terracotta }}>▌</span>
      </div>
    </div>
  )
}

// ── Feature Card 3 — Cursor Protocol Scheduler ───────────────────────────────
function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [active, setActive] = useState(-1)
  const [saved,  setSaved]  = useState(false)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      await new Promise(r => setTimeout(r, 600))
      for (let i = 0; i < 5; i++) {
        if (cancelled) return
        setActive(i)
        await new Promise(r => setTimeout(r, 380))
      }
      if (!cancelled) { setSaved(true); await new Promise(r => setTimeout(r, 1200)) }
      if (!cancelled) { setActive(-1); setSaved(false) }
    }
    run()
    const id = setInterval(() => { run() }, 4800)
    return () => { cancelled = true; clearInterval(id) }
  }, [])

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[2rem] h-full shadow-md border"
      style={{ background: T.cream, borderColor: T.creamMid }}>
      <div className="flex items-center gap-2">
        <TrendingUp size={15} style={{ color: T.sage }} />
        <span className="font-sans font-semibold text-sm" style={{ color: T.sageDark }}>See Real Results</span>
      </div>
      <p className="font-sans text-xs" style={{ color: '#7a6f65' }}>Consistency tracked, progress made visible.</p>
      <div className="rounded-[1.5rem] p-4" style={{ background: T.creamMid }}>
        <p className="font-mono text-xs mb-3" style={{ color: '#7a6f65' }}>Weekly Protocol</p>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 py-2 rounded-[1rem] transition-all duration-300"
              style={{
                background: i <= active ? T.sage : 'transparent',
                transform: i === active ? 'scale(0.93)' : 'scale(1)',
              }}>
              <span className="font-mono text-xs font-bold" style={{ color: i <= active ? '#FAF7F2' : '#9a9087' }}>{d}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: i <= active ? T.terracotta : '#c8c0b6' }} />
            </div>
          ))}
        </div>
        <div className="mt-3 text-center py-1.5 rounded-[1rem] font-mono text-xs font-bold transition-all duration-500"
          style={{ background: saved ? T.terracotta : '#e0d9ce', color: saved ? '#FAF7F2' : '#9a9087' }}>
          {saved ? '✓ Protocol Saved' : 'Save Protocol'}
        </div>
      </div>
    </div>
  )
}

function Features() {
  const secRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 50, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: secRef.current, start: 'top 75%' },
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} className="py-24 px-6 md:px-20" id="products">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: T.terracotta }}>— Core Pillars</span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl mt-3" style={{ color: T.sageDark }}>
            Three pillars.<br />
            <span className="font-serif italic" style={{ color: T.sage }}>One transformation.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="feature-card"><ShufflerCard /></div>
          <div className="feature-card"><TypewriterCard /></div>
          <div className="feature-card"><SchedulerCard /></div>
        </div>
      </div>
    </section>
  )
}

// ── Philosophy ────────────────────────────────────────────────────────────────
function Philosophy() {
  const secRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mword', {
        y: 28, opacity: 0, duration: 0.65, stagger: 0.07, ease: 'power2.out',
        scrollTrigger: { trigger: secRef.current, start: 'top 65%' },
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} className="relative py-32 px-6 md:px-20 overflow-hidden" style={{ background: T.sageDark }}>
      <img
        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&auto=format&fit=crop&q=70"
        alt="" className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.07 }}
      />
      <div className="relative max-w-4xl mx-auto">
        <p className="mword font-sans text-base md:text-lg mb-10" style={{ color: 'rgba(250,247,242,0.5)' }}>
          Most nutrition brands focus on: generic meal plans, calorie counting, and one-size-fits-all advice.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 items-baseline">
          {['We', 'focus', 'on:'].map((w, i) => (
            <span key={i} className="mword font-serif italic font-black text-4xl md:text-7xl" style={{ color: '#FAF7F2', letterSpacing: '-0.02em' }}>{w}</span>
          ))}
          <span className="mword font-serif italic font-black text-4xl md:text-7xl" style={{ color: T.terracotta, letterSpacing: '-0.02em' }}>your</span>
          {['unique', 'biology.'].map((w, i) => (
            <span key={i} className="mword font-serif italic font-black text-4xl md:text-7xl" style={{ color: '#FAF7F2', letterSpacing: '-0.02em' }}>{w}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Protocol ──────────────────────────────────────────────────────────────────
function RotatingMotif() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" className="rotate-motif">
      {[0,1,2,3,4,5].map(i => (
        <circle key={i} cx="65" cy="65" r={10 + i * 9}
          fill="none"
          stroke={i % 2 === 0 ? T.terracotta : T.sageLight}
          strokeWidth="1"
          strokeDasharray={i % 2 === 0 ? '4 6' : '2 8'}
          opacity={0.65 - i * 0.07}
        />
      ))}
    </svg>
  )
}

function LaserGrid() {
  return (
    <svg width="260" height="90" viewBox="0 0 260 90">
      {Array.from({ length: 10 }, (_, col) =>
        Array.from({ length: 4 }, (_, row) => (
          <circle key={`${col}-${row}`} cx={14 + col * 26} cy={12 + row * 20}
            r="2.5" fill={T.sageLight} opacity="0.5" />
        ))
      )}
      <line className="laser-line" x1="0" y1="0" x2="0" y2="90"
        stroke={T.terracotta} strokeWidth="2" opacity="0.9" />
    </svg>
  )
}

function Waveform() {
  return (
    <svg width="260" height="60" viewBox="0 0 260 60">
      <line x1="0" y1="30" x2="260" y2="30" stroke={T.sageLight} strokeWidth="0.5" opacity="0.4" />
      <path className="wave-path"
        d="M0 30 C20 30,25 10,40 10 S65 50,80 50 S105 10,120 10 S145 30,160 30 S185 50,200 50 S225 10,240 10 S255 30,260 30"
        fill="none" stroke={T.terracotta} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

const steps = [
  { num: '01', title: 'Assess', desc: 'We map your metabolic baseline, gut health indicators, and lifestyle patterns through a comprehensive intake protocol.', graphic: <RotatingMotif />, bg: T.creamMid },
  { num: '02', title: 'Design', desc: 'Our nutrition scientists build a personalised plan aligned to your goals — calibrated weekly as your body responds.', graphic: <LaserGrid />, bg: '#e6dfd5' },
  { num: '03', title: 'Transform', desc: 'Track real biomarker shifts. Adjust in real time. Sustain results that compound over months and years.', graphic: <Waveform />, bg: T.sageDark, dark: true },
]

function Protocol() {
  return (
    <section id="protocol">
      <div style={{ background: T.cream }} className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: T.terracotta }}>— The Process</span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl mt-3" style={{ color: T.sageDark }}>
            Three steps.<br />
            <span className="font-serif italic" style={{ color: T.sage }}>Infinite progress.</span>
          </h2>
        </div>
      </div>
      {steps.map((s, i) => (
        <div key={i} className="protocol-card" style={{ background: s.bg }}>
          <div className="max-w-5xl mx-auto w-full px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center py-20 md:py-0">
            <div>
              <span className="font-mono font-black" style={{ fontSize: 96, color: s.dark ? 'rgba(250,247,242,0.1)' : 'rgba(61,90,69,0.1)', lineHeight: 1 }}>{s.num}</span>
              <h3 className="font-sans font-bold text-3xl md:text-5xl mt-2" style={{ color: s.dark ? '#FAF7F2' : T.sageDark }}>{s.title}</h3>
              <p className="mt-4 font-sans text-base leading-relaxed max-w-md" style={{ color: s.dark ? 'rgba(250,247,242,0.6)' : '#6b6058' }}>{s.desc}</p>
            </div>
            <div className="flex justify-center">
              <div className="rounded-[2rem] p-12 flex items-center justify-center"
                style={{ background: s.dark ? 'rgba(250,247,242,0.05)' : 'rgba(61,90,69,0.07)', minWidth: 220, minHeight: 160 }}>
                {s.graphic}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

// ── Pricing ───────────────────────────────────────────────────────────────────
const plans = [
  { name: 'Essential', price: 'Free', period: '', cta: 'Get Started', accent: false,
    features: ['Body assessment quiz', 'Basic nutrition plan', 'Weekly email tips', 'Community access'] },
  { name: 'Performance', price: '$49', period: '/mo', cta: 'Join the Waitlist', accent: true,
    features: ['Full metabolic analysis', 'AI-adaptive meal plan', 'Monthly dietitian check-in', 'Progress tracking', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', period: '', cta: 'Contact Us', accent: false,
    features: ['Team nutrition programs', 'Corporate wellness', 'Dedicated nutrition lead', 'Custom reporting', 'SLA & onboarding'] },
]

function Pricing() {
  const secRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.price-card', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: secRef.current, start: 'top 70%' },
      })
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} className="py-24 px-6 md:px-20" id="pricing" style={{ background: T.creamMid }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: T.terracotta }}>— Plans</span>
          <h2 className="font-sans font-bold text-3xl md:text-5xl mt-3" style={{ color: T.sageDark }}>
            Invest in your<br />
            <span className="font-serif italic" style={{ color: T.sage }}>healthiest self.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map(p => (
            <div key={p.name}
              className={`price-card rounded-[2rem] p-8 flex flex-col gap-6 ${p.accent ? 'shadow-2xl scale-105' : 'shadow-md'}`}
              style={{ background: p.accent ? T.sage : T.cream, border: p.accent ? `2px solid ${T.terracotta}` : `1px solid ${T.creamMid}` }}>
              <div>
                <p className="font-mono text-xs tracking-wider uppercase mb-2"
                  style={{ color: p.accent ? 'rgba(250,247,242,0.55)' : T.sageLight }}>{p.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif font-black text-4xl" style={{ color: p.accent ? '#FAF7F2' : T.sageDark }}>{p.price}</span>
                  <span className="font-sans text-sm" style={{ color: p.accent ? 'rgba(250,247,242,0.5)' : '#9a9087' }}>{p.period}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-sans text-sm"
                    style={{ color: p.accent ? 'rgba(250,247,242,0.82)' : '#5a5248' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: p.accent ? T.terracotta : T.sage }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist"
                className="btn-magnetic mt-auto flex items-center justify-center gap-2 px-5 py-3 rounded-[50px] font-semibold text-sm"
                style={{ background: p.accent ? T.terracotta : T.creamMid, color: p.accent ? '#FAF7F2' : T.sageDark }}>
                <span className="btn-slide rounded-[50px]" style={{ background: p.accent ? T.sageDark : '#d8d0c5' }} />
                <span className="relative z-10">{p.cta}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Waitlist ──────────────────────────────────────────────────────────────────
function Waitlist() {
  const [email, setEmail] = useState('')
  const [done,  setDone]  = useState(false)
  const submit = e => { e.preventDefault(); if (email) setDone(true) }

  return (
    <section id="waitlist" className="py-24 px-6 md:px-20" style={{ background: T.cream }}>
      <div className="max-w-2xl mx-auto text-center">
        <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: T.terracotta }}>— Early Access</span>
        <h2 className="font-sans font-bold text-3xl md:text-5xl mt-3 mb-4" style={{ color: T.sageDark }}>
          Your body is unique.<br />
          <span className="font-serif italic" style={{ color: T.sage }}>Your nutrition should be too.</span>
        </h2>
        <p className="font-sans text-base mb-10" style={{ color: '#7a6f65' }}>
          Join the waitlist and be among the first to experience personalised nutrition science.
        </p>
        {done ? (
          <div className="flex items-center justify-center gap-3 py-5">
            <CheckCircle size={20} style={{ color: T.sage }} />
            <span className="font-sans font-semibold" style={{ color: T.sageDark }}>You're on the list — we'll be in touch.</span>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com" required
              className="flex-1 px-5 py-4 rounded-[50px] font-sans text-sm outline-none border"
              style={{ background: T.creamMid, borderColor: T.creamMid, color: T.charcoal }}
            />
            <button type="submit"
              className="btn-magnetic px-7 py-4 rounded-[50px] font-semibold text-sm"
              style={{ background: T.terracotta, color: T.cream }}>
              <span className="btn-slide rounded-[50px]" style={{ background: T.sageDark }} />
              <span className="relative z-10">Join Waitlist</span>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="pt-16 pb-10 px-8 md:px-20 rounded-t-[4rem]" style={{ background: T.sageDark }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-12 pb-12 border-b"
        style={{ borderColor: 'rgba(250,247,242,0.1)' }}>
        <div className="md:col-span-2">
          <span className="font-serif font-bold text-2xl" style={{ color: '#FAF7F2' }}>
            Ridwa<span style={{ color: T.terracotta }}>.</span>
          </span>
          <p className="mt-3 font-sans text-sm leading-relaxed max-w-xs"
            style={{ color: 'rgba(250,247,242,0.45)' }}>
            Personalized nutrition for optimal health — grounded in science, built for you.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="op-dot w-2 h-2 rounded-full inline-block" style={{ background: '#4ac562' }} />
            <span className="font-mono text-xs" style={{ color: 'rgba(250,247,242,0.4)' }}>System Operational</span>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(250,247,242,0.3)' }}>Navigate</p>
          {['Story', 'Products', 'Protocol', 'Pricing', 'Waitlist'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link block font-sans text-sm mb-2"
              style={{ color: 'rgba(250,247,242,0.55)' }}>{l}</a>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: 'rgba(250,247,242,0.3)' }}>Legal</p>
          {['Privacy Policy', 'Terms of Use', 'Accessibility'].map(l => (
            <a key={l} href="#" className="nav-link block font-sans text-sm mb-2"
              style={{ color: 'rgba(250,247,242,0.55)' }}>{l}</a>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-8 flex flex-col md:flex-row justify-between gap-4">
        <p className="font-mono text-xs" style={{ color: 'rgba(250,247,242,0.28)' }}>© 2026 Ridwa Nutrition. All rights reserved.</p>
        <p className="font-mono text-xs" style={{ color: 'rgba(250,247,242,0.28)' }}>Be Smart, Eat Smart.</p>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('#story')
    if (!hero) return
    const obs = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting), { threshold: 0.05 })
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
