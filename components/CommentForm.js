import React from 'react';

const CommentForm = () => {
    return (
        <div className="comment__form">
            <div className="comment__form-title">
                <h4>Leave a comment:</h4>
            </div>
            <div className="comment__form-content">                        
                <form action="#" id="contact-form" method="POST">                                    
                    <div className="field-format d-sm-flex justify-content-between mb-25">
                        <div className="form-group pr-10 form-group-2">
                            <input type="text" className="form-control" name="name" placeholder="John Smith"/>
                        </div>
                        <div className="form-group pl-10 ">
                            <input type="email" className="form-control" name="email" placeholder="example@mail.com"/>                                            
                        </div>
                    </div>
                    <div className="form-group mb-30">
                        <textarea className="form-control" spellCheck="false" name="message" placeholder="Your comment"></textarea>
                    </div>
                    <button type="submit" className="m-btn">Post Comment</button>
                </form>  
            </div>
        </div>
    );
};

export default CommentForm;