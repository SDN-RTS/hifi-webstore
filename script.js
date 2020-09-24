import slideShow from './js-modules/slideshow.js';
import priceFilter from './js-modules/price-filter.js';
import fetchAll from './js-modules/shoppingpage-fetch.js';
priceFilter();

import productDetails from './js-modules/productDetails.js';
productDetails();

var urlParam = new URLSearchParams(window.location.search);

var url = window.location.href;
var root = url.split("/")[3]; //index.html

if(root == "index.html"){
    slideShow();
}
if (root == "shoppinglist.html" && !urlParam.get("category")){
    console.log("det er nu den skal aktivere");
    fetchAll();
}