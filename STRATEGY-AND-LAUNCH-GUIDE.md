# Cassandra's Luxury Cleaning Services — Website Strategy & Launch Guide

A premium 14-page website built to position Cassandra's as the premier multifamily and commercial cleaning company in New Jersey, and to convert property-management decision-makers into quote requests.

## What was built

14 responsive, SEO-structured pages:
- index.html — Homepage (hero, animated trust stats, client credibility bar, 8-service grid, 4-step process, draggable before/after slider, B2B testimonials, CTA band)
- services.html — Services hub
- 8 service detail pages (turn unit, post-construction, multifamily, common area, leasing office, clubhouse, amenity/model, move-in/out) — each with benefits, scope of work, FAQs, trust strip, and a sticky quote form
- gallery.html — Filterable project portfolio
- testimonials.html — Reviews, animated stats, proof
- referral.html — Three-tier partner/referral program with lead capture
- contact.html — Quote + walkthrough form, urgent-turn callout, service-area map

Plus: sitemap.xml, robots.txt, schema.org CleaningBusiness structured data, Open Graph tags, shared design system (css/) and interaction layer (js/main.js).

## Design

Near-black canvas with a single gold accent sampled from the logo (#C08E1B to #F8E376). Cormorant Garamond display paired with Jost body. Subtle grain, one orchestrated page-load reveal sequence. Reads Four Seasons, not generic-cleaner. Aimed at B2B buyers — property managers, asset managers, developers.

## Conversion architecture

Every page carries repeated conversion paths: Request a Quote (primary) + Schedule a Walkthrough (secondary) above the fold, phone in the header, mid-page CTA bands, footer quote CTA + click-to-call, a persistent floating gold call button on mobile, and inline quote forms on every service page.

## Placeholders to confirm before launch

- Phone — (000) 000-0000 throughout; replace with the real number (also in the tel: links and JSON-LD)
- Email — info@cassandrasluxurycleaning.com assumed; confirm or update
- Stats — "500+ units," "6+ communities" are placeholders; adjust to real figures
- Domain — canonical/sitemap URLs assume cassandrasluxurycleaning.com; update if different
- Testimonials — role-based; replace with named, permissioned quotes for trust + review schema
- Client names — homepage credibility bar uses placeholder community names

## Launch checklist

- [ ] Connect forms to a real backend/CRM (currently front-end confirmation only)
- [ ] Replace gallery placeholders with real project photos (WebP)
- [ ] Set the real phone number everywhere (search the project for 0000000000)
- [ ] Confirm email and any address details
- [ ] Claim and optimize Google Business Profile
- [ ] Set up Google Analytics 4 + Search Console; submit sitemap.xml
- [ ] Add named testimonials (with permission)
- [ ] Run Lighthouse + accessibility audit
- [ ] Point domain, enable HTTPS + CDN caching
