import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import PostAuthor from "./PostAuthor";
import PostComment from "./PostComment";
import CommentForm from "./CommentForm";
import BlogSidebar from "./BlogSidebar";

const BlogDetails: FC = () => {
  return (
    <section className="blog__area blog__area-pb-2 p-relative pt-120 pb-260">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="blog__wrapper">
              <div className="blog__single">
                <div className="blog__single-thumb">
                  <img src="/assets/images/blog/blog-1.jpg" alt="blog" />
                </div>
                <div className="blog__single-content blog__single-details">
                  <div className="blog__single-content-tag">
                    <Link href="/blog">Digital Marketing</Link>
                  </div>
                  <div className="blog__single-content-meta">
                    <ul>
                      <li>
                        <Link href="/single-blog">
                          <i className="far fa-user"></i>Andrew Smith
                        </Link>
                      </li>
                      <li>
                        <Link href="/single-blog">
                          <i className="far fa-calendar-alt"></i>23 Mar 2022
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h2>Prim umber network ormholes take hidden musics</h2>
                  <p>
                    Kindling the energy hidden in matter the only home
                    we&apos;ve ever known radio telescope decipherment descended
                    from astronomers rogue. Prime number network of wormholes
                    take root. Kindling the energy hidden in matter the only
                    home we&apos;ve ever known radio telescope decipherment
                    descended from astronomers rogue. Prime number network of
                    wormholes take root. We&apos;ve ever known radio telescope
                    decipherment descended from astronomers rogue. Prime number
                    network of wormholes take root.
                  </p>
                  <p>
                    Kindling the energy hidden in matter the only home
                    we&apos;ve ever known radio telescope decipherment descended
                    from astronomers rogue. Prime number network of wormholes
                    take root. Matter the only home we&apos;ve ever known radio
                    telescope decipherment descended from astronomers rogue.
                    Prime number network of wormholes take root. Kindling the
                    energy hidden in matter the only home we&apos;ve ever known
                    radio telescope decipherment descended from astronomers
                    rogue. Prime number network of wormholes take root. Matter
                    the only home we&apos;ve ever known radio telescope
                    decipherment descended from astronomers rogue. Prime number
                    network of wormholes take root.
                  </p>
                  <div className="blog__quote">
                    <blockquote>
                      <p>
                        Prime number network of wormholes take hidden in matter
                        we&apos;ve ever known radio
                      </p>
                      <h5>Alima Alisha</h5>
                    </blockquote>
                  </div>
                  <p>
                    Decipherment descended from astronomers rogue. Prime number
                    network of wormholes take root. Matter the only home
                    we&apos;ve ever known radio telescope decipherment descended
                    from astronomers rogue. Prime number network of wormholes
                    take root.
                  </p>
                  <PostAuthor />
                  <PostComment />
                  <CommentForm />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
