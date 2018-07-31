import React from 'react'

const Event = props => (
  <div>
    <h3 className="subtitle is-5 is-marginless">{props.event.title}</h3>
    <i>{props.event.date}</i>
    <p>{props.event.description}</p>
  </div>
)

export default ({ data }) => (
  <section className="section has-background-grey-light">
    <div className="container">
      <h2 className="title is-3 has-text-centered has-text-primary">
        Upcoming Events
      </h2>
      <hr />
      <Event
        event={{
          title: 'Title',
          date: '06-30-2018',
          description: 'Simple event description blah.',
        }}
      />
      <Event
        event={{
          title: 'Event 2',
          date: '08-30-2018',
          description: 'Simple event description blah.',
        }}
      />
    </div>
  </section>
)
