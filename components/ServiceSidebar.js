import React from 'react';
import Link from 'next/link';

const ServiceSidebar = () => {
    return (
        <div className="sidebar__widget sidebar__widget-2">
            <div className="sidebar__widget-title">
                <h3>Services</h3>
            </div>
            <div className="sidebar__widget-link">
                <ul>
                    <li>
                        <Link href="/services-details">
                            <a>UI/UX Design</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>Web Development</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>Digital Marketing</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>App Development</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>Content Strategy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services-details">
                            <a>E-commerce</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ServiceSidebar;