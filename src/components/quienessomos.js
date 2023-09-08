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
                <h2 className='titulo-valores'>Valores</h2>
            <div className='corchetes-quienessomos2'>
                <h3 className='titulo-quienessomos'>Creatividad y originalidad</h3>
                <h4 className='titulo-contacto'>Nos esforzamos por ofrecer productos únicos y personalizados, trabajando en estrecha colaboración con nuestros clientes.</h4>
                <h3 className='titulo-quienessomos'>Responsabilidad y profesionalismo</h3>
                <h4 className='titulo-contacto'>Realizamos nuestro trabajo con ética y profesionalismo, cumpliendo con los plazos acordados y brindando un servicio de calidad.</h4>
                <h3 className='titulo-quienessomos'>Diseño de productos funcionales y reutilizables</h3>
                <h4 className='titulo-contacto'>Nuestro objetivo es crear productos que sean prácticos y puedan ser utilizados repetidamente, reduciendo el impacto ambiental.</h4>
                <h3 className='titulo-quienessomos'>Reducción de desperdicios de material y control de fabricación</h3>
                <h4 className='titulo-contacto'>Aplicamos un estricto control en los procesos de fabricación para minimizar los desperdicios de material y optimizar la eficiencia.</h4>
            </div>
        </Layout>
    );
}

export default quienessomos;