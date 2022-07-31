import React from 'react'
import Slider from "react-slick";
import CharacterModal from '../Modal/CharacterModal';
import './card.scss';

const Card = (data) => {
  const { data:Characters } = data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "center",
    centerMode: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {Characters.map((item) => (
        <div className="card" key={item.id}>
          <div className="card__title">{item.name}</div>
          <div className="card__image">
            <img src={item.img} alt="" />
          </div>
          <CharacterModal data={item} />
        </div>
      ))}      
    </Slider>
  ); 
}

export default Card;
