module.exports = {
  siteMetadata: {
    title: 'Augie Catholic',
    description:
      'Augie Catholic is a student group of Augustana College in Rock Island, IL. It is the center of Catholic Ministry on campus serving the needs of the many Catholic students who have made Augustana their excellent home.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Augie Catholic',
        short_name: 'ACatholic',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#29388f',
        display: 'fullscreen',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
