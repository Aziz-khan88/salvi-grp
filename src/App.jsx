import { useEffect, useRef, useState } from "react";

const SOURCE_FILE = "/meridian-source.html";
const STYLE_ID = "meridian-source-styles";
const SCRIPT_ID = "meridian-source-engine";
const SALVI_LOGO = "/assets/salvi/logo-50.png";

const portfolioCards = [
  {
    tag: "Community",
    city: "Sherwood Park, Alberta",
    title: "Hillshire by Salvi",
    image: "/assets/salvi/hillshire-bridge.jpg",
    alt: "Hillshire by Salvi community",
    meta: [["New", "homes"], ["Showhome", "open"], ["Sherwood", "Park"]],
    price: "Explore community",
  },
  {
    tag: "Community",
    city: "Sherwood Park, Alberta",
    title: "Savona Centre in the Park",
    image: "/assets/salvi/savona-building.jpg",
    alt: "Savona Centre in the Park",
    meta: [["Condo", "living"], ["Central", "location"], ["Sherwood", "Park"]],
    price: "Explore community",
  },
  {
    tag: "Homes",
    city: "Sherwood Park, Alberta",
    title: "Ironwood Homes",
    image: "/assets/salvi/ironwood-home.jpg",
    alt: "Ironwood home by Salvi Group",
    meta: [["New", "homes"], ["Move-in", "ready"], ["Built", "to last"]],
    price: "Explore homes",
  },
  {
    tag: "Homes",
    city: "Sherwood Park, Alberta",
    title: "Salvi Homes",
    image: "/assets/salvi/salvi-home.jpg",
    alt: "Salvi Group home interior",
    meta: [["Timeless", "design"], ["Personal", "service"], ["Quality", "built"]],
    price: "Explore homes",
  },
  {
    tag: "Homes",
    city: "Sherwood Park, Alberta",
    title: "Crafting Homes",
    image: "/assets/salvi/craft-home.jpg",
    alt: "Salvi Group crafted home",
    meta: [["Luxury", "homes"], ["Modern", "living"], ["Lasting", "value"]],
    price: "Learn more",
  },
  {
    tag: "Development",
    city: "Sherwood Park, Alberta",
    title: "Building Communities",
    image: "/assets/salvi/building-communities.jpg",
    alt: "Salvi Group community development",
    meta: [["In-house", "planning"], ["Thoughtful", "design"], ["Full", "oversight"]],
    price: "Learn more",
  },
];

const locationCards = [
  {
    tag: "Community",
    city: "Sherwood Park, Alberta",
    title: "Hillshire",
    image: "/assets/salvi/hillshire-bridge.jpg",
    alt: "Hillshire by Salvi community",
    meta: [["New", "community"], ["Showhome", "open"], ["Visit", "today"]],
    price: "Explore Hillshire",
  },
  {
    tag: "Community",
    city: "Sherwood Park, Alberta",
    title: "Savona",
    image: "/assets/salvi/savona-building.jpg",
    alt: "Savona Centre in the Park",
    meta: [["Condo", "living"], ["Sales", "centre"], ["By", "appointment"]],
    price: "Explore Savona",
  },
  {
    tag: "Homes",
    city: "Sherwood Park, Alberta",
    title: "Ironwood",
    image: "/assets/salvi/ironwood-home.jpg",
    alt: "Ironwood home by Salvi Group",
    meta: [["New", "homes"], ["Move-in", "ready"], ["Built", "to last"]],
    price: "Explore Ironwood",
  },
  {
    tag: "Homes",
    city: "Sherwood Park, Alberta",
    title: "Salvi Homes",
    image: "/assets/salvi/salvi-home.jpg",
    alt: "Salvi Group home interior",
    meta: [["Timeless", "design"], ["Personal", "service"], ["Quality", "built"]],
    price: "Explore Salvi Homes",
  },
];

const galleryCards = [
  { image: "/assets/salvi/craft-home.jpg", label: "Homes", title: "Crafting Homes" },
  { image: "/assets/salvi/building-communities.jpg", label: "Communities", title: "Building Communities" },
  { image: "/assets/salvi/developing-commercial.jpg", label: "Commercial", title: "Developing Commercial" },
  { image: "/assets/salvi/testimonials.jpg", label: "Homeowner Stories", title: "Built on Trust" },
  { image: "/assets/salvi/request-background.jpg", label: "Request Information", title: "Start a Conversation" },
];

function setText(root, selector, value) {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function setImage(root, selector, src, alt) {
  const image = root.querySelector(selector);
  if (!image) return;
  image.setAttribute("src", src);
  image.setAttribute("alt", alt);
}

function setHeading(root, selector, html) {
  const heading = root.querySelector(selector);
  if (heading) heading.innerHTML = html;
}

function setLogo(root, selector, width) {
  const brand = root.querySelector(selector);
  if (!brand) return;
  brand.setAttribute("aria-label", "Salvi Group home");
  brand.innerHTML = `<img src="${SALVI_LOGO}" alt="Salvi Group" style="display:block;width:${width}px;height:auto" />`;
}

function updatePortfolioCard(card, data) {
  setText(card, ".tag", data.tag);
  setImage(card, ".ph img", data.image, data.alt);
  setText(card, ".city", data.city);
  setText(card, "h3", data.title);
  card.querySelectorAll(".meta span").forEach((item, index) => {
    const [strong, label] = data.meta[index];
    item.innerHTML = `<b>${strong}</b> ${label}`;
  });
  setText(card, ".price-row .pr", data.price);
  setText(card, ".price-row .view", "View details ->");
}

function locationCardMarkup(data, delay = "") {
  const meta = data.meta.map(([strong, label]) => `<span><b>${strong}</b> ${label}</span>`).join("");
  return `<article class="card reveal ${delay}"><div class="ph"><span class="tag">${data.tag}</span><img src="${data.image}" alt="${data.alt}" loading="lazy"></div><div class="body"><span class="city">${data.city}</span><h3>${data.title}</h3><div class="meta">${meta}</div><div class="price-row"><span class="pr">${data.price}</span><span class="view">View details -></span></div></div></article>`;
}

function addLocationsFold(fragment) {
  const manifesto = fragment.querySelector("#manifesto");
  if (!manifesto) return;
  const section = fragment.createElement("section");
  section.className = "portfolio";
  section.id = "locations";
  section.setAttribute("aria-labelledby", "locations-title");
  section.innerHTML = `<div class="wrap"><div class="sec-head reveal"><div><span class="eyebrow">Salvi Group Locations</span><h2 class="h2" id="locations-title">Explore four places<br><em>to call home.</em></h2></div><p class="lead">From master-planned communities to thoughtfully crafted homes, discover where Salvi Group is building in Sherwood Park.</p></div><div class="grid">${locationCards.map((card, index) => locationCardMarkup(card, ["", "d1", "d2", ""][index])).join("")}</div></div>`;
  manifesto.insertAdjacentElement("afterend", section);
}

function rebrandExistingTheme(fragment) {
  setText(fragment, ".pre-mark", "Salvi Group");
  const preSub = fragment.querySelector(".pre-sub");
  if (preSub) preSub.innerHTML = 'Loading Salvi Group · <span class="pre-pct" id="prePct">0</span>%';

  const nav = fragment.querySelector("#nav");
  if (nav) {
    setLogo(nav, ".brand", 136);
    const navItems = [
      ["ABOUT US", "#manifesto"],
      ["COMMUNITIES", "#locations"],
      ["HOMES", "#portfolio"],
      ["RESOURCES", "#experience"],
    ];
    nav.querySelectorAll(".nav-links a").forEach((link, index) => {
      const item = navItems[index];
      if (!item) return;
      link.textContent = item[0];
      link.setAttribute("href", item[1]);
    });
    const cta = nav.querySelector(".nav-cta");
    if (cta) {
      cta.textContent = "Request Info";
      cta.setAttribute("href", "#contact");
    }
  }

  setText(fragment, ".h-intro .eyebrow", "SALVI GROUP · SHERWOOD PARK");
  setHeading(fragment, ".h-intro .display", "A Tradition of <em>Quality.</em>");
  const scrollCue = fragment.querySelector(".scroll-cue");
  if (scrollCue?.firstChild) scrollCue.firstChild.nodeValue = "Scroll to explore ";
  const heroCaptions = [
    "Built with purpose, <em>made for living.</em>",
    "Thoughtful communities, <em>designed to thrive.</em>",
    "Craftsmanship, <em>built to last.</em>",
    "A homebuilding experience, <em>made personal.</em>",
    "More than a house, <em>a place to belong.</em>",
    "Sherwood Park living, <em>at its finest.</em>",
    "A legacy of quality, <em>for 50 years.</em>",
  ];
  fragment.querySelectorAll(".hero .h-cap h2").forEach((heading, index) => {
    if (heroCaptions[index]) heading.innerHTML = heroCaptions[index];
  });
  setText(fragment, ".hero .h-cap .cap", "Salvi Group · Sherwood Park, Alberta");

  const manifesto = fragment.querySelector(".manifesto");
  if (manifesto) {
    manifesto.id = "manifesto";
    setText(manifesto, ".eyebrow", "Salvi Group · 50 Years");
    setHeading(manifesto, "h2", "50 years of building<br><em>exceptional homes.</em>");
    setText(manifesto, ".lead", "For more than 50 years, Salvi Group has built more than homes. We have created places where families grow, memories are made, and communities thrive.");
  }

  addLocationsFold(fragment);

  const featured = fragment.querySelector(".featured");
  if (featured) {
    setText(featured, ".pill", "Celebrating 50 Years");
    featured.querySelector(".feat-media")?.classList.add("anniversary-mark");
    setImage(featured, ".feat-media img", "/assets/salvi/50-years-anniversary.png", "Salvi Group 50th anniversary mark");
    setText(featured, ".feat-copy .eyebrow", "A Tradition of Quality");
    setHeading(featured, ".feat-copy .h2", "50 Years. <em>Built to Last.</em>");
    setText(featured, ".feat-copy .lead", "What began as a vision rooted in craftsmanship, integrity, and personal relationships has grown into a legacy of exceptional homes and thoughtfully designed neighbourhoods.");
    const price = featured.querySelector(".price");
    if (price) price.innerHTML = "Built to last<small>Sherwood Park, Alberta · Since 1976</small>";
    const stats = [
      ["2000", "1", "", "Projects"],
      ["3400", "1", "", "Clients"],
      ["27", "", "%", "Repeat buyers"],
      ["88", "", "%", "Recommends us"],
    ];
    featured.querySelectorAll(".feat-stats .st").forEach((stat, index) => {
      const [count, comma, suffix, label] = stats[index];
      const number = stat.querySelector("b");
      if (number) {
        number.textContent = "";
        number.dataset.count = count;
        if (comma) number.dataset.comma = comma; else number.removeAttribute("data-comma");
        if (suffix) number.dataset.suffix = suffix; else number.removeAttribute("data-suffix");
      }
      setText(stat, "span", label);
    });
    const button = featured.querySelector(".btn");
    if (button) {
      button.setAttribute("href", "https://salvigroup.com/fifty-years/");
      button.innerHTML = 'Discover our story <span class="arrow">→</span>';
    }
  }

  const portfolio = fragment.querySelector("#portfolio");
  if (portfolio) {
    setText(portfolio, ".sec-head .eyebrow", "Our Communities & Homes");
    setHeading(portfolio, ".sec-head .h2", "Find your <em>place to belong.</em>");
    setText(portfolio, ".sec-head .lead", "Explore Salvi Group communities and homes in Sherwood Park, thoughtfully planned for modern living and lasting value.");
    portfolio.querySelectorAll(".card").forEach((card, index) => updatePortfolioCard(card, portfolioCards[index]));
  }

  const experience = fragment.querySelector(".experience");
  if (experience) {
    setText(experience, ".sec-head .eyebrow", "What We Do");
    setHeading(experience, ".sec-head .h2", "Building <em>better places.</em>");
    setText(experience, ".g-hint", "Scroll to explore →");
    experience.querySelectorAll(".r-card").forEach((card, index) => {
      const data = galleryCards[index];
      setImage(card, "img", data.image, data.title);
      setText(card, ".m span", data.label);
      setText(card, ".m b", data.title);
    });
  }

  const process = fragment.querySelector(".process");
  if (process) {
    setText(process, ".sec-head .eyebrow", "The Salvi Group Difference");
    setHeading(process, ".sec-head .h2", "Building with <em>purpose.</em>");
    setText(process, ".sec-head .lead", "Celebrating 50 years has been an opportunity to reflect on the people who made it possible: our homeowners, partners, trades, and dedicated team.");
    const processCards = [
      ["01", "Built to Last", "A 50-year tradition of timeless design, uncompromising quality, and homes built for the way people live."],
      ["02", "Craftsmanship", "We bring care and full attention to every detail, from first ideas through the finish of a new home."],
      ["03", "Community", "Thoughtfully designed neighbourhoods help families grow, connect, and make lasting memories."],
      ["04", "Personal Service", "Relationships with homeowners, partners, and trades remain at the heart of how Salvi Group works."],
    ];
    process.querySelectorAll(".proc-card").forEach((card, index) => {
      const [number, title, copy] = processCards[index];
      setText(card, ".pn", number);
      setText(card, "h3", title);
      setText(card, "p", copy);
    });
  }

  const contact = fragment.querySelector(".cta");
  if (contact) {
    setText(contact, ".eyebrow", "Request Information");
    setHeading(contact, "h2", "Request <em>information.</em>");
    setText(contact, ".lead", "Fill out the form to request more information and a Salvi Group team member will contact you as soon as possible.");
    const labels = contact.querySelectorAll("#enquiry label");
    if (labels[0]) labels[0].textContent = "Full name";
    if (labels[1]) labels[1].textContent = "Email";
    if (labels[2]) labels[2].textContent = "How can we help you?";
    const fields = contact.querySelectorAll("#enquiry input, #enquiry textarea");
    if (fields[0]) fields[0].setAttribute("placeholder", "Your name");
    if (fields[1]) fields[1].setAttribute("placeholder", "you@email.com");
    if (fields[2]) fields[2].setAttribute("placeholder", "Tell us which Salvi community or home interests you.");
    const submit = contact.querySelector("#enquiry button");
    if (submit) submit.innerHTML = 'Submit request <span class="arrow">→</span>';
    setText(contact, "#formDone b", "Thank you.");
    setText(contact, "#formDone p", "Your request has been received. A Salvi Group team member will be in touch shortly.");
  }

  const footer = fragment.querySelector("footer");
  if (footer) {
    setLogo(footer, ".foot-brand .brand", 150);
    setText(footer, ".foot-brand p", "Building exceptional homes and communities in Sherwood Park for more than 50 years.");
    const columns = footer.querySelectorAll(".foot-col");
    if (columns[0]) columns[0].innerHTML = '<h4>Communities</h4><a href="https://salvigroup.com/communities/hillshire/">Hillshire by Salvi</a><a href="https://salvigroup.com/communities/savona/">Savona Centre in the Park</a><a href="https://salvigroup.com/homes/ironwood-homes/">Ironwood Homes</a><a href="https://salvigroup.com/homes/">Salvi Homes</a>';
    if (columns[1]) columns[1].innerHTML = '<h4>Office</h4><a href="https://maps.google.com/?q=98+Sioux+Road+Sherwood+Park+AB">98 Sioux Road, Sherwood Park</a><a href="tel:+17804671543">+1 (780) 467 1543</a><a href="mailto:info@salvigroup.com">info@salvigroup.com</a><a href="#contact">Mon–Fri: 8am–12pm | 1pm–5pm</a>';
    if (columns[2]) columns[2].innerHTML = '<h4>Connect</h4><a href="https://www.facebook.com/SalviGroup">Facebook</a><a href="https://www.instagram.com/salvigroup_">Instagram</a><a href="https://www.linkedin.com/company/salvigroup">LinkedIn</a><a href="#contact">Request Information</a>';
    const footerItems = footer.querySelectorAll(".foot-bot > span");
    if (footerItems[0]) footerItems[0].textContent = "© 2026 Salvi Group · All Rights Reserved";
    if (footerItems[1]) {
      footerItems[1].textContent = "Salvi Group";
      footerItems[1].setAttribute("aria-label", "Salvi Group");
    }
    if (footerItems[2]) footerItems[2].textContent = "Privacy · Terms · Equal Housing Opportunity";
  }
}

export function App() {
  const mountRef = useRef(null);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let active = true;

    async function mountExistingTheme() {
      try {
        const response = await fetch(SOURCE_FILE);
        if (!response.ok) throw new Error(`Could not load the local source (${response.status}).`);
        const source = await response.text();
        if (!active || !mountRef.current) return;

        const fragment = new DOMParser().parseFromString(source, "text/html");
        const sourceStyle = fragment.querySelector("head style:last-of-type");
        const sourceScript = fragment.querySelector("body > script:last-of-type");
        if (!sourceStyle || !sourceScript) throw new Error("The local source is missing its theme assets.");

        rebrandExistingTheme(fragment);
        sourceScript.remove();
        document.getElementById(STYLE_ID)?.remove();
        document.getElementById(SCRIPT_ID)?.remove();

        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = sourceStyle.textContent;
        document.head.appendChild(style);

        mountRef.current.innerHTML = fragment.body.innerHTML;
        document.title = "Salvi Group Home Builder";

        const engine = document.createElement("script");
        engine.id = SCRIPT_ID;
        engine.textContent = `(() => {\n${sourceScript.textContent}\n})();`;
        document.body.appendChild(engine);
      } catch (error) {
        if (active) setLoadError(error instanceof Error ? error.message : "The local site could not be loaded.");
      }
    }

    mountExistingTheme();
    return () => {
      active = false;
    };
  }, []);

  if (loadError) return <main className="source-error">{loadError}</main>;
  return <div ref={mountRef} />;
}
