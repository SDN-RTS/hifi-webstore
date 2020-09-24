import slideShow from './js-modules/slideshow.js';

import productDetails from './js-modules/productDetails.js';
productDetails();



var url = window.location.href;
var root = url.split("/")[3]; //index.html

if(root == "index.html"){
    slideShow();
}








