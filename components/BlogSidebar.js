import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="blog__sidebar">
            <div className="sidebar__widget-search mb-40">
                <form action="#">
                    <input type="text" placeholder="Keywords"/>
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-title">
                    <h3>Categories</h3>
                </div>
                <div className="sidebar__widget-link">
                    <ul>                        
                        <li>
                            <Link href="/single-blog">
                                <a>Digital Agency</a>
                            </Link>
                        </li>   
                        <li>
                            <Link href="/single-blog">
                                <a>Social Media Marketing</a>
                            </Link>
                        </li> 
                        <li>
                            <Link href="/single-blog">
                                <a>Web Design</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/single-blog">
                                <a>App Development</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/single-blog">
                                <a>Brand Identity</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/single-blog">
                                <a>UI/UX Design</a>
                            </Link>
                        </li>                        
                    </ul>
                </div>
            </div>
            <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-title">
                    <h3>Recent Posts</h3>
                </div>
                <div className="sidebar__rc">
                    <ul>
                        <li className="sidebar__rc-item">
                            <div className="sidebar__rc-thumb">
                                <Link href="/single-blog">
                                    <a><img src="/assets/images/blog/rc-1.jpg" alt="blog"/></a>
                                </Link>
                            </div>
                            <div className="sidebar__rc-content">
                                <h5>
                                    <Link href="/single-blog">
                                        <a>Post launch show initial product target business</a>
                                    </Link>
                                </h5>
                                <div className="sidebar__rc-meta">
                                    <span><i className="fa-solid fa-calendar-days"></i>22 Mar 2022</span>
                                </div>
                            </div>
                        </li>                                              
                        <li className="sidebar__rc-item">
                            <div className="sidebar__rc-thumb">
                                <Link href="/single-blog">
                                    <a><img src="/assets/images/blog/rc-2.jpg" alt="blog"/></a>
                                </Link>
                            </div>
                            <div className="sidebar__rc-content">
                                <h5>
                                    <Link href="/single-blog">
                                        <a>Business transformation with abstract solutions</a>
                                    </Link>
                                </h5>
                                <div className="sidebar__rc-meta">
                                    <span><i className="fa-solid fa-calendar-days"></i>22 Mar 2022</span>
                                </div>
                            </div>
                        </li>                                              
                        <li className="sidebar__rc-item">
                            <div className="sidebar__rc-thumb">
                                <Link href="/single-blog">
                                    <a><img src="/assets/images/blog/rc-3.jpg" alt="blog"/></a>
                                </Link>
                            </div>
                            <div className="sidebar__rc-content">
                                <h5>
                                    <Link href="/single-blog">
                                        <a>Kindling the energy hidden in matter only home</a>
                                    </Link>
                                </h5>
                                <div className="sidebar__rc-meta">
                                    <span><i className="fa-solid fa-calendar-days"></i>22 Mar 2022</span>
                                </div>
                            </div>
                        </li>                                              
                    </ul>
                </div>
            </div>
            <div className="sidebar__widget mb-40">
                <div className="sidebar__widget-title">
                    <h3>Services</h3>
                </div>
                <div className="sidebar__widget-tags">                                        
                    <Link href="/single-blog"><a>App</a></Link>
                    <Link href="/single-blog"><a>Branding</a></Link>
                    <Link href="/single-blog"><a>Web Design</a></Link>
                    <Link href="/single-blog"><a>UI/UX Design</a></Link>
                    <Link href="/single-blog"><a>Landing</a></Link>
                    <Link href="/single-blog"><a>Development</a></Link>                                        
                    <Link href="/single-blog"><a>Digital Marketing</a></Link>                                        
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;