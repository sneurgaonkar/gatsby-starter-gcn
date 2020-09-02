import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            siteUrl
          }
        }
      }
    `
  )

  const defaultImage = `/images/share.png`
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* General tags */}
      <meta name="image" content={image} />
      <meta name="description" content={metaDescription} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={metaDescription} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`{
          "@context": "http://www.schema.org",
          "@type": "person",
          "name": "Sunil Neurgaonkar",
          "gender": "male",
          "url": "http://neurgaonkar.com/",
          "sameAs": [
            "https://www.linkedin.com/in/sunilneurgaonkar/",
            "https://twitter.com/SNeurgaonkar",
            "https://github.com/sneurgaonkar/",
            "https://www.instagram.com/sneurgaonkar/"
          ],
          "image": "https://images.ctfassets.net/dcz28du396ad/3Vu3IwIDtBhqI7wqinmspn/1a1db4dbb54ec01c97599f185cf211cc/2019-01-28_02-removebg.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "India"
          },
          "email": "sunil@neurgaonkar.com",
          "nationality": "Indian"
        }`}
      </script>
    </Helmet>
  )
}

export default SEO
