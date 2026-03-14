import { GatsbyNode } from "gatsby";
import path from "path";

interface IPostNode {
  id: string;
  frontmatter: {
    title: string;
    category: string;
    custom_slug: string;
  };
  internal: {
    contentFilePath: string;
  };
}

interface IQueryResult {
  allMdx: {
    nodes: IPostNode[];
  };
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql<IQueryResult>(`
    query GetPostNav {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            category
            custom_slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    throw result.errors;
  }

  const allPosts = result.data.allMdx.nodes;
  const blogPostTemplate = path.resolve(
    `./src/pages/blog/{Mdx.frontmatter__category}/{Mdx.frontmatter__custom_slug}.tsx`,
  );

  const categories = [...new Set(allPosts.map((post: any) => post.frontmatter.category))];

  categories.forEach((category) => {
    const categoryPosts = allPosts.filter((post: any) => post.frontmatter.category === category);

    categoryPosts.forEach((post: any, index: number) => {
      const next = index === 0 ? null : categoryPosts[index - 1];
      const prev = index === categoryPosts.length - 1 ? null : categoryPosts[index + 1];

      createPage({
        path: `/blog/${post.frontmatter.category}/${post.frontmatter.custom_slug}/`,
        component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
          frontmatter__custom_slug: post.frontmatter.custom_slug,
          prev: prev
            ? {
                frontmatter: {
                  title: prev.frontmatter.title,
                  custom_slug: prev.frontmatter.custom_slug,
                  category: prev.frontmatter.category,
                },
              }
            : null,
          next: next
            ? {
                frontmatter: {
                  title: next.frontmatter.title,
                  custom_slug: next.frontmatter.custom_slug,
                  category: next.frontmatter.category,
                },
              }
            : null,
        },
      });
    });
  });
};
