import { Layout } from './Layout';
import Carousel from './Carousel';
import { products_mock } from '../mocks/products_mock';
const ProductList = () => {
    const fondo = '#F6B2BF'
    const titulo = "Productos";


    return (
        <Layout fondo={fondo} titulo={titulo}>
            <div className="home">
                {products_mock.map((data) => <Carousel items={data} />)}
            </div>
        </Layout>
    );
}

export default ProductList;