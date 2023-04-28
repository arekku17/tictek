import React from 'react'
import Modal from 'react-modal';
import { vendedores } from '../data/vendedoresData';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalComprar = (props) => {

    const enviarMensaje = (tipo, numero) => {
        let url = "https://api.whatsapp.com/send?text=¡Hola!, quisiera comprar un boleto " + tipo + " por favor.&phone=52" + numero
        window.open(url);
    }

    const closeModal = () => {
        props.setIsOpen(false);
    }

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Vendedores"
            style={customStyles}
        >
            <div className="containerModal">
                <button onClick={closeModal} class="btn-close">
                    <span class="icon-cross"></span>
                    <span class="visually-hidden"></span>
                </button>
                <h2>Vendedores de boletos</h2>
                <div className="vendedoresContainer">
                    {vendedores.rp.map(vendedor => (
                        <div className="vendedorContainer">
                            <p>{vendedor.nombre}</p>
                            <button onClick={() => enviarMensaje(props.tipo, vendedor.numero)} className="button-85">Comprar</button>
                        </div>
                    ))}
                </div>
            </div>

        </Modal>
    )
}

export default ModalComprar