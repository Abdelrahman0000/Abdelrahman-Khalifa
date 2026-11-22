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
