import React from 'react'

export default ({ children, data }) =>

    <div style={{ margin: 'auto', maxWidth: 460 }}>
        <h2>{data.site.siteMetadata.title}</h2>
        {children()}
        <footer>
            copyright blablabla
        </footer>
    </div>

    export const query = graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `