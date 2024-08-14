import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from './SectionTitle';

const Customer = () => {
    return (
        <section className="customers__area fix p-relative pt-120 pb-60">
                <div className="customers__shape">
                    <img className="c-s-1" src="assets/images/shape/customers/c-s-1.png" alt=""/>
                    <img className="c-s-2" src="assets/images/shape/customers/c-s-2.png" alt=""/>
                </div>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="customers__title text-center">
                                <SectionTitle subTitle="Creative Customers"
                                titleFirst="Our beloved partners"
                                /> 
                            </div>
                            <div className="customers__container">
                                <Swiper 
                                spaceBetween={30}
                                slidesPerView={"auto"}
                                breakpoints= {{
                                    0: {
                                    slidesPerView: 1,
                                    },
                                    576: {
                                    slidesPerView: 2,
                                    },
                                    768: {
                                    slidesPerView: 3,
                                    },
                                    992: {
                                    slidesPerView: 4,
                                    },
                                    1200: {
                                    slidesPerView: 5,
                                    },
                                }}
                                loop={true}
                                >                                
                                    <SwiperSlide>
                                        <div className="brand__item swiper-slide text-center">
                                            <img src="assets/images/brand/logo-1.png" alt=""/>                                            
                                        </div>                                
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item swiper-slide text-center">
                                            <img src="assets/images/brand/logo-2.png" alt=""/>                                            
                                        </div>                                
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item swiper-slide text-center">
                                            <img src="assets/images/brand/logo-3.png" alt=""/>                                            
                                        </div>                                
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item swiper-slide text-center">
                                            <img src="assets/images/brand/logo-4.png" alt=""/>                                            
                                        </div>                                
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item swiper-slide text-center">
                                            <img src="assets/images/brand/logo-5.png" alt=""/>                                            
                                        </div>                                
                                    </SwiperSlide>                                
                                </Swiper>                                
                            </div>
                        </Col>
                    </Row> 
                </Container>
            </section>
    );
};

export default Customer;