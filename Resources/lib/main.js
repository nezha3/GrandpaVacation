// Run the database functions
Titanium.include('/lib/readDB.js');

// alias the current window for quick access
var win = Titanium.UI.currentWindow;
//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

//
// BODY
//
var body = Ti.UI.createScrollView({
  height:Ti.UI.SIZE,
  scrollable: true,
  layout:'vertical',
  scrollType: 'vertical'
});

//section one for Vacation Gallery
var galleryTitle = Ti.UI.createLabel({//display gallery section title
  text: 'Vacation Gallery',
  font: { fontSize:22,fontweight:'bold'},
  color: '#1A237E',
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
  left: 20,
  top:30
});

var gallery = Ti.UI.createView({layout:'horizontal', height:Ti.UI.SIZE, left:20, right:20, top:40});//For Vacations
  var photoNum = 1;
  var previewPhoto = Ti.UI.createImageView({//display vacation photo
    image:'images/prev.png'
  });
  var galleryPhoto = Ti.UI.createImageView({//display vacation photo
    image:'images/vacations/'+photoNum+'.png',
    width : 320,
    height : 240,
    enableZoomControls: true,
  });
  var nextPhoto = Ti.UI.createImageView({//display vacation photo
    image:'images/next.png'
  });

  gallery.add(previewPhoto);
  gallery.add(galleryPhoto);
  gallery.add(nextPhoto);

//vacation description, should separated from gallery due to display order
var vacationDescrip = Ti.UI.createTextArea({//display vacation name
    value: dataForDescrip[0],
    font: { fontSize:14,fontweight:'normal'},
    color: '#483737',
    editable: false,
    height : 60,
    top: 15,
    bottom: 10,
    left: 20
});

//events for perview and next vacation
previewPhoto.addEventListener('click', function(e){//go to preview gallery photo
  if (photoNum > 1){
    photoNum = photoNum - 1;
    galleryPhoto.setImage('images/vacations/'+photoNum+'.png');
    vacationDescrip.setValue(dataForDescrip[photoNum - 1]);
  }
});
nextPhoto.addEventListener('click', function(e){//go to next gallery photo
  if (photoNum < 6){
    photoNum = photoNum + 1;
    galleryPhoto.setImage('images/vacations/'+photoNum+'.png');
    vacationDescrip.setValue(dataForDescrip[photoNum - 1]);
  }
});


//
// FOOTER MESSAGE
//
var footer = Ti.UI.createScrollView({top: 210,bottom: 10, height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
var footerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'footer'});//format for footer
//use html text for footer
footerLabel.setHtml('<p>@copyright: all images and photos are all downloaded from Internet. If anything is inproper, please contact with author <a href="https://oliverchi.github.io/">Oliver Chi</a> .</p>');
footer.add(footerLabel);

//body adding elements
body.add(galleryTitle);
body.add(gallery);
body.add(vacationDescrip);
body.add(footer);

win.add(body);//add body to window
//go back event
//win.addEventListener('android:back', function(){});

//event for orientation change
Ti.Gesture.addEventListener('orientationchange',function(e) {
    if (e.orientation == Ti.UI.PORTRAIT){
      footer.setTop(210);
      body.setLayout('vertical');
      gallery.setLeft(20);
      galleryTitle.setLeft(20);
      vacationDescrip.setLeft(20);
      vacationDescrip.setRight(20);
    } else {
       footer.setTop(5);
       body.setLayout('horizontal');
       gallery.setLeft(180);
       galleryTitle.setLeft(100);
       vacationDescrip.setLeft(60);
       vacationDescrip.setRight(60);
    }
});
