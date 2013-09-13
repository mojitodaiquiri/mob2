

var serviceURL = "mockup-services/";

var wfs;


$('#wfListPage').bind('pageinit', function(event) {
	getWfList();
});



$('#wfListPage').live('pageshow', function(event) {
	getWfList();
});


function getWfList() {
	$.getJSON(serviceURL + 'wfs.json', function(data) {
		$('#wfList li').remove();
		wfs = data.items;
		$.each(wfs, function(index, wf) {
		$('#wfList').append('<li><a href="wfdetails.html?id=' + wf.id + '" data-transition="flip">' +
					'<img src="pics/' + wf.type + '.png"/>' +
					'<h4>' +wf.subject + '</h4>' +
					'<p>' + wf.description + '</p>' +
			        '<div class="ui-li-aside">'+
		            '<p><strong>' + wf.property1 + '</strong></p>'+
		            '<p>' + wf.property2	+ '</p>'+
		            '</div>');
		});
		$('#wfList').listview('refresh');
	});
}