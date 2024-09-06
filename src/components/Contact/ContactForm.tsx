"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import contactImg from "/public/images/contact-img.png";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <Image src={contactImg} alt="image" width={685} height={494} />
            </div>

            <div className="col-lg-6 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={formData.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleCheckboxChange}
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
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
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
