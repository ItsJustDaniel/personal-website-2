import matter from "gray-matter";
import Head from "next/head";
import path from "path";
import styles from "/styles/blogList.module.css";
import Post from "../../components/Post";
import { sortByDate } from "/utils";
import cmsAPI from "../../constants";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div className={styles.posts}>
        {posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${cmsAPI}wp-json/wp/v2/posts`);
  const posts = await res.json();
  let thumbnails = [];

  if (!posts) {
    return {
      notFound: true,
    };
  }

  for (let i = 0; i < posts.length; i++) {
    posts[i].acf.thumbnail;
    console.log(posts[i].acf.thumbnail);
    const res = await fetch(
      `${cmsAPI}wp-json/wp/v2/media/${posts[i].acf.thumbnail}`
    );
    const data = await res.json();
    console.log(data);
    posts[i].acf.imageUrl = data.media_details.sizes.full.source_url;
  }

  return {
    props: {
      posts,
      thumbnails,
    },
    revalidate: 86400,
  };
}

export default Blog;
