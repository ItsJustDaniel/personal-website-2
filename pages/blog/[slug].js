import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import styles from "/styles/blogPage.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

const BlogPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content="Lorem Ipsum" />
        <meta property="og:image" content={cover_image} />
      </Head>
      <div className={styles.card}>
        <Link href="/blog" passHref>
          <FontAwesomeIcon icon={faLongArrowAltLeft} className={styles.back} />
        </Link>
        <div>
          <h1 className={styles.title}>{title}</h1>

          <h6>{date}</h6>
          <div className={styles.image__container}>
            <Image
              src={cover_image}
              alt=""
              width={700}
              height={500}
              class={styles.image}
            />
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: marked(content) }}
              className={styles.text}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default BlogPage;
