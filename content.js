$('a').click(function (b) {
	if (b.which == 2) { 	// If middle click detected
		var tab = new Object();
		tab.url = $(this).attr("href");

		chrome.extension.sendRequest(parseUrl(tab));
		return false;		// Stop current page from also loading link
	}
});

function parseUrl(tab) {
	var isAbsoluteUrl = /^\w+:\/\//

	if (!(isAbsoluteUrl.test(tab.url))) {
		if (/^\//.test(tab.url)) {
			// If starts with / then append tohostname
			tab.url = window.location.protocol + "//" + window.location.hostname + tab.url;
		} else if (/.*\/$/.test(window.location.href)) {
			// else if starts with any other character then if ends in / append to current level
			tab.url = window.location.href + "/" + tab.url;
		} else {
			// else lose last bit until / and append to current level
			var str = window.location.href.split("/");
			str.pop();
			tab.url = str.join("/") + "/" + tab.url;
		}
	}

	return tab;
}
