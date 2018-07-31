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
            <div className="navbar-item">
              <img
                src="/assets/images/augie_catholic_logo.png"
                alt="Augie Catholic"
              />
            </div>
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
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/about/" className="navbar-item">
                About
              </Link>
              <Link to="/calendar/" className="navbar-item">
                Calendar
              </Link>
              <Link to="/services/" className="navbar-item">
                Services
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
