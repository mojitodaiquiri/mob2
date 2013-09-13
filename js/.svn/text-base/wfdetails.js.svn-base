$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	//alert(serviceURL + 'wf_id8.json?id='+id);
	$.getJSON(serviceURL + 'wf_id'+id+'.json?id='+id, dettagliWf);
	
});



$('#attachmentPage').bind('pageinit', function(event) {
	alert("qui ci arrivo");
});


$(document).delegate('#approveConfirm','click',function(){
	$.mobile.changePage("index.html",{transition:"flip"});
	
})


$(document).delegate('#rejectConfirm','click',function(){
	$.mobile.changePage("index.html",{transition:"flip"});
	
})




function dettagliWf(data) {
	var wf = data.item;
	console.log(wf);
	$('#wfPic').attr('src', 'pics/' + wf.type +'.png');
	$('#subject').text(wf.subject);
	$('#description').text(wf.description);
	$('#property1').text(wf.property1);
	$('#property2').text(wf.property2);
	console.log(wf.id);
	
	$('#propertyList li').remove();
	var properties = wf.properties;
	/*
    */
	$.each(properties, function(index, prop) {

	  if ( prop.value.length > 20 )
	  {
	  				$('#propertyList').append('<li data-icon="'+
		                              prop.icon+
		                              '"><a href="'+prop.url+'">'+'<h3>'+prop.name+
		                              '</h3>'+'<p>'+prop.value+'</p>'+'</a></li>');
	  }
	  else
	  {
		  $('#propertyList').append('<li data-icon="'+
		                              prop.icon+
		                              '"><a href="'+
		                              prop.url+
		                              '">'+
		                              prop.name+
		                              '<p class="ui-li-aside"><strong>'+prop.value+'</strong></p></a></li>');
	  }


	});
		
	$('#propertyList').listview('refresh');
	
	
	// Attachments	
	$('#attachmentsList li').remove();
	var ele = document.getElementById("attachments");
	var attachments = wf.attachments;
	if ( attachments.length > 0 )
	{
		$.each(attachments, function(index, att) {
			$('#attachmentsList').append('<li><a href="'+att.url+'" target="_blank" ><img src="'+att.img+'" class="ui-li-icon">'+att.descr+'<span class="ui-li-count">'+att.size+'</span></a></li>');
//			$('#attachmentsList').append('<li><a href="'+att.url+'" rel="external" ><img src="'+att.img+'" class="ui-li-icon">'+att.descr+'<span class="ui-li-count">'+att.size+'</span></a></li>');
//			$('#attachmentsList').append('<li><a href="attachment.html?url='+att.url+'" data-transition="flip"><img src="'+att.img+'" class="ui-li-icon">'+att.descr+'<span class="ui-li-count">'+att.size+'</span></a></li>');
//			$('#attachmentsList').append('<li><a href="'+att.url+'" rel="external" data-icon="back"><img src="'+att.img+'" class="ui-li-icon">'+att.descr+'<span class="ui-li-count">'+att.size+'</span></a></li>');
		});

		ele.style.display = "block";
	}
	else
	{
	    ele.style.display = "none";
	}
	$('#attachmentsList').listview('refresh');
	
	// Contatti	
	$('#contactsList li').remove();
	ele = document.getElementById("contacts");
	var contacts = wf.contacts;
	if ( contacts.length > 0 )
	{
		$.each(contacts, function(index, con) {

			var buttonstring = "";
			if ( con.fixphone.length > 0 )
			{
				buttonstring = buttonstring + '<a href="tel:'+con.fixphone+'" data-role="button" data-icon="fixphone">Tel.</a>';
			}

			if ( con.cellphone.length > 0 )
			{
				buttonstring = buttonstring + '<a href="tel:'+con.cellphone+'" data-role="button" data-icon="cellphone">Cell.</a>';
				buttonstring = buttonstring + '<a href="sms:'+con.cellphone+'" data-role="button" data-icon="sms">Sms</a>';
			}

			if ( con.email.length > 0 )
			{
				buttonstring = buttonstring + '<a href="mailto:'+con.email+'" data-role="button" data-icon="email">Email</a>';
			}
			
			$('#contactsList').append('<li><h3>'+con.name+'</h3><p><strong>'+con.descr+'</strong></p>'+
			                          '<p class="ui-li-aside">'+con.descr2+'</p>'+
	                                  '<div data-role="controlgroup" data-type="horizontal" >'+buttonstring+'</div>'+
						              '</li>').trigger('create');



						 
						 
		});

		ele.style.display = "block";
	}
	else
	{
	    ele.style.display = "none";
	}
	$('#contactsList').listview('refresh');
	


	ele = document.getElementById("divapp");
	ele.style.display = "block";
	ele = document.getElementById("divrej");
	ele.style.display = "block";
	
	
}






function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
