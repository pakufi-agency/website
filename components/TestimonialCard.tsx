import React, { FC } from "react";

interface TestimonialCardProps {
  clientLogo: string;
  clientText: string;
  clientImg: string;
  clientName: string;
  clientPosition: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  clientLogo,
  clientText,
  clientImg,
  clientName,
  clientPosition,
}) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__item-content">
        <div className="testimonials__logo">
          <img src={clientLogo} alt="logo" />
        </div>
        <div className="testimonials__text">
          <p>{clientText}</p>
        </div>
        <div className="testimonials__client d-flex align-items-center">
          <div className="testimonials__client-thumb">
            <img src={clientImg} alt="client" />
          </div>
          <div className="testimonials__client-text">
            <h4>{clientName}</h4>
            <span>{clientPosition}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
