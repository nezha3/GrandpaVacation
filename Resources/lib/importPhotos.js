//Define the current window
var win = Titanium.UI.currentWindow;

//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

//label for photo
var label1 = Ti.UI.createLabel({
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40,
  left: 30,
  top: 50,
  text: 'Select one photo from phone gallery :'
});

//selected photo
var imgView = Titanium.UI.createImageView({
          left: 30,
          width: 250,
          height: 250,
          top: 20,
          image:  'images/vacations/5.png'
});

Titanium.Media.openPhotoGallery({//select one photo from gallery
    success : function(event) {
      //Holds the captured image
      var selectedImg = event.media;

      // Condition to check the selected media
      if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
      //Define an image view with selected image from gallery
          imgView.setImage(selectedImg);//Set selected image from gallery
      }
    },
    cancel : function() {
      //While cancellation of the process
      alert('no photo exists in gallery so we use one existed photo to demonstrate the activity');
    },
    error : function(error) {
      // If any error occurs during the process
      alert('no photo exists in gallery so we use one existed photo to demo the activity');
    }
});

//store photo file to directory of application
var store = Ti.UI.createButton({
  title: 'Store this Photo',
  width: 300,
  height: 50,
  visible : true,
  left: 100,
  top:20
});

store.addEventListener('click',function(e){//storing file
	var filename = imgView.getImage();//get file name

  //get image directory
  var imageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, filename);
  if (! imageDir.exists()) {//check if existed
    imageDir.createDirectory();
  }

  //store image into image directory newVacation
  // .resolve() provides the resolved native path for the directory.
  var imageFile  = Ti.Filesystem.getFile(imageDir.resolve(), '');
  Ti.API.info("ImageFile path is: " + imageFile.resolve());
  if (imageFile.write()===true) {
      // handle write error
      Ti.API.info("write file error");
  } else {
    // dispose of file handles
    imageFile = null;
    imageDir = null;
    alert('store photo successfully!');
  }
});

//Add the image to window for displaying
win.add(label1);
win.add(imgView);
win.add(store);

win.open();
