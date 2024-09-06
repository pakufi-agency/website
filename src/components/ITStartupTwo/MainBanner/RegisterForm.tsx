"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormData {
  username: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

const RegisterForm: React.FC = () => {
  // State to store form values
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your logic to handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div
        className="banner-form"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              By checking this, you agree to our{" "}
              <Link href="/terms-conditions" >
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" >
                Privacy policy
              </Link>
              .
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Register Now
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
