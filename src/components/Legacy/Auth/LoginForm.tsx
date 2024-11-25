"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import logo from "/public/images/logo.png";

const LoginForm = () => {
  return (
    <>
      <div className="ptb-80">
        <div className="container">
          <div className="auth-form">
            <div className="auth-head">
              <Link href="/it-startup" >
                <Image src={logo} alt="logo" width={110} height={36} />
              </Link>
              <p>
                Don&apos;t have an account yet? <Link href="/sign-up" >Sign Up</Link>
              </p>
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3">
                <p>
                  <Link href="/forgot-password" >Forgot Password</Link>
                </p>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>

            <div className="foot">
              <p>or connect with</p>
              <ul>
                <li>
                  <a href="https://www.mail.com/" target="_blank">
                    <Icon.Mail />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <Icon.Twitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
