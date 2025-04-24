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
  title: string;
  subtitle: string;
  footnote: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  buttonLabel,
  title,
  subtitle,
  footnote,
}) => {
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
    <div className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          {!isSubmitting && (
            <input
              type="email"
              className={styles.inputNewsletter}
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          <button
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
        <p className={styles.footnote}>{footnote}</p>
      </div>
      {/* Shape Images */}
      <div className="shape3 rotateme">
        <Image src={whiteCross} alt="shape" width={22} height={22} />
      </div>
      <div className="shape1">
        <Image src={whiteTriangle} alt="shape" width={12} height={16} />
      </div>
      <div className="shape5">
        <Image src={whiteTriangle} alt="shape" width={21} height={20} />
      </div>
    </div>
  );
};

export default Newsletter;
