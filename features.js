var Feature = {};
Feature.tableView = null;
Feature.src = "http://theopenforest.com/api/v1/feature/?format=json&";
Feature.features=[]

Feature.get = function() {
	
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET",Feature.src);
	xhr.onload = function() {
		rs = eval('('+this.responseText+')');
		Feature.features = rs.objects
		Feature.updateTable();
		
	};
	xhr.send();
	
	// This needs to be here to create the tableView before the GET request returns
	Feature.updateTable();
	
};

Feature.get_by_pid = function(pid){
	var xhr = Ti.Network.createHTTPClient();
	var qs = Feature.src+"author="+pid+"&";
	_log(qs);
	xhr.open("GET",qs);
	xhr.onload = function() {
		rs = eval('('+this.responseText+')');
		Feature.features = rs.objects;
		Feature.updateTable();
	};
	xhr.send();
}

Feature.updateTable = function(){
	var data = [];
	
	if (Feature.tableView == null){
		Feature.tableView = Ti.UI.createTableView();
	}
	
	for (var i=(Feature.features.length-1);i>=0;i--){
		var row = Ti.UI.createTableViewRow({height:60});
		var title = Feature.features[i]['title'];
		var subtitle = "Created by " + Feature.features[i]['author'];
		
		var titleLabel = Ti.UI.createLabel({
			color:'#000',
			font:{fontSize:20, fontWeight:'bold', fontFamily:'Helvetica Neue'},
			text:title,
			height:25,
			width:300,
			top:5,
			left:5
		});
		row.add(titleLabel);

		var subtitleLabel = Ti.UI.createLabel({
			color:'#999',
			font:{fontSize:16, fontWeight:'bold', fontFamily:'Helvetica Neue'},
			text:subtitle,
			height:25,
			width:300,
			top:30,
			left:5
		});
		row.add(subtitleLabel);
		data.push(row);
	}
	
	Feature.tableView.setData(data);
};
