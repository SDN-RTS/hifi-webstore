import slideShow from './js-modules/slideshow.js';
import fetchAll from './js-modules/shoppingpage-fetch.js';

import productDetails from './js-modules/productDetails.js';
productDetails();

import presentRecommendedProducts from './js-modules/recommend.js';

var url = window.location.href;
var root = url.split("/")[4]; //index.html
console.log(root)

if(root == "index.html"|| root == ""){
    slideShow();
}
if(root == "product-view.html"){
    presentRecommendedProducts();
}

if(root == "shoppinglist.html"){
    fetchAll();
}


