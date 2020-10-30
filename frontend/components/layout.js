import React from 'react';
import PageNavBar from './navigation/NavBar';
import SideDrawer from './mainSections/SideDrawer';
import Head from 'next/head';

const layout = LayoutProps => (
  <>
    <Head>
      <title>{LayoutProps.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet"></link>
      <meta name="description" content={LayoutProps.description}></meta>
      {/* <meta property="og:image" content={LayoutProps.ogImage} /> */}
    </Head>
    <PageNavBar />
    <SideDrawer />

    <main>{LayoutProps.children}</main>
  </>
)

export default layout
