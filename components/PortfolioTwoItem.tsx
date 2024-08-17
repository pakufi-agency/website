import React, { FC } from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

interface PortfolioTwoItemProps {
  portfolioImg: string;
  portfolioLink: string;
  portfolioTitle: string;
  portfolioText: string;
}

const PortfolioTwoItem: FC<PortfolioTwoItemProps> = ({
  portfolioImg,
  portfolioLink,
  portfolioTitle,
  portfolioText,
}) => {
  return (
    <Col xl={6} lg={6}>
      <div className="portfolio__item-2 mb-30">
        <div className="portfolio__image-2">
          <img src={portfolioImg} alt="portfolio" />
        </div>
        <div className="portfolio__text-2">
          <h3>
            <Link href={portfolioLink}>{portfolioTitle}</Link>
          </h3>
          <p>{portfolioText}</p>
        </div>
      </div>
    </Col>
  );
};

export default PortfolioTwoItem;
