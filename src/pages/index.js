import React from 'react'
import UpcomingEvents from '../components/UpcomingEvents.js'
import Carousel, { CarouselItem } from '../components/Carousel.js'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: events },
  },
}) => {
  return (
    <div>
      <section className="section for-tablet pb-0">
        <div className="container medium-width">
          <Carousel>
            <CarouselItem
              src="/assets/images/carousel/carousel_1.jpg"
              title="You Belong Here, and You Matter."
            />
            <CarouselItem
              src="/assets/images/carousel/carousel_2.jpg"
              title="The Source and Summit of our Christian Life."
            />
            <CarouselItem
              src="/assets/images/carousel/carousel_3.jpg"
              title="Put Love into Action."
            />
          </Carousel>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="content">
            <p className="has-text-centered is-size-5">
              "He calls man to seek him, to know him, to love him with all his
              strength. He calls together all men,
              <br className="is-hidden-touch" /> scattered and divided by sin,
              into the unity of his family, the Church."
              <br />
              <i>CATECHISM OF THE CATHOLIC CHURCH</i>
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <h3 className="title">Augie Catholic App</h3>
          <strong>
            <a href="https://apps.apple.com/us/app/augie-catholic/id1453737146">Download Augie Catholic on the App Store to stay up to date with the latest news!</a>
          </strong>
        </div>
      </section>
      <UpcomingEvents events={events} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query EventsQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [date], order: ASC }
      filter: { frontmatter: { template: { eq: "event" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
            date(formatString: "MMMM Do, YYYY")
          }
          frontmatter {
            title
            startTime
            endTime
            location
          }
        }
      }
    }
  }
`
