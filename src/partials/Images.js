import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allImageSharp(
      filter: {fluid: {originalName: {ne: "default-image.png.png"}, originalImg: {ne: "/static/28fa62e8f0df87822482c7d5ad91bed0/bc59e/favicon.png.png"}, src: {ne: "/static/d546034fe80767508e2f52831dd158e3/14b42/profile-picture.jpg"}}}
    ) {
      nodes {
        fluid {
          src
        }
      }
    }
  }
`;

function Images() {
  return (
    <StaticQuery
    query={query}
    render={data => (
        <div>
          {data.allImageSharp.nodes.map(image => (
            <img
              className="w-40 h-40 object-cover object-center"
              src={image.fluid.src}
              alt="random user"
            
            />
          ))}
        </div>
    )}
  />
  );
}
export default Images;