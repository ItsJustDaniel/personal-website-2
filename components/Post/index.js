import Image from "next/image";
import Link from "next/link";
import styles from "/styles/blogList.module.css";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.id}`} passHref>
      <div className={styles.card}>
        <Image
          src={post.acf.imageUrl}
          className={styles.cover__image}
          height={400}
          width={600}
          alt="cover image"
        />

        <div className={styles.details}>
          <div className={styles.post__date}>{post.acf.date}</div>
          <h3
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h3>
        </div>
      </div>
    </Link>
  );
}
