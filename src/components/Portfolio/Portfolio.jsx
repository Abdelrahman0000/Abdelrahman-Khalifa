import React, { useContext, useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Globe from "@iconscout/react-unicons/icons/uil-globe";
import { shotThumbs } from "../../img/workThumbs2";

const shots = require.context("../../img/shots", false, /^\.\/(?!.*thumb).+\.webp$/);

const comfyParkingPreview = "data:image/webp;base64,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";

function shot(file) {
  if (file === "comfy-parking.webp") return comfyParkingPreview;
  return shots("./" + file);
}

function thumb(file) {
  if (file === "comfy-parking.webp") return shot(file);
  return shotThumbs[file.replace(/\.webp$/, ".thumb.webp")];
}

function warm(src) {
  const img = new Image();
  img.decoding = "async";
  img.src = src;
  if (img.decode) img.decode().catch(() => {});
}

const projects = [
  {
    title: "Comfy Parking",
    url: "https://parkink-plante-dashboard.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Parkink-plante-dashboard",
    image: "comfy-parking.webp",
    place: "Demo",
    tags: ["React", "Supabase", "Local demo"],
    blurb: "A parking dashboard for managing spaces, bookings and drivers. Try the demo with fictional data.",
    demoEmail: "visitor@comfy.demo",
    demoPassword: "TryParking2026",
  },
  {
    title: "Manga Reader",
    url: "https://manga-reader-dun.vercel.app",
    code: "https://github.com/Abdelrahman0000/Manga-Reader",
    image: "manga-reader.webp",
    place: "Lab",
    tags: ["React", "Vite", "RTL"],
    blurb:
      "Arabic manga reader with RTL layout, lazy chapter loading, unread tracking, and per-chapter ZIP downloads over the MangaDex API.",
  },
  {
    title: "Reefna",
    url: "https://reefna.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Reefna",
    image: "reefna.webp",
    place: "Lab",
    tags: ["JavaScript", "GSAP", "RTL"],
    blurb:
      "Arabic parallax-scroll experience about Egyptian rural life, with layered GSAP motion.",
  },
  {
    title: "Reef National Foundation",
    url: "https://rnf.sa",
    place: "KSA",
    poster: "RNF",
    tags: ["Enterprise", "Performance", "Responsive"],
    blurb:
      "Official platform of the Reef National Foundation. Enterprise-grade interface, fast loads, and a consistent experience across devices.",
  },
  {
    title: "Atam Law Firm",
    url: "https://atamlaw.com",
    place: "Legal",
    poster: "ATAM",
    tags: ["React.js", "SEO", "Mobile-First"],
    blurb:
      "Legal-services website with a clean React architecture, mobile-first layout, and an SEO-friendly page structure.",
  },
  {
    title: "Bluedana",
    url: "https://bluedana.com/",
    image: "blueDana.webp",
    place: "Live",
    tags: ["React", "React Query", "CSS Modules"],
    blurb:
      "Interactive digital platform. Server state and async UI handled with React Query and modular CSS.",
  },
  {
    title: "Liwan",
    url: "https://liwan.sa/",
    image: "liwan.webp",
    place: "KSA",
    tags: ["Production", "Responsive"],
    blurb: "Production marketing site for Liwan, built to stay sharp on every viewport.",
  },
  {
    title: "Waqah",
    url: "https://waqah.net/en",
    image: "waqah.webp",
    place: "Live",
    tags: ["Bilingual", "UI"],
    blurb: "Public web experience for Waqah, with a clear English storefront and responsive layout.",
  },
  {
    title: "Most Construction",
    url: "https://mostforconstruction.com/",
    image: "MOST.webp",
    place: "Live",
    tags: ["Corporate", "Responsive"],
    blurb: "Construction company site with a straightforward, device-ready presentation.",
  },
  {
    title: "H House",
    url: "https://www.hhouse.com.sy/",
    image: "h-house.webp",
    place: "Syria",
    tags: ["Brand", "Responsive"],
    blurb: "Brand website for H House, laid out for phones and desktops.",
  },
  {
    title: "YouTube Clone",
    url: "https://youtube-clone-three-lyart.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Youtube-clone",
    image: "youtube.webp",
    place: "Lab",
    tags: ["React", "RapidAPI", "Custom CSS"],
    blurb:
      "A functional YouTube replica: real-time video feeds, search, and channel pages through the YouTube API.",
  },
  {
    title: "NFT Market",
    url: "https://nft-market-five-xi.vercel.app/",
    code: "https://github.com/Abdelrahman0000/nft-market",
    image: "nft-market.webp",
    place: "Lab",
    tags: ["React", "Marketplace"],
    blurb: "Marketplace interface for browsing and presenting NFT collections.",
  },
  {
    title: "Heceto Commerce",
    url: "https://ecommerc-heceto.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Ecommerc-heceto",
    image: "ch.webp",
    place: "Lab",
    tags: ["React", "Shop"],
    blurb: "Commerce storefront with product browsing and a checkout-minded layout.",
  },
  {
    title: "Ecommerce",
    url: "https://ecommeerc.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Ecommeerc",
    image: "p1.webp",
    place: "Lab",
    tags: ["React", "Store"],
    blurb: "Another pass at a product catalog, cart flow, and responsive shop UI.",
  },
  {
    title: "CRM Dashboard",
    url: "https://crm-react-project.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Crm-react-project",
    image: "crm.webp",
    place: "Lab",
    tags: ["React", "Dashboard"],
    blurb: "CRM-style dashboard for scanning records, status, and daily operations.",
  },
  {
    title: "NFT Landing",
    url: "https://nft-landing-page-gold.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Nft-LandingPage",
    image: "Capture001.webp",
    place: "Lab",
    tags: ["Landing", "Motion"],
    blurb: "Campaign landing page for an NFT drop, built as a single focused scroll.",
  },
  {
    title: "Pure JS Portfolio",
    url: "https://portfolio-pure-js.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Portfolio-pure-js",
    image: "port.webp",
    place: "Lab",
    tags: ["JavaScript", "UI"],
    blurb: "Earlier portfolio built without a framework, to keep the DOM work honest.",
  },
  {
    title: "Color Generator",
    url: "https://color-generator-three-xi.vercel.app/",
    code: "https://github.com/Abdelrahman0000/color-generator",
    image: "p3.webp",
    place: "Lab",
    tags: ["Tool", "CSS"],
    blurb: "A small color tool for generating and previewing palettes.",
  },
  {
    title: "Analytics Dashboard",
    url: "https://dashboard-theta-jet.vercel.app/",
    code: "https://github.com/Abdelrahman0000/dashboard",
    image: "p4.webp",
    place: "Lab",
    tags: ["Charts", "Layout"],
    blurb: "Dashboard layout for metrics, cards, and chart-heavy screens.",
  },
  {
    title: "Jado Travel",
    url: "https://jado-landing-page.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Jado-LandingPage",
    image: "p5.webp",
    place: "Lab",
    tags: ["Landing", "Travel"],
    blurb: "Travel landing page with a destination-first hero and section rhythm.",
  },
  {
    title: "Instagram Clone",
    url: "https://instagram-clone-supabase.vercel.app/",
    code: "https://github.com/Abdelrahman0000/instegram-clone",
    image: "instagram-clone.webp",
    place: "Demo",
    tags: ["React", "Supabase", "Real-time"],
    blurb: "An Instagram clone by Abdelrahman Samer Kalefa. Supabase-backed accounts, friends, posts, likes, comments, saves and real-time chat, all seeded with fictional demo data.",
  },
  {
    title: "Netflix UI",
    url: "https://nitflix-clone-three.vercel.app/",
    code: "https://github.com/Abdelrahman0000/nitflix-clone",
    image: "4-nitflix-clone.webp",
    place: "Lab",
    tags: ["Rows", "Media"],
    blurb: "Streaming homepage study: hero, rows, and poster density.",
  },
  {
    title: "Photo Store",
    url: "https://lighthearted-chebakia-e4bb8e.netlify.app/",
    code: "https://github.com/Abdelrahman0000/Photo-Store",
    image: "p8.webp",
    place: "Lab",
    tags: ["Gallery", "Shop"],
    blurb: "Photo storefront with a gallery-led catalog.",
  },
  {
    title: "Motion Portfolio",
    url: "https://kaleidoscopic-twilight-165f13.netlify.app/",
    code: "https://github.com/Abdelrahman0000/khalifa-portfolio",
    image: "p9.webp",
    place: "Lab",
    tags: ["Showcase"],
    blurb: "An earlier personal showcase experimenting with layout and motion.",
  },
  {
    title: "CV Clone",
    url: "https://rococo-swan-3be39c.netlify.app/",
    code: "https://github.com/Abdelrahman0000/cv-clone",
    image: "p10.webp",
    place: "Lab",
    tags: ["Resume", "Layout"],
    blurb: "Resume layout rebuilt as a web page.",
  },
  {
    title: "Courses Web",
    url: "https://beamish-yeot-407126.netlify.app/",
    code: "https://github.com/Abdelrahman0000/CoursesWeb",
    image: "p11.webp",
    place: "Lab",
    tags: ["Education"],
    blurb: "Course catalog page with a clear path into each offering.",
  },
];

function StagePhoto({ file, title }) {
  const small = thumb(file);
  const full = shot(file);
  const [src, setSrc] = useState(small);

  useEffect(() => {
    let cancel = false;
    setSrc(small);
    const img = new Image();
    img.decoding = "async";
    img.src = full;
    const apply = () => {
      if (!cancel) setSrc(full);
    };
    img.onload = apply;
    if (img.decode) img.decode().then(apply).catch(() => {});
    return () => {
      cancel = true;
    };
  }, [small, full]);

  return (
    <img src={src} alt={title} decoding="async" fetchPriority="high" width="960" height="540" />
  );
}

function Rail({ reverse, active, onPick, doubled }) {
  const loop = doubled ? [...projects, ...projects] : projects;
  return (
    <div className={`rail ${reverse ? "rail-b" : "rail-a"}`}>
      <div className="rail-track">
        {loop.map((project, i) => {
          const index = i % projects.length;
          const ghost = doubled && i >= projects.length;
          return (
            <button
              type="button"
              key={`${project.title}-${i}`}
              className={index === active ? "rail-card is-active" : "rail-card"}
              onClick={() => onPick(index)}
              tabIndex={ghost ? -1 : 0}
              aria-hidden={ghost ? "true" : undefined}
            >
              {project.image ? (
                <img src={thumb(project.image)} alt="" loading="eager" decoding="async" width="320" height="180" />
              ) : (
                <span className={`mini-poster tone-${index % 3}`}>{project.poster}</span>
              )}
              <span className="rail-meta">
                <strong>{project.title}</strong>
                <em>{project.place}</em>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const rootRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [compact, setCompact] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 1045px)").matches
  );
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const paused = locked || hovering;
  const project = projects[active];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1045px)");
    const onChange = () => setCompact(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        io.disconnect();
      },
      { rootMargin: "1400px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const next = projects[(active + 1) % projects.length];
    if (next.image) warm(shot(next.image));
  }, [active]);

  useEffect(() => {
    if (!ready || paused || compact) return undefined;
    const id = setInterval(() => {
      setActive((n) => (n + 1) % projects.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused, ready, compact]);

  const step = (dir) => {
    setLocked(true);
    setActive((n) => (n + dir + projects.length) % projects.length);
  };

  return (
    <div className="portfolio" id="portfolio" ref={rootRef}>
      <div className="portfolio-head">
        <span style={{ color: darkMode ? "white" : "" }}>Selected work</span>
        <span>on a live stage</span>
        <p>Production clients first. Labs keep spinning underneath. Click any frame to freeze it.</p>
      </div>

      {ready ? (
      <>
      <div
        className="stage"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="stage-frame">
          <div className="stage-frame-inner">
            <div className="hud">
              <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              <span>{project.place}</span>
            </div>
            {project.image ? (
              <StagePhoto file={project.image} title={project.title} />
            ) : (
              <div className={`poster tone-${active % 3}`}>
                <strong>{project.poster}</strong>
                <em>{project.url.replace("https://", "")}</em>
              </div>
            )}
          </div>
        </div>

        <div className="stage-copy" key={project.title}>
          <div className="kicker">
            <i className="live-dot" />
            Now showing
          </div>
          <h2>{project.title}</h2>
          <p>{project.blurb}</p>
          {project.demoEmail && <p style={{ fontSize: "0.86rem", lineHeight: 1.9 }}>Demo email: <code>{project.demoEmail}</code><br />Demo password: <code>{project.demoPassword}</code></p>}
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className={`meter ${paused || compact ? "is-paused" : ""}`} key={`meter-${active}`} />
          <div className="stage-links">
            <a className="primary" href={project.url} target="_blank" rel="noreferrer">
              <Globe size="1.1rem" /> Live
            </a>
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer">
                <Github size="1.1rem" /> Code
              </a>
            )}
          </div>
          <div className="stage-nav">
            <button type="button" onClick={() => step(-1)} aria-label="Previous project">
              ←
            </button>
            {!compact && (
              <button type="button" onClick={() => setLocked((p) => !p)}>
                {locked ? "Play" : "Pause"}
              </button>
            )}
            <button type="button" onClick={() => step(1)} aria-label="Next project">
              →
            </button>
          </div>
        </div>
      </div>

      <Rail doubled active={active} onPick={(index) => { setActive(index); setLocked(true); }} />
      {!compact && (
        <Rail reverse doubled active={active} onPick={(index) => { setActive(index); setLocked(true); }} />
      )}
      </>
      ) : (
        <div className="portfolio-hold" aria-hidden="true" />
      )}
    </div>
  );
};

export default Portfolio;
