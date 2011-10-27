// Utils
function _log(msg){
	// Create a notification
	var n = Ti.UI.createNotification({message:msg});
	n.duration = Ti.UI.NOTIFICATION_DURATION_LONG;
	n.show();	
}