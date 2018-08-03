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
              <br /> scattered and divided by sin, into the unity of his family,
              the Church."
              <br />
              <i>CATECHISM OF THE CATHOLIC CHURCH</i>
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <h3 className="title">Text Alerts</h3>
          <strong>
            Text Augie to 84576, and you will receive text alerts about upcoming
            Augie Catholic events on campus.
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
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { template: { eq: "event" } } }
    ) {
      edges {
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
    }
  }
`
