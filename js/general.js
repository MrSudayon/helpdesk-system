$(document).ready(function(){
	var urlPath = window.location.pathname,
    urlPathArray = urlPath.split('.'),
    tabId = urlPathArray[0].split('/').pop();
	$('#subject, #department, #user, #ticket').removeClass('active');	
	$('#'+tabId).addClass('active');
});