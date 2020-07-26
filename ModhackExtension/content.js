var overlay = document.createElement("iframe");
overlay.id = "overlay";
overlay.src = "https://ec2-52-91-127-119.compute-1.amazonaws.com:8080/";
overlay.title = "hi";

document.body.appendChild(overlay);


var overlay_button = document.createElement("div");
overlay_button.id = "overlay_button";
document.body.appendChild(overlay_button);

var overlay_open = false;

document.getElementById("overlay_button").onclick = function() {overlay_open = overlay_click(overlay_open)};

function overlay_click(overlay_open) {
	overlay = document.getElementById("overlay");
	
	if (!overlay_open) {
		overlay.style = "display:block;animation-name: overlay_open; animation-duration: 0.35s; animation-fill-mode: forwards;";
	} else {
		overlay.style = "display:block;animation-name: overlay_close; animation-duration: 0.35s; animation-fill-mode: forwards;";
	}
	
	return !overlay_open;
}


chrome.runtime.onMessage.addListener(function(request, sender) {
	var globals = document.createElement("script");
	globals.type = "text/javascript";
	globals.innerHTML = "var user_info = " + request.user_info + "var token = \"" + request.token + "\";";

	document.head.appendChild(globals);
});