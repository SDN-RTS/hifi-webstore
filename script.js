import slideShow from './js-modules/slideshow.js';
import fetchAll from './js-modules/shoppingpage-fetch.js';
import searchFunction from './js-modules/search.js';

import productDetails from './js-modules/productDetails.js';
productDetails();

import presentRecommendedProducts from './js-modules/recommend.js';


var url = window.location.href;
var root = url.split("/")[3]; //index.html

if(root == "index.html"){
    slideShow();
}
if(root == "product-view.html"){
    presentRecommendedProducts();
}

if(root == "shoppinglist.html"){
    searchFunction();
    fetchAll();
}

import priceFilter from './js-modules/price-filter.js';

priceFilter();

