import * as React from 'react'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
const Layout = ({ pageTitle, pageHeading, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // console.log(data)
  return (
    <main className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            {' '}
            <Link className={navLinkText} to='/'>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            {' '}
            <Link className={navLinkText} to='/about'>
              About
            </Link>
          </li>

          <li className={navLinkItem}>
            <Link className={navLinkText} to='/blog'>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading} </h1>
      {children}
    </main>
  )
}

export default Layout
