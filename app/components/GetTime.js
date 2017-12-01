import React, { Component } from 'react';
import $ from 'jquery';

class GetTime extends Component {

  constructor(props){
    super(props);
    this.state={
      city:"",
      data:""
    }

    this.handleOnChangeCity = this.handleOnChangeCity.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChangeCity(event) {
    this.setState({city: event.target.value});
  }

  handleOnSubmit(event){
    event.preventDefault();
    const nombreCiudad = this.state.city;

    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q='+nombreCiudad+'&appid=5aa82f6c6baaebeb11c9d322e2cf6927',
        dataType:'json',
        cache:false,
    }).done((data) => {
        this.setState({data: data.main.temp});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="container">
            <div className="col-md-12">
              <h4>Get Time</h4><hr/>
               <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <label>City:</label>
                  <input type="text" className="form-control" id="city" onChange={this.handleOnChangeCity}/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              {this.state.data != "" &&
                <p className="App-intro">
                  {(this.state.data - 273).toFixed(2) } Cº
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetTime;