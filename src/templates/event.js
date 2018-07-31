import React from 'react'

export const EventTemplate = ({ title, date, location, content }) => (
  <section className="section">
    <div className="container">
      <h2 className="title is-2">{title}</h2>
      <p className="is-size-4"> {date} </p>
      <p className="is-size-4">{location}</p>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
)

const Event = ({ data: { markdownRemark: post } }) => (
  <EventTemplate
    title={post.frontmatter.title}
    date={post.frontmatter.date}
    location={post.frontmatter.location}
    content={post.html}
  />
)

export default Event

export const query = graphql`
  query EventQuery($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "event" } }
    ) {
      html
      frontmatter {
        title
        date
        location
      }
    }
  }
`
