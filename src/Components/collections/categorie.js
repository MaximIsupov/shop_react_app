import React from 'react';

class Categorie extends React.Component {
    render() {
        return(
            <div className='categorie'>
                <img className='categorie-img' src={this.props.cat_descr['img']}></img>
                <h2 className='categorie-title'>{this.props.cat_descr['name']}</h2>
            </div>
        )
    }
}

export default Categorie;