"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import productImg1 from "/public/images/shop-image/shop-image1.jpg";
import productImg2 from "/public/images/shop-image/shop-image2.jpg";
import productImg3 from "/public/images/shop-image/shop-image3.jpg";
import productImg4 from "/public/images/shop-image/shop-image4.jpg";
import productImg5 from "/public/images/shop-image/shop-image5.jpg";
import productImg6 from "/public/images/shop-image/shop-image6.jpg";
import productImg7 from "/public/images/shop-image/shop-image7.jpg";
import productImg8 from "/public/images/shop-image/shop-image8.jpg";

const ProductCard = () => {
  return (
    <>
      <div className="shop-area ptb-80">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-9 col-md-7 col-sm-7">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-sm-5">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Sort by Popularity</option>
                    <option value="2">Sort by Average Rating</option>
                    <option value="3">Sort by Latest</option>
                    <option value="4">Sort by price: Low to High</option>
                    <option value="5">Sort by price: High to Low</option>
                    <option value="6">Sort by New</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg1}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Wood Pencil
                    </Link>
                  </h3>
                  <span>$19.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg2}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      T-Shirt
                    </Link>
                  </h3>
                  <span>$22.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg3}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Casual Shoe
                    </Link>
                  </h3>
                  <span>$31.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg4}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Coffee Bag
                    </Link>
                  </h3>
                  <span>$4.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg5}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Single Chair
                    </Link>
                  </h3>
                  <span>$149.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg6}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Business Card
                    </Link>
                  </h3>
                  <span>$1.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg7}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Book Cover
                    </Link>
                  </h3>
                  <span>$3.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-products">
                <div className="products-image">
                  <Image
                    src={productImg8}
                    alt="product"
                    width={162}
                    height={320}
                  />
                  <ul>
                    <li>
                      <button type="button">
                        <Icon.Search />
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <Icon.Heart />
                      </button>
                    </li>
                    <li>
                      <Link href="/shop/product-details/" >
                        <Icon.Link />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="products-content">
                  <h3>
                    <Link href="/shop/product-details/" >
                      Wall Watch
                    </Link>
                  </h3>
                  <span>$9.99</span>
                  <ul>
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
                  <button type="button" className="add-to-cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" href="#" >
                        Prev
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#" >
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#" >
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#" >
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#" >
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
