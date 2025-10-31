# Dr. Prill Sempere Coaching Website Product Requirements Document (PRD)

## Goals and Background Context

### Goals
• Establish professional online presence for career and founder coaching services
• Communicate AVGS/BAFA funding opportunities clearly to reduce barriers to entry
• Build trust through authentic coaching brand and proven 20+ years entrepreneurial experience
• Enable frictionless booking of coaching sessions via Cal.com integration
• Support multi-language audience (German, English, Spanish) while maintaining Germany focus

### Background Context
Dr. Prill Sempere brings over 20 years of founding and entrepreneurial experience to career and founder coaching. The website transforms an existing business consulting site into a warm, supportive coaching platform emphasizing accessibility through German funding programs (AVGS/BAFA) and practical, results-oriented guidance.

### Change Log
| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-10-24 | 1.0 | Initial PRD for coaching website transformation | Claude Code |

## Requirements

### Functional Requirements
1. **FR1**: Homepage must present Dr. Prill Sempere coaching services with warm, supportive messaging focused on "Klarheit. Strategie. Erfolg."
2. **FR2**: The site must clearly explain AVGS (career coaching) and BAFA (founder coaching) funding opportunities
3. **FR3**: Cal.com booking integration for seamless session scheduling
4. **FR4**: Multi-language support (German primary, English, Spanish) via /de/, /en/, /es/ URLs
5. **FR5**: Coach bio emphasizing 20+ years founding experience, AVGS/BAFA expertise, exits, and practical results
6. **FR6**: Service descriptions for career coaching and founder coaching tracks
7. **FR7**: Clear pricing transparency: Free with vouchers, or €80-150/session private pay
8. **FR8**: Mobile-responsive design for on-the-go job seekers and founders
9. **FR9**: Contact section with multiple options: booking, email, phone

### Non-Functional Requirements
1. **NFR1**: GDPR-compliant for German market (data privacy, cookie consent, legal pages)
2. **NFR2**: Fast page load (< 3 seconds) to maintain visitor engagement
3. **NFR3**: SEO optimized for German career coaching and founder coaching keywords
4. **NFR4**: Accessible design meeting WCAG AA standards
5. **NFR5**: Professional but warm visual design aligned with CI-Style-Guide.md
6. **NFR6**: Browser compatibility across modern browsers
7. **NFR7**: Analytics integration for conversion tracking (privacy-focused)

## User Interface Design Goals

### Overall UX Vision
Create a warm, trust-building coaching website that makes career and founder coaching feel accessible, supportive, and practical. The design should emphasize human connection over corporate formality, with clear pathways to understanding funding options and booking sessions.

### Key Interaction Paradigms
- **Hero Gallery**: 5-slide visual storytelling of coaching journey
  - Slide 1: Clarity & Direction (finding your path)
  - Slide 2: Career Growth (professional development)
  - Slide 3: Founder Support (building business)
  - Slide 4: Confidence & Success (achieving goals)
  - Slide 5: AVGS/BAFA Support (funded accessibility)

- **Service Cards**: Clear distinction between Career Coaching and Founder Coaching
- **Funding Highlight**: Prominent callouts for AVGS/BAFA free/subsidized coaching
- **Trust Building**: Coach bio, experience highlights, methodology explanation
- **Conversion Focus**: Multiple CTAs leading to Cal.com booking

### Core Screens and Views

**1. Hero Section**
- 5-slide gallery with warm, hopeful imagery
- Headline: "Karriere-Coaching & Gründerberatung mit über 20 Jahren Erfahrung"
- Subheadline: "Gefördert durch AVGS & BAFA - Coaching kann kostenfrei sein"
- Primary CTA: "Erstgespräch buchen"
- Language switcher (DE / EN / ES)

**2. Services Section**
Two primary service cards:

**Career Coaching (Perspektivcoaching)**
- Career transitions and job search
- Interview preparation
- Personal branding
- Salary negotiation
- AVGS funded (free with voucher)
- Icon: Career ladder or path forward

**Founder Coaching (Gründercoaching)**
- Business model development
- Pitch deck preparation
- Funding strategy
- BAFA support navigation
- BAFA funded (up to 80% subsidy)
- Icon: Building blocks or foundation

**3. Use Cases / Success Stories Section**
Interactive tabs showcasing:
- Career Transition Success
- Interview Confidence
- Founder Business Launch
- Funding Navigation
- Pitch Deck Success
- Strategic Clarity

**4. Methodology Section** (3-Step Process)
- **Discover**: Assessment and goal-setting
- **Strategy**: Planning and roadmap development
- **Action**: Execution, accountability, success

**5. Coach Section** (About Dr. Prill Sempere)
- Professional portrait (warm, approachable)
- Bio highlighting:
  - 20+ years founding experience (since 2002)
  - Multiple company exits
  - AVGS/BAFA expertise
  - Multi-language coaching (DE/EN/ES)
  - Practical, results-oriented approach
- Credentials without excessive academic emphasis
- Human, relatable tone

**6. AVGS/BAFA Info Section**
- What is AVGS? (Career coaching funding)
- What is BAFA? (Founder coaching funding)
- Eligibility requirements
- How to apply
- "We help you navigate the process"
- FAQ section

**7. Booking Section**
- Cal.com widget integration
- Alternative: Email contact form
- Phone number for accessibility
- Office hours / availability info

**8. Footer**
- Language switcher
- Legal links (Impressum, Datenschutz, AGB)
- Contact information
- Social media (LinkedIn)
- Quick links to services

### Accessibility: WCAG AA
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast (4.5:1 text, 3:1 large text)
- Focus indicators on interactive elements

### Branding
**Colors:**
- Primary: Warm Cream (#F5F1E8), Soft Beige (#E8DCC8)
- Accent: Terracotta (#D4957D), Sage Green (#8FA68E), Soft Gold (#D4AF37)
- Text: Deep Charcoal (#2C2C2C)

**Typography:**
- Inter font family (professional, readable)
- System font fallbacks

**Imagery:**
- Warm, professional, human-centered
- Authentic coach photography
- Abstract career/growth symbolism
- NO tech/AI imagery
- Optimized for web performance

### Target Device and Platforms: Web Responsive
- Desktop (primary): 1920x1080, 1366x768
- Tablet: iPad, Android tablets
- Mobile: iOS, Android smartphones
- All modern browsers (Chrome, Firefox, Safari, Edge)

## Technical Assumptions

### Repository Structure: Optimized Static Site
- `/deployment-clean/` contains production code
- `/deployment-clean/de/index.html` - German (primary)
- `/deployment-clean/en/index.html` - English
- `/deployment-clean/es/index.html` - Spanish
- `/deployment-clean/assets/` - Shared CSS, JS, images

### Service Architecture
**Static Website with Third-Party Integration**
- Static HTML/CSS/JS for fast performance
- Cal.com embed for booking
- No backend required for initial version
- Simple contact forms (can use Formspree or similar)

### Testing Requirements
**Manual Testing + Performance Validation**
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile responsive testing (iOS/Android)
- Cal.com booking functionality
- Multi-language link integrity
- Page load performance (< 3s target)
- Lighthouse audit (90+ score target)

### Deployment
**Hosting:** Affordable German hosting (Hetzner, All-Inkl, or similar)
**Domain:** TBD (e.g., dr-prill-coaching.de or similar)
**SSL:** Required for GDPR and trust
**CDN:** Optional for image optimization

## Content Requirements

### German Content (Primary - /de/)
All content professionally written in German:
- Formal "Sie" form for professional respect
- Clear, supportive language
- Emphasis on AVGS/BAFA funding accessibility
- Local German market context

### English Content (/en/)
Professional English translation:
- Formal but warm tone
- Note that funding is Germany-only
- International founders welcome for private-pay coaching

### Spanish Content (/es/)
Professional Spanish translation:
- Formal "Usted" form
- Note Germany focus and funding availability
- Emphasize multi-language coaching capability

### SEO Keywords (German market)
- Karriere-Coaching
- Perspektivcoaching
- Gründerberatung
- Gründercoaching
- AVGS Coaching
- BAFA Förderung
- Business Coach
- Existenzgründungsberatung
- Bewerbungscoaching
- Pitch Deck Beratung

## Success Metrics

### Website Performance
- Page Load Time: < 3 seconds
- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- Mobile Usability: 100/100 Google Mobile-Friendly Test

### Conversion Metrics
- Booking Conversion: 30%+ of visitors who reach booking section complete booking
- Inquiry Rate: 5%+ of visitors submit contact form
- Bounce Rate: < 60%
- Time on Site: > 2 minutes average

### SEO Metrics
- Local search visibility for career coaching keywords
- Google Business Profile integration
- Backlinks from job center resources, IHK listings

## Phase 1 Scope (MVP)

### In Scope
✅ Professional coaching website (3 languages)
✅ Hero gallery with 5 slides
✅ Career and Founder coaching service descriptions
✅ AVGS/BAFA funding information
✅ Coach bio and methodology
✅ Cal.com booking integration
✅ Mobile responsive design
✅ GDPR-compliant structure
✅ Basic SEO optimization

### Out of Scope (Future)
❌ Blog or content management system
❌ Client portal or dashboard
❌ Online payment processing
❌ Automated email sequences
❌ CRM integration
❌ Advanced analytics dashboard
❌ Multilingual blog content
❌ Video testimonials (placeholder for later)

## Technical Stack

**Frontend:**
- HTML5 (semantic structure)
- CSS3 (custom, no framework needed for simplicity)
- Vanilla JavaScript (Swiper.js for hero gallery)

**Third-Party Services:**
- Cal.com (booking/scheduling)
- Formspree or similar (contact forms, optional)
- Privacy-focused analytics (Matomo, Plausible, or similar)

**Assets:**
- WebP images with JPG fallbacks
- Optimized for < 200KB per image
- SVG icons where appropriate
- Minimal external dependencies

## Risk Mitigation

### Technical Risks
- **Cal.com Integration Failure**: Have email/phone fallback
- **Image Load Performance**: Lazy loading + WebP optimization
- **Browser Compatibility**: Test on IE11 (if needed), modern browsers

### Content Risks
- **Translation Quality**: Professional review of English/Spanish
- **AVGS/BAFA Info Accuracy**: Verify current requirements with official sources
- **Legal Compliance**: Ensure Impressum, Datenschutz meet German requirements

### User Experience Risks
- **Funding Confusion**: Clear, simple explanation of AVGS/BAFA with FAQs
- **Booking Friction**: Test Cal.com embed thoroughly, provide alternatives
- **Mobile Navigation**: Ensure touch-friendly, easy navigation on small screens

## Next Steps

1. **Image Generation**: Create warm, coaching-focused images using Nano Banana MCP
2. **CSS Update**: Implement new color palette (cream/beige/terracotta)
3. **Content Rewrite**: Transform consulting copy to coaching messaging
4. **Cal.com Setup**: Configure booking system with appropriate session types
5. **Testing**: Cross-browser, mobile, booking flow, multi-language
6. **Domain Setup**: Acquire domain and configure hosting
7. **Launch**: Deploy to production with monitoring

## Appendix: Competitive Differentiation

**What Makes This Coaching Different:**
1. **Funding Expertise**: Deep AVGS/BAFA knowledge removes cost barrier
2. **Dual Focus**: Both career and founder coaching (rare combination)
3. **Real Experience**: 20+ years founding companies, not just academic coaching
4. **Multi-Language**: German, English, Spanish capability
5. **Practical Results**: Focus on tangible outcomes (jobs landed, businesses launched)
6. **Accessible**: Warm, supportive approach vs. intimidating expert positioning

**Target Client Perception:** "Finally, a coach who has actually built businesses and understands the funding system - and they speak my language!"
