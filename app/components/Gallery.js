import React, { Component } from 'react';
import Slider from 'react-slick';

require('../assets/images/1.jpg');
require('../assets/images/2.jpg');
require('../assets/images/3.jpg');
require('../assets/images/4.jpg');
require('../assets/images/5.jpg');

class Gallery extends Component {

  constructor(props){
      super(props);
      this.state = {
        settings: {
          dots: true,
          infinite:true,
          speed: 500,
          slideToShow:1,
          autoplay:true,
          fade:true,
          slidesToScroll: 1
        },
      }
  }

  render(){
    return (
      <div className="App">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <h4>BReact Slick</h4><hr/>
              <Slider {...this.state.settings}>
                <div><img src='./assets/images/1.jpg' alt='1'></img></div>
                <div><img src='./assets/images/2.jpg' alt='2'></img></div>
                <div><img src='./assets/images/3.jpg' alt='3'></img></div>
                <div><img src='./assets/images/4.jpg' alt='4'></img></div>
                <div><img src='./assets/images/5.jpg' alt='5'></img></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
