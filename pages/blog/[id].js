import Link from "next/link";
import styles from "/styles/blogPage.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import cmsAPI from "../../constants";

const BlogPage = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta property="og:title" content={post.title.rendered} key="title" />
        <meta property="og:description" content="Lorem Ipsum" />
        <meta property="og:image" content={post.acf.imageUrl} />
      </Head>
      <div className={styles.card}>
        <Link href="/blog" passHref>
          <FontAwesomeIcon icon={faLongArrowAltLeft} className={styles.back} />
        </Link>
        <div>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h1>

          <h6>{post.acf.date}</h6>
          <div className={styles.image__container}>
            <Image
              src={post.acf.imageUrl}
              alt=""
              width={700}
              height={500}
              className={styles.image}
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              className={styles.text}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${cmsAPI}wp-json/wp/v2/posts`);
  const posts = await res.json();

  let paths = [];
  for (let i = 0; i < posts.length; i++) {
    paths.push({ params: { id: posts[i].id.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(`${cmsAPI}wp-json/wp/v2/posts/${id}`);
  const post = await res.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  //add image to post object
  const imageFetch = await fetch(
    `${cmsAPI}wp-json/wp/v2/media/${post.acf.thumbnail}`
  );
  const imageData = await imageFetch.json();
  post.acf.imageUrl = imageData.media_details.sizes.full.source_url;

  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
}

export default BlogPage;
