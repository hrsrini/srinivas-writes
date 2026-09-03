# srinivas-writes

Personal publication site for HR Srinivas. Pure HTML/CSS/JS — no build step, no dependencies, no frameworks.

**Live:** Deploy to Vercel by connecting this repository. Zero configuration required.

---

## What this is

A static publication site with a consistent design system across all pages. Two long-form analytical articles are live under `india/`. All other sections (`ai/`, `insurance/`, `startups/`, `leadership/`) are placeholders with a coming-soon state.

Design system: IBM Plex Serif + IBM Plex Sans, ink-on-cream palette, FT-style tables, zero rounded corners, zero shadows.

---

## File structure

```
srinivas-writes/
├── index.html              # Homepage — hero, featured articles, section grid
├── about.html              # About page — two-column layout
├── india/
│   ├── index.html          # India section landing — article list
│   ├── gdp-gap.html        # Article: 7.8% and Zero
│   └── fcnr-illusion.html  # Article: The $127 Billion Illusion
├── ai/
│   └── index.html          # Coming soon
├── insurance/
│   └── index.html          # Coming soon
├── startups/
│   └── index.html          # Coming soon
├── leadership/
│   └── index.html          # Coming soon
├── assets/
│   ├── style.css           # All shared styles — edit here, applies everywhere
│   └── nav.js              # Nav injection + hamburger — runs on every page
└── README.md
```

---

## How to add a new article

**1. Create the file** in the appropriate section folder:

```
india/my-new-article.html
```

**2. Copy this starter template:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Article Title — HR Srinivas</title>
  <meta name="description" content="One-line description for SEO.">
  <link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<script src="../assets/nav.js"></script>

<div class="article-body">

  <div class="breadcrumb">
    <nav class="breadcrumb-nav">
      <a href="../index.html">Home</a>
      <span class="breadcrumb-sep">→</span>
      <a href="index.html">India &amp; Economy</a>
      <span class="breadcrumb-sep">→</span>
      <span>Article Title</span>
    </nav>
  </div>

  <header class="article-header">
    <span class="section-marker">India &amp; Economy</span>
    <h1>Article Title</h1>
    <div class="article-byline">
      <span>HR Srinivas</span>
      <span class="byline-sep">·</span>
      <span>Month Year</span>
      <span class="byline-sep">·</span>
      <span>X min read</span>
    </div>
  </header>

  <!-- Optional: stat strip -->
  <div class="stat-strip">
    <div class="stat-item">
      <div class="stat-number amber">XX%</div>
      <div class="stat-label">Label<br>Source</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">$XB</div>
      <div class="stat-label">Label<br>Source</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">XXX</div>
      <div class="stat-label">Label<br>Source</div>
    </div>
  </div>

  <p>Opening paragraph...</p>

  <h2>Section heading</h2>

  <p>Body copy...</p>

  <!-- Pull quote -->
  <div class="pull-quote">
    <p>"Quote text."</p>
  </div>

  <!-- Table -->
  <div class="table-wrap">
    <table class="article-table">
      <thead>
        <tr><th>Col 1</th><th>Col 2</th></tr>
      </thead>
      <tbody>
        <tr><td>Data</td><td>Data</td></tr>
      </tbody>
    </table>
  </div>
  <p class="table-note">Source note.</p>

  <!-- Next article link -->
  <div class="next-article">
    <div class="next-article-label">Next in India &amp; Economy</div>
    <a href="other-article.html">Other Article Title →</a>
  </div>

</div>

<!-- Footer (same on every page) -->
<footer class="site-footer">
  <div class="footer-inner">
    <div>
      <div class="footer-brand">HR Srinivas</div>
      <div class="footer-tagline">Curious about most things. Certain about very few. Writing it out loud — with AI.</div>
    </div>
    <div class="footer-links">
      <a href="https://x.com/HRSrinivas" class="footer-link" target="_blank" rel="noopener">
        <span class="footer-link-label">X / Twitter</span>
        <span class="footer-link-value">@HRSrinivas</span>
      </a>
      <a href="https://github.com/hrsrini/srinivas-writes" class="footer-link" target="_blank" rel="noopener">
        <span class="footer-link-label">GitHub</span>
        <span class="footer-link-value">hrsrini</span>
      </a>
      <span class="footer-link disabled">
        <span class="footer-link-label">Substack</span>
        <span class="footer-link-value">Coming soon</span>
      </span>
    </div>
  </div>
  <div class="footer-copy">© 2026 HR Srinivas. All rights reserved.</div>
</footer>

</body>
</html>
```

**3. Add it to the section index** (`india/index.html`):

Add a new `.article-list-item` block at the top of the list (newest first).

**4. Optionally feature it on the homepage** (`index.html`):

Replace one of the two `.article-card` entries in the `.featured-grid`.

---

## Available CSS components

All components are in `assets/style.css`. Use these classes:

| Class | Purpose |
|---|---|
| `.stat-strip` + `.stat-item` | 3-column stat band at top of articles |
| `.stat-number.amber` | Amber-coloured large stat number |
| `.pull-quote` | Amber left-border italicised quote |
| `.article-table` | FT-style table with ink border |
| `.table-wrap` | Overflow wrapper for responsive tables |
| `.table-note` | Small grey source attribution below table |
| `.section-marker` | Small amber uppercase label |
| `.breadcrumb` | Page breadcrumb trail |
| `.next-article` | "Read next" link at article bottom |
| `.disclosure-box` | Amber left-border disclosure panel |
| `.coming-soon-block` | Centred placeholder for empty sections |

---

## How to deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Framework preset: **Other** (or leave blank — Vercel detects static HTML automatically)
4. Output directory: leave blank (root)
5. Click Deploy

No build step. No configuration file needed. All internal links are relative and will work at any domain.

---

## Design rules (don't break these)

- Zero rounded corners — `border-radius` is not used anywhere
- Zero shadows — `box-shadow` is not used anywhere
- No gradients — all backgrounds are flat colours
- All styles live in `assets/style.css` — no inline `<style>` blocks in HTML files
- Nav is injected by `assets/nav.js` — do not add `<nav>` HTML manually to pages
- Google Fonts loaded via `@import` in `style.css` — no `<link>` tags for fonts in HTML
