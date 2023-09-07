import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function WhatsAppLink() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=+54 9-3515913974&text=Hola%21%20Quisiera%20obtener%20informaci%C3%B3n%20sobre%20Creargood."
            className="float"
            target="_blank"
        >
            <i className="fa fa-whatsapp my-float"></i>
        </a>
    );
}

export default WhatsAppLink;