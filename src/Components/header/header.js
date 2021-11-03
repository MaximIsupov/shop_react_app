import React from 'react';
import Dropdown from './dropdown-ul';
import '../../css/header.css';

class Header extends React.Component {
    state = {
        displayWomanMenu: false,
        displayManMenu: false,
        displayChildMenu: false,
    }

    handleMenuHover = (target) => {
        const displayMan = !this.state.displayManMenu;
        const displayWoman = !this.state.displayWomanMenu;
        const displayChild = !this.state.displayChildMenu;
        switch (target){
            case 'man':
                this.setState({displayManMenu: displayMan});
                break;
            case 'woman':
                this.setState({displayWomanMenu: displayWoman});
                break;
            case 'children':
                this.setState({displayChildMenu: displayChild});
        }
    }

    render() {
        return(
            <div className='header row'> 
                <div className='menu'>
                    <div className='menu-item dropdown' onMouseEnter={() => this.handleMenuHover('man')} onMouseLeave={() => this.handleMenuHover('man')}>
                        Для мужчин
                        {this.state.displayManMenu ? <Dropdown /> : null}
                    </div>
                    <div className='menu-item' onMouseEnter={() => this.handleMenuHover('woman')} onMouseLeave={() => this.handleMenuHover('woman')}>
                        Для женщин
                        {this.state.displayWomanMenu ? <Dropdown /> : null}
                    </div>
                    <div className='menu-item' onMouseEnter={() => this.handleMenuHover('children')} onMouseLeave={() => this.handleMenuHover('children')}>
                        Для детей
                        {this.state.displayChildMenu ? <Dropdown /> : null}
                    </div>
                    <div className='menu-item'>
                        <img src='/imgs/logo.png' />  
                    </div>
                    <div className='menu-item'>Оплата</div>
                    <div className='menu-item'>Доставка</div>
                    <div className='menu-item'>
                        <img src='/imgs/header/shopping-basket-button.png' className='menu-basket-logo' />
                    </div>
                    <div className='menu-item'>
                        <img src='/imgs/header/shopping-basket-counter.png' className='menu-basket-counter' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;