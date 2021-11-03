import React from 'react';
import '../../css/slider.css';

class Slide3 extends React.Component {
    render() {
        return(
                <div className='slide'>
                    <div className='slide-description'>
                        <div className='slide-title'>Зимняя распродажа</div>
                        <div className='slide-action'>СКИДКИ ДО 70%</div>
                        <div className='button main_button'>СМОТРЕТЬ МОДЕЛИ</div>
                    </div>
                    <div className='slide-img' style={{backgroundImage: `url("/imgs/winter_sale_img.png")`}}> 
                        <div className='oldPrice'>9 900 Р.</div>
                        <div className='newPrice'>1 900 Р.</div>
                    </div>
                </div>
        )
    }
}

export default Slide3;