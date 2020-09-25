import slideShow from './js-modules/slideshow.js';
import priceFilter from './js-modules/price-filter.js';
import fetchAll from './js-modules/shoppingpage-fetch.js';
fetchAll();
priceFilter();

import searchFunction from './js-modules/search.js';
searchFunction();

import productDetails from './js-modules/productDetails.js';
productDetails();

import presentRecommendedProducts from './js-modules/recommend.js';
presentRecommendedProducts();

var url = window.location.href;
var root = url.split("/")[3]; //index.html

if(root == "index.html"){
    slideShow();
}
