import React, { Component } from 'react'

//Bootstrap libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//jquery for bootstrap modal
import 'jquery/dist/jquery.min.js';

import $ from 'jquery';

export default class MainSliders extends Component {
    constructor() {
        super()
        // First slider
$('.slider-one')
.not('.slick-intialized')
.slick({
    autoplay:true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next"
});

// Second slider
$('.slider-two')
    .not('.slick-intialized')
    .slick({
        prevArrow: ".site-slider-two .prev",
        nextArrow: ".site-slider-two .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed:3000
    });
    }

    render() {
        return (
            <div>
               <main>
        {/* First slider */}
        <div class="container-fluid p-0">
            <div class="site-slider">
                <div class="slider-one">
                    <div>
                        <img src="./assets/multi_portraits.jpg" class="img-fluid" alt="Banner1" />
                    </div>
                    <div>
                        <img src="./assets/textured_oranges.jpg" class="img-fluid" alt="Banner2" />
                    </div>
                    <div>
                        <img src="./assets/twohands.jpg" class="img-fluid" alt="Banner3" />
                    </div>
                </div>
                <div class="slider-btn">
                    <span class="prev position-top"><i class="fas fa-chevron-left"></i></span>
                    <span class="next position-top right-0"><i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
        </div>

        {/* Second Slider  */}
        <div class="container-fluid">
            <div class="site-slider-two px-md-4">
                <div class="row slider-two text-center">
                    <div class="col-md-2 product pt-md-5 pt-4">
                        <img src="./assets/elephant.jpg" alt="Product 1" />
                        <span class="border site-btn btn-span">Portrait</span>
                    </div>
                    <div class="col-md-2 product pt-md-5 pt-4">
                        <img src="./assets/elephant.jpg" alt="Product 1" />
                        <span class="border site-btn btn-span">Line Art</span>
                    </div>
                    <div class="col-md-2 product pt-md-5 pt-4">
                        <img src="./assets/elephant.jpg" alt="Product 1" />
                        <span class="border site-btn btn-span">Cards</span>
                    </div>
                    <div class="col-md-2 product pt-md-5 pt-4">
                        <img src="./assets/elephant.jpg" alt="Product 1" />
                        <span class="border site-btn btn-span">Hoods</span>
                    </div>
                    <div class="col-md-2 product pt-md-5 pt-4">
                        <img src="./assets/elephant.jpg" alt="Product 1" />
                        <span class="border site-btn btn-span">Tshirts</span>
                    </div>
                </div>
                <div class="slider-btn">
                    <span class="prev position-top"><i class="fas fa-chevron-left fa-2x"></i></span>
                    <span class="next position-top right-0"><i class="fas fa-chevron-right fa-2x text-secondary"></i></span>
                </div>
            </div>
        </div>
    </main> 
            </div>
        )
    }
}
