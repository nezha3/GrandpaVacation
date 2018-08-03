// alias the current window for quick access
var win = Titanium.UI.currentWindow;
//Orietation Mode
win.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_RIGHT];

//
// BODY
//

//vacation title, date, location, family and details
var newVacationTitle = Ti.UI.createLabel({//format for title
  color:'#1A237E',
  font:{fontSize:22},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40, left: 20,
  text: 'Vacation Design',
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3
});

var newVacationName = Ti.UI.createLabel({//format for Name
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40, left: 30,
  text: 'Title:'
});

var textFieldforName = Ti.UI.createTextField({
  hintText : 'eg: Vacation Name',
  font:{fontSize:16},
  hintTextColor :'#949699',
  borderStyle: Titanium.UI.INPUT_BORDERSTYLE_LINE,
  color: '#483737', left: 30,
  width: 250, height: 40
});


var newVacationDate = Ti.UI.createLabel({//format for Date(from)
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40, left: 30,
  text: 'From Date:'
});

var textFieldforDate = Titanium.UI.createPicker({
  type:Titanium.UI.PICKER_TYPE_DATE,
  minDate:new Date(2016,0,1),
  maxDate:new Date(2030,12,30),
  value:new Date(2017,4,01),
  height:80,
  borderColor : '#483737',
  backgroundColor : '#483737'
});

var newVacationDate2 = Ti.UI.createLabel({//format for Date(to)
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40, left: 30,
  text: 'To Date:'
});

var textFieldforDate2 = Titanium.UI.createPicker({
  type:Titanium.UI.PICKER_TYPE_DATE,
  minDate:new Date(2016,0,1),
  maxDate:new Date(2030,12,30),
  value:new Date(2017,4,10),
  height:80,
  borderColor : '#483737',
  backgroundColor : '#483737'
});

var newVacationLocation = Ti.UI.createLabel({//format for Location
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40, left: 30,
  text: 'Location:'
});

var textFieldforLocation = Ti.UI.createTextField({
  hintText : 'eg: Place and location',
  font:{fontSize:16},
  hintTextColor :'#949699',
  borderStyle: Titanium.UI.INPUT_BORDERSTYLE_LINE,
  color: '#483737',
  left: 30,
  width: 200, height: 50
});

var newVacationDetails = Ti.UI.createLabel({//format for Details
  color:'#483737',
  font:{fontSize:18},
  fontweight:'bold',
  textAlign:'LEFT',
  height:40, left: 30,
  text: 'Details:'
});

var textFieldforDetails = Ti.UI.createTextField({
  hintText : 'eg: Details or anything properly',
  font:{fontSize:16},
  hintTextColor :'#949699',
   borderStyle: Titanium.UI.INPUT_BORDERSTYLE_LINE,
   color: '#483737', left: 30,
   width: 250, height: 40
 });

//vacation information summary
var vacationInformation = Ti.UI.createTextArea({//display vacation information
    value: '',
    font: { fontSize:14,fontweight:'normal'},
    color: '#3E50B4',
    editable: false,
    height : 80,
    left: 30
});


var nextButton = Titanium.UI.createButton({//next button
   title: 'Next: Import Photos',
   width: 300,
   height: 50,
   visible : false,
   left: 100
});
nextButton.addEventListener('click',function(e){//go to next for gallery and video
  var win2 = Ti.UI.createWindow({
  	title:'Import Photos',//title
  	url: 'importPhotos.js',//main window url address
  	backgroundColor:'#F8BBD0',//background
  	navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
  	fullscreen: true,//enable fullscreen functionable
  	layout: 'vertical',//layout mode
  	borderRadius: 5,//round for window corners
  	theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
  	exitOnClose: false
  });
  win2.open();
});

var locationButton = Titanium.UI.createButton({//next button
   title: 'View Vacation Address',
   width: 300,
   height: 50,
   visible : true
});
locationButton.addEventListener('click',function(e){
    Ti.API.info("You clicked the location button");
    if (textFieldforLocation == ''){
      vacationInformation.setValue("please check if input information for vacation address!");
    } else {
      var mapWin = Titanium.UI.createWindow({
          title: 'Location',//title
          url: 'location.js',
          address: textFieldforLocation.value,
          backgroundColor:'white',//background
          navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
          fullscreen: true,//enable fullscreen functionable
          layout: 'vertical',//layout mode
          borderRadius: 5,//round for window corners
          theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
          exitOnClose: false
      });
      mapWin.open();
    }
});
var submitNewVacation = Titanium.UI.createButton({//submit button
   title: 'Submit',
   width: 100,
   height: 50,
   left: 30
});
submitNewVacation.addEventListener('click',function(e){//submit for validation
   Titanium.API.info("You clicked the button for submitting information of new vacation");
   if (textFieldforName.value==''||textFieldforDate.value==''||textFieldforDate2.value==''||textFieldforLocation.value==''||textFieldforDetails.value==''){
     vacationInformation.setValue("please check if input information for every textfield!");
   }else{
     var db = Titanium.Database.open('sqliteDB');//open database
     //insert new information to database
   	 var query = "INSERT OR REPLACE INTO vacationDescrip (vacationName,vacationDate,vacationLocation,vacationDetail)VALUES(?, ?, ?, ?)";
   	 db.execute(query, textFieldforName.value, textFieldforDate.value, textFieldforLocation.value, textFieldforDetails.value);
     Titanium.API.info("Storing information to database is sucessful");
     db.close();//close database
     vacationInformation.setValue("New Vacation: " + textFieldforName.value + ", from "+ textFieldforDate.value + ", to "+ textFieldforDate.value + ", at "+ textFieldforLocation.value + ", "+ textFieldforDetails.value + ". Above vacation information has been stored in this phone.");
     submitNewVacation.setVisible(false);//disable submit button
     nextButton.setVisible(true);//enable next button
   }

});

var buttonView = Ti.UI.createView({
  layout: 'horizontal'
});
buttonView.add(locationButton);
buttonView.add(submitNewVacation);
buttonView.add(nextButton);

var body = Ti.UI.createScrollView({
  height:Ti.UI.SIZE,
  scrollable: true,
  layout:'vertical',
  scrollType: 'vertical'
});

body.add(newVacationTitle);
body.add(newVacationName);
body.add(textFieldforName);
body.add(newVacationDate);
body.add(textFieldforDate);
body.add(newVacationDate2);
body.add(textFieldforDate2);
body.add(newVacationLocation);
body.add(textFieldforLocation);
body.add(newVacationDetails);
body.add(textFieldforDetails);
body.add(vacationInformation);
body.add(buttonView);

win.add(body);//add body to window

//go back event
//win.addEventListener('android:back', function(){});

//event for orientation change
Ti.Gesture.addEventListener('orientationchange',function(e) {
    if (e.orientation == Ti.UI.PORTRAIT){
      body.setLayout('vertical');
      body.setLeft(0);
    } else {
       body.setLayout('vertical');
       buttonView.setLayout('vertical');
       body.setLeft(150);
    }
});
