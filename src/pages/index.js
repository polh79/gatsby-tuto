import React from "react"
import Link from 'gatsby-link'
import styles from './index.module.css'

export default ({ data }) =>
    <div>
        <h1 className={styles.gdTitre}>Bienvenue</h1>
        <p>texte de la page 1</p>

        { data.allMarkdownRemark.edges.map(
            ({ node }, index) => {
                return <h2 key={index} ><Link to={ node.fields.slug } >{node.frontmatter.title}</Link></h2>
        })}

        <Link to='/actu/'>Actu</Link>
        <br />
        <Link to='/table/'>Table de multiplication</Link>
    </div>

export const query = graphql`
        query IndexQuery {
            allMarkdownRemark {
                edges {
                    node {
                        fields{
                            slug
                        }
                        id
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `
