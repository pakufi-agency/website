import React, {useRef, useCallback, useEffect} from 'react';
import ReactPlayer from 'react-player';

const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target){
            setShowModal(false);
        }
    };
    const keyPress = useCallback(
        e =>{
            if(e.key === 'Escape' && showModal){
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
        );

        useEffect(
            ()=>{
                document.addEventListener('keydown', keyPress);
                return()=>document.removeEventListener('keydown', keyPress);
            },
            [keyPress]
        );
    return (
        <>
            {showModal ? (
            <div className="modal" ref={modalRef} onClick={closeModal}>
                <div className="modal-video">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} width='100%' height='100%'/>
                <button onClick={()=>setShowModal(prev=>!prev)} className="modal-close"><i className="fas fa-times"></i></button>
                </div>
            </div>
            ) : null}
        </>
    );
};

export default Modal;