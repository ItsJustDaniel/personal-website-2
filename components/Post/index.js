import Image from "next/image";
import Link from "next/link";
import styles from "/styles/blogList.module.css";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className={styles.card}>
        <Image
          src={post.frontmatter.cover_image}
          className={styles.cover__image}
          height={400}
          width={600}
        />

        <div className={styles.details}>
          <div className={styles.post__date}>{post.frontmatter.date}</div>
          <h3 className={styles.title}>{post.frontmatter.title}</h3>
        </div>
      </div>
    </Link>
  );
}
