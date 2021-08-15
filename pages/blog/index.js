import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import styles from "/styles/blogList.module.css";
import Post from "../../components/Post";
import { sortByDate } from "/utils";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div className={styles.posts}>
        {posts.map((post, index) => {
          return <Post post={post} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  //get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Blog;
