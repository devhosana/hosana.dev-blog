import styles from './MainComponent.module.css';

import { useState } from "react";

import NavBar from "../NavBar/NavBar";
import BlogPost from "../BlogPost/BlogPost";
import RelatedPost from '../RelatedPost/RelatedPost';
import PostsPagination from "../PostsPagination/PostsPagination";
import Footer from "../Footer/Footer";

import { postsContent, relatedPosts, randomNumFrom } from "../../postsContent.js";


const randomRelatedPosts = function() {

  const temp = [];

  while (temp.length < 3) {

    const randomPost = relatedPosts
      .at(randomNumFrom(relatedPosts))
    ;

    const postIsRepeated = 
      [...temp].some(post => randomPost === post)
    ;

    if (postIsRepeated) continue;
    if (!postIsRepeated) temp.push(randomPost);

  };

  return temp;

};




function MainModule() {

  const [currentPostsPosition, setCurrentPostsPosition] = useState(0);
  
  const postsNavHandler = function(side) {

    if (side === "right" && currentPostsPosition < postsContent.length - 1) {
      setCurrentPostsPosition((previousState) => previousState + 1);
    };

    if (side === "left" && currentPostsPosition > 0) {
      setCurrentPostsPosition((previousState) => previousState - 1);
    };

  };


  // Assim não teremos line depois do penúltimo post.
  let penultimatePost;

  if (postsContent.at(currentPostsPosition).length === 3) {
    penultimatePost = 1;
  };

  if (postsContent.at(currentPostsPosition).length === 2) {
    penultimatePost = 0;
  };



  return (


    <article className={styles.mainModule}>

      {/***** NAVBAR *****/}
      <NavBar/>

      <div className={styles.flexContainer}>
        <div className={styles.postsContainer}>

          {/***** POSTS *****/}
          {postsContent
            .at(currentPostsPosition)
            .map((content, index) => {
              return (
                <div key={content.key}>
                  <BlogPost
                    postData={content}
                  />

                  {/* Render div line  before penultimate post */}
                  {index <= penultimatePost && <div className={styles.line}/>} 
           
              </div>
            )
          })}

        </div>

        {/***** RELATED POSTS *****/}
        <aside className={styles.relatedPostsContainer}>

          <h2 className={styles.relatedPostsTitle}>Related Posts</h2>

          {randomRelatedPosts().map(related => {
            return (
              <RelatedPost
              key={related.key}
              relatedPostData={related}
              />
            )
          })}

        </aside>

      </div>

      {/***** POSTS PAGINATION *****/}
      <PostsPagination
        pages={postsContent}
        changePagination={postsNavHandler}
        currentPosition={currentPostsPosition}
        />

      {/***** FOOTER *****/}
      <Footer/>

    </article>
  );
};

export default MainModule;