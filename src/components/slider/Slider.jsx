"use client";
import React from "react";
import Slider from "react-slick";
import "./style.css";
import { Button } from "@mui/material";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img className="w-full h-[70vh] object-cover object-top" src="https://danielhazard.netlify.app/assets/collections/summer-category.jpg" />
          <div className="slide-inner">
            <h1>First slide</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, distinctio ab amet consequuntur sequi possimus!</p>
            <Button variant="contained">Visit us</Button>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-[70vh] object-cover object-top" src="https://danielhazard.netlify.app/assets/collections/spring-category.jpg" />
        </div>
      </Slider>
    </div>
  );
}
