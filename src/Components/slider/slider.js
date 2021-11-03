import React from 'react';
import '../../css/slider.css';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import Slide4 from './slide4';

class Slider extends React.Component {
    state = {
        slideNum: 1,
    };

    chooseSlide = (num) => {
        this.setState({slideNum: num});
    };

    render() {
        return(
            <div className='slider'>
                {this.state.slideNum == 1 ? <Slide1 /> : null}
                {this.state.slideNum == 2 ? <Slide2 /> : null}
                {this.state.slideNum == 3 ? <Slide3 /> : null}
                {this.state.slideNum == 4 ? <Slide4 /> : null}
                <div className='slide-buttons'>
                    <div className= {this.state.slideNum == 1 ? 'slide-button slide-button__selected' : 'slide-button'} onClick={()=>this.chooseSlide(1)}></div>
                    <div className= {this.state.slideNum == 2 ? 'slide-button slide-button__selected' : 'slide-button'} onClick={()=>this.chooseSlide(2)}></div>
                    <div className= {this.state.slideNum == 3 ? 'slide-button slide-button__selected' : 'slide-button'} onClick={()=>this.chooseSlide(3)}></div>
                    <div className= {this.state.slideNum == 4 ? 'slide-button slide-button__selected' : 'slide-button'} onClick={()=>this.chooseSlide(4)}></div>
                </div>
            </div>
        )
    }
}

export default Slider;