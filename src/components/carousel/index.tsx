import React from 'react'
import styles from './index.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//settings slider show carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

type Item = {
  imgUrl: string,
}

type Props = {
  cards: {
    slidesToShow: number,
    items: Item[]
  }
}

//component carousel
const Carousel: React.FC<Props> = ({cards}) => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Slider {...settings} slidesToShow={cards.slidesToShow}>
          {
            cards.items.map((item: Item, index: number) => (
              <div className={styles.card} key={index}>
                <img src={item.imgUrl} alt={item.imgUrl.split('/').pop()?.split('.')[0]} />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Carousel