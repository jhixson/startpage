import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { PageLink } from './pagelink';

export const Tools = () => {
  const linkData = useStaticQuery(graphql`
    query ToolsQuery {
      allToolsJson {
        edges {
          node {
            id
            title
            url
            icon
          }
        }
      }
    }
  `);

  const { edges: links } = linkData.allToolsJson;

  const linkList = links.map(({ node: link }) => (
    <PageLink
      key={link.id}
      url={link.url}
      title={link.title}
      icon={link.icon}
    />
  ));

  return (
    <section className="mb-12 md:mx-12 md:mb-0">
      <h2 className="mb-4 text-4xl font-bold uppercase">Tools</h2>
      <ul>{linkList}</ul>
    </section>
  );
};
