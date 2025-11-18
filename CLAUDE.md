# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite wedding invitation web application for Natalia & Michael's wedding. The app is deployed to GitHub Pages and features a personalized, guest-specific invitation system.

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (builds and publishes to gh-pages branch)
npm run deploy
```

## Architecture

### Guest Authentication System

The app uses a URL parameter-based guest authentication system:

- **URL Structure**: `?guest=<codigo>` - Each guest receives a unique code
- **Data Source**: Guest data is fetched from a public Google Sheets CSV at runtime (see `App.tsx:40`)
- **Guest Object**: `{ nombre: string, asientos: number, codigo: string }`
- **States**:
  - Loading state while fetching guest data
  - Invalid guest state if code not found
  - Valid guest state shows the full invitation

**Important**: When modifying the App component, preserve this authentication flow. The guest name and seat count are stored in state but currently not fully utilized in the UI (see `App.tsx:97-102`).

### Component Architecture

All components follow a consistent pattern:
- Located in `src/components/<ComponentName>/`
- Main component: `index.tsx`
- Styles: `<componentname>.sass` (lowercase)
- Components are organized as reusable, self-contained modules

### Animation System

The app uses **AnimeJS v4** (not v3) extensively for scroll-triggered animations:

```typescript
import { createScope, utils, animate, onScroll, stagger } from 'animejs';

// Pattern used in components:
const scope = useRef<Scope | null>(null);

useEffect(() => {
  scope.current = createScope({ root });
  scope.current.add(() => {
    // Select elements
    const $el = utils.$('.selector');

    // Set initial state
    utils.set($el, { y: 50, opacity: 0, filter: 'blur(2px)' });

    // Animate on scroll
    animate($el, {
      y: [50, 0],
      opacity: [0, 1],
      filter: ['blur(2px)', 'blur(0px)'],
      duration: 1000,
      autoplay: onScroll({
        enter: 'bottom-=10% top',
        leave: 'top+=10% bottom'
      })
    });
  });

  return () => scope.current?.revert();
}, []);
```

**Key Points**:
- Always use `createScope` with a ref to the root element
- Clean up with `scope.current?.revert()` in the cleanup function
- Use `onScroll` for scroll-triggered animations
- Common animation pattern: fade in + slide up + blur removal

### Icon & Ornament System

Custom SVG components are centralized in:
- `src/components/Icons/index.tsx` - Thematic icons (toast, ceremony, photograph, dinner, celebration, rings, wedding rings)
- `src/components/Ornaments/index.tsx` - Decorative SVG elements (bottom ornament, flower ornament)

Both accept props: `{ color?: string, secondColor?: string, className?: string }`
- Default color uses CSS variable `var(--primary-color)`
- Ornaments support gradient fills with two colors

### Styling System

- **Framework**: SASS (`.sass` files, not `.scss`)
- **Main styles**: `src/index.sass`
- **Component styles**: Co-located with each component
- **Design**: Uses CSS variables for theming (e.g., `var(--primary-color)`)
- **Fonts**:
  - 'Cormorant Upright' (weights: 300-700)
  - 'Imperial Script'
- **Assets**: Images stored in `src/assets/images/` (mostly WebP format)

### Data Management

Static data is defined in `App.tsx`:
```typescript
const data = {
  title: 'Nuestra Boda',
  date: '2026-03-01 15:00',
  place: 'Finca La Campana, Sevilla',
  prayer: '<p>...</p><blockquote>...</blockquote>'
}
```

**Note**: Prayer content contains HTML and should be rendered with `dangerouslySetInnerHTML` where used.

## Deployment Configuration

- **Base path**: `/wedding-invitation/` (configured in `vite.config.ts`)
- **Homepage**: `https://michaelgabu.github.io/wedding-invitation/` (set in `package.json`)
- **Deployment**: Uses `gh-pages` package to deploy to GitHub Pages
- **Server**: Configured with `host: true` for network access during development

## Important Patterns

1. **Date Handling**: Uses `date-fns` library for date operations
2. **Timer Component**: Updates every second with countdown logic
3. **Iconify Icons**: Available via `@iconify-icon/react` package for additional icons
4. **Component Index Files**: All components export via `index.tsx` for clean imports

## Common Tasks

### Adding a New Component

1. Create folder: `src/components/<ComponentName>/`
2. Create `index.tsx` with the component
3. Create `<componentname>.sass` for styles
4. Import the `.sass` file in the component
5. Export from `index.tsx`

### Adding Animations

Follow the AnimeJS v4 scope pattern shown above. Ensure cleanup with `revert()` to prevent memory leaks.

### Working with Guest Data

The Google Sheets CSV structure expects headers: `nombre,asientos,codigo`
- To modify guest authentication, edit the fetch logic in `App.tsx:40-66`
- The current implementation is case-sensitive for the `codigo` field

## Technologies

- **React 19** with TypeScript
- **Vite 7** for build tooling
- **AnimeJS 4** for animations
- **SASS** for styling
- **date-fns** for date manipulation
- **ESLint** for code quality
