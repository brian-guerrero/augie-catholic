import React from 'react'

export default () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-2">Calendar</h2>
        <div
          style={{
            marginTop: '2rem',
            position: 'relative',
            paddingBottom: `75%`,
            height: 0,
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=jeremyfreehill%40augustana.edu&ctz=America%2FChicago"
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
            }}
            width="900"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  )
}
