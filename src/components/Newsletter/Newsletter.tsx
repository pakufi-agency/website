// components/Newsletter/Newsletter.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackClick } from "../../utils/utils";
import { usePathname } from "next/navigation";

import styles from "./Newsletter.module.scss";

import whiteCross from "/public/images/backgrounds/white-cross.svg";
import whiteTriangle from "/public/images/backgrounds/white-triangle.svg";

interface NewsletterProps {
  buttonLabel: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ buttonLabel }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setMessage("");
    setIsSubmitting(true);

    const brevoApiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    const brevoListId = process.env.NEXT_PUBLIC_BREVO_LIST_ID;

    if (!brevoApiKey || !brevoListId) {
      setIsSubmitting(false);
      setError(true);
      setMessage("API key or List ID is missing. Please contact support.");
      console.error(
        "Brevo API key or List ID is missing from environment variables."
      );
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, brevoApiKey, brevoListId }),
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (response.ok) {
        setMessage("You have been successfully subscribed!");
        setEmail("");
      } else {
        setError(true);
        setMessage(
          "There was a problem with your subscription. Please reload and try again."
        );
        console.error("Brevo subscription failed:", data);
      }
    } catch (err) {
      setIsSubmitting(false);
      setError(true);
      setMessage(
        "Is not you, is us! An error occurred. Please try again later."
      );
      console.error("Error during subscription:", error);
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <h2>Start your free trial</h2>
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          {!isSubmitting && (
            <input
              type="email"
              className={styles.inputNewsletter}
              placeholder="Enter your business email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          {/* <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Sign Up Free"}
          </button> */}

          <button
            // href={buttonCtaOneLink}
            type="submit"
            className={`btn button-pakufi-dark ${styles.button}`}
          >
            <span
              onClick={() =>
                trackClick(
                  "Newsletter:signup",
                  buttonLabel,
                  "/api/subscribe",
                  pathname
                )
              }
            >
              {isSubmitting ? "Subscribing..." : buttonLabel}
            </span>
          </button>
        </form>

        {message && (
          <p className={error ? styles.errorMessage : styles.successMessage}>
            {message}
          </p>
        )}
        <p>
          Test out the Machine Learning features for 14 days, no credit card
          required.
        </p>
      </div>
      {/* Shape Images */}
      <div className="shape2 rotateme">
        <Image src={whiteCross} alt="shape" width={22} height={22} />
      </div>
      <div className="shape4">
        <Image src={whiteTriangle} alt="shape" width={12} height={16} />
      </div>
      <div className="shape7">
        <Image src={whiteTriangle} alt="shape" width={21} height={20} />
      </div>
    </div>
  );
};

export default Newsletter;
