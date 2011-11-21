$('a').click(function (b) {
	if (b.which == 2) { 	// If middle click detected
		var tab = new Object();
		tab.url = $(this).attr("href");
		
		chrome.extension.sendRequest(parseUrl(tab));
		return false;		// Stop current page from also loading link
	}
});

function parseUrl(tab) {
	var isRelativeUrl = /^\/.*/;	// Relative URL begins with a / and not a protocol
	if (isRelativeUrl.test(tab.url)) {
		// Construct complete URL from data about current URL
		// Probably a better way of doing this
		tab.url = window.location.protocol + "//" + window.location.hostname + tab.url
	}
	
	return tab;
}
