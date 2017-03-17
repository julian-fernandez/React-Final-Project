import React, { Component } from 'react';
import ArtistBox from './ArtistBox';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchTerm: "Kyuss",
      name: [],
      logos:[],
      infoStatus: undefined
    };
  };

  static defaultProps = {
    name: 'Kyuss',
  };
  componentWillMount() {
    var localinput = localStorage.getItem( 'searchinput' );
    let searchterm = localinput;
    console.log("El coso se llama " + searchterm);
    this.getInputInfo(searchterm);
  };
  handleSubmit(event) {
    event.preventDefault();
  }
  getData(){
    return this.state;
  } 
  getInputInfo(name){
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
      console.log("respondió");
      return response.json();
    })
    .then( function(response) {
      let bandlist = [];
      let logos = [];
      let testlog = response.artists.items[2].images[0].url;
      console.log(testlog);
      for (var i = 0; i < response.artists.items.length; i++) {
        var counter = response.artists.items[i].name;
        bandlist.push(counter);
      }
      for (var i = 0; i < response.artists.items.length; i++) {
        var imgs = response.artists.items[i].images[0];
        console.log(imgs);
      }
      main.setState({
        name: bandlist,
        logos: logos
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
     logos,
     infoStatus 
   } = this.state;
   let data = null;
   if (infoStatus == 'loaded') {
    console.log("LARGO: " + this.state.name.length);
  }
  return (
    <div>
    {name.map(function(name, index){
      return <div className="column half" key={ index }><div className="artistbox"><img src="http://placehold.it/150x150"/><h4><a href="/kyuss">{name}</a></h4></div></div>;
    })}
    </div>

    );
}
}

export default SearchForm;