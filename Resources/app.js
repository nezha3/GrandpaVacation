// Run the database functions
Titanium.include('/lib/db.js');

//Grandpa Vacation
var win1 = Ti.UI.createWindow({
	title:'Grandpa Vacation',//title
	backgroundColor:'#C5CAE9',//background
	navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
	fullscreen: true,//enable fullscreen functionable
	layout: 'vertical',//layout mode
	borderRadius: 5,//round for window corners
	theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
	url: 'lib/main.js',//main window url address
	exitOnClose: false,
	modal: true
});

//Design New Vacation
var win2 = Ti.UI.createWindow({
	title:'Design New Vacation',//title
	url: 'lib/vacation.js',//main window url address
	backgroundColor:'#F8BBD0',//background
	navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
	fullscreen: true,//enable fullscreen functionable
	layout: 'vertical',//layout mode
	borderRadius: 5,//round for window corners
	theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
	exitOnClose: false,
	modal: true
});

//Gallery & Cinema
var win3 = Ti.UI.createWindow({
	title:'Gallery & Cinema',//title
	url: 'lib/gallery.js',//main window url address
	backgroundColor:'#CFD8DC',//background
	navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
	fullscreen: true,//enable fullscreen functionable
	layout: 'vertical',//layout mode
	borderRadius: 5,//round for window corners
	theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
	exitOnClose: false,
	modal: true
});

//Service
var win4 = Ti.UI.createWindow({
	title:'Service',//title
	url: 'lib/service.js',//main window url address
	backgroundColor:'white',//background
	navBarHidden: false,//after Android 3.3.0 this property doesn't work anymore
	fullscreen: true,//enable fullscreen functionable
	layout: 'vertical',//layout mode
	borderRadius: 5,//round for window corners
	theme: "Theme.AppCompat.Translucent.NoTitleBar.Fullscreen",
	exitOnClose: false,
	modal: true
});


var tab1 = Ti.UI.createTab({
    window: win1,
    title: ' Grandpa Vacation',
		icon: '/lib/images/appIcon.png',//app icon
}),
tab2 = Ti.UI.createTab({
    window: win2,
    title: ' New Vacation',
		icon: '/lib/images/vacation.png',//vacation icon
}),
tab3 = Ti.UI.createTab({
    window: win3,
    title: ' Photo Gallery',
		icon: '/lib/images/gallery.png',//app icon
}),
tab4 = Ti.UI.createTab({
    window: win4,
    title: ' Service',
		icon: '/lib/images/service.png',//app icon
}),
tabGroup = Ti.UI.createTabGroup({
		tabs: [tab1, tab2, tab3, tab4],
		tabsBackgroundColor : 'white',
		tabsBackgroundSelectedColor : 'gray',
		exitOnClose : false,
		navBarHidden: false,
});
tabGroup.open();

tabGroup.addEventListener('android:back', function(){
	tabGroup.setActiveTab(tab1);
});
