// core
const path = require('path')

// self
const { yearRange } = require('./src/utils')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      recent: { edges: [{ node: { last } }] },
      allMeetupsJson: { edges: [{ node: { first } }] }
    }
  } = await graphql(`
    {
      allMeetupsJson (
        limit: 1
        sort: {
          fields: [num]
          order: ASC
        }
      ) {
        edges {
          node {
            first: on
          }
        }
      }

      recent: allMeetupsJson (
        limit: 1
        sort: {
          fields: [num]
          order: DESC
        }
      ) {
        edges {
          node {
            last: on
          }
        }
      }
    }
  `)

  yearRange(first, last)
    .forEach((year) => createPage({
      path: `/archive/${year}`,
      component: path.resolve(`./src/templates/archive-year.js`),
      context: {
        year,
        yearRegex: `/^${year}/`
      }
    }))

  createPage({
    path: `/archive-orig`,
    component: path.resolve(`./src/templates/archive-year.js`),
    context: {
      yearRegex: '/^20/'
    }
  })
}
