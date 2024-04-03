

import React from 'react';
import './globals.css';
import Navbar from './Components/Navbar';

export const metadata = {
  title: 'E-commerce',
  description: 'An E-Commerce site that allows to get products on Offers ',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&family=Barlow:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body >
      <Navbar/>
{children}
</body>
  </html>
  );
};

export default Layout;


