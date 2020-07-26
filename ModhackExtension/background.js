chrome.tabs.onUpdated.addListener(function (tabid, changeinfo, tab) {
	if (changeinfo.status == "complete") {
		chrome.identity.getAuthToken({
			interactive: true
		}, function(token) {
			if (chrome.runtime.lastError) {
				alert(chrome.runtime.lastError.message);
				return;
			}
			var x = new XMLHttpRequest();
			x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
			x.onload = function() {
				chrome.tabs.sendMessage(tab.id, {user_info: x.response, token: token});
			};
			x.send();
		});
	}
});