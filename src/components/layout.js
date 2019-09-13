/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import '../icons';
import './app.css';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <main className="px-8 py-12 lg:px-0">
        <div class="flex flex-col justify-center md:flex-row md:-mx-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
