import React, { Component } from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: [],
      infoStatus: undefined
    };
  };

  static defaultProps = {
    name: 'Kyuss',
  };
  componentWillMount() {
    this.getWeatherInfo();
  };
  handleSubmit(event) {
    event.preventDefault();
    let searchterm = this.input.value;
    this.getWeatherInfo(searchterm);
  } 
  getWeatherInfo(name){
    console.log("Working with:" + name);
    const main = this;
    let query = null;
    main.setState({
      infoStatus: 'loading'
    });
    if (!name || name == '') {
      query = this.props.name;
      console.log("IF MALO" + query);
    } else {
      query = name;
      console.log("IF BUENO" + query);
    }
    fetch(`https://api.spotify.com/v1/search?type=artist&q=artist:${query}`)
    .then( function(response) {
      return response.json();
    })
    .then( function(response) {
      console.log("Made it!!!");
      for (var i = 0; i < response.artists.items.length; i++) {
        var counter = response.artists.items[i];
      }
      setTimeout( function() {
        main.setState({
          infoStatus: 'loaded'
        });
      }, 300);
      return response;
    })
    .then( function(response) {
      let bandlist = [];
      for (var i = 0; i < response.artists.items.length; i++) {
        var counter = response.artists.items[i].name;
        bandlist.push(counter);
      }
      main.setState({
        name: bandlist
      });
    })
    .catch( function(response) {
     main.setState({
      infoStatus: 'error'
    });
   })
  };

  render() {
    const { 
     name,
     infoStatus 
   } = this.state;
   let data = null;
   if (infoStatus == 'loaded') {
    console.log("LARGO: " + this.state.name.length);
  }
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label>
    Name:
    <input type="text" ref={(input) => this.input = input} />
    </label>
    <input type="submit" value="Submit" />
    </form>
    <ul className="artist-list">
    {name.map(function(name, index){
      return <li key={ index }><a href="/artists">{name}</a></li>;
    })}
    </ul>
    </div>
    );
}
}

export default SearchForm;