import React from 'react';


import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';


function Blog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
		<Navbar />
      {/*  Site footer */}
    	<Footer />
    </div>
  );
}
export default Blog;