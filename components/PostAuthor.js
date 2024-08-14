import React from 'react';
import Link from 'next/link';

const PostAuthor = () => {
    return (
        <div className="post__author d-sm-flex">
            <div className="post__author-thumb">
                <img src="/assets/images/blog/author-1.jpg" alt=""/>
            </div>
            <div className="post__author-content">
                <h4>Maria Lisa</h4>
                <p>From astronomers rogue. Prime number network of wormholes take root.  Radio telescope deciphe descended from astronom.</p>
                <div className="post__author-social">
                    <Link href="#">
                        <a><i className="fa-brands fa-facebook-f"></i></a>
                    </Link>
                    <Link href="#">
                        <a><i className="fa-brands fa-twitter"></i></a>
                    </Link>
                    <Link href="#">
                        <a><i className="fa-brands fa-instagram"></i></a>
                    </Link>
                    <Link href="#">
                        <a><i className="fa-brands fa-youtube"></i></a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostAuthor;