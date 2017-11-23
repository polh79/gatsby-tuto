import React from "react"
import Link from 'gatsby-link'

export default ({ data }) =>
    <div>        
        <h1>Page Actu</h1>
        <p>Bonne sess à Penhors</p>
        <p>{data.allFile.edges[0].node.prettySize}</p>
        <img src='https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/22228364_1358667724244632_8950107118984156454_n.jpg?oh=55fdd88b448a13600c1f368caad68539&oe=5A9E9D67' alt="re-entry" />
    </div>

export const query = graphql`
        query ActuQuery {
            allFile {
                edges {
                    node {
                    prettySize
                    }
                }
            }
        }
    `