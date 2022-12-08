import { useState, useEffect } from 'react';

import styles from './PostsPagination.module.css';

import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";


function PostsPagination({ pages, currentPostsPosition, postsPaginationHandler }) {

  let multiplier = 0;

  const onClickHandler = function(event) {
    const sideOrNumber = event.target?.dataset.side || event;
    postsPaginationHandler(sideOrNumber);
  };

  const loopUntilRemainderEqualsZero = function(currentPaginationPosition) {

    let currPagPos = currentPaginationPosition;

    while (currPagPos % 5 !== 0) {
      currPagPos < 0 ? currPagPos-- : currPagPos ++;
    };

    return Math.abs(currPagPos);

  };

  const [pagesNavigationDivider, setPagesNavigationDivider] = useState(4);

  
  useEffect(() => {

    const currentPaginationPosition = pagesNavigationDivider - currentPostsPosition;
    
    if (currentPaginationPosition < 0 && currentPaginationPosition > -6) {
      setPagesNavigationDivider(previousState => previousState + 5);
      console.log(pagesNavigationDivider);
    };
    
    if (currentPaginationPosition >= 5) {
      setPagesNavigationDivider(previousState => previousState - 5);
    };

    if (-5 > currentPaginationPosition) {
      const lastPaginationPosition = loopUntilRemainderEqualsZero(currentPaginationPosition) + 4;
      setPagesNavigationDivider(lastPaginationPosition);
    };

    /*
    Later 1
    if (currentPaginationPosition > 5) {
      const lastPaginationPosition = loopUntilRemainderEqualsZero(currentPaginationPosition) - 4;
      setPagesNavigationDivider(lastPaginationPosition);
    };
    */
    
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

        
      {/*
      Later 2
      <div
        className={styles.pageNumber}
        onClick={() => onClickHandler(0)}
      >{pages.length + 1 - pages.length}</div>

      <div className={styles.pageNumber}>...</div> */}

      {pages.map((_, index) => {
        return (
          // Lógica p/ divisão de paginação ocorrer de 5 em 5 posições
          index <= pagesNavigationDivider && index > (pagesNavigationDivider - 5) &&
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