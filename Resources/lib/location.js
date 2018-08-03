// alias the current window for quick access
var win = Titanium.UI.currentWindow;

//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

//get latitude and longitutde for map
Titanium.Geolocation.forwardGeocoder(win.address, function(e) {
	if (e.error) {
		alert('Address Error: ' + e.error);
		win.close();
	} else {
		alert('new vacation locates at ( ' + e.latitude + ', ' + e.longitude+' ).');
		var addressAnnotation = Titanium.Map.createAnnotation({
			latitude: e.latitude,
			longitude: e.longitude,
			title: "location",
			subtitle: win.address,
			pincolor: Titanium.Map.ANNOTATION_RED,
			animate: true
		});

		var map = Titanium.Map.createView({
			mapType: Titanium.Map.STANDARD_TYPE,
			region: {
				latitude: e.latitude,
				longitude: e.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01
			},
			animate: true,
			regionFit: true,
			userLocation: true,
			annotations: [addressAnnotation]
		});

    // Handle click events on any annotations on this map and hightlight the 100m circle
    map.addEventListener('click', function(evt) {
      Ti.API.info("Clicked " + evt.clicksource + " on " + evt.latitude + "," + evt.longitude);
      addressAnnotation.setLatitude(evt.latitude);
      addressAnnotation.setLongitude(evt.longitude);
      //Modules.Map.createCircle is not supported by this version
      /*
      var circle = Modules.Map.createCircle({
        center: { latitude: evt.latitude, longitude: evt.longitude },
        radius: 100, //100m
        fillColor: "#20FF0000"
      });
      map.addCircle(circle);
      */
    });
		win.add(map);
	}

  //go back event
  //win.addEventListener('android:back', function(){});
});
