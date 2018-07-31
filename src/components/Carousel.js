import React, { Component } from 'react'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.js'

export const CarouselItem = props => (
  <div className="carousel-item has-background">
    <img className="is-background" src={props.src} alt={props.title} />
    <div className="title">{props.title}</div>
  </div>
)

export default class Carousel extends Component {
  render() {
    return (
      <div
        className="carousel carousel-animated carousel-animate-slide"
        data-autoplay="true"
        data-delay="5000"
      >
        <div className="carousel-container">{this.props.children}</div>
        <div className="carousel-navigation">
          <div className="carousel-nav-left">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </div>
          <div className="carousel-nav-right">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      bulmaCarousel.attach()
    }
  }
}
