import styles from './BlogPost.module.css';

function BlogPost(props) {

  const { title, paragraphs, img, author, date } = props.postData;

  return (
    <div className={styles.postContainer}>
      <h2 className={styles.postTitle}>{title}</h2>

      {paragraphs.map((text, index) => (
        <div key={Math.random()}>
          <p className={styles.paragraph}>
            {text}
          </p>

          {/* Inserir imagem somente depois de dois paragrafos */}
          {index === 1 &&
            <img
              src={img}
              alt="post image"
              className={styles.postImg}
            />
          }

        </div>
      ))}

      <h3 className={styles.postAuthor}>Posted by {author} on {date}</h3>
    </div>
  );
};



export default BlogPost;