import React from 'react';
import { Col } from "react-bootstrap";
import Link from 'next/link';

const BlogHomeCard = ({blogLink, blogImg, blogDate, catLink, blogCat, blogTitle}) => {
    return (
        <Col xl={4} lg={4} md={6}>
                            <div className="blog__item mb-40">
                                <div className="blog__thumb">
                                    <Link href={blogLink}>
                                        <a><img src={blogImg} alt="blog"/></a>  
                                    </Link>                                  
                                </div>
                                <div className="blog__content">
                                    <div className="blog__date d-flex align-items-center justify content-between">
                                        <i className="fa-solid fa-clock d-none d-xl-block"></i><p>{blogDate}</p>
                                        <Link href={catLink}>
                                            <a className="m-btn blog-btn">
                                                {blogCat}
                                            </a>
                                        </Link>
                                    </div>
                                    <h3>
                                        <Link href={blogLink}>
                                            <a>
                                                {blogTitle}
                                            </a>
                                        </Link>
                                    </h3>
                                    <div className="blog__link">
                                        <Link href={blogLink}>
                                            <a className="arrow-btn">Continue Reading<i className="fas fa-arrow-right"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
    );
};

export default BlogHomeCard;