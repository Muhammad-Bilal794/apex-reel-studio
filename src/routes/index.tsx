import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Film,
  Instagram,
  Linkedin,
  Mail,
  Maximize2,
  Menu,
  Mic2,
  Pause,
  Play,
  Quote,
  Sparkles,
  Volume2,
  VolumeX,
  WandSparkles,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { StudioButton } from "../components/StudioButton";
import showreel from "../assets/showreel.jpg";
import compareImage from "../assets/before-after.jpg";
import founder from "../assets/reel-founder.jpg";
import tech from "../assets/reel-tech.jpg";
import podcast from "../assets/reel-podcast.jpg";
import vlog from "../assets/reel-vlog.jpg";
import fitness from "../assets/reel-fitness.jpg";
import fashion from "../assets/reel-fashion.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Media — Short-Form Video Editing" },
      { name: "description", content: "High-retention short-form video editing for creators and brands ready to turn attention into revenue." },
      { property: "og:title", content: "Apex Media — Short-Form Video Editing" },
      { property: "og:description", content: "Cinematic editing, motion design, and retention strategy built for the fastest feeds on earth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reels = [
  { image: founder, category: "Talking Head", title: "The 7-Second Founder Hook", views: "8.4M" },
  { image: tech, category: "3D Motion", title: "Making Tech Feel Human", views: "4.1M" },
  { image: podcast, category: "Podcast Cut", title: "The Clip Nobody Skipped", views: "12M" },
  { image: vlog, category: "Vlog Retention", title: "48 Hours in Tokyo", views: "6.7M" },
  { image: fitness, category: "Personal Brand", title: "Built for the Replay", views: "3.9M" },
  { image: fashion, category: "Visual Story", title: "Motion Meets Editorial", views: "7.2M" },
];

const process = [
  { number: "01", title: "Hook & Pacing", copy: "We rebuild the first three seconds and cut every frame that costs attention.", icon: Zap },
  { number: "02", title: "Sound Design", copy: "Layered SFX, foley, and music cues make every transition land with intent.", icon: Mic2 },
  { number: "03", title: "Dynamic Graphics", copy: "Tracked captions, custom motion, and B-roll create constant visual momentum.", icon: WandSparkles },
  { number: "04", title: "4K Delivery", copy: "Color, mix, captions, and exports—mastered for every platform and placement.", icon: Film },
];

const testimonials = [
  { initials: "JA", name: "Jordan Avery", role: "Business Creator · 1.2M", quote: "Apex understood the rhythm of my content on day one. Our average watch time jumped 41% in the first month.", metric: "+28M views" },
  { initials: "MK", name: "Maya Kim", role: "Tech Founder · 840K", quote: "They don't just make things look good. Every edit is engineered around the idea and the audience response.", metric: "3.2× retention" },
  { initials: "LC", name: "Leo Cruz", role: "Host · 2.1M", quote: "I finally have an editing team that can match the pace in my head—and deliver before the trend moves on.", metric: "+410K followers" },
];

function Index() {
  const [activeReel, setActiveReel] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [comparison, setComparison] = useState(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeReel === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [activeReel]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveReel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-10">
          <button onClick={() => scrollTo("top")} className="flex min-w-0 items-center gap-3" aria-label="Apex Media home">
            <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground"><Film size={17} /></span>
            <span className="truncate text-[15px] font-extrabold tracking-[0.16em]">APEX<span className="text-primary">/</span>MEDIA</span>
          </button>
          <nav className="hidden items-center gap-8 text-xs font-semibold text-muted-foreground md:flex" aria-label="Main navigation">
            <button onClick={() => scrollTo("showreel")} className="nav-link">Showreel</button>
            <button onClick={() => scrollTo("work")} className="nav-link">Work</button>
            <button onClick={() => scrollTo("process")} className="nav-link">Process</button>
            <button onClick={() => scrollTo("contact")} className="nav-link">Contact</button>
            <StudioButton onClick={() => scrollTo("contact")} className="py-2.5">Book an edit <ArrowUpRight size={15} /></StudioButton>
          </nav>
          <StudioButton variant="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </StudioButton>
        </div>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-5 md:hidden"><nav className="grid gap-1">{["showreel", "work", "process", "contact"].map((item) => <button key={item} onClick={() => scrollTo(item)} className="rounded-md px-3 py-3 text-left text-sm font-semibold capitalize hover:bg-surface">{item}</button>)}</nav></div>}
      </header>

      <section id="top" className="relative px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pt-44">
        <div className="hero-halo" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-signal shadow-signal" /> Accepting 3 new creator partnerships
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-[76px]">
              Turn views into revenue with <span className="text-gradient">high-retention</span> edits.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:text-lg">
              Precision pacing, cinematic sound, and custom motion systems engineered to stop the scroll—and keep your audience watching.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StudioButton onClick={() => scrollTo("showreel")} className="w-full sm:w-auto"><Play size={16} fill="currentColor" /> Watch showreel</StudioButton>
              <StudioButton variant="outline" onClick={() => scrollTo("contact")} className="w-full sm:w-auto">Work with us <ArrowDownRight size={16} /></StudioButton>
            </div>
          </div>

          <div id="showreel" className="media-frame group relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-lg border border-border bg-surface shadow-cinema">
            <img src={showreel} alt="Editor crafting a cinematic short-form video" width={1600} height={912} className="aspect-video w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.015] group-hover:opacity-95" />
            <div className="absolute inset-0 bg-media-shade" />
            <button onClick={() => setActiveReel(0)} className="play-orbit absolute left-1/2 top-1/2 grid size-18 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition hover:scale-110" aria-label="Play showreel"><Play size={25} fill="currentColor" className="ml-1" /></button>
            <div className="absolute inset-x-4 bottom-4 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:inset-x-7 sm:bottom-6">
              <div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">2026 Showreel</p><p className="mt-1 truncate text-sm font-bold sm:text-base">60 seconds. Zero wasted frames.</p></div>
              <div className="flex h-7 items-end gap-1" aria-hidden="true">{[7,17,12,24,10,19,8,22,14,26,9,16].map((height, i) => <span key={i} className="wave-bar w-0.5 rounded-full bg-foreground/70" style={{ height, animationDelay: `${i * 80}ms` }} />)}</div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 divide-x divide-border border-y border-border py-5">
            {[['100M+', 'Views generated'], ['4.9/5', 'Client rating'], ['70+', 'Creators scaled']].map(([value, label]) => <div key={label} className="px-2 text-center"><strong className="block text-xl font-extrabold sm:text-3xl">{value}</strong><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">{label}</span></div>)}
          </div>
        </div>
      </section>

      <div className="border-y border-border bg-surface/30 py-5">
        <div className="ticker flex w-max items-center gap-12 text-sm font-extrabold tracking-[0.15em] text-muted-foreground/60">
          {["NORTHSTAR", "FOUNDERS CLUB", "FRAMEWORK", "MOMENTUM", "NEXTWAVE", "NO SIGNAL", "NORTHSTAR", "FOUNDERS CLUB", "FRAMEWORK", "MOMENTUM", "NEXTWAVE", "NO SIGNAL"].map((name, i) => <span key={`${name}-${i}`} className="flex items-center gap-12 whitespace-nowrap">{name}<span className="size-1 rounded-full bg-primary" /></span>)}
        </div>
      </div>

      <section id="work" className="section-shell">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Built for the fastest<br />feeds on earth.</h2></div><p>Performance-led vertical edits for creators who refuse to blend in.</p></div>
        <div className="reel-grid mt-12">
          {reels.map((reel, index) => (
            <button key={reel.title} onClick={() => { setActiveReel(index); setIsPlaying(true); }} className="reel-card group relative aspect-[9/16] snap-center overflow-hidden rounded-md border border-border bg-surface text-left">
              <img src={reel.image} alt={reel.title} loading="lazy" width={768} height={1376} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="shimmer" />
              <span className="absolute inset-0 bg-card-shade" />
              <span className="absolute left-3 top-3 rounded-full border border-foreground/15 bg-background/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] backdrop-blur-md">{reel.category}</span>
              <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-foreground/15 bg-background/55 backdrop-blur-md"><Play size={13} fill="currentColor" /></span>
              <span className="absolute inset-x-4 bottom-4"><span className="block text-base font-bold leading-tight">{reel.title}</span><span className="mt-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"><span>{reel.views} views</span><span>00:{18 + index * 3}</span></span></span>
            </button>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-border bg-surface/35">
        <div className="section-shell">
          <div className="section-heading"><div><p className="eyebrow">The retention formula</p><h2>Every frame earns<br />the next.</h2></div><p>Not a template. A repeatable system tuned to your voice, audience, and platform.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => <article key={step.number} className="process-card relative min-h-72 bg-background p-6"><div className="flex items-start justify-between"><span className="text-xs font-bold text-primary">{step.number}</span><step.icon size={20} className="text-muted-foreground" /></div><div className="mt-20"><h3 className="text-lg font-bold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.copy}</p></div>{step.number === "02" && <div className="absolute bottom-0 left-0 flex h-9 w-full items-end gap-1 px-6 opacity-25">{[8,18,5,25,12,31,7,20,11,27,9,17,6,22,10].map((h,i)=><span key={i} className="flex-1 bg-signal" style={{height:h}} />)}</div>}</article>)}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><div><p className="eyebrow">Inside the edit</p><h2>Raw in.<br />Remarkable out.</h2></div><p>Drag the control to see how color, lighting, and detail transform the final frame.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-surface shadow-cinema">
            <img src={compareImage} alt="Raw and color-graded footage comparison" loading="lazy" width={1600} height={912} className="h-full w-full object-cover" />
            <div className="absolute inset-y-0 right-0 overflow-hidden" style={{ width: `${100 - comparison}%` }}><img src={compareImage} alt="" width={1600} height={912} className="absolute right-0 h-full max-w-none object-cover saturate-[1.25] contrast-[1.12]" style={{ width: `${10000 / (100 - comparison || 1)}%` }} /></div>
            <div className="pointer-events-none absolute inset-y-0 w-px bg-foreground" style={{ left: `${comparison}%` }}><span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-foreground text-background"><span className="flex"><ChevronDown size={12} className="rotate-90" /><ChevronDown size={12} className="-rotate-90" /></span></span></div>
            <span className="absolute left-4 top-4 rounded-sm bg-background/70 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur">Raw</span><span className="absolute right-4 top-4 rounded-sm bg-primary px-2 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-primary-foreground">Final</span>
            <input aria-label="Before and after comparison" type="range" min="5" max="95" value={comparison} onChange={(e) => setComparison(Number(e.target.value))} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
          <div className="rounded-md border border-border bg-surface p-5">
            <div className="flex items-center justify-between border-b border-border pb-4"><div><p className="text-xs font-bold">Apex_Master_v12</p><p className="mt-1 text-[10px] text-muted-foreground">00:00:18:24 · 2160×3840</p></div><span className="size-2 rounded-full bg-signal shadow-signal" /></div>
            <div className="mt-6 space-y-4">{[
              ["VFX", "bg-primary", "w-[82%]"], ["TITLES", "bg-signal", "w-[65%]"], ["B-ROLL", "bg-chart-3", "w-[90%]"], ["SFX", "bg-chart-4", "w-[72%]"], ["AUDIO", "bg-chart-2", "w-full"],
            ].map(([label,color,width],i)=><div key={label}><div className="mb-1.5 flex justify-between text-[9px] font-bold tracking-[0.12em] text-muted-foreground"><span>{label}</span><span>0{i+1}</span></div><div className="timeline-track"><span className={`${color} ${width} block h-full rounded-[2px] opacity-80`} /></div></div>)}</div>
            <div className="mt-7 grid grid-cols-2 gap-2 text-center text-[10px]"><div className="rounded-sm border border-border p-3"><strong className="block text-base">93%</strong><span className="text-muted-foreground">Avg. retention</span></div><div className="rounded-sm border border-border p-3"><strong className="block text-base">4K</strong><span className="text-muted-foreground">Master export</span></div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/35">
        <div className="section-shell">
          <div className="section-heading"><div><p className="eyebrow">Creator approved</p><h2>Results that speak<br />louder than we do.</h2></div><p>Long-term creative partners, not one-off vendors.</p></div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="rounded-md border border-border bg-background p-6"><Quote size={24} className="text-primary" /><p className="mt-5 text-base leading-7">“{item.quote}”</p><div className="mt-8 flex items-center gap-3 border-t border-border pt-5"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-extrabold text-secondary-foreground">{item.initials}</span><div className="min-w-0"><p className="truncate text-sm font-bold">{item.name}</p><p className="truncate text-xs text-muted-foreground">{item.role}</p></div><span className="ml-auto shrink-0 text-[10px] font-bold text-signal">{item.metric}</span></div></article>)}</div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <div className="contact-halo relative overflow-hidden rounded-lg border border-border bg-surface p-6 sm:p-10 lg:p-14">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="eyebrow">Let's make it move</p><h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Ready to own<br />the feed?</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Tell us where you are and where you want to go. We'll reply with a tailored plan within 48 hours.</p><div className="mt-8 space-y-3 text-sm text-muted-foreground">{["Dedicated senior editor", "48-hour first cut", "Strategy built into every edit"].map(item=><p key={item} className="flex items-center gap-3"><span className="grid size-5 place-items-center rounded-full bg-primary/15 text-primary"><Check size={12}/></span>{item}</p>)}</div><div className="mt-10 border-t border-border pt-6"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Next onboarding</p><p className="mt-2 flex items-center gap-2 text-sm font-bold"><span className="size-2 rounded-full bg-signal shadow-signal" /> September 21 · 2 spots</p></div></div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">Full name<input required className="field" placeholder="Your name" /></label>
              <label className="field-label">Email address<input required type="email" className="field" placeholder="you@brand.com" /></label>
              <label className="field-label sm:col-span-2">Channel link<input required type="url" className="field" placeholder="https://youtube.com/@you" /></label>
              <label className="field-label">Project scope<select className="field"><option>Short-form editing</option><option>Podcast repurposing</option><option>Full content system</option><option>One-off campaign</option></select></label>
              <label className="field-label">Monthly budget<select className="field"><option>$2k – $4k</option><option>$4k – $8k</option><option>$8k – $15k</option><option>$15k+</option></select></label>
              <label className="field-label sm:col-span-2">What are we building?<textarea className="field min-h-28 resize-none" placeholder="Tell us about your content and goals..." /></label>
              <StudioButton type="submit" className="mt-1 sm:col-span-2">{sent ? <><Check size={16}/> Brief received</> : <>Send project brief <ArrowUpRight size={16}/></>}</StudioButton>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row"><div className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-sm bg-primary text-primary-foreground"><Film size={14}/></span><span className="text-xs font-extrabold tracking-[0.14em]">APEX/MEDIA</span></div><p className="text-[10px] text-muted-foreground">© 2026 Apex Media. Crafted frame by frame.</p><div className="flex gap-2">{[[Instagram,"Instagram"],[Youtube,"YouTube"],[Linkedin,"LinkedIn"],[Mail,"Email"]].map(([Icon,label])=><a key={String(label)} href={label === "Email" ? "mailto:hello@apexmedia.studio" : "#top"} aria-label={String(label)} className="grid size-9 place-items-center rounded-sm border border-border text-muted-foreground transition hover:border-primary hover:text-primary"><Icon size={15}/></a>)}</div></div></footer>

      {activeReel !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-modal p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label={`Playing ${reels[activeReel].title}`} onMouseDown={(e) => { if (e.currentTarget === e.target) setActiveReel(null); }}>
          <StudioButton variant="icon" className="absolute right-4 top-4 z-10" onClick={() => setActiveReel(null)} aria-label="Close viewer"><X size={19}/></StudioButton>
          <div className="grid w-full max-w-4xl items-center gap-5 md:grid-cols-[auto_minmax(280px,370px)_auto]">
            <StudioButton variant="icon" className="hidden md:inline-flex" onClick={() => setActiveReel((activeReel - 1 + reels.length) % reels.length)} aria-label="Previous reel"><ArrowLeft size={18}/></StudioButton>
            <div className="relative mx-auto aspect-[9/16] h-[82vh] max-h-[760px] overflow-hidden rounded-md border border-border bg-surface shadow-cinema">
              <img src={reels[activeReel].image} alt={reels[activeReel].title} width={768} height={1376} className={`h-full w-full object-cover ${isPlaying ? "ken-burns" : ""}`} />
              <div className="absolute inset-0 bg-card-shade" />
              {!isPlaying && <button className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground" onClick={() => setIsPlaying(true)} aria-label="Play"><Play fill="currentColor" /></button>}
              <div className="absolute inset-x-0 bottom-0 p-4"><div className="mb-4"><p className="text-lg font-bold">{reels[activeReel].title}</p><p className="mt-1 text-xs text-muted-foreground">{reels[activeReel].category} · {reels[activeReel].views} views</p></div><div className="mb-3 h-0.5 overflow-hidden bg-foreground/15"><span className={`block h-full bg-primary ${isPlaying ? "progress-line" : "w-1/3"}`} /></div><div className="flex items-center justify-between"><div className="flex gap-2"><StudioButton variant="icon" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause" : "Play"}>{isPlaying ? <Pause size={17}/> : <Play size={17}/>}</StudioButton><StudioButton variant="icon" onClick={() => setIsMuted(!isMuted)} aria-label={isMuted ? "Unmute" : "Mute"}>{isMuted ? <VolumeX size={17}/> : <Volume2 size={17}/>}</StudioButton></div><Maximize2 size={17}/></div></div>
            </div>
            <StudioButton variant="icon" className="hidden md:inline-flex" onClick={() => setActiveReel((activeReel + 1) % reels.length)} aria-label="Next reel"><ArrowRight size={18}/></StudioButton>
          </div>
        </div>
      )}
    </main>
  );
}