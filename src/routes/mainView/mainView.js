import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import SearchForm from '../homeView/components/input.js';

class MainView extends Component {

    render() {



        return (
            <article className="main-view">
            <header className="main-view__header">
            <a href="/"><img src={logo} className="main-view__logo" alt="logo" /></a>
            </header>
            <nav className="main-view__nav">
            <ul>
            </ul>
            <div>
            
            </div>
            </nav>

            </article>
            );
    }
}

export default MainView;
