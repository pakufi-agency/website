import React from 'react';
import Link from 'next/link';

const BlogPagination = () => {
    return (
        <div className="blog__pagination">
            <ul>
                <li>
                    <Link href="/blog">
                        <a><i className="fa-solid fa-arrow-left"></i></a>
                    </Link>
                </li>
                <li className="active">
                    <Link href="/blog">
                        <a><span>01</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a><span>02</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a><span>03</span></a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a><i className="fa-solid fa-arrow-right"></i></a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default BlogPagination;