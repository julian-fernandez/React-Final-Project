import '../mainView.css';
import './mainHeader.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import lupa from '../../../assets/lupa.png';
import SearchForm from '../../homeView/components/input.js';

class SearchHeader extends Component {

constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  	console.log("ENTRO");
    var searchbox = document.getElementById('searchBoxArtistOffMobile');
    console.log("PASO1 " + searchbox.style.display.value);
    if (searchbox.style.display === 'none') {       //devuelva undefined supongo que no es el mismo objeto, lo estoy obteniendo por id 
    	console.log("mostrada");                    //metiendole la classname pero si lo ago con # en el css es lo mismo, y con getElementsByClassName tmb
        searchbox.style.display = 'block';
        searchbox.style.marginTop = '50px';
        searchbox.style.marginLeft = '-200px';
    } else {
    	console.log("ocultada");
        searchbox.style.display = 'none';
    }

  }

    render() {
        return (
            <header className="main-view__header">
            <a href="/"><img src={logo} className="main-view__logo" alt="logo" /></a>
            <SearchForm activado={"false"}/>
 			<img src={lupa} className="main-view__lupa" onClick={this.handleClick}/>
            </header>
            );
    }
}

export default SearchHeader;
