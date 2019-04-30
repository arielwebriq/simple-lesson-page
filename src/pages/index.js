import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      order: 0,
    }
    this.onClicked = this.onClicked.bind(this)
  }
  onClicked(lessonorder) {
    this.setState({
      clicked: lessonorder.clicked,
      order: lessonorder.order,
    })
  }

  render() {
    const data = this.props.data.allMarkdownRemark.edges.map(
      lesson => lesson.node
    )
    return (
      <Layout>
        <SEO
          title="Gatsby Modern Website"
          description="This is a simple lessons page using reactstrap, react, and markdown."
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Container>
          <h4>Lessons</h4>
          <Row>
            <Col md="3">
              <ul className="list-group">
                {data.map(lesson => (
                  <li
                    onClick={lessonorder =>
                      this.onClicked({
                        clicked: true,
                        order: lesson.frontmatter.order,
                      })
                    }
                    key={lesson.id}
                    className={`list-group-item ${
                      this.state.clicked === false &&
                      lesson.frontmatter.order === 0
                        ? "active"
                        : this.state.clicked === true &&
                          lesson.frontmatter.order === this.state.order
                        ? "active"
                        : ""
                    }`}
                  >
                    <small>{lesson.frontmatter.title}</small>
                  </li>
                ))}
              </ul>
            </Col>
            <Col md="9">
              <div
                key={`lessoncontent`}
                className="lessoncontent"
                dangerouslySetInnerHTML={{
                  __html: this.props.data.allMarkdownRemark.edges[
                    this.state.order
                  ].node.html,
                }}
              />
              <div className="float-right">
                {this.state.order !== 0 ? (
                  <Button
                    color="link"
                    onClick={lessonorder =>
                      this.onClicked({
                        clicked: true,
                        order: this.state.order - 1,
                      })
                    }
                  >
                    Previous
                  </Button>
                ) : (
                  ""
                )}
                {this.state.order + 1 !== data.length ? (
                  <Button
                    color="link"
                    onClick={lessonorder =>
                      this.onClicked({
                        clicked: true,
                        order: this.state.order + 1,
                      })
                    }
                  >
                    Next
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

export const allLessons = graphql`
  {
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
