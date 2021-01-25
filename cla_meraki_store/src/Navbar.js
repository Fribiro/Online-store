import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//jquery for bootstrap modal
import 'jquery/dist/jquery.min.js';

import $ from 'jquery';

export default class Navbar extends Component {
    render() {
        return (
        <div>
        <header>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="btn-group">
                        <button class="btn border dropdown-toggle my-md-4 my-2 primary-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cla_Meraki</button>
                    </div>
                </div>
                <div class="col-md-4 col-12 text-center" >
                    <h2 class="my-md-3 site-title primary-color">Cla_Meraki</h2>
                </div>
                <div class="col-md-4 col-12 text-right">
                    <p class="my-md-4 header-links">
                        <Link to="/Login" class="px-2">Sign In</Link>
                        <Link to="/Register" class="px-1">Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/AboutUs" class="nav-link">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Art" class="nav-link">Art</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Fashion" class="nav-link">Fashion</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="navbar-nav">
                        <li class="nav-item border rounded-circle mx-2 search-icon">
                          <i class="fas fa-search p-2"></i>
                        </li>
                        <li class="nav-item border rounded-circle mx-2 basket-icon">
                            <i class="fas fa-shopping-basket p-2"></i>
                        </li>
                    </div>
            </nav>
        </div>
    </header>
            </div>
        )
    }
}
