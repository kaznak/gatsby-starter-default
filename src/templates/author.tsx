import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { SiteSiteMetadataAuthors } from "../../types/graphql-types"
// ______________________________________________________
//

export type Args = {
  author: SiteSiteMetadataAuthors
}

// ______________________________________________________
//
const Component: React.FC<{ pageContext: Args }> = ({ pageContext }) => {
  const author = pageContext.author
  return (
    <Layout>
      <SEO title={`Author: {author.name}`} />
      <div>
        <h1>{author.name}</h1>
        <Link to="/">Back to top</Link>
      </div>
    </Layout>
  )
}
// ______________________________________________________
//

export default Component
