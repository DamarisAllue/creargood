import { Layout } from './Layout';
import banner from "../assets/imagenHERORosa.png"
import { quienessomos_mock } from "../mocks/quienessomos_mock";
import QuienessomosItem from "../components/quienessomositem";

const quienessomos = () => {
    const titulo = "¿Quiénes somos?";
    return (
        <Layout banner={banner} titulo={titulo}>

            <div className='corchetes-quienessomos1'>
                <h1 className='titulo-contacto'>Somos un emprendimiento con talento humano creativo, que escuchamos y creamos juntos a nuestros clientes ideas originales, que se queden en el recuerdo de los usuarios.<br />Entendemos a nuestros clientes, desde el poco tiempo que tiene para encargarse de producir un souvenir o  regalos para eventos sociales.<br />Por ello nuestra forma de trabajo es acompañar y empoderarlos a generar eseproducto original.</h1>
            </div>
            {quienessomos_mock.map((data, index) => <QuienessomosItem item={data} index={index} />)}
        </Layout>
    );
}

export default quienessomos;