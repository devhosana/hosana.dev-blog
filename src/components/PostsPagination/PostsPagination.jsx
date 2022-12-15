import { useState, useEffect } from 'react';

import styles from './PostsPagination.module.css';

import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";

import arrowLastPosition from "../../assets/icons/arrow_last.png";
import arrowFirstPosition from "../../assets/icons/arrow_first.png";

let firstLoad = true;

function PostsPagination({ postsContent, currentPostsPosition, postsPaginationHandler }) {

  const [pagesNavigationDivider, setPagesNavigationDivider] = useState(4);


  const onClickHandler = function(position) {
    postsPaginationHandler(position);
  };

  const getLastPaginationPosition = (postsLength) => {
    let curLength = postsLength;
    
    while (curLength % 5 !== 0) curLength++;

    return curLength - 1;
  };

  
  
  useEffect(() => {
    
    const currentPaginationPosition = pagesNavigationDivider - currentPostsPosition;
    const top = document.querySelector("body");
    
    // Quando o resultado desta subtração for negativo && maior que -6, indica que o usuário avançou na paginação 
    // Então aumentaremos os números que serão exibidos em 5 posições de maneira a avançar 5 valores as páginas exibidas na linha 88
    if (currentPaginationPosition < 0 && currentPaginationPosition > -6) {
      setPagesNavigationDivider(previousState => previousState + 5);
    };
    
    // Quando o resultado desta subtração for positivo && menor ou igual a 5 indica que o usuário retrocedeu na paginação
    // Então diminuiremos os números da paginação atual em 5 valores
    if (currentPaginationPosition >= 5 && currentPaginationPosition < 6) {
      setPagesNavigationDivider(previousState => previousState - 5);
    };

    // Quando currentPaginationPosition for menor que -5 indica que usuário quis avançar até o fim
    if (currentPaginationPosition < -5) {
      const lastPosition = getLastPaginationPosition(postsContent.length);
      setPagesNavigationDivider(lastPosition);
    };
    
    // Quando currentPaginationPosts for maior que 5 indica que usuário quis voltar até o começo
    if (currentPaginationPosition > 5) {
      setPagesNavigationDivider(4);
    };

    // Debounding na paginação
    const goTo = setTimeout(() => {
       if (!firstLoad) top.scrollIntoView( { behavior: "smooth" } );
       firstLoad = false;
    }, 700);

    return () => clearTimeout(goTo);
    
  }, [currentPostsPosition]);
  

  return (
    <div className={styles.postsNav}>
      
      {/* Voltar */}
      <button className={styles.arrowContainer}>
        <img
          src={arrowLeft}
          className={styles.arrowLeft}
          onClick={() => {
            // Impedir que voltemos se estivermos no começo
            if (currentPostsPosition === 0) return;
            
            onClickHandler(currentPostsPosition - 1);
          }}
          />
      </button>

      {/* Voltar */}
      <div
        className={styles.pageNumber}
        onClick={() => onClickHandler(0)}>
          {1}
        </div>
      <div className={styles.pageDots}>..</div>


        {postsContent.map((_, index) => {
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

      

      <div className={styles.pageDots}>..</div>

      <div
        className={styles.pageNumber}
        onClick={() => onClickHandler(postsContent.length - 1)}

      >{postsContent.length}</div>


      {/* Avançar */}
      <button className={styles.arrowContainer}> 
        <img
          src={arrowRight}
          className={styles.arrowRight}
          onClick={() => {
            // Impedir que avancemos se estivermos no fim
            if (currentPostsPosition === postsContent.length - 1) return;

            onClickHandler(currentPostsPosition + 1);
          }}
          
        />
      </button>

    </div>
  );
};

export default PostsPagination;