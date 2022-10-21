import React from 'react';
import banner4 from "../Asset/banner4.jpeg";
import banner5 from "../Asset/banner5.jpg";
import sociedadComercial from "../Asset/sociedadComercial.jpg";

const Carousel = () => {
  return (
    <div>
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="active" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="active" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={banner4} class="position-relative overflow-hidden" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={banner5} class=" position-relative overflow-hidden w-100" alt="..."></img>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={sociedadComercial} class="position-relative overflow-hidden w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev p-0" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next p-0" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel