
// Create a viewer
var viewer = new FORGE.Viewer("container", "config.json");

document.getElementById("vr").onclick = function() {
    var el = document.getElementById("vr").firstChild;
    if (el.data == "Exit VR") {
        el.data = "Enter VR";
    } else {
        el.data = "Exit VR";
    }
    viewer.renderer.toggleVR();
};

document.getElementById("home").onclick = function(){
	window.location.assign("index.html");
};

//Find the Canvas
/*window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);
}*/