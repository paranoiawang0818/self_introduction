import { useEffect, useMemo, useState } from 'react';
import anime from 'animejs';
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Handshake,
  Images,
  Languages,
  Mail,
  MessageCircle,
  Mic2,
  Phone,
  Terminal,
  Youtube,
  Zap,
  type LucideIcon
} from 'lucide-react';
import { content, type CardItem, type ContactItem, type Language, type SimpleItem, type SiteContent, type Stat } from './data/content';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'zh';
  }

  const stored = window.localStorage.getItem('site-language');
  return stored === 'en' || stored === 'zh' ? stored : 'zh';
};

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    window.localStorage.setItem('site-language', language);
  }, [language]);

  useCyberAnimations(language);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <BackgroundSystem />
      <Nav copy={copy} language={language} onToggleLanguage={toggleLanguage} />
      <main>
        <Hero copy={copy} />
        <Snapshot copy={copy} />
        <Research copy={copy} />
        <Projects copy={copy} />
        <Communication copy={copy} />
        <PhotoWall copy={copy} />
        <Help copy={copy} />
        <Connect copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}

function useCyberAnimations(language: Language) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(reducedMotionQuery).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll('.js-reveal').forEach((element) => element.classList.add('is-visible'));
      document.querySelectorAll<HTMLElement>('.js-stat-value').forEach((element) => {
        element.textContent = formatNumber(Number(element.dataset.target), Number(element.dataset.decimals || 0), element.dataset.suffix || '');
      });
      return undefined;
    }

    const heroTimeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 850
    });

    heroTimeline
      .add({
        targets: '.js-hero-kicker',
        opacity: [0, 1],
        translateY: [16, 0]
      })
      .add(
        {
          targets: '.js-hero-title',
          opacity: [0, 1],
          translateX: [-12, 0],
          skewX: [-7, 0]
        },
        '-=520'
      )
      .add(
        {
          targets: '.js-hero-copy',
          opacity: [0, 1],
          translateY: [16, 0],
          delay: anime.stagger(80)
        },
        '-=420'
      );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.classList.add('is-visible');
          anime({
            targets: target,
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 650,
            easing: 'easeOutCubic'
          });
          revealObserver.unobserve(target);
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.js-reveal').forEach((element) => revealObserver.observe(element));

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const target = Number(element.dataset.target);
          const decimals = Number(element.dataset.decimals || 0);
          const suffix = element.dataset.suffix || '';
          const state = { value: 0 };

          anime({
            targets: state,
            value: target,
            duration: 1300,
            easing: 'easeOutExpo',
            update: () => {
              element.textContent = formatNumber(state.value, decimals, suffix);
            },
            complete: () => {
              element.textContent = formatNumber(target, decimals, suffix);
            }
          });

          statObserver.unobserve(element);
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll('.js-stat-value').forEach((element) => statObserver.observe(element));

    return () => {
      heroTimeline.pause();
      revealObserver.disconnect();
      statObserver.disconnect();
      anime.remove('.js-hero-kicker');
      anime.remove('.js-hero-title');
      anime.remove('.js-hero-copy');
      anime.remove('.js-reveal');
    };
  }, [language]);
}

function formatNumber(value: number, decimals: number, suffix: string) {
  const number = decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString('en-US');
  return `${number}${suffix}`;
}

function BackgroundSystem() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-cyber-grid bg-[length:52px_52px] opacity-80" />
      <div className="circuit-field absolute inset-0" />
      <div className="signal-sweep absolute inset-0" />
      <div className="scanline-overlay absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}

function Nav({ copy, language, onToggleLanguage }: { copy: SiteContent; language: Language; onToggleLanguage: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-3 font-accent text-sm uppercase text-accent focus-ring">
          <span className="grid h-9 w-9 place-items-center border border-accent/70 text-accent shadow-neon-sm cyber-chamfer-sm">
            <Terminal className="h-4 w-4" aria-hidden="true" />
          </span>
          <span>{copy.nav.brand}</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {copy.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link focus-ring">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 font-accent text-xs uppercase text-accent sm:flex" aria-label={copy.nav.status}>
            <span className="h-2 w-2 animate-pulse bg-accent shadow-neon-sm" />
            {copy.nav.status}
          </div>
          <button type="button" className="cyber-button cyber-button-outline min-w-20" onClick={onToggleLanguage} aria-label={`Switch language. Current language: ${language}`}>
            <Languages className="h-4 w-4" aria-hidden="true" />
            {copy.nav.languageToggle}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero({ copy }: { copy: SiteContent }) {
  return (
    <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28">
      <div className="relative z-10">
        <p className="js-hero-kicker mb-5 font-accent text-sm uppercase text-accent opacity-0">{copy.hero.kicker}</p>
        <h1 className="js-hero-title cyber-glitch max-w-4xl font-display text-[2.55rem] font-black uppercase leading-tight opacity-0 sm:text-5xl md:text-7xl">
          <span className="cyber-glitch-line" data-text={copy.hero.name}>
            {copy.hero.name}
          </span>
          <span className="cyber-glitch-line block text-gradient" data-text={copy.hero.alias}>
            {copy.hero.alias}
          </span>
        </h1>
        <p className="js-hero-copy mt-6 max-w-2xl font-accent text-base uppercase text-accentTertiary opacity-0 md:text-lg">
          <span className="terminal-prefix">{copy.hero.role}</span>
        </p>
        <p className="js-hero-copy mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-foreground opacity-0 md:text-2xl">{copy.hero.headline}</p>
        <p className="js-hero-copy mt-5 max-w-2xl text-base leading-8 text-mutedForeground opacity-0 md:text-lg">{copy.hero.description}</p>

        <div className="js-hero-copy mt-8 flex flex-wrap gap-3 opacity-0">
          {copy.hero.keywords.map((keyword) => (
            <span key={keyword} className="cyber-tag">
              {keyword}
            </span>
          ))}
        </div>

        <div className="js-hero-copy mt-10 flex flex-col gap-3 opacity-0 sm:flex-row">
          <a href="#projects" className="cyber-button cyber-button-primary">
            <Code2 className="h-5 w-5" aria-hidden="true" />
            {copy.hero.primaryCta}
          </a>
          <a href="#contact" className="cyber-button cyber-button-secondary">
            <Mail className="h-5 w-5" aria-hidden="true" />
            {copy.hero.secondaryCta}
          </a>
        </div>
      </div>

      <aside className="js-hero-copy hero-hud relative opacity-0 lg:mt-8" aria-label="Profile system panel">
        <div className="hud-line">
          <span>IDENT</span>
          <strong>PARANOIA.WANG</strong>
        </div>
        <div className="hud-line">
          <span>MODE</span>
          <strong>RESEARCH / BUILD</strong>
        </div>
        <div className="hud-line">
          <span>SIGNAL</span>
          <strong>AI AUTOMATION</strong>
        </div>
        <div className="hero-terminal mt-8">
          <p>&gt; boot profile_node</p>
          <p>&gt; load learning_systems</p>
          <p>&gt; connect research_channel</p>
          <p>
            &gt; status <span className="text-accent">online</span>
            <span className="blink-cursor">_</span>
          </p>
        </div>
      </aside>
    </section>
  );
}

function Snapshot({ copy }: { copy: SiteContent }) {
  return (
    <section className="section-shell" aria-labelledby="snapshot-title">
      <SectionHeader eyebrow={copy.snapshot.eyebrow} title={copy.snapshot.title} intro={copy.snapshot.intro} id="snapshot-title" icon={Activity} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.snapshot.stats.map((stat) => (
          <StatCard key={`${stat.label}-${stat.detail}`} stat={stat} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <article className="js-reveal cyber-card cyber-card-hover p-5">
      <div className="font-display text-3xl font-black text-accent md:text-4xl">
        <span className="js-stat-value" data-target={stat.value} data-decimals={stat.decimals || 0} data-suffix={stat.suffix || ''}>
          0
        </span>
      </div>
      <h3 className="mt-3 font-accent text-sm uppercase text-foreground">{stat.label}</h3>
      <p className="mt-2 text-sm leading-6 text-mutedForeground">{stat.detail}</p>
    </article>
  );
}

function Research({ copy }: { copy: SiteContent }) {
  return (
    <section id="research" className="section-shell" aria-labelledby="research-title">
      <SectionHeader eyebrow={copy.research.eyebrow} title={copy.research.title} intro={copy.research.intro} id="research-title" icon={BrainCircuit} />
      <div className="grid gap-5 lg:grid-cols-3">
        {copy.research.items.map((item) => (
          <FeatureCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Projects({ copy }: { copy: SiteContent }) {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-title">
      <SectionHeader eyebrow={copy.projects.eyebrow} title={copy.projects.title} intro={copy.projects.intro} id="projects-title" icon={Cpu} />
      <div className="mb-5 flex items-center gap-3 font-accent text-sm uppercase text-accent">
        <Zap className="h-4 w-4" aria-hidden="true" />
        {copy.projects.featuredLabel}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {copy.projects.featured.map((item) => (
          <FeatureCard key={item.title} item={item} large />
        ))}
      </div>

      <div className="mt-12 mb-5 flex items-center gap-3 font-accent text-sm uppercase text-accentSecondary">
        <Terminal className="h-4 w-4" aria-hidden="true" />
        {copy.projects.labLabel}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {copy.projects.experiments.map((item) => (
          <SimpleCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Communication({ copy }: { copy: SiteContent }) {
  return (
    <section id="communication" className="section-shell" aria-labelledby="communication-title">
      <SectionHeader eyebrow={copy.communication.eyebrow} title={copy.communication.title} intro={copy.communication.intro} id="communication-title" icon={Mic2} />
      <div className="grid gap-4 md:grid-cols-2">
        {copy.communication.items.map((item) => (
          <SimpleCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function PhotoWall({ copy }: { copy: SiteContent }) {
  const photos = useMemo(() => [...copy.photoWall.photos, ...copy.photoWall.photos], [copy.photoWall.photos]);

  return (
    <section className="section-shell overflow-hidden" aria-labelledby="photo-title">
      <SectionHeader eyebrow={copy.photoWall.eyebrow} title={copy.photoWall.title} intro={copy.photoWall.intro} id="photo-title" icon={Images} />
      <div className="photo-marquee js-reveal">
        <div className="photo-track">
          {photos.map((photo, index) => (
            <figure className="photo-frame" key={`${photo.src}-${index}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.classList.add('hidden');
                }}
              />
              <figcaption>{String((index % copy.photoWall.photos.length) + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Help({ copy }: { copy: SiteContent }) {
  return (
    <section className="section-shell" aria-labelledby="help-title">
      <SectionHeader eyebrow={copy.help.eyebrow} title={copy.help.title} intro={copy.help.intro} id="help-title" icon={BookOpen} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {copy.help.items.map((item) => (
          <SimpleCard key={item.title} item={item} compact />
        ))}
      </div>
    </section>
  );
}

function Connect({ copy }: { copy: SiteContent }) {
  return (
    <section className="section-shell" aria-labelledby="connect-title">
      <SectionHeader eyebrow={copy.connect.eyebrow} title={copy.connect.title} intro={copy.connect.intro} id="connect-title" icon={Handshake} />
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="js-reveal cyber-card terminal-card p-6">
          <p className="font-accent text-sm uppercase text-accent">&gt; feedback_policy</p>
          <p className="mt-5 text-xl font-semibold leading-9 text-foreground">{copy.connect.promise}</p>
          <span className="blink-cursor mt-4 inline-block text-accent">_</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {copy.connect.targets.map((target) => (
            <div key={target} className="js-reveal cyber-card p-5">
              <p className="terminal-prefix text-sm leading-7 text-mutedForeground">{target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ copy }: { copy: SiteContent }) {
  return (
    <section id="contact" className="section-shell pb-24" aria-labelledby="contact-title">
      <SectionHeader eyebrow={copy.contact.eyebrow} title={copy.contact.title} intro={copy.contact.intro} id="contact-title" icon={Mail} />
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4 md:grid-cols-2">
          {copy.contact.items.map((item) => (
            <ContactLine key={`${item.label}-${item.value}`} item={item} />
          ))}
        </div>

        <aside className="js-reveal cyber-card holographic-card p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-accent text-sm uppercase text-accent">{copy.contact.qrHint}</p>
            <MessageCircle className="h-5 w-5 text-accent" aria-hidden="true" />
          </div>
          <div className="qr-frame">
            <img src="/assets/qrcode.jpg" alt="WeChat QR code" loading="lazy" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function ContactLine({ item }: { item: ContactItem }) {
  const Icon = contactIcons[item.kind] || ExternalLink;
  const contentNode = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center border border-accent/50 text-accent cyber-chamfer-sm">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-accent text-xs uppercase text-mutedForeground">{item.label}</span>
        <span className="mt-1 block break-all text-sm font-semibold text-foreground">{item.value}</span>
      </span>
      {item.href ? <ArrowUpRight className="ml-auto h-4 w-4 text-accent" aria-hidden="true" /> : null}
    </>
  );

  if (item.href) {
    return (
      <a className="js-reveal contact-line focus-ring" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
        {contentNode}
      </a>
    );
  }

  return <div className="js-reveal contact-line">{contentNode}</div>;
}

function FeatureCard({ item, large = false }: { item: CardItem; large?: boolean }) {
  const article = (
    <article className={`js-reveal cyber-card cyber-card-hover relative p-6 ${large ? 'min-h-[360px]' : ''}`}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-accent text-xs uppercase text-accent">{item.meta}</p>
          <h3 className="mt-3 font-display text-xl font-bold uppercase leading-8 text-foreground">{item.title}</h3>
        </div>
        {item.status ? <span className="status-chip">{item.status}</span> : null}
      </div>
      <p className="text-sm leading-7 text-mutedForeground">{item.description}</p>
      <ul className="mt-5 space-y-3">
        {item.points.map((point) => (
          <li key={point} className="terminal-prefix text-sm leading-6 text-foreground/90">
            {point}
          </li>
        ))}
      </ul>
      <TagList tags={item.tags} />
    </article>
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className="block focus-ring">
        {article}
      </a>
    );
  }

  return article;
}

function SimpleCard({ item, compact = false }: { item: SimpleItem; compact?: boolean }) {
  return (
    <article className={`js-reveal cyber-card cyber-card-hover p-5 ${compact ? 'min-h-[220px]' : ''}`}>
      {item.meta ? <p className="font-accent text-xs uppercase text-accentTertiary">{item.meta}</p> : null}
      <h3 className="mt-3 font-display text-lg font-bold uppercase leading-7 text-foreground">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-mutedForeground">{item.description}</p>
      {item.tags ? <TagList tags={item.tags} /> : null}
    </article>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="mini-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, intro, id, icon: Icon }: { eyebrow: string; title: string; intro: string; id: string; icon: LucideIcon }) {
  return (
    <div className="js-reveal mb-10 max-w-3xl">
      <div className="mb-4 flex items-center gap-3 font-accent text-sm uppercase text-accent">
        <span className="grid h-9 w-9 place-items-center border border-accent/60 shadow-neon-sm cyber-chamfer-sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        {eyebrow}
      </div>
      <h2 id={id} className="font-display text-3xl font-black uppercase leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-base leading-8 text-mutedForeground md:text-lg">{intro}</p> : null}
    </div>
  );
}

function Footer({ copy }: { copy: SiteContent }) {
  return (
    <footer className="border-t border-border/70 px-4 py-10 text-center font-accent text-xs uppercase text-mutedForeground sm:px-6 lg:px-8">
      <p>{copy.footer.line}</p>
    </footer>
  );
}

const contactIcons: Partial<Record<ContactItem['kind'], LucideIcon>> = {
  phone: Phone,
  mail: Mail,
  github: Github,
  youtube: Youtube,
  x: ExternalLink,
  wechat: MessageCircle
};

export default App;
