import React from "react"
import Link from "gatsby-link"

const NotFoundPage = () => (
  <div>
    <h2>Page Not Found</h2>
    <p>Looks like you reached a page that does not exist yet.</p>
    <Link to="/">Go back to Home ➔</Link>
  </div>
)

export default NotFoundPage
