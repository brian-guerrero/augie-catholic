import React from 'react'
import Link from 'gatsby-link'

const Event = props => (
  <div className="mb-1">
    <Link to={props.to}>
      <h3 className="subtitle is-5 is-marginless">{props.event.title}</h3>
    </Link>
    <i>
      {props.event.date} &mdash; {props.event.startTime} -{props.event.endTime}
    </i>
    <p>{props.event.location}</p>
  </div>
)

export default ({ events }) => (
  <section className="section">
    <div className="container">
      <h2 className="title is-3 has-text-centered has-text-primary">
        Upcoming Events
      </h2>
      <hr />
      {events.map(
        ({
          node: { frontmatter: event },
          node: { id: key },
          node: {
            fields: { slug: to },
          },
        }) => (
          <Event to={to} event={event} key={key} />
        )
      )}
    </div>
  </section>
)

export const query = graphql`
  fragment EventPostsFragment on MarkdownRemarkEdge {
    node {
      id
      fields {
        slug
      }
      frontmatter {
        title
        date
        startTime
        endTime
        location
      }
    }
  }
`
