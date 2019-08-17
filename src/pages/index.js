import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: teal;
`

const BlogExcerpt = styled.p`
  font-family: Courier;
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>그냥 이런저런 요즘 얘기들</h1>
      <h4>Total { data.allMarkdownRemark.totalCount} Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
            </BlogLink>
            <BlogExcerpt>{ node.excerpt }</BlogExcerpt>
          </div>
        )
      )}
    </div>
  </Layout>
)

export const query = graphql`
 query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;