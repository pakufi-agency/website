"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-feather";

import productImg1 from "/public/images/shop-image/shop-image1.jpg";
import productImg2 from "/public/images/shop-image/shop-image2.jpg";
import productImg3 from "/public/images/shop-image/shop-image3.jpg";
import productImg4 from "/public/images/shop-image/shop-image4.jpg";
import QuantityInput from "./QuantityInput";

const CartContent = () => {
  return (
    <>
      <div className="cart-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <form>
                <div className="cart-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/product-details/" >
                            <Image
                              src={productImg1}
                              alt="item"
                              width={162}
                              height={320}
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="/shop/product-details/" >
                            Wood Pencil
                          </Link>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$191.00</span>
                        </td>

                        <td className="product-quantity">
                          <QuantityInput />
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$191.00</span>

                          <button type="button" className="remove">
                            <Icon.Trash2 />
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/product-details/" >
                            <Image
                              src={productImg2}
                              alt="item"
                              width={162}
                              height={320}
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="/shop/product-details/" >
                            T-Shirt
                          </Link>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$111.00</span>
                        </td>

                        <td className="product-quantity">
                          <QuantityInput />
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$111.00</span>

                          <button type="button" className="remove">
                            <Icon.Trash2 />
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/product-details/" >
                            <Image
                              src={productImg3}
                              alt="item"
                              width={162}
                              height={320}
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="/shop/product-details/" >
                            Casual Shoe
                          </Link>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$100.00</span>
                        </td>

                        <td className="product-quantity">
                          <QuantityInput />
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$100.00</span>

                          <button type="button" className="remove">
                            <Icon.Trash2 />
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop/product-details/" >
                            <Image
                              src={productImg4}
                              alt="item"
                              width={162}
                              height={320}
                            />
                          </Link>
                        </td>

                        <td className="product-name">
                          <Link href="/shop/product-details/" >
                            Coffee Bag
                          </Link>
                        </td>

                        <td className="product-price">
                          <span className="unit-amount">$414.00</span>
                        </td>

                        <td className="product-quantity">
                          <QuantityInput />
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">$414.00</span>

                          <button type="button" className="remove">
                            <Icon.Trash2 />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="cart-buttons">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7 col-sm-7">
                      <div className="continue-shopping-box">
                        <Link
                          href="/shop/"
                          className="btn btn-light"
                          
                        >
                          Continue Shopping
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-5 text-end">
                      <button type="button" className="btn btn-light">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="cart-totals">
                  <h3>Cart Totals</h3>

                  <ul>
                    <li>
                      Subtotal <span>$250.00</span>
                    </li>
                    <li>
                      Shipping <span>$30.00</span>
                    </li>
                    <li>
                      Total{" "}
                      <span>
                        <b>$280.00</b>
                      </span>
                    </li>
                  </ul>

                  <Link
                    href="/checkout"
                    className="btn btn-primary"
                    
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContent;
