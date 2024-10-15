"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import comingBgImg from "/public/images/coming-soon-1.jpg";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";
interface CountdownProps {
  endDate?: string; // Format: "Month Day, Year HH:mm:ss" i.e. "August 23, 2025 17:00:00 PDT"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    if (endDate) {
      const endDateTime = new Date(endDate).getTime();
      const now = new Date().getTime();
      const timeRemaining = endDateTime - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div
        className="coming-soon-area"
        style={{ backgroundImage: `url(${comingBgImg.src})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <h1>
                  <Image src={logo} alt="logo" width={300} />
                </h1>
                <h2>Under Construction</h2>
                <p>We are currently working on our new website.</p>

                <div className="who-we-are">
                  <div className="col1">
                    <h3>Hi! We are Pakufi</h3>
                    <p>
                      An <strong>ethical tech agency </strong>
                      that makes it easy for you to bring your website, app, or
                      online project to life, while offering better job
                      opportunities for IT experts from economically
                      disadvantaged countries.
                    </p>
                  </div>

                  <div className="button-group">
                    <Link
                      href="https://tally.so/r/nGDg5e"
                      className="btn btn-primary"
                    >
                      Sounds exciting! <br />I want to discuss a project with
                      you
                    </Link>

                    <Link
                      href="https://tally.so/r/waE8Av"
                      className="btn btn-primary"
                    >
                      Sounds exciting! <br />I want to join Pakufi talents
                    </Link>
                  </div>

                  <div className="col1">
                    <h3>How do we do that?</h3>
                    <p>
                      When you work with us, you’ll experience professional
                      service with a personal touch. We keep our team small and
                      closely connected to ensure every project gets the
                      dedicated attention it deserves. Our focus is on your
                      satisfaction and making sure we’re all moving in the same
                      direction, every step of the way.
                    </p>
                    <p>
                      We empower talented individuals through remote work
                      opportunities. But we don’t stop at job placement—we
                      provide mentorship, build a supportive community, and help
                      freelancers grow their skills and well-being so they can
                      succeed in the global marketplace.
                    </p>
                  </div>
                </div>

                {endDate && (
                  <div id="timer">
                    <div id="days">
                      {countdown.days} <span>Days</span>
                    </div>
                    <div id="hours">
                      {countdown.hours} <span>Hours</span>
                    </div>
                    <div id="minutes">
                      {countdown.minutes} <span>Minutes</span>
                    </div>
                    <div id="seconds">
                      {countdown.seconds} <span>Seconds</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <ul className="social-list">
          <li className="list-heading">Follow us for an update:</li>
          <li>
            <a
              href="https://www.linkedin.com/company/pakufi"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/pakufi_ethical_agency"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/KUeQrY5eMw"
              className="discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.MessageCircle />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Countdown;
