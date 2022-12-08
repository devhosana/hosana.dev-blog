import { useState, useEffect } from 'react';

import styles from './PostsPagination.module.css';

import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";


function PostsPagination({ pages, currentPostsPosition, postsPaginationHandler }) {

  const onClickHandler = function(event) {
    const sideOrNumber = event.target?.dataset.side || event;
    postsPaginationHandler(sideOrNumber);
  };

  const loopUntilRemainderEqualsZero = function(currentPaginationPosition) {

    let currPagPos = currentPaginationPosition;

    // Somar ou subtrair uma unidade até obtermos próximo número que divida por 5 e não sobre nada
    while (currPagPos % 5 !== 0) currPagPos < 0 ? currPagPos-- : currPagPos++;

    if (currentPaginationPosition < 0) {
      const lastPaginationPosition = Math.abs(currPagPos - 4);
      return lastPaginationPosition;
    };
    
    // Later (1)
    if (currentPaginationPosition > 0) {
      const firstPaginationPosition = Math.abs(currPagPos + 4);
      return firstPaginationPosition;
    };

  };

  const [pagesNavigationDivider, setPagesNavigationDivider] = useState(4);

  
  useEffect(() => {

    const currentPaginationPosition = pagesNavigationDivider - currentPostsPosition;
    
    // Quando o resultado desta subtração for negativo && maior que -6, indica que o usuário avançou na paginação 
    // Então aumentaremos os números que serão exibidos em 5 posições de maneira a avançar 5 valores as páginas exibidas na linha 88
    if (currentPaginationPosition < 0 && currentPaginationPosition > -6) {
      setPagesNavigationDivider(previousState => previousState + 5);
    };
    
    // Quando o resultado desta subtração for positivo && menor que 6 indica que o usuário retrocedeu na paginação
    // Então diminuiremos os números da paginação atual em 5 valores
    if (currentPaginationPosition >= 5 && currentPaginationPosition < 6) {
      setPagesNavigationDivider(previousState => previousState - 5);
    };


    if (-5 > currentPaginationPosition) {
      const lastPaginationPosition = loopUntilRemainderEqualsZero(currentPaginationPosition);
      setPagesNavigationDivider(lastPaginationPosition);
    };
    
  
    if (currentPaginationPosition > 5) {
      // Later (1)
      // console.log(currentPaginationPosition);

      // const firstPaginationPosition = loopUntilRemainderEqualsZero(currentPaginationPosition) - 4;
      // setPagesNavigationDivider(firstPaginationPosition);

      // ou ainda
      // setPagesNavigationDivider(4);
    };
    
  }, [currentPostsPosition]);
  

  return (
    <div className={styles.postsNav}>

      <div className={styles.subContainer}>

        <div className={styles.arrowContainer}>
          {<img
            src={arrowLeft}
            className={styles.arrowLeft}
            onClick={onClickHandler}
            data-side="left"
          />}
        </div>


        {/*
          // Later (2)

          {
            currentPostsPosition > 10 &&
            <div
              className={styles.pageNumber}
              onClick={() => onClickHandler(0)}
            >{1}</div>
          }

          {currentPostsPosition > 10 && <div className={styles.pageNumber}>...</div>}
        */}


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

      </div>

      <div className={styles.subContainer}>
        <div className={styles.pageNumber}>...</div>
        <div
          className={styles.pageNumber}
          onClick={() => onClickHandler(pages.length - 1)}

        >{pages.length}</div>

        {/*
          // Later (3)
          
          {currentPostsPosition <= 10 && <div className={styles.pageNumber}>...</div>}
          {currentPostsPosition <= 10 &&
          <div
            className={styles.pageNumber}
            onClick={() => onClickHandler(pages.length - 1)}
          >{pages.length}</div>}
        */}

        <div className={styles.arrowContainer}> 
          {<img
            src={arrowRight}
            className={styles.arrowRight}
            onClick={onClickHandler}
            data-side="right"
          />}
        </div>
      </div>

    </div>
  );
};

export default PostsPagination;