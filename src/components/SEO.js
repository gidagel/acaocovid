import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs'

const SEO = ({ post }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);
  const defaults = data.site.siteMetadata;
  const seo = {
    title: RichText.asText(post.title),
    description: post.description || defaults.description,
    url: `${defaults.baseUrl}${post.url || ''}`,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {post.image && <meta name="image" content={post.image} />}

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {post.image && <meta property="og:image" content={post.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {post.image && <meta name="twitter:image" content={post.image} />}
    </Helmet>
  );
};

export default SEO;