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
      // Existing links/projects
      {
        source: '/telegram',
        destination: 'https://t.me/mbianchidev_bot',
        permanent: false,
        basePath: false
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/github',
        destination: 'https://github.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/cv',
        destination: '/static/Matteo_Bianchi_CV_smart.pdf',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/mbianchidev',
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
        source: '/stackoverflow',
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
        source: '/newsletter',
        destination: 'https://funews.substack.com/',
        permanent: false,
        basePath: false
      },
      // Future links for future projects
      {
        source: '/streaming',
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
        source: '/youtube',
        destination: '/work-in-progress',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: '/work-in-progress',
        permanent: false,
      },
      {
        source: '/facebook',
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
    value: `default-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://www.mb-consulting.dev https://mb-consulting.dev; child-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://apis.google.com https://vercel.live https://*.vercel.com; worker-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; img-src 'self' blob: data: http://localhost:3000 https://*.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; frame-src https://www.gstatic.com https://www.google.com https://accounts.google.com https://docs.google.com https://content.googleapis.com https://vercel.live'; object-src 'none';`
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