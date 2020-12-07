function showPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap,failureCallback);
    } 
}
function failureCallback(error) {
    //Failure Handling
    console.log(error);

    switch (error.code) {
        case 0:
            document.getElementById("errorH").innerHTML = "Please Try again Later";
            break;
        case 1:
            document.getElementById("errorH").innerHTML = "Please Enable Your GeoLocation !!";
            break;
    }
    
}
function showMap(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    document.getElementById('map').innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

}