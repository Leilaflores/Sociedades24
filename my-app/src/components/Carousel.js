import React from 'react';
import banner4 from "../Asset/banner4.jpeg";
import sociedadComercial from "../Asset/sociedadComercial.jpg";

function Carousel () {
  return (
    <div>
<div id="carouselExampleDark" className='carousel carousel-dark slide' data-bs-ride="carousel" >
  <div className='carousel-indicators'>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className='active' aria-label="Slide 2"></button>
  </div>
  <div className='carousel-inner' style={{height:"400px"}}> 
    <div className='carousel-item active' data-bs-interval="10000">
      <img src={banner4} className='w-100' alt="..."></img>
    </div>
    <div className='carousel-item' data-bs-interval="2000">
      <img src={sociedadComercial} className='w-100' alt="..."></img>
    </div>
  </div>
  <button className='carousel-control-prev p-0' type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Previous</span>
  </button>
  <button className='carousel-control-next p-0' type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className='carousel-control-next-icon' aria-hidden="true"></span>
    <span className='visually-hidden'>Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel