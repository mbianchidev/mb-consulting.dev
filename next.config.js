// next.config.js

module.exports = {
  // experimental: {
  //   appDir: false //future use
  // },
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
      // -- Internal stuff --

      {
        source: '/service',
        destination: '/services',
        permanent: false,
      },
      // -- External stuff --

      // Dev community profiles
      {
        source: '/gh',
        destination: 'https://github.com/mbianchidev',
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
        source: '/so',
        destination: 'https://stackoverflow.com/users/7410528/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/stack', //deprecated
        destination: 'https://stackshare.io/mbianchidev/known-techs',
        permanent: false,
        basePath: false
      },
      {
        source: '/cncf',
        destination: 'https://community.cncf.io/u/m9crwf/#/about',
        permanent: false,
        basePath: false
      },
      // Resumes and CVs
      {
        source: '/cv',
        destination: '/static/Matteo_Bianchi.pdf',
        permanent: false,
      },
      {
        source: '/resume',
        destination: '/static/Matteo_Bianchi_resume.pdf',
        permanent: false,
      },
      {
        source: '/cv-swe',
        destination: '/static/Matteo_Bianchi_swe.pdf',
        permanent: false,
      },
      {
        source: '/resume/swe',
        destination: '/static/Matteo_Bianchi_swe.pdf',
        permanent: false,
      },
      {
        source: '/cv-ops',
        destination: '/static/Matteo_Bianchi_devops.pdf',
        permanent: false,
      },
      {
        source: '/resume/ops',
        destination: '/static/Matteo_Bianchi_devops.pdf',
        permanent: false,
      },
      {
        source: '/cv-man',
        destination: '/static/Matteo_Bianchi_eng_man.pdf',
        permanent: false,
      },
      {
        source: '/resume/man',
        destination: '/static/Matteo_Bianchi_eng_man.pdf',
        permanent: false,
      },
      {
        source: '/cv-devrel',
        destination: '/static/Matteo_Bianchi_devrel.pdf',
        permanent: false,
      },
      {
        source: '/resume/devrel',
        destination: '/static/Matteo_Bianchi_devrel.pdf',
        permanent: false,
      },
      // Social media
      {
        source: '/tg',
        destination: 'https://t.me/mbianchidev_bot',
        permanent: false,
        basePath: false
      },
      {
        source: '/telegram',
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
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/x',
        destination: 'https://twitter.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/bsky',
        destination: 'https://mbianchidev.bsky.social',
        permanent: false,
        basePath: false
      },
      {
        source: '/mastodon',
        destination: 'https://hachyderm.io/@mbianchidev',
        permanent: false,
        basePath: false
      },
      // Blogs and articles
      {
        source: '/blog',
        destination: 'https://blog.mb-consulting.dev',
        permanent: false,
        basePath: false
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/devto',
        destination: 'https://dev.to/mbianchidev',
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
        source: '/newsletter',
        destination: 'https://funews.substack.com/',
        permanent: false,
        basePath: false
      },
      // Mentoring
      {
        source: '/mentor',
        destination: 'https://mentors.to/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/mentorship',
        destination: 'https://mentors.to/mbianchidev',
        permanent: false,
        basePath: false
      },
      // Public speaking
      {
        source: '/sessionize',
        destination: 'https://sessionize.com/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/speakerdeck',
        destination: 'https://speakerdeck.com/mbianchidev',
        permanent: false,
        basePath: false        
      },
      // Achievements and certifications
      {
        source: '/badges',
        destination: 'https://www.credly.com/users/mbianchidev/badges',
        permanent: false,
        basePath: false
      },
      {
        source: '/credly',
        destination: 'https://www.credly.com/users/mbianchidev/badges',
        permanent: false,
        basePath: false
      },
      // Bookings
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
        destination: 'https://cal.com/mbianchidev/chat',
        permanent: false,
        basePath: false
      },
      {
        source: '/book60',
        destination: 'https://cal.com/mbianchidev/1-1-session',
        permanent: false,
        basePath: false
      },
      {
        source: '/secret',
        destination: 'https://cal.com/mbianchidev/secret',
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
        source: '/yt',
        destination: 'https://youtube.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/podcast',
        destination: 'TODO',
        permanent: false,
        basePath: false
      },
      {
        source: '/discord',
        destination: '/work-in-progress', //'https://discord.gg/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/b143ck_',
        permanent: false,
        basePath: false
      },
      // Every other link
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
    value: `default-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://www.mb-consulting.dev https://mb-consulting.dev; child-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://apis.google.com https://vercel.live https://*.vercel.com https://*.vercel-scripts.com; worker-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; img-src 'self' blob: data: http://localhost:3000 https://*.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net https://assets.vercel.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; frame-src https://www.gstatic.com https://www.google.com https://accounts.google.com https://docs.google.com https://content.googleapis.com https://vercel.live; object-src 'none';`
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
];