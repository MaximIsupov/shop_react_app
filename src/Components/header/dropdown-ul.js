import React from 'react';


class Dropdown extends React.Component {
    render(){
        return(
            <ul className="dropdown-items">
                <li className='dropdown-item'>Верхняя одежда</li>
                <li className='dropdown-item'>Нижняя одежда</li>
                <li className='dropdown-item'>Обувь</li>
            </ul>
        )
    }
}

export default Dropdown;