// alias the current window for quick access
var win = Titanium.UI.currentWindow;
//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

// BODY
var body = Ti.UI.createScrollView({
  height:Ti.UI.SIZE,
  scrollable: true,
  layout:'vertical',
  showPagingControl:true,
  scrollType: 'vertical'
});

var sectionTitle2 = Ti.UI.createLabel({//display photo section title
    text: 'Photos Wall',
    font: { fontSize:22,fontweight:'bold'},
    color: '#1A237E',
    shadowColor: '#aaa',
    shadowOffset: {x:5, y:5},
    shadowRadius: 3,
    left: 20,
    top: 30
});

var bodyView = Ti.UI.createView({ layout:'horizontal',  height:Ti.UI.SIZE, left:30, right:30});//For Recent Photos
  var images = [];
  for(var i = 1; i <6; i++){
    images.push('images/vacations/6/' + i+'.jpg');//define first vacation gallery
  }
  var flipbook = Ti.UI.createImageView({//first vacation gallery
    images: images,
    width: 200,
    height: 200,
    duration: 1000,
    repeatCount: 0,
    focusable: true
  });
  bodyView.add(flipbook);
  flipbook.start();

 var images2 = [];
 for(var i = 1; i <6; i++){
   images2.push('images/vacations/5/' + i+'.jpg');//define second vacation gallery
 }
 var flipbook2 = Ti.UI.createImageView({//second vacation gallery
   images: images2,
   width: 200,
   height: 200,
   duration: 1000,
   repeatCount: 0,
   focusable: true
 });
 bodyView.add(flipbook2);
 flipbook2.start();

 var images3 = [];
 for(var i = 1; i <6; i++){
   images3.push('images/vacations/4/' + i+'.jpg');//define second vacation gallery
 }
 var flipbook3 = Ti.UI.createImageView({//second vacation gallery
   images: images3,
   width: 200,
   height: 200,
   duration: 1000,
   repeatCount: 0,
   focusable: true
 });
 bodyView.add(flipbook3);
 flipbook3.start();

 var images4 = [];
 for(var i = 1; i <6; i++){
   images4.push('images/vacations/3/' + i+'.jpg');//define second vacation gallery
 }
 var flipbook4 = Ti.UI.createImageView({//second vacation gallery
   images: images4,
   width: 200,
   height: 200,
   duration: 1000,
   repeatCount: 0,
   focusable: true
 });
 bodyView.add(flipbook4);
 flipbook4.start();

 var images5 = [];
 for(var i = 1; i <6; i++){
   images5.push('images/vacations/2/' + i+'.jpg');//define second vacation gallery
 }
 var flipbook5 = Ti.UI.createImageView({//second vacation gallery
   images: images5,
   width: 200,
   height: 200,
   duration: 1000,
   repeatCount: 0,
   focusable: true
 });
 bodyView.add(flipbook5);
 flipbook5.start();

 var images6 = [];
 for(var i = 1; i <6; i++){
   images6.push('images/vacations/1/' + i+'.jpg');//define second vacation gallery
 }
 var flipbook6 = Ti.UI.createImageView({//second vacation gallery
   images: images6,
   width: 200,
   height: 200,
   duration: 1000,
   repeatCount: 0,
   focusable: true
 });
 bodyView.add(flipbook6);
 flipbook6.start();

 //flipbook event for pause/resume flipping photos
  flipbook.addEventListener('click', function(e){
    if (flipbook.getPaused() == false){
      flipbook.pause();//pause flipping
    } else {
      flipbook.resume();//resume flipping
    }
  });
  //flipbook2 event for pause/resume flipping photos
  flipbook2.addEventListener('click', function(e){
    if (flipbook2.getPaused() == false){
      flipbook2.pause();//pause flipping
    } else {
      flipbook2.resume();//resume flipping
    }
  });
  //flipbook3 event for pause/resume flipping photos
  flipbook3.addEventListener('click', function(e){
    if (flipbook3.getPaused() == false){
      flipbook3.pause();//pause flipping
    } else {
      flipbook3.resume();//resume flipping
    }
  });
  //flipbook4 event for pause/resume flipping photos
  flipbook4.addEventListener('click', function(e){
    if (flipbook4.getPaused() == false){
      flipbook4.pause();//pause flipping
    } else {
      flipbook4.resume();//resume flipping
    }
  });
  //flipbook5 event for pause/resume flipping photos
  flipbook5.addEventListener('click', function(e){
    if (flipbook5.getPaused() == false){
      flipbook5.pause();//pause flipping
    } else {
      flipbook5.resume();//resume flipping
    }
  });
  //flipbook6 event for pause/resume flipping photos
  flipbook6.addEventListener('click', function(e){
    if (flipbook6.getPaused() == false){
      flipbook6.pause();//pause flipping
    } else {
      flipbook6.resume();//resume flipping
    }
  });


body.add(sectionTitle2);
body.add(bodyView);

win.add(body);
//go back event
//win.addEventListener('android:back', function(){});

//event for orientation change
Ti.Gesture.addEventListener('orientationchange',function(e) {
    if (e.orientation == Ti.UI.PORTRAIT){
      body.setLayout('vertical');
    } else {
      body.setLayout('vertical');
    }
});
