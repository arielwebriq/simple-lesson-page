/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "reactstrap"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
        <footer>
          <Container>
            <center>
              Built for simple gatsby website © {new Date().getFullYear()}
              {` `} - Ariel of Webriq
            </center>
          </Container>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
