import React from 'react'

export const PageTemplate = ({ title, content, centerImages }) => (
  <section className="section">
    <div className={'container' + (centerImages ? '.center-images' : '')}>
      <h2 className="title is-2">{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
)

const Page = ({ data: { markdownRemark: post } }) => (
  <PageTemplate
    title={post.frontmatter.title}
    content={post.html}
    centerImages={post.frontmatter.centerImages}
  />
)

export default Page

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { template: { eq: "page" } }
    ) {
      html
      frontmatter {
        title
        centerImages
      }
    }
  }
`
