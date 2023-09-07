import { Layout } from './Layout';
import WhatsAppForm from './whatsappform';
const contacto = () => {
    const fondo = '#F6B2BF'
    const titulo = "Contacto";



    return (
        <Layout fondo={fondo} titulo={titulo}>

            <div className="App">
                <WhatsAppForm />
            </div>

        </Layout>
    );
}

export default contacto;