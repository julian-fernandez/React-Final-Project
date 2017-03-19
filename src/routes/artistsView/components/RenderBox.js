import React, { Component } from 'react';
import ArtistBox from './ArtistBox';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchTerm: "",
      name: [],
      ids: [],
      logos:[],
      infoStatus: undefined
    };
  };

  static defaultProps = {
    name: '',
  };
  componentWillMount() {
    var localinput = localStorage.getItem( 'searchinput' );
    let searchterm = localinput;
    console.log("El coso se llama " + searchterm);
    this.getInputInfo(searchterm);
  };

  handleClick(event){
    console.log("EL EVENTO ES " + event)
    localStorage.setItem("bandid", event);
  }
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
      console.log("respondió BandView");
      return response.json();
    })
    .then( function(response) {
      let bandlist = [];
      let logoslist = [];
      let idslist = [];

      for (var i = 0; i < response.artists.items.length; i++) {
        var counter = response.artists.items[i].name;
        console.log("la id es " + counter);
        bandlist.push(counter);
      }
      for (var j = 0; j < response.artists.items.length; j++) {
        if (response.artists.items[j].images[0]){
          var imgs = response.artists.items[j].images[0].url;
          logoslist.push(imgs);
        }
        else{
          imgs = "http://placehold.it/150x150";
          logoslist.push(imgs);
        }

      }
      for (var k = 0; k < response.artists.items.length; k++) {
        var addid = response.artists.items[k].id;
        console.log("la id es " + response.artists.items[k].id);
        idslist.push(addid);
      }
      main.setState({
        name: bandlist,
        logos: logoslist,
        ids: idslist
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
     ids
   } = this.state;
   let data = null;
   console.log("LARGO: " + this.state.ids.length);
   var self = this;
   var items = this.state.name.map(function(item, key){
    return (<div className="column half"><div className="artistbox">

      <img src={logos[key]}/>
      <a href="/bandview" id={ids[key]} onClick={self.handleClick.bind(this, ids[key])}><h4>{name[key]}</h4></a> 
      </div></div>);
  });
   return(
    <div>
    {items}
    </div>
    )
    }
  }

  export default SearchForm;