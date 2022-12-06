import styles from './PostsPagination.module.css';

import PageNumber from './PageNumber/PageNumber';

// import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow_left.png";
// import { ReactComponent as ArrowRight } from "../../assets/icons/arrow_right.png";

import arrowLeft from "../../assets/icons/arrow_left.png";
import arrowRight from "../../assets/icons/arrow_right.png";


function PostsPagination({ pages, currentPosition, changePagination }) {

  const onClickHandler = function(event) {
    const side = event.target.dataset.side;
    changePagination(side);
  };

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
          <PageNumber
            key={Math.random()}
            currentPosition={currentPosition}
            index={index}
            pagesLength={pages.length}
          />
        )
      })}

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