import { useState, useEffect } from 'react';

import styles from './PostsPagination.module.css';

import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";


function PostsPagination({ pages, currentPostsPosition, postsPaginationHandler }) {

  const onClickHandler = function(event) {
    const sideOrNumber = event.target?.dataset.side || event;
    postsPaginationHandler(sideOrNumber);
  };

  const [pagesNavigationDivider, setPagesNavigationDivider] = useState(4);

  
  useEffect(() => {

    if ((currentPostsPosition + 1) % 5 === 0) {
      setPagesNavigationDivider(previousDividerValue => {
        if (currentPostsPosition >= previousDividerValue) return previousDividerValue + 5;
        if (currentPostsPosition < previousDividerValue) return previousDividerValue - 5;
      });
    } else {
      // Provavelmente solução está encaixar logica no else aqui
      console.log(currentPostsPosition % 5);
      console.log(currentPostsPosition);
    }; 
    
    // Parei aqui, falta achar lógica pra ele voltar quando chegamos em 5 e voltamos
    // Ao fazermos F5 e clicarmos diretamente no último post (depois das reticencias também ocorre bug)
    // tentar encaixar algum condicional com && no segundo if
    // console.log(currentPostsPosition + 1);

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

      {/* <div
        className={styles.pageNumber}
        onClick={() => onClickHandler(0)}
      >{pages.length + 1 - pages.length}</div>

      <div className={styles.pageNumber}>...</div> */}

      {pages.map((_, index) => {
        return (
        // Lógica p/ divisão de paginação ocorrer de 5 em 5 posições
          index <= pagesNavigationDivider && index >= pagesNavigationDivider - 5 &&
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