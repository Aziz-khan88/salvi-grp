import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";

const SOURCE_FILE = "/meridian-source.html";
const STYLE_ID = "meridian-source-styles";
const SCRIPT_ID = "meridian-source-engine";
const SALVI_LOGO = "/assets/salvi/logo-50.png";
const FOOTER_SALVI_LOGO = "/assets/salvi/logo-footer.webp";
const FOOTER_HILLSHIRE_LOGO = "/assets/salvi/hillshire-footer.png";
const FOOTER_SAVONA_LOGO = "/assets/salvi/savona-footer.png";
const CTA_ARROW_DARK = "/assets/salvi/figma-cta-arrow.svg";
const CTA_ARROW_LIGHT = "/assets/salvi/figma-cta-arrow-light.svg";
const TESTIMONIAL_PREV = "/assets/salvi/figma-testimonial-prev.svg";
const TESTIMONIAL_NEXT = "/assets/salvi/figma-testimonial-next.svg";
const TESTIMONIAL_REVIEW_ARROW = "/assets/salvi/figma-testimonial-review-arrow.svg";

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

const faqItems = [
  {
    question: "What Types Of Homes Does Salvi Group Build?",
    answer: "Salvi Group offers a range of homes designed for different lifestyles and budgets, including bungalows, bi-levels, two-storey homes, executive homes, and customized luxury residences.",
  },
  {
    question: "Where Does Salvi Group Build New Homes?",
    answer: "We build thoughtfully planned homes and communities in Sherwood Park, Alberta, including Hillshire, Savona, Ironwood, and Salvi Homes.",
  },
  {
    question: "Can I Customize My New Home?",
    answer: "Yes. Our team works closely with homeowners to shape finishes, details, and living spaces that feel personal to the people who will call them home.",
  },
  {
    question: "What Makes Salvi Group Different?",
    answer: "For more than 50 years, Salvi Group has combined craftsmanship, trusted relationships, and thoughtful community planning to create homes made to last.",
  },
  {
    question: "How Can I Learn More About Salvi Group?",
    answer: "Send us a request below, explore our current communities, or contact our Sherwood Park team directly. We would be happy to help.",
  },
];

const testimonials = [
  {
    title: "Closer to everything",
    quote: "We moved from a rural area and The Ridge offers a similar lifestyle, but put us much closer to all the amenities. We are very happy with our move here and would highly recommend the community to anyone that desires a quality lifestyle.",
    name: "Don & Doreen Hunt",
    role: "Salvi Group homeowners",
  },
  {
    title: "Quality in every detail",
    quote: "A well designed and planned neighborhood. The obvious concern for quality of the builder and the commitment to customer satisfaction were major factors in our decision to live here. The large yards, ornamental lamp posts, and tree lined streets make the community very attractive.",
    name: "Cheryl & Allan MacDonald",
    role: "Salvi Group homeowners",
  },
  {
    title: "A custom-home experience",
    quote: "The Ironwood team was very accommodating to our special requests. We were involved during construction and had the custom home experience without the custom home price. Any requested changes were always accommodated.",
    name: "Jason Barton",
    role: "Ironwood homeowner",
  },
  {
    title: "Excellent from the start",
    quote: "Salvi worked closely with us even before we contracted them. They were always there for us and we really appreciated their advice. Our first custom home building experience has been excellent and we could not have been more pleased.",
    name: "Dennis & Pat McGinn",
    role: "Salvi Group homeowners",
  },
  {
    title: "Very pleased with our new condo",
    quote: "There was open communication throughout our journey, starting with Steve, our salesman, and the various trades we encountered along the way. Everyone was friendly and no question went unanswered. A beautiful condo, located in a perfect place. A great big thank you.",
    name: "Andi & Liz Pallas",
    role: "Salvi Group homeowners",
  },
  {
    title: "Best in the business",
    quote: "If the quality of construction says anything about the quality of the builder, Salvi is one of the best names in the business. Over the years I have watched Salvi build homes that were consistently better than they had to be.",
    name: "Residential Siding Contractor",
    role: "Salvi Group trade partner",
  },
  {
    title: "We love The Ridge",
    quote: "It is quiet, picturesque, and has a warm atmosphere. Families participate in community events, winter hayrides, and the Christmas lights competition. This small community, surrounded by rolling hills, is unique and a wonderful place to live.",
    name: "Dave & Judy Wood",
    role: "The Ridge homeowners",
  },
];

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1, containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return undefined;
    const updateSelectedSlide = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    const updateCarousel = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      updateSelectedSlide();
    };
    updateCarousel();
    emblaApi.on("select", updateSelectedSlide);
    emblaApi.on("reInit", updateCarousel);
    return () => {
      emblaApi.off("select", updateSelectedSlide);
      emblaApi.off("reInit", updateCarousel);
    };
  }, [emblaApi]);

  return (
    <div className="testimonials-shell">
      <header className="testimonials-head">
        <h2 id="testimonials-title">Our customers loves<br />what we do</h2>
        <div className="testimonials-intro">
          <p>Hear directly from the homeowners who have trusted Salvi Group with their homes and communities.</p>
          <a className="testimonial-review" href="mailto:info@salvigroup.com?subject=Salvi%20Group%20Review">
            <span>Write a Review</span>
            <i aria-hidden="true"><img src={TESTIMONIAL_REVIEW_ARROW} alt="" /></i>
          </a>
        </div>
      </header>
      <div className="testimonials-embla">
        <div className="testimonials-viewport" ref={emblaRef}>
          <div className="testimonials-container">
            {testimonials.map((testimonial) => (
              <article className="testimonial-slide" key={testimonial.name}>
                <div className="testimonial-card">
                  <h3>&ldquo;{testimonial.title}&rdquo;</h3>
                  <p>{testimonial.quote}</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="testimonial-controls" aria-label="Testimonial controls">
          <button type="button" className="testimonial-arrow" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous testimonial" disabled={!canScrollPrev}>
            <img src={TESTIMONIAL_PREV} alt="" />
          </button>
          <div className="testimonial-dots" aria-label="Choose testimonial">
            {scrollSnaps.map((_, index) => (
              <button
                type="button"
                className={index === selectedIndex ? "active" : ""}
                key={`testimonial-snap-${index}`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              />
            ))}
          </div>
          <button type="button" className="testimonial-arrow" onClick={() => emblaApi?.scrollNext()} aria-label="Next testimonial" disabled={!canScrollNext}>
            <img src={TESTIMONIAL_NEXT} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

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
  const wrap = manifesto?.querySelector(".wrap");
  if (!wrap) return;
  const locations = fragment.createElement("div");
  locations.className = "manifesto-locations";
  locations.id = "locations";
  locations.setAttribute("aria-labelledby", "locations-title");
  locations.innerHTML = `<div class="manifesto-locations-head reveal"><div><span class="eyebrow">Salvi Group Locations</span><h2 class="h2" id="locations-title">Explore four places<br><em>to call home.</em></h2></div><p class="lead">From master-planned communities to thoughtfully crafted homes, discover where Salvi Group is building in Sherwood Park.</p></div><div class="grid">${locationCards.map((card, index) => locationCardMarkup(card, ["", "d1", "d2", ""][index])).join("")}</div>`;
  wrap.append(locations);
}

function contactButtonMarkup(label, variant = "light") {
  const arrow = variant === "blue" ? CTA_ARROW_LIGHT : CTA_ARROW_DARK;
  return `<a class="figma-contact-button ${variant}" href="#contact"><span>${label}</span><i aria-hidden="true"><img src="${arrow}" alt=""></i></a>`;
}

function addBuildFutureFold(fragment) {
  const experience = fragment.querySelector(".experience");
  if (!experience) return;
  const section = fragment.createElement("section");
  section.className = "future-fold";
  section.id = "future";
  section.setAttribute("aria-labelledby", "future-title");
  section.innerHTML = `<img src="/assets/salvi/figma-build-future.png" alt="A modern Salvi Group home glowing at dusk"><div class="future-shade" aria-hidden="true"></div><div class="future-inner"><h2 id="future-title">Build Your Future With Salvi</h2>${contactButtonMarkup("Contact Us")}</div>`;
  experience.insertAdjacentElement("beforebegin", section);
}

function replaceWhatWeDoFold(fragment) {
  const experience = fragment.querySelector(".experience");
  if (!experience) return;
  experience.className = "what-we-do-fold";
  experience.id = "experience";
  experience.setAttribute("aria-labelledby", "what-we-do-title");
  experience.innerHTML = `<div class="what-we-do-wrap"><header class="what-we-do-head"><h2 id="what-we-do-title">What We Do</h2><div><p>With 50 years of experience building new homes, Salvi Group has been planning, designing, and delivering Sherwood Park’s finest residential and commercial developments.</p>${contactButtonMarkup("Contact Us", "blue")}</div></header><article class="what-we-do-card"><img src="/assets/salvi/figma-what-we-do.png" alt="A craftsperson working on Salvi Group commercial plans"><div class="what-we-do-shade" aria-hidden="true"></div><h3>Developing Commercial</h3>${contactButtonMarkup("Contact Us")}<p>Salvi Group develop commercial spaces in Sherwood Park that bring together dining, retail, and professional services to serve growing community needs.</p></article></div>`;
}

function addTestimonialsFold(fragment) {
  const process = fragment.querySelector(".process");
  if (!process) return;
  const section = fragment.createElement("section");
  section.className = "testimonials-fold";
  section.id = "testimonials";
  section.setAttribute("aria-labelledby", "testimonials-title");
  section.innerHTML = '<div data-testimonials-root></div>';
  process.insertAdjacentElement("beforebegin", section);
}

function faqItemMarkup(item, index) {
  const panelId = `faq-panel-${index + 1}`;
  const isOpen = index === 0;
  return `<article class="faq-item${isOpen ? " open" : ""}"><button class="faq-trigger" type="button" aria-expanded="${isOpen}" aria-controls="${panelId}"><span>${item.question}</span><b aria-hidden="true">+</b></button><div class="faq-panel" id="${panelId}"${isOpen ? "" : " hidden"}><p>${item.answer}</p></div></article>`;
}

function addFaqFold(fragment) {
  const contact = fragment.querySelector(".cta");
  if (!contact) return;
  const section = fragment.createElement("section");
  section.className = "faq-fold";
  section.id = "faqs";
  section.setAttribute("aria-labelledby", "faq-title");
  section.innerHTML = `<div class="faq-wrap"><header class="faq-head"><h2 id="faq-title">Frequently Asked<br>Questions</h2><p>Find answers about Salvi Group homes, communities, and the process of building in Sherwood Park. Our team is here to help you make informed choices.</p></header><div class="faq-content"><img class="faq-image" src="/assets/salvi/figma-faq-home.png" alt="A warm, modern Salvi Group home at sunset"><div class="faq-list">${faqItems.map(faqItemMarkup).join("")}</div></div></div>`;
  contact.insertAdjacentElement("beforebegin", section);
}

function addSubscribeFold(fragment) {
  const footer = fragment.querySelector("footer");
  if (!footer) return;
  const section = fragment.createElement("section");
  section.className = "subscribe-fold";
  section.id = "subscribe";
  section.setAttribute("aria-labelledby", "subscribe-title");
  section.innerHTML = `<div class="subscribe-backdrop" aria-hidden="true"></div><div class="subscribe-content"><h2 id="subscribe-title">Subscribe to Emails</h2><p>Get Salvi Group news, new-home updates, and community information delivered to your inbox.</p><form id="newsletterForm" class="newsletter-form"><label class="sr-only" for="newsletterEmail">Enter your email</label><input id="newsletterEmail" name="email" type="email" autocomplete="email" placeholder="Enter Your Email" required><label class="form-consent newsletter-consent"><input name="consent" type="checkbox" required><span>I have read and agree to the <a href="https://salvigroup.com/privacy-policy/">Terms &amp; Conditions</a> and <a href="https://salvigroup.com/privacy-policy/">Privacy Policy</a>.</span></label><button type="submit" class="form-submit light-submit">Submit Now <span aria-hidden="true">→</span></button></form><p id="newsletterDone" class="newsletter-done" role="status" aria-live="polite">Thank you — you are subscribed.</p></div>`;
  footer.insertAdjacentElement("beforebegin", section);
}

function replaceContactFold(fragment) {
  const contact = fragment.querySelector(".cta");
  if (!contact) return;
  contact.className = "contact-fold";
  contact.id = "contact";
  contact.setAttribute("aria-labelledby", "request-title");
  contact.innerHTML = `<div class="wrap request-wrap"><div class="request-heading"><div><h2 id="request-title">Request Information</h2><p>Fill out the form to request more information and we will contact you as soon as possible.</p><span class="request-rule" aria-hidden="true"></span></div><p class="required-note"><sup>*</sup> indicates required fields</p></div><form id="enquiry" class="request-form"><div class="request-grid"><label><span>Your Name</span><input name="name" type="text" autocomplete="name" placeholder="John Doe" required></label><label><span>Enter Your Email</span><input name="email" type="email" autocomplete="email" placeholder="john@example.com" required></label><label><span>Your Phone</span><input name="phone" type="tel" autocomplete="tel" placeholder="(780) 000-0000" required></label><label><span>Select Subject</span><select name="subject" required><option value="Crafting Homes">Crafting Homes</option><option value="Building Communities">Building Communities</option><option value="Developing Commercial">Developing Commercial</option><option value="General Inquiry">General Inquiry</option></select></label></div><label class="field-full"><span>Select Community</span><select name="community" required><option value="Hillshire">Hillshire</option><option value="Savona">Savona</option><option value="Ironwood">Ironwood</option><option value="Salvi Homes">Salvi Homes</option></select></label><label class="field-full"><span>How can we help you?</span><textarea name="message" rows="6" required></textarea></label><label class="form-consent"><input name="consent" type="checkbox" required><span>I have read and agree to the <a href="https://salvigroup.com/privacy-policy/">Terms &amp; Conditions</a> and <a href="https://salvigroup.com/privacy-policy/">Privacy Policy</a>.</span></label><button type="submit" class="form-submit">Submit <span aria-hidden="true">→</span></button></form><div id="formDone" class="form-done" role="status" aria-live="polite"><b>Thank you.</b><p>Your request has been received. A Salvi Group team member will be in touch shortly.</p></div></div>`;
}

function replaceFooter(fragment) {
  const footer = fragment.querySelector("footer");
  if (!footer) return;
  footer.className = "salvi-footer";
  footer.id = "footer";
  footer.setAttribute("aria-labelledby", "footer-title");
  footer.innerHTML = `<div class="salvi-footer-inner"><div class="footer-land"><h2 id="footer-title">SALVI GROUP</h2><div class="land-acknowledgement"><h3>Treaty Six Territory</h3><p>We acknowledge that the land on which the Salvi Group office resides is in Treaty Six Territory; a traditional meeting ground, gathering place, and traveling route for many Indigenous people. We honour and respect the history, languages, ceremonies, and culture of the First Nations, Métis, and Inuit who call this territory home.</p></div></div><div class="footer-locations"><section class="footer-location"><div class="footer-location-main"><img class="footer-location-logo salvi" src="${FOOTER_SALVI_LOGO}" alt="Salvi Group"><div class="footer-hours"><p>Office hours:</p><p><b>Monday:</b> 8 AM – 12 PM – 1 PM – 5 PM</p></div></div><div class="footer-data four"><a href="https://maps.google.com/?q=98+Sioux+Road+Sherwood+Park+AB+T8A+3X5"><b>Address:</b> 98 Sioux Road Sherwood Park, AB T8A 3X5</a><a href="tel:+17804671543"><b>Phone:</b> +1 (780) 467 1543</a><a href="tel:+17804673301"><b>Phone:</b> +1 (780) 467 3301</a><a href="mailto:info@salvigroup.com"><b>Email:</b> info@salvigroup.com</a></div></section><section class="footer-location"><div class="footer-location-main"><img class="footer-location-logo hillshire" src="${FOOTER_HILLSHIRE_LOGO}" alt="Hillshire by Salvi"><div class="footer-hours hillshire-hours"><p>Office hours:</p><p><b>Monday – Thursday:</b> 3 PM – 8 PM <b>Friday:</b> Closed <b>Open:</b> Sat, Sun, and the holidays: 12:00 pm – 5:00 pm</p></div></div><div class="footer-data three"><a href="https://maps.google.com/?q=117+Birkshire+Crescent+Sherwood+Park+AB+T8B+0C9"><b>Address:</b> 117 Birkshire Crescent Sherwood Park, AB T8B 0C9</a><a href="tel:+17802380056"><b>Phone:</b> +1 (780) 238 0056</a><a href="mailto:hillshire@salvigroup.com"><b>Email:</b> hillshire@salvigroup.com</a></div></section><section class="footer-location"><div class="footer-location-main"><img class="footer-location-logo savona" src="${FOOTER_SAVONA_LOGO}" alt="Savona by Salvi"><div class="footer-hours appointment"><p><b>By appointment only. Schedule yours today!</b></p></div></div><div class="footer-data three"><a href="https://maps.google.com/?q=61+Festival+Way+Sherwood+Park+AB+T8H+0Y9"><b>Address:</b> 61 Festival Way Sherwood Park, AB T8H 0Y9</a><a href="tel:+17807175431"><b>Phone:</b> +1 (780) 717 5431</a><a href="mailto:savona@salvigroup.com"><b>Email:</b> savona@salvigroup.com</a></div></section></div><div class="footer-follow"><div><h3>Follow Us</h3><p><a href="https://www.facebook.com/SalviGroup">Facebook</a><span>–</span><a href="https://www.instagram.com/salvigroup_">Instagram</a><span>–</span><a href="https://www.linkedin.com/company/salvigroup">LinkedIn</a></p></div><div class="footer-policies"><a href="https://salvigroup.com/terms-of-use/">Terms of Use</a><a href="https://salvigroup.com/privacy-policy/">Privacy Policy</a></div></div><div class="footer-divider" aria-hidden="true"></div><p class="footer-copyright">© Copyright 2026 Salvi Group – All Rights Reserved</p><a class="footer-credit" href="https://infinitidigital.us/">Design &amp; Development by: <u>Infinitidigital.us</u></a></div>`;
}

function attachFormEnhancements(root) {
  const newsletter = root.querySelector("#newsletterForm");
  const newsletterDone = root.querySelector("#newsletterDone");
  if (!newsletter || !newsletterDone) return;
  newsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!newsletter.checkValidity()) {
      newsletter.reportValidity();
      return;
    }
    newsletter.reset();
    newsletterDone.classList.add("show");
  });

  root.querySelectorAll(".faq-item").forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const panel = item.querySelector(".faq-panel");
    if (!trigger || !panel) return;
    trigger.addEventListener("click", () => {
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
      root.querySelectorAll(".faq-item").forEach((otherItem) => {
        const otherTrigger = otherItem.querySelector(".faq-trigger");
        const otherPanel = otherItem.querySelector(".faq-panel");
        otherItem.classList.remove("open");
        otherTrigger?.setAttribute("aria-expanded", "false");
        if (otherPanel) otherPanel.hidden = true;
      });
      if (shouldOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });
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

  addBuildFutureFold(fragment);
  replaceWhatWeDoFold(fragment);
  addTestimonialsFold(fragment);

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

  addFaqFold(fragment);
  replaceContactFold(fragment);
  addSubscribeFold(fragment);
  replaceFooter(fragment);
}

export function App() {
  const mountRef = useRef(null);
  const [loadError, setLoadError] = useState("");
  const [testimonialsHost, setTestimonialsHost] = useState(null);

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

        setTestimonialsHost(null);
        mountRef.current.innerHTML = fragment.body.innerHTML;
        setTestimonialsHost(mountRef.current.querySelector("[data-testimonials-root]"));
        document.title = "Salvi Group Home Builder";

        const engine = document.createElement("script");
        engine.id = SCRIPT_ID;
        engine.textContent = `(() => {\n${sourceScript.textContent}\n})();`;
        document.body.appendChild(engine);
        attachFormEnhancements(mountRef.current);
      } catch (error) {
        if (active) setLoadError(error instanceof Error ? error.message : "The local site could not be loaded.");
      }
    }

    mountExistingTheme();
    return () => {
      active = false;
      setTestimonialsHost(null);
    };
  }, []);

  if (loadError) return <main className="source-error">{loadError}</main>;
  return <><div ref={mountRef} />{testimonialsHost ? createPortal(<Testimonials />, testimonialsHost) : null}</>;
}
