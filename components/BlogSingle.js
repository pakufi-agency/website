import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BlogSingleCard from './BlogSingleCard';
import BlogSidebar from './BlogSidebar';
import BlogPagination from './BlogPagination';

const BLOG_DATA = [   
    {
      blogImg:"/assets/images/blog/blog-1.jpg",
      blogLink:"/single-blog",
      catLink:"/blog",
      blogCat:"Digital Marketing",
      blogAuthor:"Andrew Smith",
      blogDate:"23 Mar 2022",
      blogTitle:"Prim umber network ormholes take hidden musics",
      blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
    },   
    {
      blogImg:"/assets/images/blog/blog-2.jpg",
      blogLink:"/single-blog",
      catLink:"/blog",
      blogCat:"Digital Marketing",
      blogAuthor:"Andrew Smith",
      blogDate:"23 Mar 2022",
      blogTitle:"Prim umber network ormholes take hidden musics",
      blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
    },   
    {
      blogImg:"/assets/images/blog/blog-3.jpg",
      blogLink:"/single-blog",
      catLink:"/blog",
      blogCat:"Digital Marketing",
      blogAuthor:"Andrew Smith",
      blogDate:"23 Mar 2022",
      blogTitle:"Prim umber network ormholes take hidden musics",
      blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
    },   
    {
      blogImg:"/assets/images/blog/blog-4.jpg",
      blogLink:"/single-blog",
      catLink:"/blog",
      blogCat:"Digital Marketing",
      blogAuthor:"Andrew Smith",
      blogDate:"23 Mar 2022",
      blogTitle:"Prim umber network ormholes take hidden musics",
      blogText:"Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue."
    } 
    
  ];

const Blog = () => {
    return (        
        <section className="blog__area blog__area-pb p-relative pt-120 pb-260">
            <Container>
                <Row>                        
                    <Col xl={8} lg={8}> 
                        <div className="blog__wrapper">
                            {BLOG_DATA.map(
                                ({blogLink, blogImg, catLink, blogCat, blogAuthor, blogDate, blogTitle, blogText}, index) => (
                                    <BlogSingleCard
                                    key={index}
                                    blogLink={blogLink}
                                    blogImg={blogImg}
                                    catLink={catLink}
                                    blogCat={blogCat}
                                    blogAuthor={blogAuthor}
                                    blogDate={blogDate}
                                    blogTitle={blogTitle}
                                    blogText={blogText}
                                    />
                                )
                            )}          
                            <BlogPagination/>
                        </div>
                    </Col>                        
                    <Col xl={4} lg={4}>
                        <BlogSidebar/>
                    </Col> 
                </Row>                                        
            </Container>
        </section>             
    );
};

export default Blog;