import React from 'react';
import Footer from '../partials/Footer';
import Navbar from '../partials/Navbar';
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
          }
        }
      }
    }
  }
`;

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
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <StaticQuery
          query={query}
          render={data => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.allStrapiArticles.edges.map(({ node:article })=> (
                  <div className="bg-white shadow-md">
                    <div className="h-56">
                      <img
                        class="rounded-t-lg w-full object-fill"
                        src={article.image[0].localFile.publicURL}
                        alt="random user"
                      />
                    </div>
                    { console.log(article.image[0].localFile.publicURL)}
                    <div className="md:p-8 p-2">
                      <h1 className="font-semibold text-gray-900 leading-none text-xl capitalize truncate my-3" key={article.strapiId}>{article.title}</h1>
                      <div className="max-w-full">
                        <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        />
      </div>
    <Footer />
    </div>
  );
}
export default Blog;


