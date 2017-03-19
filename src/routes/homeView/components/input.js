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
        window.location.href = 'http://localhost:3000/artists';
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
        if (!name || name == '') {
            query = this.props.name;
            console.log("IF MALO" + query);
        } else {
            query = name;
            console.log("IF BUENO" + query);
        }
        fetch(`https://api.spotify.com/v1/search?type=artist&q=artist:${query}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                console.log("Made it!!!");
                for (var i = 0; i < response.artists.items.length; i++) {
                    var counter = response.artists.items[i];
                }
                setTimeout(function() {
                    main.setState({
                        infoStatus: 'loaded'
                    });
                }, 300);
                return response;
            })
            .then(function(response) {
                let bandlist = [];
                for (var i = 0; i < response.artists.items.length; i++) {
                    var counter = response.artists.items[i].name;
                    bandlist.push(counter);
                }
                console.log("pushea3");
                main.setState({
                    name: bandlist
                });
            })
            .catch(function(response) {
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
        return (
            <div id="inputArtist">
            <h4> Search your favorite songs over Spotify, just enter an artist's name in the following search box and enjoy! </h4>
            <form onSubmit={this.handleSubmit}>
            <div id="searchBoxLupa">
                <img src={lupa} className="input_lupa" alt="lupa"/>
                <input type="text" id="searchBoxArtist" placeholder="Type the name of your favorite artist" ref={(input) => this.input = input} />
            </div>
            </form>
            <ul className="artist-list">
            {name.map(function(name, index){
                return <li key={ index }><a href="/artists">{name}</a></li>;
            })}
            </ul>
            </div>
        );
    };

};

export default SearchForm;
