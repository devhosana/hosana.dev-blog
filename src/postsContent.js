'use strict';

import postImg1 from "./assets/img/post_img1.webp";
import postImg2 from "./assets/img/post_img2.webp";
import postImg3 from "./assets/img/post_img3.webp";
import postImg4 from "./assets/img/post_img4.webp";
import postImg5 from "./assets/img/post_img5.webp";
import postImg6 from "./assets/img/post_img6.webp";
import postImg7 from "./assets/img/post_img7.webp";
import postImg8 from "./assets/img/post_img8.webp";
import postImg9 from "./assets/img/post_img9.webp";
import postImg10 from "./assets/img/post_img10.webp";
import postImg11 from "./assets/img/post_img11.webp";
import postImg12 from "./assets/img/post_img12.webp";
import postImg13 from "./assets/img/post_img13.webp";
import postImg14 from "./assets/img/post_img14.webp";
import postImg15 from "./assets/img/post_img15.webp";
import postImg16 from "./assets/img/post_img16.webp";
import postImg17 from "./assets/img/post_img17.webp";
import postImg18 from "./assets/img/post_img18.webp";
import postImg19 from "./assets/img/post_img19.webp";
import postImg20 from "./assets/img/post_img20.webp";
import postImg21 from "./assets/img/post_img21.webp";
import postImg22 from "./assets/img/post_img22.webp";
import postImg23 from "./assets/img/post_img23.webp";
import postImg24 from "./assets/img/post_img24.webp";


const keyGen = function() {
  const randomNum = Math.random();
  const key =
    String(randomNum)
    .slice(2)
  ;

  return key;
};


const randomNumFrom = function(array) {
  const maximum = array.length;
  const num = Math.trunc((Math.random() * maximum) + 1);
  return num - 1;
};


export const postsContent = [

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg1,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg2,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg3,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    }
  ],

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg4,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg5,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg6,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],
  
  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg7,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg8,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg9,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg10,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg11,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg12,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg13,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg14,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg15,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg16,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg17,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg18,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg19,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg20,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg21,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],

  [
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg22,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",

        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg23,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  
    {
      title: "The basic language of the web: HTML",
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias sequi repellat non distinctio illo, neque vel earum officia nostrum ipsam officiis tempora vero molestiae ab iure facere repudiandae maxime numquam.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, debitis dicta, atque, doloribus sapiente culpa est tempore quidem sequi cupiditate rem! Laboriosam adipisci sunt aspernatur temporibus. Fugiat veniam a repellendus.",
        
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, corporis. Doloremque eum similique sint reprehenderit quis explicabo tempore. Doloremque quos odio dolor in repellendus illum, quidem rem alias quasi ipsum.",
      ],
      img: postImg24,
      author: "Diego Rocha",
      date: "November 11st 2022",
      key: keyGen(),
    },
  ],
  
];


const relatedPosts = postsContent
  .flat()
  .map(postContent => {
    return {
      title: postContent.title,
      img: postContent.img,
      date: postContent.date,
      key: postContent.key
    }
  })
;

export const randomRelatedPosts = function() {

  const randomRelatedPosts = [];

  while (randomRelatedPosts.length < 3) {

    const randomPost = relatedPosts
      .at(randomNumFrom(relatedPosts))
    ;

    const postIsRepeated = 
      [...randomRelatedPosts].some(post => randomPost === post)
    ;

    if (postIsRepeated) continue;
    if (!postIsRepeated) randomRelatedPosts.push(randomPost);

  };

  return randomRelatedPosts;

};



// For some reason this is not working, I'll check later
/*
const relatedPosts = postsContent
  .flatMap(postContent => {
    return {
      title: postContent.title,
      img: postContent.img,
      date: postContent.date,
      key: postContent.key
    }
  })
;
*/