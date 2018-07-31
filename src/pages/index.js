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
      <Carousel>
        <CarouselItem
          src="/assets/images/carousel/carousel_1.jpg"
          title="Example text"
        />
        <CarouselItem
          src="/assets/images/carousel/carousel_2.jpg"
          title="Example text"
        />
        <CarouselItem
          src="/assets/images/carousel/carousel_3.jpg"
          title="Example text"
        />
      </Carousel>
      <section className="section">
        <div className="container">
          <div className="content">
            <p className="has-text-centered is-size-5">
              "He calls man to seek him, to know him, to love him with all his
              strength. He calls together all men, scattered and divided by sin,
              into the unity of his family, the Church."<br />
              <i>CATECHISM OF THE CATHOLIC CHURCH PARA. 1</i>
            </p>
          </div>
          <h2 className="title is-2">Home</h2>
          <p>
            Augie Catholic is a student group of Augustana College in Rock
            Island, IL. It is the center of Catholic Ministry on campus serving
            the needs of the many Catholic students who have made Augustana
            their excellent home.
          </p>
        </div>
      </section>
      <UpcomingEvents events={events} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query EventsQuery {
    allMarkdownRemark(filter: { frontmatter: { template: { eq: "event" } } }) {
      edges {
        ...EventPostsFragment
      }
    }
  }
`
