import { useEffect, useState, type FormEvent } from 'react'
import {
  Menu,
  X,
  Network,
  Wifi,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Sparkles,
  Gauge,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Check,
  Linkedin,
} from 'lucide-react'
import './App.css'

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

const SERVICES = [
  {
    icon: Network,
    title: 'Redes de Datos',
    description:
      'Suministro, diseño e implementación de soluciones empresariales para redes de datos de alto desempeño.',
    bullets: ['Switching y routing', 'SD-WAN', 'Segmentación y VLANs', 'Monitoreo 24/7'],
  },
  {
    icon: Wifi,
    title: 'Sistemas Inalámbricos',
    description:
      'Cobertura Wi-Fi empresarial con diseño predictivo, site-surveys y gestión en la nube.',
    bullets: ['Wi-Fi 6 / 6E', 'Controladoras cloud', 'Heatmaps y site-surveys', 'Roaming sin cortes'],
  },
  {
    icon: Server,
    title: 'Infraestructura de Datacenter',
    description:
      'Diseño e implementación de datacenters modernos: cómputo, virtualización y conectividad.',
    bullets: ['Servidores y hyperconvergencia', 'Virtualización', 'Backup y DR', 'Gabinetes y cableado'],
  },
  {
    icon: Database,
    title: 'Almacenamiento',
    description:
      'Soluciones de almacenamiento SAN, NAS y object storage para cargas críticas y datos masivos.',
    bullets: ['All-flash y híbrido', 'Replicación', 'Snapshots y retención', 'Escalamiento lineal'],
  },
  {
    icon: ShieldCheck,
    title: 'Sistemas Especiales',
    description:
      'CCTV, control de acceso, detección y otros sistemas de baja tensión integrados a tu red.',
    bullets: ['CCTV IP', 'Control de acceso', 'Detección y alarma', 'Integración con TI'],
  },
  {
    icon: Cpu,
    title: 'Soluciones con IA',
    description:
      'Automatización inteligente, analítica predictiva y agentes de IA al servicio de tu operación.',
    bullets: ['Automatización de procesos', 'Detección de anomalías', 'Chatbots y agentes', 'MLOps'],
  },
]

const PRODUCTS = [
  {
    icon: Gauge,
    title: 'Optimización de Procesos',
    description:
      'Automatización inteligente que reduce tareas repetitivas y acelera tu flujo de trabajo con IA aplicada.',
    tag: 'Automatización',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Reforzada',
    description:
      'Análisis de anomalías en tu red para identificar comportamientos inusuales y detener amenazas en tiempo real.',
    tag: 'Ciberseguridad',
  },
  {
    icon: Sparkles,
    title: 'Eficiencia y Escalabilidad',
    description:
      'Escalado automático que ajusta recursos al instante según la demanda real de tus aplicaciones.',
    tag: 'Cloud / Infra',
  },
]

const STATS = [
  { value: '12+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos entregados' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '100%', label: 'Enfoque en IA' },
]

const PARTNERS = [
  'Cisco',
  'Aruba',
  'Fortinet',
  'Dell',
  'HPE',
  'Microsoft',
  'Hikvision',
  'RSA Security',
]

function Logo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <img
      src="/rcs-logo.png"
      alt="RCS · AI Driven Solutions"
      className={className}
      loading="eager"
      decoding="async"
    />
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <Logo className="h-10 w-10" />
          <div className="leading-tight hidden sm:block">
            <div className="text-white font-semibold tracking-wide">RCS</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
              AI Driven Solutions
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold hover:bg-gold hover:text-black transition-colors"
        >
          Cotizar
          <ArrowRight className="h-4 w-4" />
        </a>

        <button
          aria-label="Abrir menú"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur">
          <ul className="px-6 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/90 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold"
              >
                Cotizar <ArrowRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-radial-glow pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            AI Driven Solutions
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Desarrollamos{' '}
            <span className="text-gold-gradient">Soluciones</span>
            <br />
            que impulsan tu negocio
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            En RCS ponemos el poder de la inteligencia artificial al servicio
            de tu infraestructura. Diseñamos e implementamos redes, datacenter,
            almacenamiento y sistemas especiales con enfoque en automatización,
            seguridad y escalabilidad.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 hover:brightness-110 transition"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 hover:border-gold hover:text-gold transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl sm:text-3xl font-semibold text-gold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-gold/30 bg-black/60 p-8 backdrop-blur-sm">
              <Logo className="h-56 w-56 sm:h-72 sm:w-72" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
}) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-white/70 text-base sm:text-lg">{description}</p>
      )}
    </div>
  )
}

function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              Soluciones de <span className="text-gold-gradient">infraestructura</span> integrales
            </>
          }
          description="Suministro, diseño e implementación de tecnología empresarial de punta a punta, con acompañamiento desde el descubrimiento hasta la operación."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 hover:border-gold/60 transition-colors"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <Check className="h-4 w-4 text-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-gold/20 transition" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="productos" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Productos"
          title={
            <>
              Plataformas basadas en <span className="text-gold-gradient">IA</span>
            </>
          }
          description="Nuestra suite de productos transforma la gestión de TI, permitiéndote anticipar problemas, automatizar tareas y tomar decisiones más inteligentes."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gold/[0.08] via-white/[0.02] to-transparent p-8"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  {p.tag}
                </span>
                <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-black">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">
                  {p.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50">
            Nuestros Partners
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm font-medium text-white/70"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-6 bg-gold/10 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/60 p-10 flex items-center justify-center">
              <Logo className="h-48 w-48" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Nosotros</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Transformación <span className="text-gold-gradient">digital</span> con más de 12 años de experiencia
          </h2>
          <p className="mt-6 text-white/75 leading-relaxed">
            En RCS llevamos más de una década impulsando la innovación en el mundo
            de la tecnología. Somos una empresa panameña especializada en
            desarrollar soluciones que ayudan a las empresas a optimizar sus
            procesos, fortalecer su seguridad y escalar su infraestructura.
          </p>
          <p className="mt-4 text-white/75 leading-relaxed">
            Hoy combinamos nuestra experiencia en infraestructura con el poder
            de la inteligencia artificial para entregar soluciones que realmente
            transforman el negocio de nuestros clientes.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              'Equipo certificado multi-fabricante',
              'Metodologías probadas de implementación',
              'Soporte local en Panamá 24/7',
              'Enfoque consultivo y acompañamiento',
            ].map((v) => (
              <li
                key={v}
                className="flex items-start gap-2 text-sm text-white/85"
              >
                <Check className="h-5 w-5 text-gold flex-none mt-0.5" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

const CONTACT_ENDPOINT = 'https://formsubmit.co/ajax/info@rcs.com.pa'

function Contact() {
  const [state, setState] = useState<SubmitState>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      company: String(data.get('company') || ''),
      email: String(data.get('email') || ''),
      message: String(data.get('message') || ''),
      _subject: 'Nueva consulta desde rcs-website',
      _template: 'table',
      _captcha: 'false',
    }

    setState('loading')
    setErrorMsg(null)

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }
      const json = (await res.json()) as { success?: string | boolean; message?: string }
      if (json.success === 'true' || json.success === true) {
        setState('success')
        form.reset()
      } else {
        throw new Error(json.message || 'No se pudo enviar el mensaje')
      }
    } catch (err) {
      setState('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.',
      )
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-24 sm:py-32 border-t border-white/5 bg-radial-glow"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Contáctanos</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            ¿Listo para llevar tu conectividad al <span className="text-gold-gradient">siguiente nivel</span>?
          </h2>
          <p className="mt-4 text-white/70">
            Cuéntanos sobre tu proyecto. Nuestro equipo te responderá en menos
            de 24 horas hábiles.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  Teléfono
                </div>
                <a
                  href="tel:+5073100945"
                  className="text-white hover:text-gold transition-colors"
                >
                  +507 310-0945
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  Email
                </div>
                <a
                  href="mailto:info@rcs.com.pa"
                  className="text-white hover:text-gold transition-colors"
                >
                  info@rcs.com.pa
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  Oficina
                </div>
                <div className="text-white">
                  Costa del Este, Financial Park Tower, Piso 17
                  <br />
                  <span className="text-white/70">Ciudad de Panamá, Panamá</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-sm"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-white/60"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs uppercase tracking-wider text-white/60"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="Tu empresa"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-white/60"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="tu@correo.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-white/60"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={state === 'loading'}
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                {state !== 'loading' && <ArrowRight className="h-4 w-4" />}
              </button>
              {state === 'success' && (
                <span className="inline-flex items-center gap-2 text-sm text-gold">
                  <Check className="h-4 w-4" />
                  ¡Mensaje enviado! Te responderemos pronto.
                </span>
              )}
              {state === 'error' && (
                <span className="text-sm text-red-400">
                  {errorMsg ?? 'No se pudo enviar el mensaje. Intenta de nuevo.'}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} RCS · AI Driven Solutions. Todos los derechos reservados.
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <a
            href="mailto:info@rcs.com.pa"
            className="hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+5073100945"
            className="hover:text-gold transition-colors"
            aria-label="Teléfono"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="hover:text-gold transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
