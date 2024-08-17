import React, { FC } from "react";
import Link from "next/link";

const ServiceSidebar: FC = () => {
  return (
    <div className="sidebar__widget sidebar__widget-2">
      <div className="sidebar__widget-title">
        <h3>Services</h3>
      </div>
      <div className="sidebar__widget-link">
        <ul>
          <li>
            <Link href="/services-details">UI/UX Design</Link>
          </li>
          <li>
            <Link href="/services-details">Web Development</Link>
          </li>
          <li>
            <Link href="/services-details">Digital Marketing</Link>
          </li>
          <li>
            <Link href="/services-details">App Development</Link>
          </li>
          <li>
            <Link href="/services-details">Content Strategy</Link>
          </li>
          <li>
            <Link href="/services-details">E-commerce</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSidebar;
