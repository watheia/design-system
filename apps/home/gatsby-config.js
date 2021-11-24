module.exports = {
  siteMetadata: {
    title: `home`,
    description: `This is a gatsby application created by Nx.`
  },
  plugins: [
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-plugin-svgr",
      options: {
        svgo: false,
        ref: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `home`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`
      }
    },
    {
      resolve: "gatsby-plugin-dts-css-modules",
      options: {
        /** @default {true} */
        // namedExport: false,

        /** @default {'// This file is automatically generated. Do not modify this file manually -- YOUR CHANGES WILL BE ERASED!'} */
        // banner: '// My own banner',

        // customTypings: (classes) => classes.map((className) => `export const ${className}: string;`).join('\n'),

        dropEmptyFile: true
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // defaultLayouts: {
        //   default: require.resolve(`./src/components/MDXFilter/index.js`)
        // },
        // rehypePlugins: [require(`rehype-slug`)],
        plugins: [
          `gatsby-transformer-remark`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-images-remote`
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-transformer-remark`
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`, `mdx`]
            }
          },
          {
            resolve: `gatsby-remark-images-remote`,
            options: {
              maxWidth: 1280,
              linkImagesToOriginal: false,
              withWebp: { quality: 80 },
              disableBgImage: true,
              backgroundColor: "none"
            }
          }
        ]
      }
    },
    {
      resolve: require.resolve("../../libs/gatsby-plugin-emotion")
    },
    {
      resolve: require.resolve("../../libs/gatsby-plugin-top-layout")
    }
  ]
}
