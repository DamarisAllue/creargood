import React, { useState } from 'react';
import { Layout } from './Layout';
import Carousel from './Carousel';
import { products_mock } from '../mocks/products_mock';
import Modal from './modal';

const ProductList = () => {
    const fondo = '#F6B2BF';
    const titulo = 'Productos';

    const [modalData, setModalData] = useState(null);

    const showProductModal = (productData) => {
        setModalData(productData);
    };

    const closeProductModal = () => {
        setModalData(null);
    };

    return (
        <Layout fondo={fondo} titulo={titulo}>
            <div className="home">
                {products_mock.map((data, index) => (
                    <Carousel
                        key={index}
                        items={data}
                        onImageClick={showProductModal}
                    />
                ))}
            </div>

            {modalData && (
                <Modal closeModal={closeProductModal} modalData={modalData} />
            )}
        </Layout>
    );
};

export default ProductList;
