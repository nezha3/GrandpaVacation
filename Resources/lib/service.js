// alias the current window for quick access
var win = Titanium.UI.currentWindow;

//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

// BODY
var body = Ti.UI.createView({
  height:Ti.UI.SIZE,
  layout:'horizontal',
  top: 50
});

var label1 = Ti.UI.createLabel({//position title
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40,
  left: 30,
  text: 'Current Position:',
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3
});
var imagePosition = Ti.UI.createImageView({//cinema
  image: 'images/position.png',
  left: 20,
});

var label2 = Ti.UI.createLabel({//cinema title
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40,
  left: 60,
  text: 'Grandpa Cinema:',
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
});
var imageCinema = Ti.UI.createImageView({//position
  image: 'images/video.png',
  left: 20,
});

var helpInfo = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:16 },
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  top: 30,
  width: Ti.UI.SIZE,
  height: Ti.UI.SIZE,
  html : '<p><Strong>Brief Help For App Use</Strong></p><p>    Tab Group Section:</p><small><ul><li>Grandpa Vacation --- display vacation gallery and switch between vacations by clicking left/right arrow</li><br><li>New Vacation --- insert vacation details and store photos from phone gallery by filling the form and clicking the option button</li><br><li>Photo Gallery --- show the photo wall from different vacations and able to stop/resume the flips of photos by clicking the photos</li><br><li>Service --- brief help information and two main functions: pointing current position and display grandpa cinema by clicking relevent images; </li></ul></small><br><p><small>Go Back: when no tab is shown in the pape, clicking go-back system button to go back last page or parent page; if clicking go-back system button while tab bar is shown in the page, the page will go to first tab page of "Grandpa Vacation".</small></p>'
});

body.add(label1);
body.add(imagePosition);
body.add(label2);
body.add(imageCinema);
body.add(helpInfo);

imagePosition.addEventListener('click',function(e){//go to next for cinema
  var win1 = Ti.UI.createWindow({
    title:'Current Position',//title
    url: 'currentPosition.js',//main window url address
    backgroundColor:'white',//background
    navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
    fullscreen: true,//enable fullscreen functionable
    layout: 'vertical',//layout mode
    borderRadius: 5,//round for window corners
    theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
    exitOnClose: false,
  });
  win1.open();
});

imageCinema.addEventListener('click',function(e){//go to next for current position
  var win2 = Ti.UI.createWindow({
    title:'Cinema',//title
    url: 'videos.js',//main window url address
    backgroundColor:'white',//background
    navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
    fullscreen: true,//enable fullscreen functionable
    layout: 'vertical',//layout mode
    borderRadius: 5,//round for window corners
    theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
    exitOnClose: false,
  });
  win2.open();
});

win.add(body);
//go back event
//win.addEventListener('android:back', function(){});
