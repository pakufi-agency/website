"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo.png";

const SignUpForm = () => {
  return (
    <>
      <div className="ptb-80">
        <div className="container">
          <div className="auth-form">
            <div className="auth-head">
              <Link href="/it-startup" >
                <Image src={logo} alt="logo" width={110} height={36} />
              </Link>
              <p>Create a new account</p>
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
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>

            <div className="foot">
              <p>
                Already have an account yet? <Link href="/login" >Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
