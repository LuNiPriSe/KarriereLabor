# Website Optimization Master Prompt

Use this prompt for applying comprehensive optimization to any website project with similar structure.

---

## Context

I have a multi-language static website (German/English/Spanish) that needs comprehensive optimization for performance, SEO, and modern web standards. The project has the following structure:

- `/index.html` or `/de/index.html` - German version (primary)
- `/en/index.html` - English version
- `/es/index.html` - Spanish version
- `/assets/` - Shared assets (images, CSS, JS)

## Objectives

Please perform the following optimizations systematically:

---

## 1. IMAGE OPTIMIZATION (Priority: Critical)

### Create Responsive Images with Modern Formats

For **EVERY** image on the website (hero images, use-case images, coaching photos, gallery images, portraits, offers, diagrams, etc.):

1. **Generate three sizes:**
   - Mobile: 640px width
   - Tablet: 1024px width
   - Desktop: 1920px width (or original if smaller)

2. **Generate three formats for each size:**
   - AVIF (best compression, ~50-70% smaller than JPG)
   - WebP (good compression, ~25-35% smaller than JPG)
   - JPG (fallback for older browsers)

3. **Naming convention:**
   ```
   {original-name}-mobile.avif
   {original-name}-mobile.webp
   {original-name}-mobile.jpg
   {original-name}-tablet.avif
   {original-name}-tablet.webp
   {original-name}-tablet.jpg
   {original-name}-desktop.avif
   {original-name}-desktop.webp
   {original-name}-desktop.jpg
   ```

4. **Tools to use:**
   ```bash
   # Resize images
   sips -Z 640 original.jpg --out output-mobile.jpg

   # Convert to WebP
   cwebp -q 85 input.jpg -o output.webp

   # Convert to AVIF
   avifenc --min 20 --max 63 -a end-usage=q -a cq-level=23 input.jpg output.avif
   ```

### Replace ALL <img> tags with <picture> elements

**Pattern for images:**
```html
<picture>
    <source srcset="path/to/image-mobile.avif" media="(max-width: 767px)" type="image/avif">
    <source srcset="path/to/image-mobile.webp" media="(max-width: 767px)" type="image/webp">
    <source srcset="path/to/image-tablet.avif" media="(min-width: 768px) and (max-width: 1279px)" type="image/avif">
    <source srcset="path/to/image-tablet.webp" media="(min-width: 768px) and (max-width: 1279px)" type="image/webp">
    <source srcset="path/to/image-desktop.avif" media="(min-width: 1280px)" type="image/avif">
    <source srcset="path/to/image-desktop.webp" media="(min-width: 1280px)" type="image/webp">
    <img src="path/to/image-desktop.jpg" alt="Descriptive alt text" loading="lazy" width="1920" height="1080">
</picture>
```

**Important:**
- Use `loading="eager"` for hero/above-fold images only
- Use `loading="lazy"` for all below-fold images
- Include accurate width/height attributes to prevent layout shift
- Path prefix varies: German uses `assets/images/`, EN/ES use `../assets/images/`

### Add CSS Support for Picture Elements

In `assets/css/styles-refined.css` (or main CSS file):
```css
/* Picture element support */
.use-case-image picture,
.comparison-image picture,
.hero-bg-image picture {
    display: block;
    width: 100%;
    height: 100%;
}

.use-case-image picture img,
.comparison-image picture img,
.hero-bg-image picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
```

### Remove Problematic Lazy Loading CSS

If there's inline CSS with opacity transitions for lazy loading, **remove it**:
```css
/* REMOVE THIS - causes images not to display */
img[loading="lazy"] {
    opacity: 0;
    transition: opacity 0.3s ease-in;
}
img[loading="lazy"].loaded {
    opacity: 1;
}
```

---

## 2. LANGUAGE STRUCTURE & SEO OPTIMIZATION

### Move German Version to Root

**Current:** `/de/index.html`
**Target:** `/index.html`

1. Move `/de/index.html` → `/index.html`
2. Update all asset paths in the moved file from `../assets/` to `assets/`
3. Update language switcher links in footer
4. Delete empty `/de/` directory after migration

### Update Language Switcher (All Versions)

**German version (`/index.html`):**
```html
<div class="footer-language-switcher">
    <div class="footer-language-toggle">🇩🇪</div>
    <div class="footer-language-dropdown">
        <a href="index.html" class="active" hreflang="de" lang="de">🇩🇪 Deutsch</a>
        <a href="en/index.html" hreflang="en" lang="en">🇬🇧 English</a>
        <a href="es/index.html" hreflang="es" lang="es">🇪🇸 Español</a>
    </div>
</div>
```

**English version (`/en/index.html`):**
```html
<div class="footer-language-switcher">
    <div class="footer-language-toggle">🇬🇧</div>
    <div class="footer-language-dropdown">
        <a href="../index.html" hreflang="de" lang="de">🇩🇪 Deutsch</a>
        <a href="../en/index.html" class="active" hreflang="en" lang="en">🇬🇧 English</a>
        <a href="../es/index.html" hreflang="es" lang="es">🇪🇸 Español</a>
    </div>
</div>
```

**Spanish version (`/es/index.html`):**
```html
<div class="footer-language-switcher">
    <div class="footer-language-toggle">🇪🇸</div>
    <div class="footer-language-dropdown">
        <a href="../index.html" hreflang="de" lang="de">🇩🇪 Deutsch</a>
        <a href="../en/index.html" hreflang="en" lang="en">🇬🇧 English</a>
        <a href="../es/index.html" class="active" hreflang="es" lang="es">🇪🇸 Español</a>
    </div>
</div>
```

### Update Meta Tags for All Versions

**German (`/index.html`):**
```html
<!-- Canonical URL -->
<link rel="canonical" href="https://yourdomain.com/index.html">

<!-- Alternate Language Links -->
<link rel="alternate" hreflang="de" href="https://yourdomain.com/index.html">
<link rel="alternate" hreflang="en" href="https://yourdomain.com/en/index.html">
<link rel="alternate" hreflang="es" href="https://yourdomain.com/es/index.html">
<link rel="alternate" hreflang="x-default" href="https://yourdomain.com/index.html">

<!-- Open Graph -->
<meta property="og:locale" content="de_DE">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:locale:alternate" content="es_ES">
```

**English (`/en/index.html`):**
```html
<link rel="canonical" href="https://yourdomain.com/en/index.html">
<link rel="alternate" hreflang="de" href="https://yourdomain.com/index.html">
<link rel="alternate" hreflang="en" href="https://yourdomain.com/en/index.html">
<link rel="alternate" hreflang="es" href="https://yourdomain.com/es/index.html">
<link rel="alternate" hreflang="x-default" href="https://yourdomain.com/index.html">

<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="de_DE">
<meta property="og:locale:alternate" content="es_ES">
```

**Spanish (`/es/index.html`):**
```html
<link rel="canonical" href="https://yourdomain.com/es/index.html">
<link rel="alternate" hreflang="de" href="https://yourdomain.com/index.html">
<link rel="alternate" hreflang="en" href="https://yourdomain.com/en/index.html">
<link rel="alternate" hreflang="es" href="https://yourdomain.com/es/index.html">
<link rel="alternate" hreflang="x-default" href="https://yourdomain.com/index.html">

<meta property="og:locale" content="es_ES">
<meta property="og:locale:alternate" content="de_DE">
<meta property="og:locale:alternate" content="en_US">
```

### Create/Update sitemap.xml

Create `/sitemap.xml` at project root:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

    <!-- German (Primary) -->
    <url>
        <loc>https://yourdomain.com/index.html</loc>
        <xhtml:link rel="alternate" hreflang="de" href="https://yourdomain.com/index.html"/>
        <xhtml:link rel="alternate" hreflang="en" href="https://yourdomain.com/en/index.html"/>
        <xhtml:link rel="alternate" hreflang="es" href="https://yourdomain.com/es/index.html"/>
        <lastmod>2025-12-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>

    <!-- English -->
    <url>
        <loc>https://yourdomain.com/en/index.html</loc>
        <xhtml:link rel="alternate" hreflang="de" href="https://yourdomain.com/index.html"/>
        <xhtml:link rel="alternate" hreflang="en" href="https://yourdomain.com/en/index.html"/>
        <xhtml:link rel="alternate" hreflang="es" href="https://yourdomain.com/es/index.html"/>
        <lastmod>2025-12-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Spanish -->
    <url>
        <loc>https://yourdomain.com/es/index.html</loc>
        <xhtml:link rel="alternate" hreflang="de" href="https://yourdomain.com/index.html"/>
        <xhtml:link rel="alternate" hreflang="en" href="https://yourdomain.com/en/index.html"/>
        <xhtml:link rel="alternate" hreflang="es" href="https://yourdomain.com/es/index.html"/>
        <lastmod>2025-12-01</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Add legal pages -->
    <url>
        <loc>https://yourdomain.com/impressum.html</loc>
        <lastmod>2025-12-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.3</priority>
    </url>

    <url>
        <loc>https://yourdomain.com/datenschutz.html</loc>
        <lastmod>2025-12-01</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.3</priority>
    </url>
</urlset>
```

### Add Automatic Language Detection (Optional)

Create `/index.html` root redirect with language detection:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
        const userLang = navigator.language || navigator.userLanguage;
        const lang = userLang.substring(0, 2);

        if (lang === 'en') {
            window.location.href = '/en/index.html';
        } else if (lang === 'es') {
            window.location.href = '/es/index.html';
        } else {
            window.location.href = '/index.html'; // German default
        }
    </script>
    <meta http-equiv="refresh" content="0; url=/index.html">
</head>
<body>
    <p>Redirecting to your language...</p>
</body>
</html>
```

---

## 3. FILE STRUCTURE CLEANUP

### Remove Redundant Files

Delete the following if they exist:
```
- Old unoptimized images (keep only new responsive versions)
- /de/ directory (after moving to root)
- Backup files (*.bak, *.old, *-copy.html)
- translations.json, offers.json (if unused)
- package.json, package-lock.json (if not needed)
- DEPLOYMENT.md (if not relevant)
- Temporary scripts used for migration
```

### Organize Asset Structure

Ensure clean structure:
```
/
├── index.html                  (German - primary)
├── sitemap.xml
├── impressum.html
├── datenschutz.html
├── en/
│   └── index.html             (English)
├── es/
│   └── index.html             (Spanish)
└── assets/
    ├── css/
    │   └── styles-refined.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── hero-1-mobile.avif
    │   ├── hero-1-mobile.webp
    │   ├── hero-1-mobile.jpg
    │   ├── hero-1-tablet.avif
    │   └── ... (all responsive images)
    └── favicon/
        ├── favicon.ico
        └── ... (favicon variants)
```

---

## 4. CSS OPTIMIZATION

### Remove Redundant Background Images

Find and remove old CSS background-image rules that are now handled by picture elements:
```css
/* REMOVE these if images now use <picture> elements */
.hero-slide-1 {
    background: url('../images/old-hero.jpg'); /* DELETE */
    background-size: cover;                     /* DELETE */
    background-position: center;                /* DELETE */
}

/* KEEP only positioning */
.hero-slide-1 {
    position: relative;
}
```

### Clean Up Inline CSS

Remove any problematic inline styles in `<style>` tags within HTML files, especially:
- Lazy loading opacity transitions that hide images
- Redundant background-image declarations
- Unused critical CSS for removed elements

---

## 5. CONTENT VALIDATION

### Research and Verify Facts

For any factual claims (especially legal/regulatory info like funding programs, grants, requirements):
1. Use WebSearch tool to verify current accuracy
2. Remove outdated information (e.g., "changes coming in April 2025" when we're past that date)
3. Add critical disclaimers if needed

### Example: Gründungszuschuss FAQ (if applicable)

Ensure FAQ sections include:
- Accurate requirements (e.g., 150 days ALG I remaining)
- Critical timing info (e.g., "Company must NOT be founded yet at application time")
- Current funding amounts (Phase 1: full ALG I + €300, Phase 2: €300 only)
- Proper sequence (First apply, then register business)

---

## 6. GIT WORKFLOW

### Commit Strategy

Use semantic commits with clear messages:
```bash
# Before major changes
git add .
git commit -m "🔧 Pre-optimization checkpoint - backup before image optimization"

# After image optimization
git commit -m "🖼️ OPTIMIZE: Convert all images to responsive AVIF/WebP/JPG sets
- Created mobile/tablet/desktop versions for 45 images
- Replaced <img> with <picture> elements
- Reduced total image size from 51MB to 500KB (100x reduction)"

# After language structure changes
git commit -m "🌍 REFACTOR: Move German to root + update language switcher
- Moved /de/index.html → /index.html
- Updated all hreflang and canonical URLs
- Created sitemap.xml with proper language alternates"

# After cleanup
git commit -m "🧹 CLEANUP: Remove redundant files and optimize structure
- Deleted old unoptimized images
- Removed /de/ directory
- Cleaned up backup files and unused configs"
```

### Add Co-Authorship

Always include at end of commit messages:
```
🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## 7. TESTING CHECKLIST

After all optimizations, verify:

### Performance
- [ ] All images load in correct format (AVIF on modern browsers, WebP fallback, JPG for old browsers)
- [ ] Images are appropriately sized for device (mobile gets mobile version, etc.)
- [ ] Lazy loading works correctly (below-fold images load on scroll)
- [ ] Hero images load immediately (loading="eager")
- [ ] Total page size reduced significantly (check in DevTools Network tab)
- [ ] Lighthouse Performance score 90+ on mobile and desktop

### Functionality
- [ ] All images display correctly on German version
- [ ] All images display correctly on English version
- [ ] All images display correctly on Spanish version
- [ ] Language switcher works in all directions
- [ ] No broken links or 404s
- [ ] All asset paths resolve correctly (German uses `assets/`, EN/ES use `../assets/`)

### SEO
- [ ] Sitemap.xml validates (use https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] Hreflang tags correct on all pages
- [ ] Canonical URLs point to correct version
- [ ] x-default points to German (primary) version
- [ ] All images have descriptive alt text
- [ ] Meta descriptions present and unique per language

### Browser Compatibility
- [ ] Test on Chrome (should serve AVIF)
- [ ] Test on Safari (should serve AVIF on macOS 11+, WebP on older)
- [ ] Test on Firefox (should serve AVIF)
- [ ] Test on mobile devices (should serve mobile versions)
- [ ] Test responsive breakpoints (767px, 1279px transitions)

### Code Quality
- [ ] No console errors in browser DevTools
- [ ] HTML validates (https://validator.w3.org/)
- [ ] CSS validates
- [ ] No duplicate IDs in HTML
- [ ] Proper semantic HTML structure maintained

---

## 8. EXECUTION ORDER

Follow this sequence to avoid conflicts:

1. **Create git checkpoint** (commit before starting)
2. **Image optimization** (generate all responsive versions)
3. **Update HTML** (replace all `<img>` with `<picture>`)
4. **Update CSS** (add picture support, remove old background rules)
5. **Language structure** (move German to root if needed)
6. **Update meta tags** (hreflang, canonical, og:locale)
7. **Create sitemap.xml**
8. **Update language switchers** (all three versions)
9. **Clean up files** (remove old images, backup files)
10. **Test thoroughly** (use checklist above)
11. **Commit and push** (semantic commit messages)

---

## 9. TOOLS & COMMANDS

### Image Optimization Script

Create a bash script `/optimize-images.sh`:
```bash
#!/bin/bash

# Function to optimize a single image
optimize_image() {
    local input=$1
    local basename=$(basename "$input" .jpg)
    local dirname=$(dirname "$input")

    echo "Processing: $basename"

    # Mobile (640px)
    sips -Z 640 "$input" --out "/tmp/${basename}-mobile.jpg"
    cwebp -q 85 "/tmp/${basename}-mobile.jpg" -o "${dirname}/${basename}-mobile.webp"
    avifenc --min 20 --max 63 -a end-usage=q -a cq-level=23 "/tmp/${basename}-mobile.jpg" "${dirname}/${basename}-mobile.avif"
    mv "/tmp/${basename}-mobile.jpg" "${dirname}/${basename}-mobile.jpg"

    # Tablet (1024px)
    sips -Z 1024 "$input" --out "/tmp/${basename}-tablet.jpg"
    cwebp -q 85 "/tmp/${basename}-tablet.jpg" -o "${dirname}/${basename}-tablet.webp"
    avifenc --min 20 --max 63 -a end-usage=q -a cq-level=23 "/tmp/${basename}-tablet.jpg" "${dirname}/${basename}-tablet.avif"
    mv "/tmp/${basename}-tablet.jpg" "${dirname}/${basename}-tablet.jpg"

    # Desktop (1920px or original)
    sips -Z 1920 "$input" --out "/tmp/${basename}-desktop.jpg"
    cwebp -q 85 "/tmp/${basename}-desktop.jpg" -o "${dirname}/${basename}-desktop.webp"
    avifenc --min 20 --max 63 -a end-usage=q -a cq-level=23 "/tmp/${basename}-desktop.jpg" "${dirname}/${basename}-desktop.avif"
    mv "/tmp/${basename}-desktop.jpg" "${dirname}/${basename}-desktop.jpg"

    echo "✓ Completed: $basename"
}

# Export function for parallel processing
export -f optimize_image

# Find all JPG images and process them
find ./assets/images -name "*.jpg" -not -name "*-mobile*" -not -name "*-tablet*" -not -name "*-desktop*" | \
    parallel -j 4 optimize_image

echo "All images optimized!"
```

Make executable: `chmod +x optimize-images.sh`

### Install Required Tools (macOS)

```bash
# Install via Homebrew
brew install libwebp
brew install libavif
brew install parallel

# sips is pre-installed on macOS
```

### Install Required Tools (Linux)

```bash
sudo apt-get update
sudo apt-get install webp libavif-bin parallel
sudo apt-get install imagemagick  # for convert command instead of sips
```

---

## 10. PERFORMANCE TARGETS

After optimization, aim for:

- **Total page size:** < 2MB (initial load)
- **Largest Contentful Paint (LCP):** < 2.5s
- **First Input Delay (FID):** < 100ms
- **Cumulative Layout Shift (CLS):** < 0.1
- **Lighthouse Performance:** 90+ (mobile and desktop)
- **Lighthouse Accessibility:** 95+
- **Lighthouse SEO:** 100

### Image Size Targets

| Image Type | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| Hero AVIF | 15-30 KB | 25-50 KB | 40-80 KB |
| Hero WebP | 20-40 KB | 35-70 KB | 60-120 KB |
| Hero JPG | 40-80 KB | 70-140 KB | 120-250 KB |
| Use-case AVIF | 10-20 KB | 18-35 KB | 30-60 KB |
| Portrait AVIF | 8-15 KB | 15-25 KB | 25-45 KB |

---

## NOTES

- Always test on actual devices, not just browser DevTools responsive mode
- Monitor Core Web Vitals in Google Search Console after deployment
- Consider using a CDN for assets if traffic increases
- Keep original high-res images in a separate `/source-images/` folder (not deployed)
- Update sitemap.xml `<lastmod>` date whenever content changes significantly
- German is the primary market, so it gets root domain and x-default hreflang
- AVGS and BAFA funding programs are Germany-specific, adjust content for international audiences

---

## SUCCESS CRITERIA

✅ **Image optimization:** 80-95% reduction in image file sizes
✅ **Page load:** < 3 seconds on 3G connection
✅ **SEO:** All hreflang, canonical, and sitemap correctly configured
✅ **Structure:** Clean, organized file structure with no redundancy
✅ **Functionality:** All features work across all language versions
✅ **Standards:** HTML/CSS validates, accessibility score 95+
✅ **Git history:** Clear, semantic commits documenting all changes

---

**Created:** 2025-12-01
**Based on:** KarriereLabor optimization project
**Applies to:** Multi-language static websites with image-heavy content
