import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from './SectionTitle';
import BlogHomeCard from './BlogHomeCard';

const BLOG_DATA = [
    {
      blogImg:"/assets/images/blog/blog-img-1.jpg",
      blogLink:"/single-blog",
      blogDate:"22 March, 2022",
      blogCat:"Marketing",
      catLink:"/blog",
      blogTitle:"Post launch shower initiative forward"
    },
    {
      blogImg:"/assets/images/blog/blog-img-2.jpg",
      blogLink:"/single-blog",
      blogDate:"22 March, 2022",
      blogCat:"Marketing",
      catLink:"/blog",
      blogTitle:"Delivering the best digital marketing"
    },
    {
      blogImg:"/assets/images/blog/blog-img-3.jpg",
      blogLink:"/single-blog",
      blogDate:"22 March, 2022",
      blogCat:"Marketing",
      catLink:"/blog",
      blogTitle:"This is our north star design baseline"
    },
    
  ];

const BlogHome = ({extraClass}) => {
    return (
        <section className={`blog__area fix p-relative ${extraClass} pb-225`}>
                <div className="blog__shape">
                    <img className="blog-shape-1" src="assets/images/shape/blog/blog-s-1.png" alt=""/>
                    <img className="blog-shape-2" src="assets/images/shape/blog/blog-s-2.png" alt=""/>
                    <img className="blog-shape-3 d-none d-sm-block" src="assets/images/shape/blog/blog-s-3.png" alt=""/>
                    <img className="blog-shape-4" src="assets/images/shape/blog/blog-s-4.png" alt=""/>
                    <img className="blog-shape-5 d-none d-sm-block" src="assets/images/shape/blog/blog-s-5.png" alt=""/>
                </div>
                <Container>
                    <Row className="mb-65">
                        <Col xl={12}>
                            <div className="blog__title text-center">
                                <SectionTitle subTitle="Our Blog"
                                titleFirst="Our latest updates"
                                /> 
                                <p>High turnaround rate and loop back vec but we want to empower the team with the right tools and guidance.</p> 
                            </div>
                        </Col>
                    </Row>  
                    <Row>                        
                        {BLOG_DATA.map(
                            ({blogLink, blogImg, blogDate, blogCat, catLink, blogTitle}, index) => (
                                <BlogHomeCard
                                key={index}
                                blogLink={blogLink}
                                blogImg={blogImg}
                                blogDate={blogDate}
                                blogCat={blogCat}
                                catLink={catLink}
                                blogTitle={blogTitle}
                                />
                            )
                        )}                              
                    </Row>
                </Container>
            </section>
    );
};

export default BlogHome;