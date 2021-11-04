import React from 'react';
import '../../css/collections.css';
import categories from '../../samples/categories-sample';
import Categories from './categories';

class Collections extends React.Component {
    state = {
        current_cat: {},
        display: false,
    }

    handleCategorie = (cat_name, todisplay) => {
        this.setState({current_cat:categories[cat_name]});
        this.setState({display: todisplay});
    }

    render() {
        return(<div className='collections-wrap'>
                    <div className='collections'>
                        <div className='collection' onMouseEnter={()=>this.handleCategorie('man', true)} onMouseLeave={()=>this.handleCategorie('man', false)}>
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
                        <div className='collection' onMouseEnter={()=>this.handleCategorie('woman', true)} onMouseLeave={()=>this.handleCategorie('woman', false)}>
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
                    {this.state.display ? <Categories cats={this.state.current_cat} /> : null
                    }
            </div>
        )
    }
}

export default Collections;