import React from 'react';


import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';


function Blog() {
  return (
    <div className="min-h-screen overflow-hidden">
		<Navbar />
      <div className="max-w-4xl mx-auto py-12 lg:py-16 ">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Coming soon!</span>
          <span className="block text-indigo-600">I am just learning stuff about headless CMS and will build a blog here with strapi.io. Hang in!</span>
        </h2>
      </div>
    <Footer />
    </div>
  );
}
export default Blog;