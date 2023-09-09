import React from 'react';
import "../styles/modal.css"
import "./Carousel"
import "../mocks/products_mock"

function Modal({ show, onClose, imageData, selectedIndex }) {
    if (!show || selectedIndex === null || selectedIndex < 0 || selectedIndex >= imageData.length) {
        return null; // No renderizar el modal si no hay imagen seleccionada válida
    }

    const selectedImage = imageData[selectedIndex];

    return (
        <div className={`modal ${show ? 'active' : ''}`}>
            <div className="modal-content">
                <img src={selectedImage.img} alt={selectedImage.categoria} />
                <p>{selectedImage.categoria}</p>
                <button onClick={onClose}>Cerrar Modal</button>
            </div>
        </div>
    );
}

export default Modal;
