import React from 'react';
import Link from 'next/link';

const PostComment = () => {
    return (
        <div className="post__comment">
            <div className="post__comment-title">
                <h4>Comments:</h4>
            </div>
            <div className="post__comment-content">
                <ul>
                    <li>
                        <div className="comment__box d-sm-flex">
                            <div className="comment__box-thumb">
                                <img src="/assets/images/blog/author-1.jpg" alt=""/>
                            </div>
                            <div className="comment__box-content">
                                <div className="comment__box-name d-flex justify-content-between">
                                    <h5>Andrew Smith</h5>
                                    <span>23 March 2022</span>
                                </div>
                                <p>Wisi enim ad minim veniam, quis aliquip nostrud exerci tation lobortis nisl aliquip consequat.</p>
                                <Link href="/single-blog">
                                    <a>Reply<i className="fas fa-arrow-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="children">
                        <div className="comment__box d-sm-flex">
                            <div className="comment__box-thumb">
                                <img src="/assets/images/blog/author-2.jpg" alt=""/>
                            </div>
                            <div className="comment__box-content">
                                <div className="comment__box-name d-flex justify-content-between">
                                    <h5>Caroline Muzi</h5>
                                    <span>23 March 2022</span>
                                </div>
                                <p>Wisi enim ad minim veniam, quis aliquip nostrud exerci tation lobortis nisl aliquip consequat.</p>
                                <Link href="/single-blog">
                                    <a>Reply<i className="fas fa-arrow-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="children">
                        <div className="comment__box comment__box-2 d-sm-flex">
                            <div className="comment__box-thumb">
                                <img src="/assets/images/blog/author-3.jpg" alt=""/>
                            </div>
                            <div className="comment__box-content">
                                <div className="comment__box-name d-flex justify-content-between">
                                    <h5>Maria Lisa</h5>
                                    <span>23 March 2022</span>
                                </div>
                                <p>Wisi enim ad minim veniam, quis aliquip nostrud exerci tation lobortis nisl aliquip consequat.</p>
                                <Link  href="/single-blog">
                                    <a>Reply<i className="fas fa-arrow-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PostComment;