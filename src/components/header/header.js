import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as  headerStyles from './header.module.scss';

const Header = () => {
  // Get the site title.
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.headerLogo}><Link className={headerStyles.title} to={"/"}>{data.site.siteMetadata.title}</Link></div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={"/"}>Home</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={"/training-courses/"}>Training Courses</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to={"/about/"}>About Me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={headerStyles.gradientContainer}/>
    </>
  )
};

export default Header;