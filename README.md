# Ganesh Commercial Institute — Official Website

A fully responsive, modern, enterprise-grade static website built from scratch using semantic HTML5, advanced CSS3 architecture, and native Vanilla JavaScript (ES6+). This platform serves as the digital presence for **Ganesh Commercial Institute**, a recognized vocational training facility specializing in shorthand (stenography), keyboard typewriting, and Computer on Office Automation (COA) certifications.

---

## 🚀 Key Features & Functional Modules

### 1. Modern Responsive Architecture
* **Grid & Flexbox Layouts:** Designed with a custom CSS Grid auto-fit blueprint across core structures (Gallery, Feature grids). It scales seamlessly across ultra-wide monitors, laptops, tablets, and mobile screens.
* **Premium Hero & Contrast Preservation:** Video and image heroes utilize linear-gradient color overlays to guarantee high text contrast, adhering to accessibility standards.

### 2. Smart Filterable Media Gallery & Lightbox
* **In-Memory Client Filtering:** An interactive sorting system that enables instantaneous switching between institutional photos and embedded video showcases without page reloads.
* **Custom Lightbox Modal Framework:** Built with full keyboard accessibility loops:
  * `Escape` key closes the view.
  * `Left` / `Right` Arrow keys navigate items.
  * The navigation logic automatically recalculates indices to cycle **only** through the currently filtered category (e.g., navigating only photos when the "Photos" filter is active).
  * Dynamically mounts and clears video/iframe elements on close to fully eliminate background audio persistence and optimize browser memory.

### 3. JavaScript-Driven Form & Redirection Logic
* **Structured Mailto Form Engine:** Intercepts contact query form submissions, sanitizes text variables, compiles them into a clean template via the `FormData` browser object, and automatically initializes the user's local mail client pre-targeted to `info@ganeshinstitute.com`.
* **Secret Admin Gateway:** A hidden dashboard access link embedded transparently within the footer copyright area. Clicking the trigger launches a JavaScript verification prompt. Upon entering the correct PIN, it reveals a secure hidden live metrics panel tracking visitor footprint counts and registration activities.

---

## 🛠️ Technology Stack

* **Structure:** Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) for robust search engine indexing (SEO) and screen-reader compatibility.
* **Styling:** Modular CSS3 incorporating centralized global design variables (`:root`), flexible alignment, hardware-accelerated state scales, and responsive media query breakpoints.
* **Execution:** High-performance Native Vanilla JavaScript (ES6+) with **zero external dependencies** (No jQuery, No Bootstrap), ensuring an ultra-lightweight bundle size and swift page loading speeds.

---

## 📁 Repository Directory Structure

```text
├── index.html                  # Institution Homepage & Dynamic Accordions
├── about_us.html               # Institutional History, Core Pillars & Timeline
├── gallery.html                # Responsive Media Grid, Filters & Lightbox Engine
├── contact.html                # Query Intake Module & Embedded Location Map
├── style.css                   # Consolidated Core CSS Layout System
└── assets/                     # Media & Brand Assets
    ├── sample.mp4              # Sample Institutional Video File
    └── images/
        └── logo.png            # Global Institution Brand Identifier
