// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.include('utils.js');
Ti.include('features.js');
Ti.include('account.js');
Titanium.UI.setBackgroundColor('#000');


// create tab group
var tabGroup = Titanium.UI.createTabGroup();
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

Feature.get();
featureList = Feature.tableView;
win1.add(featureList);

//
// create controls tab and root window
//
//var win2 = Titanium.UI.createWindow({  
//    title:'Tab 2',
//   backgroundColor:'#fff'
//});
var win2 = Account.loginWindow;

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Account',
    window:win2
});

//win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();


