import styles from './RelatedPost.module.css';

function RelatedPost(props) {

  const { img, title, date } = props.relatedPostData;

  return (
    <div className={styles.relatedPostWrapper}>
      <img
        src={img}
        alt="related post image"
        className={styles.relatedImg}
      />

      <div>
          <h3 className={styles.relatedPostTitle}>
            {title}
          </h3>
          <p className={styles.relatedPostDate}>{date}</p>
      </div>
  </div>
  );
};

export default RelatedPost;