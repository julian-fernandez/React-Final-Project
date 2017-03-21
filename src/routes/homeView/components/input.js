import React, { Component } from 'react';
import lupa from '../../../assets/lupa.png';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchTerm: "noSearchTerm",
            name: [],
            infoStatus: undefined
        };
    };

    static defaultProps = {
        name: 'noSearchTerm',
    };

    componentWillMount() {
        this.getInputInfo();
    };

    handleSubmit(event) {
        event.preventDefault();
        let searchterm = this.input.value;
        this.getInputInfo(searchterm);
        localStorage.setItem("searchinput", searchterm);
        window.location.href = '/artists';
    };

    getData() {
        return this.state;
    };

    getInputInfo(name) {
        console.log("Working with:" + name);
        const main = this;
        let query = null;
        main.setState({
            infoStatus: 'loading'
        });
    }

  render() {
    const { 
     name,
     infoStatus 
   } = this.state;
   let data = null;
   if (infoStatus == 'loaded') {
    console.log("LARGO: " + this.state.name.length);
  }
  if(!this.props.activado){       // esta funcionalidad es para que en el home se muestre searchBoxArtist, y en otras pantallas devuelve las 2 pero oculta 1, y en la parte mobile no la oculta.
    return (
        <div  className="inputArtist">
        <form onSubmit={this.handleSubmit}>
        <input type="text" className="searchBoxArtist" placeholder="Type the name of your favorite artist" ref={(input) => this.input = input} />
        </form>
        </div>
    );
  }
  else{
    return (
        <div  className="inputArtist">
        <form onSubmit={this.handleSubmit}>
        <input type="text" className="searchBoxArtistOffMobile" placeholder="Type the name of your favorite artist" ref={(input) => this.input = input} />
        </form>
        </div>
    );
  }
  }
}

export default SearchForm;
