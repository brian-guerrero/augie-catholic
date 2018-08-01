import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class PageNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState(prevState => ({ toggled: !prevState.toggled }))
  }

  render() {
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img
                src="/assets/images/augie_catholic_logo.png"
                alt="Augie Catholic"
              />
            </Link>
            <div
              className={
                'navbar-burger burger ' +
                (this.state.toggled ? 'is-active' : '')
              }
              onClick={this.toggleNav}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            className={'navbar-menu ' + (this.state.toggled ? 'is-active' : '')}
          >
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">About</div>
                <div className="navbar-dropdown">
                  <a className="navbar-item">Who We Are?</a>
                  <Link to="/about/history/" className="navbar-item">
                    History
                  </Link>
                  <Link to="/about/chaplain/" className="navbar-item">
                    Chaplain
                  </Link>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <strong>Contact Us</strong>
                  </div>
                  <a
                    href="mailto:jeremyfreehill@augustana.edu"
                    className="navbar-item"
                  >
                    jeremyfreehill@augustana.edu
                  </a>
                  <a href="tel:+13097947272" className="navbar-item">
                    (309) 794-7272
                  </a>
                  <div className="navbar-item">
                    820 38th St.
                    <br />
                    Rock Island, IL 61201
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">Prayer</div>
                <div className="navbar-dropdown">
                  <div className="navbar-item">
                    <strong>Mass Times</strong>
                  </div>
                  <div className="navbar-item">Sunday: 9:00PM</div>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <strong>Eucharistic Adoration</strong>
                  </div>
                  <div className="navbar-item">Tuesday: 9:00PM - 9:30PM</div>
                  <hr className="navbar-divider" />
                  <Link to="/prayer/about-adoration/" className="navbar-item">
                    About Adoration
                  </Link>
                </div>
              </div>
              <Link to="/calendar/" className="navbar-item">
                Calendar
              </Link>
              <Link to="/service/" className="navbar-item">
                Service
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
