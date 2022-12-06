import styles from './PageNumber.module.css';

function PageNumber({index, currentPosition, pagesLength}) {
  return (
    <>
      {/* Parei aqui, temos de achar solução para aumentar paginação conforme clicamos nas setas */}
      {index < 5 && <div className={`${styles.pageNumber} ${index === 0 && styles.pageNumberCurrent}`}>
        
        { index + currentPosition + 1 <= pagesLength && index + currentPosition + 1 }
      </div>}
    
      {/* Aqui é para renderizamos container com retitências condicionalmente */}
      {pagesLength === index + 1 && <div className={styles.pageNumber}>
        ...
      </div>}

      {/* Mesma coisa acima, mas com o tamanho máximo de páginas de posts */}
      {pagesLength === index + 1 && <div className={styles.pageNumber}>
        {pagesLength}
      </div>}
    </>
  );
};

export default PageNumber;