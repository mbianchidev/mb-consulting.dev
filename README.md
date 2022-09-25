## Portfolio Website for MB-Consulting

My portfolio is a website to showcase my services.

# Features

- Quite responsive layout, works well on both Desktop and mobile.
- Dark mode support.

# Tech Stack (WIP)

The website is built in Next.js and deployed on [Vercel](https://vercel.com) I also used tailwindcss for styling (but don't ask me about that, I don't know much) and some awesome libs like react-cookie-consent :)
Here's a list of the tech stack:

- [Next.js](https://nextjs.org) for building React Components.
- [tailwindcss](https://tailwindcss.com) for styling.
- [React Rough Notation](https://roughnotation.com) for Hero section highlighting.
- [React Cookie Consent](https://github.com/Mastermindzh/react-cookie-consent) for Cookies.
- [Sendgrid](https://sendgrid.com/solutions/email-api/) as a mail service.
- [Vercel](https://vercel.com) for deployments and CI/CD.
- [GitHub's Dependabot](https://docs.github.com/en/code-security/dependabot) for code security.
- [StackOverflow](https://stackoverflow.com/questions/tagged/nextjs) because I'm not a frontend developer (as you can clearly see from my code).

# Deployment

Deployment is made of 3 steps.

- Login to [Vercel](https://vercel.com) with your GitHub account
- Project -> Deploy
- Wait for Vercel to deploy your project to production and voilà.

## Custom Domains
To configure a custom domain, bought outside Vercel, you need to change DNS in your as stated here: https://vercel.com/docs/concepts/projects/custom-domains
Tip: it can take up to 48 hours, use: https://www.whatsmydns.net/ to check if your DNS change propagated everywhere and don't worry if your site seems not responding, it's probably a DNS issue.