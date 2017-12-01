import React, { Component } from 'react';

import { Button } from 'react-foundation/lib/components/button';

class BootstrapElements extends Component {

  constructor(props){
    super(props);

    this.state={

      startTimer:false,
      progressBarValue:0,
      showImage:false
    }

    this.handleOnChangeProgressBar = this.handleOnChangeProgressBar.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  onHandleClick(event){
    let videoLink="https://www.youtube.com/embed/zpOULjyy-n8?rel=0";
    window.open(videoLink);
  }

  handleOnChangeProgressBar(){
    if(this.state.progressBarValue < 100){
      this.setState({
        progressBarValue: this.state.progressBarValue+1
      })
    }else{
      this.setState({
        showImage: true
      })
    }
  }

  startTimer(){
    if(this.state.progressBarValue < 100){
      this.setState({
        startTimer:true
      });

      setInterval(() => this.handleOnChangeProgressBar(), 333);
    }
  }

  render() {
    {!this.state.startTimer && 
      this.startTimer();
    }
    return (
      <div className="App">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <h4>Bootstrap Elements</h4><hr/>
              <button type="button" className="btn btn-success">Success</button>

              <button type="button" className="btn btn-info">Info</button>

              <button type="button" className="btn btn-warning">Warning</button>

              <button type="button" className="btn btn-danger">Danger</button>

              <div className="card" style={{width: "20rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-block">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>


              <div className="alert alert-primary" role="alert">
                This is a primary alert—check it out!
              </div>

              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: 25}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                Tooltip on top
              </button>

            </div>  
          </div>
        </div>  
      </div>        
    );
  }
}

export default BootstrapElements;