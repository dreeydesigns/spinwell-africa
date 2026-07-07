# Spinwell Africa — Design Brainstorm

## Three Stylistic Approaches

### 1. "Tropical Carnival"
A vibrant, festival-inspired design that treats every section like a stage at a colourful outdoor event. Bold geometric shapes, confetti-like particle backgrounds, and fruit-slice motifs create an atmosphere of pure celebration.
**Probability**: 0.07

### 2. "Juicy Playground"
A playful, tactile design inspired by fresh fruit textures and children's illustration. Organic blob shapes, hand-drawn line accents, juice-splash transitions, and a warm, sun-drenched palette create an irresistibly fun and approachable feel — like stepping into a smoothie.
**Probability**: 0.08

### 3. "Eco-Kinetic"
A modern, motion-forward design that celebrates the physics of pedal power. Spinning wheel animations, kinetic typography, and clean geometric layouts with bold colour blocking create a sense of perpetual energy and sustainability.
**Probability**: 0.05

---

## CHOSEN APPROACH: "Juicy Playground"

### Design Movement
Organic Maximalism meets Playful Illustration — inspired by contemporary juice bar branding, children's museum wayfinding, and tropical resort aesthetics. Think Innocent Drinks meets a Nairobi rooftop party.

### Core Principles
1. **Fruit-Forward Vibrancy**: Every section pops with at least two brand colours. No section is monochrome or muted.
2. **Organic Flow**: Blob shapes, wavy dividers, and rounded corners replace hard edges. The site feels squeezed, not stamped.
3. **Tactile Depth**: Subtle shadows, layered elements, and parallax create a sense of physical objects you could reach out and touch.
4. **Joyful Motion**: Every interaction rewards the user — cards tilt, wheels spin, fruit floats, and content reveals itself like unwrapping a gift.

### Color Philosophy
The palette is drawn from a tropical fruit bowl: watermelon reds, citrus oranges, leaf greens, sunny yellows, and berry blues — all grounded by a deep plum/navy for sophistication. The cream background (`#FFF9F0`) feels like a sun-warmed tablecloth. Colours are never used in isolation — they appear in gradients, overlapping blobs, and accent pairings that feel abundant and generous, like a smoothie overflowing its cup.

| Token | Hex | OKLCH | Role |
|-------|-----|-------|------|
| spinwell-red | #EC2F5D | oklch(0.58 0.22 12) | Primary CTAs, hero accents |
| spinwell-orange | #F5871F | oklch(0.72 0.18 55) | Secondary accents, hover states |
| spinwell-green | #3FA34D | oklch(0.62 0.16 145) | Eco cues, success states, leaf motifs |
| spinwell-plum | #231436 | oklch(0.18 0.05 300) | Dark sections, footer, nav text |
| spinwell-yellow | #FFC93C | oklch(0.84 0.16 85) | Badges, highlights, fun chips |
| spinwell-blue | #2FA8E0 | oklch(0.68 0.14 230) | Sparingly — bike colour, variety |
| spinwell-cream | #FFF9F0 | oklch(0.98 0.01 85) | Primary background, warmth |

### Layout Paradigm
**Asymmetric Scroll Theatre** — the page is a vertical journey through distinct "scenes," each with its own colour personality and layout rhythm. No two adjacent sections share the same grid structure. Hero uses full-bleed parallax layers. Feature strips use horizontal scroll or auto-rotating carousels. Bike showcase uses a staggered card grid with 3D tilt. How-it-works uses a numbered timeline with scroll-linked wheel animation. The overall effect is a story unfolding, not a template repeating.

### Signature Elements
1. **Fruit-Slice Wheel Motif**: A stylised bicycle wheel made of fruit slices (watermelon, orange, lime) appears as section dividers, loading spinners, and decorative background elements. It slowly rotates via CSS animation.
2. **Juice Splash Transitions**: Wavy, organic SVG dividers between sections in alternating brand colours, creating a "poured" feeling as you scroll.
3. **Floating Fruit Particles**: Small fruit slice icons (strawberry, banana, orange, lime) gently float and bob in hero and CTA sections via CSS keyframe animations.

### Interaction Philosophy
Every interaction should feel like play, not work. Buttons have a satisfying scale-down on press (`scale(0.97)`). Cards tilt toward the cursor like they're curious. The WhatsApp CTA pulses gently like a heartbeat. Scroll reveals feel like curtains opening on a stage. The overall experience should make adults feel like kids at a smoothie stand.

### Animation
- **Hero**: Word-by-word reveal with blur-in + translateY, staggered 100ms per word, `cubic-bezier(0.16, 1, 0.3, 1)` easing
- **Scroll Reveal**: IntersectionObserver-driven fade-up + scale-in, staggered 120ms per item, threshold 0.15
- **3D Tilt Cards**: `perspective(800px)` + `rotateX/rotateY` following cursor, max 8deg rotation, shadow grows on hover
- **Floating Elements**: `@keyframes float { 0%,100% { transform: translateY(0) rotate(0deg) } 50% { transform: translateY(-15px) rotate(5deg) } }` — 4-6s duration, infinite
- **Wheel Spin**: Continuous `rotate(360deg)` at 20s linear infinite for decorative wheels
- **Marquee**: CSS `translateX(-50%)` animation at 30s linear infinite, pauses on hover
- **WhatsApp Pulse**: Subtle box-shadow pulse animation on the WhatsApp CTA button
- All animations respect `prefers-reduced-motion` with static fallbacks

### Typography System
- **Display/Headings**: "Fredoka" (Google Fonts) — weights 500, 600, 700. Rounded, bold, friendly. Perfect match for the Spinwell wordmark energy.
- **Body/UI**: "Plus Jakarta Sans" (Google Fonts) — weights 400, 500, 600. Clean, modern, excellent readability. Avoids the overused Inter.
- **Hierarchy**: H1 = Fredoka 700, clamp(2.5rem, 6vw, 4.5rem). H2 = Fredoka 600, clamp(2rem, 4vw, 3rem). H3 = Fredoka 500, clamp(1.5rem, 3vw, 2rem). Body = Plus Jakarta Sans 400, 1rem/1.6.

### Brand Essence
**One-line positioning**: Spinwell is Africa's pedal-powered event experience company — turning any gathering into a hands-on, fresh-blending, feel-good moment for people who believe fun and sustainability go hand in hand.
**Personality adjectives**: Energetic, Playful, Community-Driven.

### Brand Voice
Headlines and CTAs sound like a friend who's genuinely excited to show you something cool — confident but never corporate, warm but never cheesy. Microcopy is short, punchy, and action-oriented.
- Example headline: "Spin the Fun Loose."
- Example CTA: "Pedal Your First Smoothie"
- Ban: "Welcome to our website," "Get started today," "Click here to learn more," "We are a leading provider."

### Wordmark & Logo
The Spinwell wordmark uses a custom rounded bold lowercase sans-serif with the "i" dot replaced by a small fruit slice. The icon mark is a bicycle wheel with fruit-slice spokes (watermelon wedge, orange slice, lime segment) and a green leaf at the top. Both exist in colour-on-light and white-on-dark variants.

### Signature Brand Color
**Watermelon Red `#EC2F5D`** — unmistakably Spinwell. It's the colour of the first sip, the colour of the wheel covers, the colour that makes you smile before you even know why.


## Style Decisions

- Cream sections may never rely on plain white-card grids alone; each major cream section must include at least one large organic color shape, fruit-slice wheel motif, or juice-splash divider.
- Subpage heroes must avoid generic centered dark banners and instead use asymmetric "scene" composition with at least two visible Spinwell motifs: fruit wheel, floating fruit, splash shape, bike cutout, or tropical color block.
- Primary CTA language should sound like playful event energy, not corporate service language; prefer lines in the spirit of "Pedal Your First Smoothie" over "Get a Quote" or "Enquire Now."
- Cards should have colored panels, sticker-like badges, fruit-colored interior zones — not plain white rectangles.
- Use the full tropical palette generously: orange, yellow, green, and blue into major backgrounds, dividers, badges, numerals, image frames, and CTA moments.
