// next.config.js
module.exports = {
    swcMinify: true,
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
        value: 'origin-when-cross-origin'
    },
    // TODO understand how CSP works in react
    {
        key: 'Content-Security-Policy',
        value: `` //default-src 'self'; style-src 'unsafe-inline'; script-src 'self' 'unsafe-eval';
    }
]