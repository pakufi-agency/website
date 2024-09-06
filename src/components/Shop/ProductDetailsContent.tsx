"use client";
  
import React from "react"; 
import ProductsDetailsTabs from "../../components/Shop/ProductsDetailsTabs";
import * as Icon from "react-feather";
import PaymentOption from "../../components/Shop/PaymentOption";
import ProductSlider from "./ProductSlider";
import QuantityInput from "./QuantityInput";

const ProductDetailsContent: React.FC = () => {
  return (
    <>
      <div className="shop-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ProductSlider />
            </div>

            <div className="col-lg-7">
              <div className="products-details">
                <h3>Casual Shoe</h3>

                <div className="price">$31.99</div>

                <ul className="rating">
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                </ul>

                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>

                <div className="availability">
                  Availability: <span>In Stock</span>
                </div>

                <QuantityInput />

                <PaymentOption />

                <div className="products-share-social">
                  <span>Share:</span>

                  <ul>
                    <li>
                      <a
                        href="https://facebook.com/"
                        className="facebook"
                        target="_blank"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="twitter"
                        target="_blank"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/"
                        className="linkedin"
                        target="_blank"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/"
                        className="instagram"
                        target="_blank"
                      >
                        <Icon.Instagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContent;