/**
 * @author Wil Black
 */

var Account = {};

// Attributes
Account.first_name ='';
Account.last_name = '';
Account.src = 'http://theopenforest.com/api/v1/author/?format=json&';
Account.username = '';
Account.loginWindow = null;
Account.data = [];
Account.create_db = function(){

};

// Methods
Account.get_by_username = function(username) {
	
	var xhr = Ti.Network.createHTTPClient();
	var qs = "username="+username+"&";
	_log(qs);
	xhr.open("GET",Account.src+qs);
	xhr.onload = function() {
		rs = eval('('+this.responseText+')');
		Account.data = rs.objects[0];
		_log(Account.data.name);
		
		var acctLabel = Titanium.UI.createLabel({
			text:"Welcome "+Account.data.name
		});
		scrolly.add(acctLabel);
		Feature.get_by_pid(Account.data.id);
	};
	xhr.send();
};

//Views 
Account.loginWindow = Titanium.UI.createWindow();
	// initialize to all modes
Account.loginWindow.orientationModes = [
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT
]; 

var scrolly = Titanium.UI.createScrollView({contentHeight:'auto'});
Account.loginWindow.add(scrolly);

var tf_username = Titanium.UI.createTextField({
	color:'#336699',
	height:35,
	top:10,
	left:10,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

scrolly.add(tf_username);

var l = Titanium.UI.createLabel({
	top:50,
	left:10,
	width:300,
	height:'auto',
	color:'#777',
	font:{fontSize:13},
	text:'do something like click a button...'
});
scrolly.add(l);

//
// TEXT FIELD EVENTS (return, focus, blur, change)
//
tf_username.addEventListener('return',function(e)
{
	l.text = 'return received, val = ' + e.value;
	tf_username.blur();
});

scrolly.add(tf_username);

//
// FOCUS
//
var focusLabel = Titanium.UI.createButton({
	top:100,
	height:60,
	width:200,
	title:'Submit'
});
scrolly.add(focusLabel);
focusLabel.addEventListener('click', function()
{
	var username = tf_username.value;
	Account.username = username;
	
	// Create a notification
	var n = Ti.UI.createNotification({message:Account.username});
	n.duration = Ti.UI.NOTIFICATION_DURATION_LONG;
	n.show();
	
	rs = Account.get_by_username(username);
});








