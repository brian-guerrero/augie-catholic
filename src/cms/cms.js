import CMS from 'netlify-cms'

import PagePreview from './preview-templates/PagePreview.js'
import EventPreview from './preview-templates/EventPreview.js'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('pages', PagePreview)
CMS.registerPreviewTemplate('events', EventPreview)
