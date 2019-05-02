---
title: Passing of props data
order: 2
---

<h2>Passing of props data - Function Component vs Class Component</h2>

<h5>Function Component</h5>

```
const Page = ({data}) => (
	<Layout>
		<div>{data.allMarkdownRemark.frontmatter.title}<div>
	</Layout>
)

export default Page

export const allMarkdownRemark = graphql`
    allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            order
          }
          html
        }
      }
    }
  }
`
```

<h5>Class Component</h5>

```
class Page extends React.Component{
  render(){
    return(
      <Layout>
      <div>{this.props.data.allMarkdownRemark.frontmatter.title}<div>
    </Layout>
    )
}
}

export default Page

export const allMarkdownRemark = graphql`
    allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            order
          }
          html
        }
      }
    }
  }
`

```
