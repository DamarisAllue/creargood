import React from 'react';
import "../styles/modal.css"

const Modal = ({ closeModal, modalData }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <img src={modalData.img} alt={`Imagen del producto`} />
                <p>{modalData.info}</p>
            </div>
        </div>
    );
};

export default Modal;
