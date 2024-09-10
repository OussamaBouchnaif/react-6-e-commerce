
import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../images/slider/sliderImg_1.jpg";
import sliderImg2 from "../images/slider/sliderImg_2.jpg";
import sliderImg3 from "../images/slider/sliderImg_3.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={sliderImg1} alt=""></Image>
        </div>
        <div>
          <Image src={sliderImg2} alt=""></Image>
        </div>
        <div>
          <Image src={sliderImg3} alt=""></Image>{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
