
// Create a viewer
var viewer = new FORGE.Viewer("container", "config-1583.json");

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

