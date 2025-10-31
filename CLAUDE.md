# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

This is a **career and founder coaching website** for **Dr. Prill Sempere** built on optimized static HTML/CSS/JS. The project focuses on coaching services accessible through German funding programs (AVGS/BAFA) with multi-language support.

### Core Structure
- **`/docs/`** - Complete project documentation (brief.md, prd.md, ui-ux-specifications.md)
- **`/deployment-clean/`** - Production-ready package (28MB optimized)
- **`/deployment-clean/de/index.html`** - German version (primary)
- **`/deployment-clean/en/index.html`** - English version
- **`/deployment-clean/es/index.html`** - Spanish version
- **`/CI-Style-Guide.md`** - Brand guidelines and color palette
- **`/images/`** - Source photos for coach portraits

### Multi-Language Implementation
The website supports German (primary), English, and Spanish:
- **German**: `/deployment-clean/de/index.html` (primary market)
- **English**: `/deployment-clean/en/index.html` (secondary)
- **Spanish**: `/deployment-clean/es/index.html` (tertiary)

All language versions share assets from `/deployment-clean/assets/`.

## Development Commands

### Local Testing
```bash
# For static HTML files, simply open in browser:
open deployment-clean/de/index.html
# OR use a local server:
cd deployment-clean
python3 -m http.server 8000
```

### Image Generation Workflow
**IMPORTANT**: Use Nano Banana AI for image generation with warm coaching aesthetic.

1. **Source material**: Coach photos from `/images/` directory
2. **Brand colors**: Warm Cream (#F5F1E8), Terracotta (#D4957D), Sage Green (#8FA68E), Soft Gold (#D4AF37)
3. **Output location**: `/deployment-clean/assets/images/`
4. **Style**: Warm, professional, supportive (NOT corporate blue/tech aesthetic)

See detailed prompts in `IMAGE-GENERATION-PROMPTS.md`

### Git Operations
**IMPORTANT**: Always commit before making significant changes.

```bash
# Before major changes
git add .
git commit -m "🔧 Pre-change checkpoint - [description]"

# After completing changes
git add .
git commit -m "🚀 [Feature description] - brief technical detail"
```

## Key Technical Details

### Brand Guidelines (CI-Style-Guide.md)
- **Primary Colors**: Warm Cream (#F5F1E8), Soft Beige (#E8DCC8), Professional Taupe (#A89B8C)
- **Accent Colors**: Terracotta (#D4957D), Sage Green (#8FA68E), Soft Gold (#D4AF37)
- **Typography**: Inter font family with system fallbacks
- **Tone**: Warm, supportive, professional but approachable
- **Image Rules**: NO text in images, warm professional aesthetic, human-centered (not tech-centered)

### Business Model
- **Services**: Career coaching (Perspektivcoaching) and Founder coaching (Gründercoaching)
- **Funding**: AVGS (job center vouchers) and BAFA (founder support) make coaching free/subsidized
- **Pricing**: Free with vouchers, or €80-150/session private pay
- **Target Market**: Germany only (funding programs are Germany-specific)
- **Languages**: German, English, Spanish coaching available

### Production Optimization
The `/deployment-clean/` directory is performance-optimized:
- **Size**: 28MB optimized package
- **Images**: WebP with JPG fallbacks, < 200KB each
- **CSS**: Minified with critical CSS inlined
- **Performance**: < 3 second load time target

### Coach Profile
- **Name**: Dr. Luis Prill Sempere
- **Experience**: 20+ years founding/entrepreneurship (since 2002)
- **Expertise**: AVGS/BAFA funding navigation, career transitions, business founding
- **Background**: Multiple company exits, practical results-oriented approach
- **Languages**: German, English, Spanish

## Response Format Requirements

**IMPORTANT**: Always provide concise summaries (max 2 paragraphs) at end of responses for quick understanding.

## Change Management Protocol

**CRITICAL**: For significant content, messaging, or design changes:
1. **EXPLORE** - Read requirements and current implementation
2. **PLAN** - Create detailed plan with rationale
3. **ASK PERMISSION** - Present plan for approval before implementation
4. **IMPLEMENT** - Only after explicit approval

Never make major changes to core messaging, services, or brand positioning without permission.

## Content Strategy

**Reference**: See `/docs/brief.md` and `/docs/prd.md` for complete strategy.

### Core Philosophy
- **Brand Truth**: "Klarheit. Strategie. Erfolg." (Clarity. Strategy. Success.)
- **Value Proposition**: Experienced guidance + Funded accessibility + Practical results
- **Positioning**: The entrepreneur-turned-coach with 20+ years real experience

### Target Audience
**Primary: Job Seekers & Career Changers**
- Age: 25-55, German residents
- Need: Career transitions, interview prep, clarity
- Funding: AVGS eligible (free coaching through job centers)
- Pain: Lack of direction, confidence, affordable guidance

**Secondary: Founders & Entrepreneurs**
- Age: 25-50, early-stage founders
- Need: Business clarity, pitch decks, funding strategy
- Funding: BAFA eligible (up to 80% subsidized)
- Pain: Isolated decisions, funding navigation complexity

### Messaging Framework
- **Warm and supportive** (not cold or clinical)
- **Professional but approachable** (not overly formal)
- **Empowering and practical** (not theoretical or salesy)
- **Funding accessibility** emphasized throughout
- **Real experience** highlighted (20+ years, exits, AVGS/BAFA expertise)

## Current Status (October 2025)

### Completed ✅
- Documentation updated (brief.md, prd.md, CI-Style-Guide.md)
- CSS color palette transformed to warm coaching aesthetic
- File cleanup (removed consulting-specific content)
- Git structure organized

### In Progress 🔄
- HTML content transformation (German → English → Spanish)
- Image generation for coaching aesthetic
- Meta tags and SEO updates

### Pending ⏳
- Generate 14 coaching images (hero, use cases, methodology, coach portrait)
- Rewrite all HTML content for coaching messaging
- Update domain references (away from BigBrainBusiness.de)
- Final testing and quality check
- Deploy to new domain

## Next Steps for Developer/Designer

1. **Generate Images** using prompts in `IMAGE-GENERATION-PROMPTS.md`
2. **Update HTML content** following coaching messaging guidelines
3. **Test** all three language versions
4. **Configure Cal.com** booking integration
5. **Acquire domain** and deploy

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Gallery**: Swiper.js for hero slides
- **Booking**: Cal.com integration (to be configured)
- **Hosting**: German hosting recommended (GDPR compliance)
- **Analytics**: Privacy-focused (Matomo or Plausible)

## Performance Targets

- Page Load: < 3 seconds
- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- Mobile Usability: 100/100
- WCAG AA compliance

##SEO Keywords (German Market)

- Karriere-Coaching, Perspektivcoaching
- Gründerberatung, Gründercoaching
- AVGS Coaching, BAFA Förderung
- Existenzgründungsberatung
- Bewerbungscoaching, Pitch Deck Beratung
