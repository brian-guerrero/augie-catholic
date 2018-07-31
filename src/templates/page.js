import React from 'react'

export const PageTemplate = ({ title, content }) => (
  <section className="section">
    <div className="container">
      <h2 className="title">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
)

const Page = ({ data: { markdownRemark: post } }) => (
  <PageTemplate title={post.frontmatter.title} content={post.html} />
)

export default Page

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
