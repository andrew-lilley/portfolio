import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Head from '../meta/head';
import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <Head title={props.title}/>
      <div className={layoutStyles.container}>
        <Header />
        <div className={layoutStyles.content}>
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Layout;