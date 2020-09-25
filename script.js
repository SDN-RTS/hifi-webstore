import slideShow from './js-modules/slideshow.js';

import productDetails from './js-modules/productDetails.js';
productDetails();

import presentRecommendedProducts from './js-modules/recommend.js';
presentRecommendedProducts();



var url = window.location.href;
var root = url.split("/")[3]; //index.html

if(root == "index.html"){
    slideShow();
}








