const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  ...(process.env.NETLIFY === 'true' && { target: 'serverless' }),
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: [
      'localhost',
      'images.unsplash.com',
      'res-1.cloudinary.com',
      'thewotguideadmin.herokuapp.com',
      'res-2.cloudinary.com',
      'res-3.cloudinary.com',
      'res-4.cloudinary.com',
      'res-5.cloudinary.com',
      'res.cloudinary.com',
      'static.gotsby.org',
      'static.ghost.org',
      'gatsby.ghost.io',
      'ghost.org',
      'opensubscriptionplatforms.com',
      'repository-images.githubusercontent.com',
      'www.gravatar.com',
      'thewotguide.com',
      'www.thewotguide.com',
      'www.amazon.com',
      'fls-na.amazon.com',
      'fls-eu.amazon.com',
      '*.amazon.com',
      'github.githubassets.com',
      ...(process.env.IMAGE_DOMAINS || '').split(','),
    ],
  },
  reactStrictMode: true,
})
