// alias the current window for quick access
var win = Titanium.UI.currentWindow;
win.setBackgroundColor('#0e0f0f');
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

//DECLARE CONSTENT
const PLAY_VIDEO_NUMBER = 4;

var sectionTitle3 = Ti.UI.createLabel({//display Videos section title
  text: 'Grandpa Cinema',
  font: { fontSize:22,fontweight:'bold'},
  color: 'White',
  left: 20,
  top: 30
});

var bodyView3 = Ti.UI.createView({backgroundColor:'#0e0f0f', horizontalWrap: true, layout:'horizontal', height:Ti.UI.SIZE, top:40, left:10, right:10});//For Recent Videos
  var videoPlayer = Titanium.Media.createVideoPlayer({//define video player
    top : 30,
    autoplay : false,
    backgroundColor : 'blue',
    height : 240,
    width : 320,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_EMBEDDED,
    scalingMode : Titanium.Media.VIDEO_SCALING_MODE_FILL,
    fullscreen : false
  });
  var urls =[];
  for (var i = 1; i < PLAY_VIDEO_NUMBER+1; i++){
    urls.push('videos/'+i+'.mp4');//define videos
  }
  var videoNumber = 1;
  videoPlayer.url = urls[videoNumber-1];//define the first video url

  var previewVideo = Ti.UI.createImageView({//display previous vacation video
    image:'images/prev.png',
    left: 20
  });
  var nextVideo = Ti.UI.createImageView({//display next vacation video
    image:'images/next.png'
  });

  previewVideo.addEventListener('click', function(e){//event listener for switching to previous video
    videoPlayer.pause();
    if (videoNumber > 1){
      videoNumber = videoNumber - 1;
    } else {
      videoNumber = PLAY_VIDEO_NUMBER;
    }
    videoPlayer.setUrl(urls[videoNumber-1]);
    videoPlayer.play();
  });
  nextVideo.addEventListener('click', function(e){//event listener for switching to next video
    videoPlayer.pause();
    if (videoNumber < PLAY_VIDEO_NUMBER){//recalculate video url
      videoNumber = videoNumber + 1;
    } else {
      videoNumber = 1;
    }
    videoPlayer.setUrl(urls[videoNumber-1]);
    videoPlayer.play();
  });

  bodyView3.add(previewVideo);
  bodyView3.add(videoPlayer);
  bodyView3.add(nextVideo);

body.add(sectionTitle3);
body.add(bodyView3);

win.add(body);
//go back event
//win.addEventListener('android:back', function(){});

//event for orientation change
Ti.Gesture.addEventListener('orientationchange',function(e) {
    if (e.orientation == Ti.UI.PORTRAIT){
      body.setLayout('vertical');
      videoPlayer.setHeight(240);
      videoPlayer.setWidth(320);
      bodyView3.setTop(40);
      bodyView3.setLeft(10);
    } else {
       body.setLayout('horizontal');
       sectionTitle3.setTop(5);
       bodyView3.setTop(0);
       bodyView3.setLeft(90);
       videoPlayer.setHeight(408);
       videoPlayer.setWidth(544);
    }
});
