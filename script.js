import slideShow from './js-modules/slideshow.js';
import priceFilter from './js-modules/price-filter.js';
import fetchAll from './js-modules/shoppingpage-fetch.js';
priceFilter();

import productDetails from './js-modules/productDetails.js';
productDetails();

window.addEventListener('locationchange', function(){
    let urlParam = new URLSearchParams(window.location.search);
    var root2 = url.split("/")[3];
    if (root2 == "shoppinglist.html" && !urlParam.get("category")){
        console.log("det er nu den skal aktivere");
        fetchAll();
    }
})

var url = window.location.href;
var root = url.split("/")[3]; //index.html

if(root == "index.html"){
    slideShow();
}
