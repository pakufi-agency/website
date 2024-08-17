import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BlogSingleCard from "./BlogSingleCard";
import BlogSidebar from "./BlogSidebar";
import BlogPagination from "./BlogPagination";

interface BlogData {
  blogImg: string;
  blogLink: string;
  catLink: string;
  blogCat: string;
  blogAuthor: string;
  blogDate: string;
  blogTitle: string;
  blogText: string;
}

const BLOG_DATA: BlogData[] = [
  {
    blogImg: "/assets/images/blog/blog-1.jpg",
    blogLink: "/single-blog",
    catLink: "/blog",
    blogCat: "Digital Marketing",
    blogAuthor: "Andrew Smith",
    blogDate: "23 Mar 2022",
    blogTitle: "Prim umber network ormholes take hidden musics",
    blogText:
      "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
  },
  {
    blogImg: "/assets/images/blog/blog-2.jpg",
    blogLink: "/single-blog",
    catLink: "/blog",
    blogCat: "Digital Marketing",
    blogAuthor: "Andrew Smith",
    blogDate: "23 Mar 2022",
    blogTitle: "Prim umber network ormholes take hidden musics",
    blogText:
      "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
  },
  {
    blogImg: "/assets/images/blog/blog-3.jpg",
    blogLink: "/single-blog",
    catLink: "/blog",
    blogCat: "Digital Marketing",
    blogAuthor: "Andrew Smith",
    blogDate: "23 Mar 2022",
    blogTitle: "Prim umber network ormholes take hidden musics",
    blogText:
      "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
  },
  {
    blogImg: "/assets/images/blog/blog-4.jpg",
    blogLink: "/single-blog",
    catLink: "/blog",
    blogCat: "Digital Marketing",
    blogAuthor: "Andrew Smith",
    blogDate: "23 Mar 2022",
    blogTitle: "Prim umber network ormholes take hidden musics",
    blogText:
      "Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue.",
  },
];

const Blog: FC = () => {
  return (
    <section className="blog__area blog__area-pb p-relative pt-120 pb-260">
      <Container>
        <Row>
          <Col xl={8} lg={8}>
            <div className="blog__wrapper">
              {BLOG_DATA.map(
                (
                  {
                    blogLink,
                    blogImg,
                    catLink,
                    blogCat,
                    blogAuthor,
                    blogDate,
                    blogTitle,
                    blogText,
                  }: BlogData,
                  index: number
                ) => (
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
              <BlogPagination />
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
