import React from 'react';
import '../css/get_sales.css';

class GetSales extends React.Component {
    render() {
        return(
            <div className='getSales'>
                <div className='getSales-wrap'>
                    <div className='getSales-title'>ПОЛУЧАЙТЕ СКИДКИ И ПОДАРКИ</div>
                    <input type='email' placeholder='Ваш e-mail' name='email'></input>
                    <div className='button main_button'>ПОДПИСАТЬСЯ</div>
                </div>
            </div>
        )
    }
}

export default GetSales;