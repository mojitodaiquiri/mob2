$('#attachmentPage').live('pageshow', function(event) {
	var url = getUrlVars()["url"];
	//alert(url);
	var ele = document.getElementById("attachmentContent");
	ele.src = url;
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();
	
	//alert(viewportHeight);
	ele.width=viewportWidth;
	ele.height=viewportHeight;
	
});
