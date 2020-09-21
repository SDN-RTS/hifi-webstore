
function changeImagePreview() {
    document.querySelector('#previewImages__image1').addEventListener('click', function(){
        document.querySelector('#productImageWrapper__image').src = document.querySelector('#previewImages__image1').src;
    });
    
    document.querySelector('#previewImages__image2').addEventListener('click', function(){
        document.querySelector('#productImageWrapper__image').src = document.querySelector('#previewImages__image2').src;
    });
}

export default changeImagePreview;