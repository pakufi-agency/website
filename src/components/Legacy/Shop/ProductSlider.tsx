import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import productImg1 from "/public/images/shop-image/shop-image1.jpg";
import productImg2 from "/public/images/shop-image/shop-image2.jpg";
import productImg3 from "/public/images/shop-image/shop-image3.jpg";

const ProductSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="products-details-image"
      >
        <SwiperSlide>
          <div className="single-image-box">
            <Image src={productImg1} alt="img" width={262} height={320} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="single-image-box">
            <Image src={productImg2} alt="img" width={262} height={320} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="single-image-box">
            <Image src={productImg3} alt="img" width={262} height={320} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSlider;
