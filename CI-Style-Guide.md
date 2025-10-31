# KarriereLabor - CI/Branding Style Guide

## Brand Identity

**Brand Name:** KarriereLabor (one word, camelCase)
**Tagline:** "Ihr Karriere-Labor" (Your Career Laboratory)
**Positioning:** A safe, inclusive space to explore career possibilities with professional guidance

---

## Visual Identity

### Color Palette (German Flag Colors + Pastels)

**Primary Colors (Intense - Use for Borders, Text Accents, Small Elements):**
- **KarriereLabor Gold:** #FECC02 (Bright gold - borders, accent text, CTAs)
- **KarriereLabor Red:** #FF0303 (Bright red - borders, highlights, accents)
- **Pure Black:** #000000 (Primary text, borders, logo elements)
- **Pure White:** #FFFFFF (Main backgrounds, cards, contrast)

**Pastel Variants (Muted - Use for Backgrounds, Large Areas, Imagery):**
- **Soft Gold:** #FFF4CC (Light gold background, subtle highlights)
- **Warm Cream:** #FFFBF0 (Off-white background, card backgrounds)
- **Pale Red:** #FFE5E5 (Light red tint for sections)
- **Soft Pink:** #FFF0F0 (Very subtle red background)
- **Cool Gray:** #F8F9FA (Neutral background alternative)
- **Light Charcoal:** #6B7280 (Secondary text, muted elements)

**Text Colors:**
- **Primary Text:** #000000 (Black - main body text)
- **Secondary Text:** #6B7280 (Light charcoal - captions, meta info)
- **Accent Text:** #FF0303 (Red - important highlights)
- **Link/CTA Text:** #FECC02 (Gold - on dark backgrounds) or #000000 (Black - on light backgrounds)

### Neumorphic Shadow System

KarriereLabor uses soft, elevated shadows to create a modern, professional lab aesthetic:

**Primary Shadow (Cards, Boxes):**
```css
box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
```

**Soft Shadow (Subtle elevation):**
```css
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
```

**Deep Shadow (Important elements, CTAs):**
```css
box-shadow: 0 5px 40px rgba(0, 0, 0, 0.20);
```

**Inset Shadow (Pressed states):**
```css
box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
```

**Border Shadow Combination (Preferred Style):**
```css
/* White card with subtle border and shadow */
background: #FFFFFF;
border: 1px solid #E5E7EB;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
border-radius: 12px;
```

**Colored Border Variants:**
```css
/* Gold accent border */
border-left: 4px solid #FECC02;

/* Red accent border */
border-top: 3px solid #FF0303;

/* Black professional border */
border: 2px solid #000000;
```

### Typography

- **Primary Font:** Inter (Clean, professional, highly readable)
- **Heading Font:** Inter (Consistent hierarchy)
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif

**Font Weights:**
- Regular: 400 (Body text)
- Medium: 500 (Subheadings, emphasis)
- Semi-Bold: 600 (Headings, important text)
- Bold: 700 (Hero text, strong CTAs)

**Font Sizes:**
- Hero Heading: 3.5rem (56px) - Bold
- Section Heading: 2.5rem (40px) - Semi-Bold
- Subsection Heading: 1.75rem (28px) - Semi-Bold
- Body Text: 1.125rem (18px) - Regular
- Small Text: 1rem (16px) - Regular
- Caption: 0.875rem (14px) - Regular

### Logo Usage

**Primary Logo:** KarriereLaborText.svg (full brand name with logo)
- Use in header/navigation
- Minimum width: 180px
- Clear space: Minimum 20px around logo
- On white backgrounds only

**Icon Logo:** KarriereLaborLogo.svg (icon only)
- Use in footer, favicons, small spaces
- Minimum size: 40x40px
- Can be used as accent element

**Logo Colors:**
- Always use original colors (Black, White, Red, Gold)
- Never recolor or modify
- Never add effects or distortions
- Maintain aspect ratio always

### Image Guidelines

#### Core Rules
- **NO TEXT IN IMAGES** - All text content stays in HTML for SEO and accessibility
- **Lab-like professional aesthetic** - Clean, structured, methodical
- **Inclusive and accessible** - Diverse representation, welcoming atmosphere
- **Geometric overlays encouraged** - Grids, lines, structure (subtle)
- **Consistent lighting** - Bright, clean, clear (not dramatic or moody)
- **Resolution:** 1920x1080 for hero/gallery backgrounds, optimized for web

#### Visual Style
- Clean, bright, professional environments
- Structured and organized compositions
- Geometric elements (grids, charts, pathways)
- Modern office/lab settings (NOT academic/sterile)
- Natural light with clarity
- Human-centered but professional
- Exploration and discovery symbolism

#### Visual Elements to Use
- **Research & Exploration:** Notebooks, planning materials, organized workspaces
- **Clarity:** Clean surfaces, organized materials, clear pathways
- **Structure:** Grid patterns, timelines, flowcharts (subtle background elements)
- **Progress:** Step-by-step visuals, journey paths, milestones
- **Collaboration:** Professional meetings, one-on-one conversations
- **Discovery:** Light bulb moments, "aha" symbolism (subtle)
- **Inclusivity:** Diverse people, accessible environments, welcoming spaces

#### Visual Elements to AVOID
- Academic laboratory equipment (beakers, test tubes - too literal)
- Cold, sterile medical/scientific settings
- Overly corporate stock photos (suits, boardrooms)
- Tech/AI imagery (circuits, holograms, robots)
- Luxury/status symbols
- Aggressive or competitive imagery
- Cluttered or chaotic environments

### Coach Portrait Photography

**Style:**
- Professional but approachable
- Clean, bright lighting
- Neutral or white backgrounds (fits neumorphic design)
- Business casual or smart casual attire
- Authentic, welcoming expression
- Eye contact with camera (builds trust)
- Option to add subtle geometric overlay (grid, lab aesthetic)

**Usage:**
- About/Bio section (larger, detailed)
- Hero section optional (smaller, supportive)
- Booking confirmation (reassuring presence)

### Hero Gallery Slide Concepts (5 Slides)

#### Slide 1: Career Exploration
- **Theme:** Discover your professional possibilities
- **Visual:** Organized workspace with planning materials, notebook, clear desk
- **Overlay:** Subtle gold geometric grid in corner
- **Mood:** Clean, clear, ready to explore

#### Slide 2: Structured Support
- **Theme:** Professional guidance through your career journey
- **Visual:** Professional meeting space, consultation setting
- **Overlay:** Red accent line (subtle)
- **Mood:** Supportive, structured, confident

#### Slide 3: AVGS Funding Access
- **Theme:** Free coaching through job center vouchers
- **Visual:** Open door, welcoming entrance, accessible space
- **Overlay:** Gold border on white card with shadow
- **Mood:** Accessible, open, inclusive

#### Slide 4: Research Your Options
- **Theme:** Methodical exploration of career paths
- **Visual:** Career pathway visualization, organized research materials
- **Overlay:** Black and gold geometric elements
- **Mood:** Methodical, clear, empowering

#### Slide 5: Your Career Lab
- **Theme:** A safe space to experiment with your future
- **Visual:** Clean, bright, organized workspace (lab aesthetic without equipment)
- **Overlay:** White cards with soft shadows
- **Mood:** Safe, professional, exploratory

### Use Case Imagery (4-6 Categories)

1. **Job Search Coaching**
   - Symbolism: Pathways, doors, opportunities
   - Visual: Organized job search materials, structured planning
   - Overlay: White cards with gold borders

2. **Interview Preparation**
   - Symbolism: Confidence, practice, preparation
   - Visual: Professional meeting space, practice setting
   - Overlay: Red accent lines

3. **Career Orientation**
   - Symbolism: Compass, direction, exploration
   - Visual: Career mapping, pathway planning
   - Overlay: Geometric grids (subtle)

4. **Application Training**
   - Symbolism: Documents, structure, professionalism
   - Visual: Organized application materials, professional workspace
   - Overlay: Black borders with shadows

5. **Perspective Coaching** (Optional)
   - Symbolism: Horizon, vision, clarity
   - Visual: Clear views, open spaces, future-oriented
   - Overlay: Minimal, clean

6. **Founder Consultation** (If applicable)
   - Symbolism: Foundation, building, planning
   - Visual: Business planning materials, structured strategy
   - Overlay: Gold and black elements

### Methodology Imagery (3 Steps)

1. **Explore Phase**
   - **Symbol:** Discovery, assessment, understanding
   - **Visual:** Organized research materials, open notebook
   - **Overlay:** Gold geometric corner element
   - **Mood:** Curious, open, welcoming

2. **Clarify Phase**
   - **Symbol:** Structure, planning, direction
   - **Visual:** Clear pathways, organized planning board
   - **Overlay:** Red accent with grid
   - **Mood:** Focused, methodical, clear

3. **Act Phase**
   - **Symbol:** Implementation, progress, results
   - **Visual:** Forward movement, completion, achievement
   - **Overlay:** Black and gold borders
   - **Mood:** Confident, supported, successful

---

## Brand Messaging & Tone

### Core Philosophy

**Brand Truth:** "Ihr Karriere-Labor" (Your Career Laboratory)

**Value Proposition:**
- Safe space to explore career possibilities
- Structured, professional guidance
- Accessible through funding (AVGS) - often free
- Inclusive approach for all education levels

**Positioning:**
- The career lab where everyone can research their professional future
- Methodical, evidence-based approach (subtle scientific background)
- Practical, accessible, results-oriented

### Target Audience

**Primary: Job Seekers & Unemployed Individuals**
- Age: 18-60, all education levels
- Location: Germany (AVGS funding eligible)
- Need: Career direction, job search support, interview preparation
- Funding: AVGS vouchers through job centers (free coaching)
- Pain: Unemployment, lack of direction, need for accessible support

**Secondary: Career Changers**
- Age: 25-55, currently employed or unemployed
- Need: New direction, skills assessment, transition support
- Inclusive: All backgrounds and education levels welcome

**Tertiary: Founders (BAFA eligible)**
- Age: 25-50, early-stage entrepreneurs
- Need: Business clarity, strategy, funding navigation
- Funding: BAFA eligible (subsidized)

### Tone of Voice Guidelines

**Overall Tone:**
- **Professional but welcoming** (Not cold or intimidating)
- **Inclusive and accessible** (Not academic or exclusive)
- **Structured and clear** (Not chaotic or vague)
- **Supportive and encouraging** (Not judgmental or pressuring)
- **Practical and action-oriented** (Not purely theoretical)
- **Light lab metaphor** (Not heavy scientific jargon)

**Language Style:**
- Simple, clear German (B1-B2 level)
- "Sie" form (professional respect) or "Du" if audience prefers
- Active voice (empowering, direct)
- Short sentences (accessible, scannable)
- Concrete examples (relatable, practical)
- Positive framing (hopeful, forward-looking)

**Lab Metaphor Integration (Light Touch):**
- "Im KarriereLabor erforschen Sie Ihre beruflichen Möglichkeiten"
- "Entdecken Sie Ihren beruflichen Weg"
- "Systematischer Ansatz für Ihre Karriere"
- "Ein geschützter Raum für Ihre berufliche Entwicklung"
- Avoid: Heavy scientific language, academic terminology, literal lab references

**Words to Use:**
- Entdecken (discover), erforschen (explore), entwickeln (develop)
- Klarheit (clarity), Orientierung (orientation), Perspektive (perspective)
- Unterstützung (support), Begleitung (guidance), gemeinsam (together)
- Struktur (structure), Methode (method), Schritt für Schritt (step by step)
- Zugänglich (accessible), offen (open), inklusiv (inclusive)
- AVGS, Bildungsgutschein (education voucher), gefördert (funded)

**Words to Avoid:**
- Wissenschaftlich (too academic)
- Experiment (too literal with lab metaphor)
- Elite, exklusiv (excludes target audience)
- Garantiert (unrealistic promises)
- Kompliziert (discouraging)
- Laboratorium (too formal/literal)

### Brand Messaging

**Taglines:**
- Primary: "Ihr Karriere-Labor" (Your Career Laboratory)
- Secondary: "Berufliche Orientierung mit Struktur und Unterstützung" (Career Orientation with Structure and Support)

**Core Messages:**
1. **Accessible Support:** AVGS funding means coaching is often free for job seekers
2. **Structured Approach:** Methodical, clear process (rooted in scientific background without emphasizing it)
3. **Inclusive Space:** For everyone, all education levels, diverse backgrounds
4. **Practical Results:** Focused on real outcomes - jobs, applications, interviews
5. **Safe Exploration:** Lab metaphor = safe space to try, explore, discover

**PhD Background (Bio Section Only):**
- Mentioned briefly in coach bio
- Framed as "systematic approach" not academic credentials
- Shows up in methodology (structured, evidence-based) not in bragging
- Never in headlines or primary messaging

---

## Design System Components

### Buttons

**Primary CTA (Gold on Dark):**
```css
background: #FECC02;
color: #000000;
border: none;
box-shadow: 0 4px 20px rgba(254, 204, 2, 0.3);
border-radius: 8px;
font-weight: 600;
```

**Secondary CTA (White with Black Border):**
```css
background: #FFFFFF;
color: #000000;
border: 2px solid #000000;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
border-radius: 8px;
font-weight: 500;
```

**Accent CTA (Red Border):**
```css
background: #FFFFFF;
color: #FF0303;
border: 2px solid #FF0303;
box-shadow: 0 2px 15px rgba(255, 3, 3, 0.15);
border-radius: 8px;
font-weight: 600;
```

### Cards

**Standard Card:**
```css
background: #FFFFFF;
border: 1px solid #E5E7EB;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
border-radius: 12px;
padding: 2rem;
```

**Accent Card (Gold):**
```css
background: #FFFFFF;
border-left: 4px solid #FECC02;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
border-radius: 12px;
padding: 2rem;
```

**Accent Card (Red):**
```css
background: #FFFFFF;
border-top: 3px solid #FF0303;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
border-radius: 12px;
padding: 2rem;
```

**Background Card (Pastel):**
```css
background: #FFF4CC; /* Soft gold */
border: none;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
border-radius: 12px;
padding: 2rem;
```

### Sections

**White Section (Default):**
```css
background: #FFFFFF;
```

**Soft Gold Section:**
```css
background: #FFFBF0; /* Warm cream */
```

**Cool Gray Section:**
```css
background: #F8F9FA;
```

---

## Implementation Notes

### Responsive Considerations
- Cards stack vertically on mobile
- Logo scales proportionally (min 150px on mobile)
- Touch targets minimum 44x44px
- Shadows reduce on mobile for performance
- Borders remain visible at all sizes

### Accessibility
- **Contrast ratio:** Minimum 4.5:1 for normal text (Black #000000 on White #FFFFFF = 21:1 ✓)
- **Gold text:** Only on dark backgrounds or as accent (never primary body text on white)
- **Red text:** Only for small highlights/accents
- All images have descriptive alt text
- Focus states clearly visible (2px solid #FF0303 outline)
- Keyboard navigation fully supported

### Performance
- Logo SVG: < 10KB
- Images optimized: < 200KB each
- WebP format with JPG fallbacks
- Critical CSS inlined
- Shadows use transform for GPU acceleration
- Target load time: < 3 seconds

### Brand Consistency Checklist
- [ ] KarriereLabor written as one word (camelCase)
- [ ] Intense colors (red/gold) used only for borders/small accents
- [ ] White backgrounds with shadows (neumorphic style)
- [ ] Pastel variants for large background areas
- [ ] Lab metaphor used lightly (not heavy scientific language)
- [ ] Inclusive, accessible language (all education levels)
- [ ] PhD mentioned only in bio section
- [ ] Professional but welcoming imagery (not academic)
- [ ] AVGS funding emphasized for accessibility

---

## Summary

**KarriereLabor** is a professional career coaching service that uses a light laboratory metaphor to create an inclusive, structured environment for career exploration. The brand combines German flag colors (black, red, gold) with modern neumorphic design, maintaining professionalism while remaining accessible to all. The design emphasizes clarity, structure, and supportive guidance through clean white spaces, subtle shadows, and purposeful color accents.
