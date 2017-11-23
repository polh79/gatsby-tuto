const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    
    const { createNodeField } = boundActionCreators

    if ( node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' })
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        res.data.allMarkdownRemark.edges.map(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/page.js'),
                context: {
                    slug: node.fields.slug
                }
            })
        })
        resolve()
    })
    })  
}