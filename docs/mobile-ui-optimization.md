# Mobile UI Optimization

## What changed

- Added a phone-only bottom action bar with the primary mobile actions: Menu, Besog, Find vej, and Ring.
- Tightened mobile section spacing, typography, hero content placement, and button sizing.
- Converted the horizontal gallery into stacked mobile cards to avoid phone-width horizontal scrolling.
- Reordered the mobile menu section so menu categories appear before the large decorative food image.
- Increased mobile tap target sizes for buttons, bottom navigation, footer links, and contact links.
- Improved mobile cards for menu items, atmosphere highlights, gallery items, visit details, and opening hours.
- Preserved the existing desktop layouts and visual direction.

## Pages optimized

- Home page (`/`)
- Hero section
- Menu section
- Atmosphere section
- Image reveal section
- Gallery and Instagram embed section
- Visit/contact section
- Footer

## Mobile components added

- `MobileBottomNav`: a compact phone-only bottom navigation/action bar.
- Existing performance controllers remain in place for reveal effects, image reveal animation, gallery drag behavior, Instagram script loading, and desktop cursor loading.

## How desktop behavior was preserved

- Desktop breakpoints and multi-column layouts were left intact.
- The new bottom navigation is hidden above the phone breakpoint.
- Desktop gallery drag behavior remains available on non-touch pointers.
- Desktop card hover states and section composition were not redesigned.

## Known limitations

- This site does not contain tables, forms, dashboards, detail pages, or authenticated workflows, so no table-to-card or form-specific mobile variants were needed.
- The image reveal section still uses an intentionally oversized internal canvas, but it remains clipped inside its sticky viewport and does not create page-level horizontal scrolling.
- The third-party Instagram widget can still affect runtime performance after it loads; it is deferred until the section is near the viewport.

## Backend/API confirmation

No backend, database, schema, API, auth, billing, or business logic changes were made.
