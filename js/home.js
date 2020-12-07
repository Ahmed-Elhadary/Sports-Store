

///////////////// Slider 1 => Shoes ////////////////////////////////////
let slider1_images=['nshoes.jpg','nshoes2.jpg','nshoes5.jpg','nshoes6.jpg','nshoes7.jpg','shoes.jpg'];
let slider1=document.getElementById('slider1');
let slider1_images_length=slider1_images.length; //6
let slider1_counter=0;
window.addEventListener('load',function(){
       setInterval(function(){
           if(slider1_counter < slider1_images_length)
            {
                slider1.setAttribute('src','images/slider1/'+slider1_images[slider1_counter]);
            }else{
               slider1_counter = 0;
           }
           slider1_counter++;
       },1000)
})

///////////////////// Slider 2 => Bags ///////////////////////////////////

let slider2_images=['rbags2.jpg','rbags4.jpg','rbags5.jpg','rbags7.jpg','rbags9.jpg','rbags12.jpg'];
let slider2=document.getElementById('slider2');
let slider2_images_length=slider2_images.length; //6
let slider2_counter=0;
window.addEventListener('load',function(){
       setInterval(function(){
           if(slider2_counter < slider2_images_length)
            {
                slider2.setAttribute('src','images/slider2/'+slider2_images[slider2_counter]);
            }else{
               slider2_counter = 0;
           }
           slider2_counter++;
       },1000)
})

///////////////////////// Change  Body Color //////////////////// 
let changeColor=document.getElementById('changeColor');
changeColor.addEventListener('click',function(){
    let colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],
        result='#';
    for(let i=0;i<6;i++)
    {
       result += colors[Math.floor( Math.random() * colors.length )];
    }
    document.body.style.backgroundColor=result;
    console.log(result);
});
//////////////////////////////////cart
 // Get the modal
 var modal = document.getElementById("myModal");
        
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }