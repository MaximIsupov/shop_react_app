import React from 'react';
import Categorie from './categorie';

class Categories extends React.Component {
    render() {
        return(
            <div className='categories'>
               {Object.keys(this.props.cats).map( cat => {
                   return <Categorie key={this.props.cats[cat]} cat_descr={this.props.cats[cat]} />;
               })}
            </div>
        )
    }
}

export default Categories;