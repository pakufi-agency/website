import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import SectionTitle from './SectionTitle';
import TestimonialCard from './TestimonialCard';


const TESTIMONIAL_DATA = [
    {
      clientLogo:"/assets/images/testimonials/client-logo/google.png",
      clientText:"Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.",
      clientImg:"/assets/images/testimonials/t-client-1.png",
      clientName:"Alima Alisha",
      clientPosition:"CEO"
    },
    {
      clientLogo:"/assets/images/testimonials/client-logo/payoneer.png",
      clientText:"Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.",
      clientImg:"/assets/images/testimonials/t-client-2.png",
      clientName:"David Clark",
      clientPosition:"Marketing Manager"
    },
    {
      clientLogo:"/assets/images/testimonials/client-logo/instagram.png",
      clientText:"Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.",
      clientImg:"/assets/images/testimonials/t-client-3.png",
      clientName:"Moran Sham",
      clientPosition:"Team Leader"
    }
  ];


const Testimonial = ({testimonialArea, paddingTop}) => {
    return (
        <section className={`${testimonialArea} fix p-relative ${paddingTop} pb-120`}>
                <div className="testimonials__shape">
                    <img className="t-shape-1 d-none d-sm-block" src="/assets/images/shape/testimonials/t-shape-1.png" alt=""/>
                    <img className="t-shape-2" src="/assets/images/shape/testimonials/t-shape-2.png" alt=""/>
                    <img className="t-shape-3" src="/assets/images/shape/testimonials/t-shape-3.png" alt=""/>
                    <img className="t-shape-4" src="/assets/images/shape/testimonials/t-shape-4.png" alt=""/>
                    <img className="t-shape-5 d-none d-lg-block" src="/assets/images/shape/testimonials/t-shape-5.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-65">
                        <Col xl={12}>
                            <div className="testimonials__title text-center">
                                <SectionTitle subTitle="Testimonials"
                                titleFirst="What people say"/> 
                                <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                        
                        <Col xl={12}>
                            <Swiper 
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            loop={true}
                            breakpoints= {{
                                0: {
                                  slidesPerView: 1,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                                992: {
                                  slidesPerView: 3,
                                },
                              }}
                            pagination={{ clickable: true, el:".swiper-pagination" }}
                            >
                                {TESTIMONIAL_DATA.map(
                                (
                                    { clientLogo, clientText, clientImg, clientName, clientPosition },
                                    index
                                ) => (
                                    <SwiperSlide key={index}>
                                    <TestimonialCard
                                        clientLogo={clientLogo}
                                        clientText={clientText}
                                        clientImg={clientImg}
                                        clientName={clientName}
                                        clientPosition={clientPosition}
                                    />
                                    </SwiperSlide>
                                )
                                )}
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </Col>                                            
                    </Row>
                </Container>
            </section>
    );
};

export default Testimonial;