var classroom_tabs = [];

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	if (tabid in classroom_tabs) {
		delete classroom_tabs[tabid];
	}
});

chrome.tabs.onUpdated.addListener(function (tabid, changeinfo, tab) {
	if (changeinfo.status == "complete") {
		if (tab.url.substring(0, 28) == "https://classroom.google.com") { // this group of ifs makes sure that info doesnt get resent when the user just moves to another classroom page, but it does when the user refreshes or goes to classroom from another site
			if (tab.id in classroom_tabs) {
				if (tab.url != classroom_tabs[tab.id]) {
					classroom_tabs[tab.id] = tab.url
				} else {
					SendUserInfo(tab);
				}
			} else {
				classroom_tabs[tab.id] = tab.url;
				SendUserInfo(tab);
			}
		} else {
			if (tab.id in classroom_tabs) {
				delete classroom_tabs[tab.id];
			}
		}
	}
});


function SendUserInfo(tab) {
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
			var y = new XMLHttpRequest();
			y.open('GET', 'https://classroom.googleapis.com/v1/courses?studentId=' + JSON.parse(x.response).id + '&access_token=' + token);
			y.onload = function() {
				chrome.tabs.sendMessage(tab.id, {user_info: x.response, token: token, course_info: y.response});
			};
			y.send();
		};
		x.send();
	});
}