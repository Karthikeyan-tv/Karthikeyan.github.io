import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      height: 65
    }}
  >
    <div
      style={{
        margin: `0 auto`
      }}
    >
      <h1 style={{ margin: 0, width: `50%`, display: "inline" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `0 0 0 50px`,
            fontSize: `32px`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{display: "inline"}}>
          <nav style={{display:"inline", float:"right", height: `65px`}}>
            <ul style={{ display: "flex", flex: 1, paddingRight: `50px` }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    textDecoration: `none`
                  }}
                >
                  <Link style={{ color: `white`, textDecoration: `none` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
