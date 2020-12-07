var ImageOfSlider = document.getElementById('fImage')

var myButton = document.getElementById('sliderIni')
var interval
var body = document.getElementsByTagName('body')[0]
var sliderArrayOfImages = [
    "images/nshoes8.jpg",
    'images/mnikeshoes3.jpg',
    'images/mnikeshoes2.jpg',
    "images/mnikeshoes.jpg",
    "images/mnikeshoes4.jpg",
    "images/mnikeshoes5.jpg"];
    
   
    body.onload=startSlide;

var i = 0;

    function startSlide() {
        
        
        if (i >= sliderArrayOfImages.length) { i = 0}

        
        ImageOfSlider.src=`${sliderArrayOfImages[i]}`
        interval =  setTimeout(startSlide,2000)
        i++
    }