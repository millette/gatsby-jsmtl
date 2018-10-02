const cwd = process.cwd()

module.exports = {
  /*
  pathPrefix: '/gatsby-starter-location-github',
  siteMetadata: {
    siteUrl: 'http://dev.rollodeqc.com/',
    title: 'RoLLodeQc',
    description: 'Votre source de développeurs locaux',
    version: ret,
    language: {
      fallback: 'en'
    }
  },
  */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${cwd}/src/files/data/`
      }
    },
    'gatsby-transformer-json'
  ]
}
