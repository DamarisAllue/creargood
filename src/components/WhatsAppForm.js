import React, { useState } from 'react';

const WhatsAppForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reemplaza 'NUMERO_DE_TU_CONTACTO' con el número de teléfono al que deseas enviar el mensaje.
        const phoneNumber = '+54 9-351 5913974';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=
        *Creargood*%0A  
          *nombre y apellido*%0A
            ${name}%0A
          *Número de teléfono:*%0A
            ${phoneNumber}%0A
          *Correo electrónico*%0A
            ${email}%0A
          *Mensaje*%0A
            ${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div>
            <h2>Formulario de WhatsApp</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder='Tu nombre'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Email'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber"></label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        placeholder='Telefono'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        rows="4"
                        cols="50"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder='Tu mensaje'
                        required
                    />
                </div>
                <br />
                <button type="submit">Enviar a WhatsApp</button>
            </form>
        </div>
    );
};

export default WhatsAppForm;
