import React, { useContext, useEffect, useState } from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Globe from "@iconscout/react-unicons/icons/uil-globe";

import MOST from "../../img/MOST.webp";
import Ecommerce1 from "../../img/p1.webp";
import Crm from "../../img/crm.webp";
import NftMarket from "../../img/nft-market.webp";
import Port from "../../img/port.webp";
import Waqah from "../../img/waqah.webp";
import BlueDana from "../../img/blueDana.webp";
import Liwan from "../../img/liwan.webp";
import HHouse from "../../img/h-house.webp";
import Nft from "../../img/Capture001.webp";
import Color from "../../img/p3.webp";
import Dashboard from "../../img/p4.webp";
import Trav from "../../img/p5.webp";
import Instgrame from "../../img/p6.webp";
import Netf from "../../img/p7.webp";
import Phot from "../../img/p8.webp";
import Youtube from "../../img/youtube.webp";
import Mov from "../../img/p9.webp";
import Ch from "../../img/ch.webp";
import Cv from "../../img/p10.webp";
import Cour from "../../img/p11.webp";

const projects = [
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
    image: BlueDana,
    place: "Live",
    tags: ["React", "React Query", "CSS Modules"],
    blurb:
      "Interactive digital platform. Server state and async UI handled with React Query and modular CSS.",
  },
  {
    title: "Liwan",
    url: "https://liwan.sa/",
    image: Liwan,
    place: "KSA",
    tags: ["Production", "Responsive"],
    blurb: "Production marketing site for Liwan, built to stay sharp on every viewport.",
  },
  {
    title: "Waqah",
    url: "https://waqah.net/en",
    image: Waqah,
    place: "Live",
    tags: ["Bilingual", "UI"],
    blurb: "Public web experience for Waqah, with a clear English storefront and responsive layout.",
  },
  {
    title: "Most Construction",
    url: "https://mostforconstruction.com/",
    image: MOST,
    place: "Live",
    tags: ["Corporate", "Responsive"],
    blurb: "Construction company site with a straightforward, device-ready presentation.",
  },
  {
    title: "H House",
    url: "https://www.hhouse.com.sy/",
    image: HHouse,
    place: "Syria",
    tags: ["Brand", "Responsive"],
    blurb: "Brand website for H House, laid out for phones and desktops.",
  },
  {
    title: "YouTube Clone",
    url: "https://youtube-clone-three-lyart.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Youtube-clone",
    image: Youtube,
    place: "Lab",
    tags: ["React", "RapidAPI", "Custom CSS"],
    blurb:
      "A functional YouTube replica: real-time video feeds, search, and channel pages through the YouTube API.",
  },
  {
    title: "NFT Market",
    url: "https://nft-market-five-xi.vercel.app/",
    code: "https://github.com/Abdelrahman0000/nft-market",
    image: NftMarket,
    place: "Lab",
    tags: ["React", "Marketplace"],
    blurb: "Marketplace interface for browsing and presenting NFT collections.",
  },
  {
    title: "Heceto Commerce",
    url: "https://ecommerc-heceto.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Ecommerc-heceto",
    image: Ch,
    place: "Lab",
    tags: ["React", "Shop"],
    blurb: "Commerce storefront with product browsing and a checkout-minded layout.",
  },
  {
    title: "Ecommerce",
    url: "https://ecommeerc.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Ecommeerc",
    image: Ecommerce1,
    place: "Lab",
    tags: ["React", "Store"],
    blurb: "Another pass at a product catalog, cart flow, and responsive shop UI.",
  },
  {
    title: "CRM Dashboard",
    url: "https://crm-react-project.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Crm-react-project",
    image: Crm,
    place: "Lab",
    tags: ["React", "Dashboard"],
    blurb: "CRM-style dashboard for scanning records, status, and daily operations.",
  },
  {
    title: "NFT Landing",
    url: "https://nft-landing-page-gold.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Nft-LandingPage",
    image: Nft,
    place: "Lab",
    tags: ["Landing", "Motion"],
    blurb: "Campaign landing page for an NFT drop, built as a single focused scroll.",
  },
  {
    title: "Pure JS Portfolio",
    url: "https://portfolio-pure-js.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Portfolio-pure-js",
    image: Port,
    place: "Lab",
    tags: ["JavaScript", "UI"],
    blurb: "Earlier portfolio built without a framework, to keep the DOM work honest.",
  },
  {
    title: "Color Generator",
    url: "https://color-generator-three-xi.vercel.app/",
    code: "https://github.com/Abdelrahman0000/color-generator",
    image: Color,
    place: "Lab",
    tags: ["Tool", "CSS"],
    blurb: "A small color tool for generating and previewing palettes.",
  },
  {
    title: "Analytics Dashboard",
    url: "https://dashboard-theta-jet.vercel.app/",
    code: "https://github.com/Abdelrahman0000/dashboard",
    image: Dashboard,
    place: "Lab",
    tags: ["Charts", "Layout"],
    blurb: "Dashboard layout for metrics, cards, and chart-heavy screens.",
  },
  {
    title: "Jado Travel",
    url: "https://jado-landing-page.vercel.app/",
    code: "https://github.com/Abdelrahman0000/Jado-LandingPage",
    image: Trav,
    place: "Lab",
    tags: ["Landing", "Travel"],
    blurb: "Travel landing page with a destination-first hero and section rhythm.",
  },
  {
    title: "Instagram Clone",
    url: "https://instgrame.netlify.app/",
    code: "https://github.com/Abdelrahman0000/instegram-clone",
    image: Instgrame,
    place: "Lab",
    tags: ["Feed", "UI"],
    blurb: "Social feed replica focused on posts, chrome, and mobile proportions.",
  },
  {
    title: "Netflix UI",
    url: "https://youthful-heisenberg-1b6a3a.netlify.app/",
    code: "https://github.com/Abdelrahman0000/Nitflix",
    image: Netf,
    place: "Lab",
    tags: ["Rows", "Media"],
    blurb: "Streaming homepage study: hero, rows, and poster density.",
  },
  {
    title: "Photo Store",
    url: "https://lighthearted-chebakia-e4bb8e.netlify.app/",
    code: "https://github.com/Abdelrahman0000/Photo-Store",
    image: Phot,
    place: "Lab",
    tags: ["Gallery", "Shop"],
    blurb: "Photo storefront with a gallery-led catalog.",
  },
  {
    title: "Motion Portfolio",
    url: "https://kaleidoscopic-twilight-165f13.netlify.app/",
    code: "https://github.com/Abdelrahman0000/khalifa-portfolio",
    image: Mov,
    place: "Lab",
    tags: ["Showcase"],
    blurb: "An earlier personal showcase experimenting with layout and motion.",
  },
  {
    title: "CV Clone",
    url: "https://rococo-swan-3be39c.netlify.app/",
    code: "https://github.com/Abdelrahman0000/cv-clone",
    image: Cv,
    place: "Lab",
    tags: ["Resume", "Layout"],
    blurb: "Resume layout rebuilt as a web page.",
  },
  {
    title: "Courses Web",
    url: "https://beamish-yeot-407126.netlify.app/",
    code: "https://github.com/Abdelrahman0000/CoursesWeb",
    image: Cour,
    place: "Lab",
    tags: ["Education"],
    blurb: "Course catalog page with a clear path into each offering.",
  },
];

function Rail({ reverse, active, onPick }) {
  const loop = [...projects, ...projects];
  return (
    <div className={`rail ${reverse ? "rail-b" : "rail-a"}`}>
      <div className="rail-track">
        {loop.map((project, i) => {
          const index = i % projects.length;
          const ghost = i >= projects.length;
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
                <img src={project.image} alt="" />
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
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const paused = locked || hovering;
  const project = projects[active];

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((n) => (n + 1) % projects.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused]);

  const step = (dir) => {
    setLocked(true);
    setActive((n) => (n + dir + projects.length) % projects.length);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-head">
        <span style={{ color: darkMode ? "white" : "" }}>Selected work</span>
        <span>on a live stage</span>
        <p>Production clients first. Labs keep spinning underneath. Click any frame to freeze it.</p>
      </div>

      <div
        className="stage"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="stage-frame">
          <div className="stage-frame-inner" key={`visual-${active}`}>
            <div className="hud">
              <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
              <span>{project.place}</span>
            </div>
            {project.image ? (
              <img src={project.image} alt={project.title} />
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
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className={`meter ${paused ? "is-paused" : ""}`} key={`meter-${active}`} />
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
            <button type="button" onClick={() => setLocked((p) => !p)}>
              {locked ? "Play" : "Pause"}
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next project">
              →
            </button>
          </div>
        </div>
      </div>

      <Rail active={active} onPick={(index) => { setActive(index); setLocked(true); }} />
      <Rail reverse active={active} onPick={(index) => { setActive(index); setLocked(true); }} />
    </div>
  );
};

export default Portfolio;
