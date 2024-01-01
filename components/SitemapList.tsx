import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { graphql, buildSchema } from "graphql"
import siteGraphGenerator from "../utils/sitegraph-generator"
import breakdownSlugIntoUrls from "../utils/slug_utils"

const sortAlphaByTitle = (a: any , b: any) => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}

const TreeView = ({ tree }: any) => {
  return (
    <ul className="list-disc mb-0">
      {tree.slug && (
        <li>
          <a href={tree.slug}>{tree.title}</a>
        </li>
      )}
      {tree.children &&
        tree.slug !== "/courses/" &&
        tree.children
          .sort(sortAlphaByTitle)
          .map((child: any) => <TreeView key={child.id} tree={child} />)}
    </ul>
  )
}

const CardView = ({ tree }: any) => {
  return (
    <>
      {tree.slug && (
        <a
          href={tree.slug}
          className="w-full h-32 p-4 border text-gray-800 bg-gray-200 shadow-sm transition hover:bg-gray-600 hover:font-bold hover:shadow-md"
        >
          {tree.title}
        </a>
      )}
      {tree.children &&
        tree.slug !== "/courses/" &&
        tree.children.sort(sortAlphaByTitle).map((child: any) => (
          <a
            key={child.id}
            href={child.slug}
            className="w-full h-32 p-4 border text-gray-800 bg-gray-200 shadow-sm transition hover:text-white hover:bg-gray-600 hover:font-bold hover:shadow-md"
          >
            {child.title}
          </a>
        ))}
    </>
  )
}

// Allow anyone to use the filter the constructed sitemap tree. For example, only show a portion.
function filterSitemapTree(tree: any, filterSlug: any) {
  if (!filterSlug) return tree

  const brokendownUrls = breakdownSlugIntoUrls(filterSlug)

  let depth = 0
  let currentBranch = tree
  while (depth < brokendownUrls.length && currentBranch != null) {
    const currentUrl = brokendownUrls[depth]
    if (!currentBranch.children) break
    currentBranch = currentBranch.children.filter(
      (child: any) => child.slug === currentUrl
    )[0]
    depth++
  }

  return { children: currentBranch.children }
}

let cachedTree: any = null

export default function SitemapList({ filterSlug, type }) {
  const { sites, mdx, pages } = useStaticQuery(graphql`
    {
      sites: allSitePage {
        nodes {
          path
        }
      }
      mdx: allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      pages: allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  if (!cachedTree) {
    const { tree } = siteGraphGenerator(
      sites.nodes.map((n: any) => n.path),
      pages.nodes
        .concat(mdx.nodes)
        .map((n: any) => ({
          slug: n.fields.slug,
          rawMarkdownBody: n.rawMarkdownBody,
          title: n.frontmatter.title,
        }))
        .concat([
          {
            slug: "/about/",
            title: "About",
          },
          {
            slug: "/guides/",
            title: "Guides",
          },
          {
            slug: "/courses/",
            title: "Course Explorer and Testimonials",
          },
          {
            slug: "/feedback/",
            title: "Feedback",
          },
        ])
    )
    cachedTree = tree
  }

  // Allow filtering for certain sections of the sitemap
  const filteredTree = filterSitemapTree(cachedTree, filterSlug)

  return type === "card" ? (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <CardView tree={filteredTree} />
    </div>
  ) : (
    <TreeView tree={filteredTree} />
  )
}
