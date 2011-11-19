$('a').click(function (b) {
	if (b.which == 2) { 	// If middle click detected
		var tab = new Object();
		tab.url = $(this).attr("href");

		chrome.extension.sendRequest(tab);
	}
});
