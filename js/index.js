//Add Home Button to Main Index from Viewer
document.getElementById("home").onclick = function () {
	window.location.assign("index.html");
};


// //Create a location Floor plan view
// //var scene = document.getElementsByClassName('map')[0];
// //var dot = document.getElementById('redDotEntry');
// var floorPlanButton = document.getElementById('floorplan');

// function displayFloorPlan() {

// 	if (scene.hidden === true && dot.hidden === true) {
// 		scene.hidden = false;
// 		dot.hidden = false;
// 		floorPlanButton.setAttribute('hidden', true);
// 	}
// 	return scene;
// 	dot;
// 	floorPlanButton;
// }

// //Close floor plan renable button
// scene.addEventListener('click', hideFloorPlan);

// //Close floor plan 
// function hideFloorPlan() {

// 	if (scene.hidden === false && dot.hidden === false) {
// 		scene.hidden = true;
// 		dot.hidden = true;
// 		floorPlanButton.hidden = false;
// 	}
// }
// //move red dot on scene change
// var url = this.location.href;
// console.log(url);
// //split url into array
// function getUrlId() {
// 	let urlArray = url.split("");
// 	let sceneId = urlArray[58];
// 	return sceneId;
// }
// var sceneId = getUrlId();



// function moveRedDot(){
// 	let position = 0;
// 	if(sceneId === "1"){
// 		dot.style.cssText = "background:blue";
// 		position += 1
// 	}else if(sceneId === "2"){
// 		dot.style.cssText = "background:green";
// 		position += 2
// 	}
// 	return position;
// }