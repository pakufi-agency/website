"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo.png";

const ForgotPasswordForm = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
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

              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
