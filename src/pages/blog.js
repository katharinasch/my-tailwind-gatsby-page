import React from 'react';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
import Images from '../partials/Images';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiArticles{
      edges {
        node {
          strapiId
          title
          description
          image {
            localFile {
              publicURL
            }
            hash
          }
        }
      }
    }
  }
`;

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

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
      <StaticQuery
        query={query}
        render={data => (
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            
              {data.allStrapiArticles.edges.map(({ node:article })=> (
                <div className="rounded overflow-hidden shadow-lg">
                  <Images />
                  <ConsoleLog>{ Images }</ConsoleLog>
                  <h3 key={article.strapiId}>{article.title}</h3>
                </div>
              ))}
            
          </div>
        )}
      />
    <Footer />
    </div>
  );
}
export default Blog;



