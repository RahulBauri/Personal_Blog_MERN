import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import FooterCom from './FooterCom';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterCom />
    </div>
  );
};

export default Layout;
