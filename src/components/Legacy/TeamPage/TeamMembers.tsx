"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";

import teamImg1 from "/public/images/team-image/team1.jpg";
import teamImg2 from "/public/images/team-image/team2.jpg";
import teamImg3 from "/public/images/team-image/team3.jpg";
import teamImg4 from "/public/images/team-image/team4.jpg";
import teamImg5 from "/public/images/team-image/team5.jpg"; 
import teamImg6 from "/public/images/team-image/team6.jpg"; 
import teamImg7 from "/public/images/team-image/team7.jpg"; 
import teamImg8 from "/public/images/team-image/team8.jpg"; 
import teamImg9 from "/public/images/team-image/team9.jpg"; 

const TeamMembers = () => {
  return (
    <>
      <div className="team-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg1} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg2} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Alex Maxwel</h3>
                    <span>Marketing Manager</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg3} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Janny Cotller</h3>
                    <span>Web Developer</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg4} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Jason Statham</h3>
                    <span>UX/UI Designer</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg5} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Corey Anderson</h3>
                    <span>Project Manager</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg6} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg7} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Alex Maxwel</h3>
                    <span>Marketing Manager</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg8} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Janny Cotller</h3>
                    <span>Web Developer</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <Image src={teamImg9} alt="image" width={125} height={125} />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Jason Statham</h3>
                    <span>UX/UI Designer</span>
                  </div>

                  <ul>
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
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.gitlab.com/" target="_blank">
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembers;
