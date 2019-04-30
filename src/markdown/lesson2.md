---
title: Lesson 2
order: 1
---

Gatsby exposes a powerful Node.js API, which allows for functionality such as creating dynamic pages. This API is available in the gatsby-node.js file in the root directory of your project, at the same level as gatsby-config.js. Each export found in this file will be run by Gatsby, as detailed in its Node API specification. However, we only care about one particular API in this instance, createPages.

Gatsby calls the createPages API (if present) at build time with injected parameters, actions and graphql. Use the graphql to query Markdown file data as below. Next use createPage action creator to create a page for each of the Markdown files using the blogTemplate.js we created in the previous step.
