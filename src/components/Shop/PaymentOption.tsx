import React from "react";
import Image from "next/image";

import paymentImg1 from "/public/images/payment-image/payment-img1.svg";
import paymentImg2 from "/public/images/payment-image/payment-img2.svg";
import paymentImg3 from "/public/images/payment-image/payment-img3.svg";
import paymentImg4 from "/public/images/payment-image/payment-img4.svg";
import paymentImg5 from "/public/images/payment-image/payment-img5.svg";
import paymentImg6 from "/public/images/payment-image/payment-img6.svg";
import paymentImg7 from "/public/images/payment-image/payment-img7.svg";

const PaymentOption = () => {
  return (
    <>
      <div className="custom-payment-options">
        <span>Guaranteed safe checkout:</span>

        <div className="payment-methods">
          <Image src={paymentImg1} alt="image" />
          <Image src={paymentImg2} alt="image" />
          <Image src={paymentImg3} alt="image" />
          <Image src={paymentImg4} alt="image" />
          <Image src={paymentImg5} alt="image" />
          <Image src={paymentImg6} alt="image" />
          <Image src={paymentImg7} alt="image" />
        </div>
      </div>
    </>
  );
};

export default PaymentOption;
