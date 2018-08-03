// alias the current window for quick access
var win = Titanium.UI.currentWindow;

//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

// set the granularity of the location event
Titanium.Geolocation.distanceFilter = 10;

//set position at USQ campus if GIS not available
var longitude = -27.603175;
var latitude = 151.929930;

//get current position
Titanium.Geolocation.getCurrentPosition(function(e){
		if (e.error){
        alert('Address Error: ' + e.error);// manage the error
        return;
		} else {
      longitude = e.coords.longitude;
  		latitude = e.coords.latitude;
  		var altitude = e.coords.altitude;
  		var heading = e.coords.heading;
  		var accuracy = e.coords.accuracy;
  		var speed = e.coords.speed;
  		var timestamp = e.coords.timestamp;
  		var altitudeAccuracy = e.coords.altitudeAccuracy;
    }
});

//add annotation for current position
var addressAnnotation = Titanium.Map.createAnnotation({
  latitude: latitude,
  longitude: longitude,
  title: "current location",
  pincolor: Titanium.Map.ANNOTATION_RED,
  animate: true
});

//create map for current position
var map = Titanium.Map.createView({
  mapType: Titanium.Map.STANDARD_TYPE,
  region: {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  },
  animate: true,
  regionFit: true,
  userLocation: true,
  annotations: [addressAnnotation]
});

//location change event
Titanium.Geolocation.addEventListener('location',function(e){
    if (e.error){
        Ti.API.info('Address Error: ' + e.error);// manage the error
		} else {
      map.setLongitude = e.coords.longitude;
  		map.setLatitude = e.coords.latitude;
		}
});

addressAnnotation.setLatitude(latitude);
addressAnnotation.setLongitude(longitude);
//Modules.Map.createCircle is not supported by this version
/*
var circle = Modules.Map.createCircle({
  center: { latitude: latitude, longitude: longitude },
  radius: 100, //100m
  fillColor: "#20FF0000"
});
map.addCircle(circle);
*/
win.add(map);

//go back event
//win.addEventListener('android:back', function(){});
