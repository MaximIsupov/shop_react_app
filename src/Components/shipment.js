import React from 'react';
import '../css/shipment.css';

class Shipment extends React.Component {
    render() {
        return(
                <div className='shipment'>
                    <div className='shipment-title'>БЕСПЛАТНАЯ ДОСТАВКА <snap className='shipment-price'>от 3000 Р.</snap></div>
                    <div className='shipment-description'>Сделайте заказ и получите подарок!</div>
                </div>
        )
    }
}

export default Shipment;