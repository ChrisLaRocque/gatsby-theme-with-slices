import * as React from "react"
import { Link } from "gatsby"

const Header = ({children, size = 'medium'}) => {
  let header = (
    <Link style={{color: 'white'}} to="/">
      {children}
    </Link>
  )

  if (size === "large") {
    header = (
      <h1 className="main-heading">
        <Link to="/">{children}</Link>
      </h1>
    )
  }

  return (
    <header style={{padding: `2rem`, background: 'rebeccapurple'}}>
      {header}
    </header>
  )
}

export default Header