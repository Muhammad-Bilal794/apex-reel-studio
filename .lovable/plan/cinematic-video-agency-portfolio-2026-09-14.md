# Cinematic Video Agency Portfolio

## Goal
Build a premium, dark portfolio and client-acquisition page for Apex Media, centered on vertical short-form editing work and clear booking actions.

## Page structure
- Sticky cinematic navigation with section links and a glowing booking action.
- Punchy opening section with two actions, performance metrics, and a large showreel preview with animated audio detail.
- Scrolling creator/client name ticker.
- Core 9:16 reel showcase with six portrait thumbnails, category labels, hover shimmer, and responsive horizontal browsing on mobile.
- Click-to-open reel viewer with dark backdrop, 9:16 playback frame, play/pause, mute, close, and previous/next controls.
- Four-step “Retention Formula” workflow with sound-wave and timeline-inspired visual details.
- Interactive raw-to-final comparison slider plus layered editing timeline.
- Three creator testimonials with follower and views metrics.
- Booking/contact area with the requested fields, calendar-style availability placeholder, social links, and footer.

## Visual direction
- Near-black cinematic surfaces, crisp graphite borders, white typography, and restrained amber with cyan signal accents.
- Plus Jakarta Sans typography, subtle glass treatments, light grain, halos, and studio-interface details.
- Purposeful scroll reveals, reel-card tilt/glow, ticker motion, waveforms, and reduced-motion support.
- Semantic design tokens in the global stylesheet; no ad hoc component colors.

## Assets and implementation
- Generate a cohesive set of six vertical creator-video thumbnails plus one wide showreel still and one before/after comparison pair.
- Implement the page in the existing TanStack app with Tailwind CSS and Lucide icons.
- Use native video controls/state behavior around bundled visual previews; thumbnails remain polished if no production video files are supplied.
- Add unique page metadata and font loading.

## Validation
- Verify the page at desktop and mobile sizes.
- Test navigation, reel modal controls, comparison slider, and contact form interaction.
- Check for overflow, overlaps, missing imagery, console errors, and reduced-motion behavior.
