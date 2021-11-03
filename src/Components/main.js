import React from 'react';
import Header from './header/header';
import Slider from './slider/slider';
import Shipment from './shipment';
import Collections from './collections';
import GetSales from './get_sales';

class Main extends React.Component {
    render() {
        return(<div className='main_page'>
                    <Header />
                    <Slider />
                    <Shipment />
                    <Collections />
                    <GetSales />
                </div>
        )
    }
}

export default Main;