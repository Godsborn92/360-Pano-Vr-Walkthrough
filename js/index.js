//Add Home Button to Main Index from Viewer
document.getElementById("home").onclick = function(){
	window.location.assign("index.html");
};

/*Create a location Floor plan view
var scene = window.document.documentURI;

if(scene == "http://127.0.0.1:8887/360-1602.html#first-scene&uid=scene-1"){
	var redDot = document.getElementById('redDotEntry');
	console.log(redDot);
	redDot.hidden = false;
}
*/
