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
            <img src={logo} className="main-view__logo" alt="logo" />
            </header>
            <nav className="main-view__nav">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/artists">Artists (placeholder)</Link></li>
            <li><Link to="/apitest">API TEST</Link></li>
            </ul>
            <div>
            
            </div>
            </nav>

            </article>
            );
    }
}

export default MainView;
