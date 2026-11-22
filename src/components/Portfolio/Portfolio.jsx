import React, { useContext, useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Globe from "@iconscout/react-unicons/icons/uil-globe";
import { shotThumbs } from "../../img/shotThumbs";

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
    url: "https://instgrame.netlify.app/",
    code: "https://github.com/Abdelrahman0000/instegram-clone",
    image: "p6.webp",
    place: "Lab",
    tags: ["Feed", "UI"],
    blurb: "Social feed replica focused on posts, chrome, and mobile proportions.",
  },
  {
    title: "Netflix UI",
    url: "https://youthful-heisenberg-1b6a3a.netlify.app/",
    code: "https://github.com/Abdelrahman0000/Nitflix",
    image: "p7.webp",
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
