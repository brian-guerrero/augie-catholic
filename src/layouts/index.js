import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PageNavigation from '../components/PageNavigation'
import PageFooter from '../components/PageFooter'

import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: '#29388f',
        },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href:
            'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Source+Serif+Pro:600',
        },
        {
          rel: 'favicon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/icon.png',
        },
      ]}
      htmlAttributes={{ lang: 'en-US' }}
    />
    <PageNavigation />
    {children()}
    <PageFooter />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
