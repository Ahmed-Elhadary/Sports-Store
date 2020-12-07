
var indexImage=0;
var imagefiles=['adidas.png','nike.png','puma.jpg','reebok.png','vans.jpg'];
class brandImages{
     imagesSlider()
{
    
	document.getElementById("brand").src="images/"+imagefiles[indexImage];
	indexImage++;
	if(indexImage>4)
	{
		indexImage=0;
	}
}

}
brandimages=new brandImages()
setInterval(brandimages.imagesSlider,1100)


