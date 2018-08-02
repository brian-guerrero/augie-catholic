import React from 'react'
import { EventTemplate } from '../../templates/event.js'

export default ({ entry, widgetFor }) => (
  <EventTemplate
    title={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data', 'date'])}
    location={entry.getIn(['data', 'location'])}
    content={widgetFor('body')}
  />
)
