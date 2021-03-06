import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
		<Navbar />
      {/*  Site header */}
    	<Header />
      {/*  Site footer */}
    	<Footer />
    </div>
  );
}
export default Home;