import { useState, useEffect } from 'react';

import styles from './PostsPagination.module.css';

import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";


function PostsPagination({ pages, currentPostsPosition, postsPaginationHandler }) {

  const onClickHandler = function(event) {
    const sideOrNumber = event.target?.dataset.side || event;
    postsPaginationHandler(sideOrNumber);
  };

  const [foobar, setFoobar] = useState(4);

  
  useEffect(() => {

    if ((currentPostsPosition + 1) % 5 === 0) {
      setFoobar(previousState => {
        if (currentPostsPosition >= previousState) return previousState + 5;
        if (currentPostsPosition <= previousState) return previousState - 5;
      });
    };

    // Parei aqui, falta achar lógica pra ele voltar quando chegamos em 5 e voltamos
    console.log(currentPostsPosition + 1);

  }, [currentPostsPosition]);


  return (
    <div className={styles.postsNav}>

      <div className={styles.arrowContainer}>
        {<img
          src={arrowLeft}
          className={styles.arrowLeft}
          onClick={onClickHandler}
          data-side="left"
        />}
      </div>

      {pages.map((_, index) => {
        return (
        // Lógica p/ paginação na página ocorrer de 5 em 5 posições
          index <= foobar && index >= foobar - 5 &&
            <div
              className={`${styles.pageNumber} ${index === currentPostsPosition && styles.pageNumberCurrent}`}
              onClick={() => onClickHandler(index)}
              key={index}
            >
              {index + 1}
            </div>
        )
      })}

      <div className={styles.pageNumber}>...</div>

      <div
        className={styles.pageNumber}
        onClick={() => onClickHandler(pages.length - 1)}
      >{pages.length}</div>

      <div className={styles.arrowContainer}> 
        {<img
          src={arrowRight}
          className={styles.arrowRight}
          onClick={onClickHandler}
          data-side="right"
        />}
      </div>

    </div>
  );
};

export default PostsPagination;