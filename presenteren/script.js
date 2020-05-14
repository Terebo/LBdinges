 window.i = 0;
function start() {
	var startbutton = document.getElementById("sendbutton");
	startbutton.parentNode.removeChild(startbutton);
	setInterval( function(){
		console.info("phase 2 started")
		var fetchedhresponse = window.fetchedhresponse;
	    var a = $.ajax({
		url: '../backend/backend.json',
		type: "GET",
		dataType: "json",
		success: function (response) {
		var Response = response.messages;
		console.log(Response.length -1);
		window.hollidaysobj = Response;
		if (window.i > Response.length - 1) {
			console.log(("window.responses" + i), typeof(("window.responses" + i)))
			i--
			console.log(window.i);
		}
		
		else{
		window.i++
		console.log("oen");
		Response.forEach( function() {
			eval("window.responses" + window.i + " = " + "Response[" + window.i + "]");
		})
		fillcont()}
		}});console.info("phase 2 finished");
	window.gatherhollidays = "true";}, 1000);
}	
function fillcont() {
	var container = document.getElementById("container");
	var hollidaysobj = window.hollidaysobj;
		var i = window.i;
		console.info("phase 1 started");
		var bab = 0;
		if (i != -1){
			amount = window.i;
			console.info("done");
			console.log(eval("window.responses" + amount + "['bericht']"))
			var newthing = document.createElement("div");
			newthing.className = "selectbutton"
			container.appendChild(newthing);
			newthing.innerHTML = "<p class='antwoord'>" + eval("window.responses" + amount + "['bericht']") + "</p><p class='naam'>Van: " + eval("window.responses" + amount + "['naam']") + "</p>";
	
		}
}