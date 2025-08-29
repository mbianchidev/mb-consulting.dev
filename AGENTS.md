# Repository Overview

This is a Next.js portfolio website for MB-Consulting/SyncTune, showcasing services, clients, experiences and values. 
The site is deployed on Vercel with a responsive design supporting both desktop and mobile.

## Tech Stack & Dependencies

- Framework: Next.js (v15.5.0) with React 18, but needs to be always upgraded to latest version for both packages
- Styling: Tailwind CSS with custom color scheme (mb_primary, mb_secondary, etc.), also updated to latest version
- Animations: React Rough Notation for hero highlighting
- Forms: React Hook Form for contact forms
- Email: SendGrid for mail services
- Analytics: Vercel Analytics and Speed Insights
- Deployment: Vercel with custom domains support
- Dependencies: Managed with Dependabot for security updates

## Code Structure & Patterns

### File Organization

- pages/ - Next.js pages using file-based routing
- components/ - Reusable React components (PascalCase naming)
- styles/ - Global CSS and font styles
- public/ - Static assets and PDFs
- services/ - Business logic and API integrations
- constants/ - Application constants and configuration
- lib/ - Utility functions and helpers

### Naming Conventions

Components: PascalCase (e.g., About.js, ContainerBlock.js)
Pages: lowercase with hyphens (e.g., cookie-policy.js, work-in-progress.js)
Tailwind Colors: Use custom brand colors (mb_primary, mb_secondary, mb_tertiary, mb_quaternary)

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Dark mode support with class strategy
- Responsive design with custom breakpoints (sm, md, lg, xl, 2xl)
- Custom transition durations (0ms, 2000ms, 4000ms)

## Browser Support

Target modern browsers:
- Chrome 64+
- Edge 79+
- Firefox 67+
- Opera 51+
- Safari 12+

## Development Guidelines

### Code Quality

- Follow React best practices and hooks patterns
- Use TypeScript types where applicable (React types included)
- Implement proper error handling (see 404.js, 500.js, _error.js)
- Maintain responsive design across all components
- Security & Performance
- CSP headers are configured in next.config.js
- Security headers implemented for XSS protection, frame options, etc.
- Next.js telemetry is enabled
- Vercel Analytics and Speed Insights integrated

### Routing & Redirects
- Extensive redirect configuration in next.config.js for:
- Social media profiles (/gh, /linkedin, /x, etc.)
- Professional resources (/cv, /resume variations)
- External services (/cal, /mentor, /blog, etc.)
- Future projects (/podcast, /discord, etc.)

### API & Services
- Contact form integration with SendGrid to be fixed because now it doesn't work
- SEO file generation script (scripts/seo-filegen.js)
- Cookie consent management
- Analytics tracking

### Common Tasks

#### Adding New Pages

- Create page in pages/ directory
- Add corresponding component in components/ if needed
- Update navigation if applicable
- Add redirect rules in next.config.js if needed

#### Styling Updates

- Use existing Tailwind classes
- Utilize custom brand colors (mb_primary, etc.)
- Ensure responsive design
- Test dark mode compatibility

#### Performance Optimization

- Use Next.js built-in optimization features
- Optimize images and assets
- Implement proper caching strategies
- Monitor with Vercel Speed Insights

#### Deployment
- Automatic deployment via Vercel
- Custom domain configuration supported
- Environment variables managed in Vercel dashboard
- Build process includes SEO file generation

## Important Notes

- This is a portfolio site, not a full-scale application
- Focus on performance, accessibility, and SEO
- Maintain professional appearance and functionality
- The owner acknowledges frontend development is not their primary expertise
- Specific license - open for community use, always.

## Troubleshooting
- DNS propagation can take up to 48 hours for custom domains
- Use whatsmydns.net to check DNS propagation
- Build errors often relate to missing dependencies or configuration issues
- Contact form issues usually relate to SendGrid configuration
