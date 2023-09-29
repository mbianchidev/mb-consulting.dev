// next.config.js
const { version } = require('./package.json');

module.exports = {
  experimental: {
    appDir: false //future use
  },
  swcMinify: true,
  publicRuntimeConfig: {
    version,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      // Internal
      {
        source: '/service',
        destination: '/services',
        permanent: false,
      },
      {
        source: '/service/devops-adoption-path',
        destination: '/service/modern-devops-adoption',
        permanent: false,
      },
      {
        source: '/service/dev-as-a-service',
        destination: '/service/devex-as-a-service',
        permanent: false,
      },
      {
        source: '/service/other-services',
        destination: '/service/mentoring-services',
        permanent: false,
      },
      // Existing links/projects
      {
        source: '/tg',
        destination: 'https://t.me/mbianchidev_bot',
        permanent: false,
        basePath: false
      },
      {
        source: '/li',
        destination: 'https://www.linkedin.com/in/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/gh',
        destination: 'https://github.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/cv',
        destination: '/static/Matteo_Bianchi_CV.pdf',
        permanent: false,
      },
      {
        source: '/resume',
        destination: '/static/Matteo_Bianchi_CV.pdf',
        permanent: false,
      },
      {
        source: '/cv-swe',
        destination: '/static/Matteo_Bianchi_CV_swe.pdf',
        permanent: false,
      },
      {
        source: '/cv-ops',
        destination: '/static/Matteo_Bianchi_CV_devops.pdf',
        permanent: false,
      },
      {
        source: '/cv-man',
        destination: '/static/Matteo_Bianchi_CV_eng_man.pdf',
        permanent: false,
      },
      {
        source: '/x',
        destination: 'https://twitter.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/cncf',
        destination: 'https://community.cncf.io/u/m9crwf/#/about',
        permanent: false,
        basePath: false
      },
      {
        source: '/blog',
        destination: 'https://medium.com/@mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/so',
        destination: 'https://stackoverflow.com/users/7410528/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/stack',
        destination: 'https://stackshare.io/mbianchidev/known-techs',
        permanent: false,
        basePath: false
      },
      {
        source: '/nl',
        destination: 'https://funews.substack.com/',
        permanent: false,
        basePath: false
      },
      {
        source: '/mentor',
        destination: 'https://mentors.to/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/cal',
        destination: 'https://calendly.com/mbianchidev/book-a-session',
        permanent: false,
        basePath: false
      },
      {
        source: '/bookings',
        destination: 'https://cal.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/book15',
        destination: 'https://cal.com/mbianchidev/intro',
        permanent: false,
        basePath: false
      },
      {
        source: '/book30',
        destination: 'https://cal.com/mbianchidev/quick-chat',
        permanent: false,
        basePath: false
      },
      {
        source: '/book60',
        destination: 'https://cal.com/mbianchidev/1-1-session',
        permanent: false,
        basePath: false
      },
      // Referral links
      {
        source: '/ib',
        destination: 'https://ibkr.com/referral/matteo953',
        permanent: false,
        basePath: false
      },
      {
        source: '/revolut',
        destination: 'https://www.revolut.com/referral/?referral-code=matteonojl!SEP1-23-AR-L1',
        permanent: false,
        basePath: false
      },
      {
        source: '/mentorcruise',
        destination: 'http://mentorcruise.com/referrals/ELUv37rO1sSaC861SLnRDxwewvJxzpiR0Buq0S0M',
        permanent: false,
        basePath: false
      },
      // Future links for future projects
      {
        source: '/tw',
        destination: 'https://www.twitch.tv/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/podcast',
        destination: '/work-in-progress', //'https://open.spotify.com/show/wip',
        permanent: false,
        basePath: false
      },
      {
        source: '/discord',
        destination: '/work-in-progress', //'https://discord.gg/mbianchidev',
        permanent: false,
      },
      {
        source: '/tech-articles',
        destination: '/work-in-progress', //'https://dev.to/mbianchidev',
        permanent: false,
      },
      {
        source: '/yt',
        destination: '/work-in-progress',
        permanent: false,
      },
      {
        source: '/insta',
        destination: '/work-in-progress',
        permanent: false,
      },
      {
        source: '/tiktok',
        destination: '/work-in-progress',
        permanent: false,
      },
      // Every link
      {
        source: '/all-links',
        destination: 'https://linktr.ee/mbianchidev',
        permanent: false,
        basePath: false
      },
    ]
  },
};

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(self), microphone=(self), geolocation=(self), midi=(self), payment=(self), sync-xhr=(self), accelerometer=(self), gyroscope=(self), magnetometer=(self), usb=(self)'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://www.mb-consulting.dev https://mb-consulting.dev; child-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://apis.google.com https://vercel.live https://*.vercel.com; worker-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; img-src 'self' blob: data: http://localhost:3000 https://*.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net https://assets.vercel.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; frame-src https://www.gstatic.com https://www.google.com https://accounts.google.com https://docs.google.com https://content.googleapis.com https://vercel.live; object-src 'none';`
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: `https://www.mb-consulting.dev https://mb-consulting.dev`,
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none'
  },
  {
    key: 'X-Download-Options',
    value: 'noopen'
  },
]