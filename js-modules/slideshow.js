function slideShow(){
    const array =["./images/slider_img/image_1.jpg","./images/slider_img/image_2.jpg","./images/slider_img/image_3.jpg","./images/slider_img/image_4.jpg","./images/slider_img/image_5.jpg"];
    const sliderImg = document.querySelector("#slider__image");
    const leftArrow = document.querySelector("#slider__leftArrow");
    const rightArrow = document.querySelector("#slider__rightArrow");

    var index = 0;
    
    function showPict(){
        sliderImg.src = array[index];
    }

    leftArrow.addEventListener("click", ()=>{
        index--;
        if(index == 0){
            index = 4;
        }
        showPict(index);
    })

    rightArrow.addEventListener("click", ()=>{
        index++;
        if(index == 5){
            index = 0;
        }
        showPict(index);
    })


    setInterval(()=>{
        index++;
        if(index == 5){
            index = 0;
        }
        showPict(index)
    }, 2000)
    return showPict();
};

export default slideShow;