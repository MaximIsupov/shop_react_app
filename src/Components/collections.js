import React from 'react';
import '../css/collections.css';

class Collections extends React.Component {
    render() {
        return(
                <div className='collections'>
                    <div className='collection'>
                        <div className='collection-column'>
                            <div className='collection-title'>
                                <span className='text_bold'>МУЖСКАЯ</span> КОЛЛЕКЦИЯ
                            </div>
                            <div className='collection-description'>Обувь, пуловеры, костюмы</div>
                            <div className='button main_button'>→</div>
                        </div>
                        <div className='collection-column'>
                            <img src='/imgs/collections/male.png'></img>
                        </div>
                    </div>
                    <div className='collection'>
                        <div className='collection-column'>
                            <div className='collection-title'>
                                <span className='text_bold'>МУЖСКАЯ</span> КОЛЛЕКЦИЯ
                            </div>
                            <div className='collection-description'>Обувь, пуловеры, костюмы</div>
                            <div className='button main_button'>→</div>
                        </div>
                        <div className='collection-column'>
                            <img src='/imgs/collections/female.png'></img>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Collections;