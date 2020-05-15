 window.i = -1;
 window.prevhollidays = 0
var ready = false;
function start() {
	var startbutton = document.getElementById("sendbutton");
	startbutton.parentNode.removeChild(startbutton);
	var a = $.ajax({
		url: '../backend/backend.json',
		type: "GET",
		dataType: "json",
		success: function (response) {
		console.log(response.messages.length, window.i)
		startdingen();
		}})	
}
function startdingen() {
	setInterval( function(){
		var fetchedhresponse = window.fetchedhresponse;
	    var a = $.ajax({
		url: '../backend/backend.json',
		type: "GET",
		dataType: "json",
		success: function (response) {
		var Response = response.messages;
		console.log("i: ", window.i, "nu: ", Response.length, "eerder: " , window.prevhollidays)
		window.hollidaysobj = Response;
		var diffrence = Response.length - window.prevhollidays;
		console.log(diffrence);
		if ((Response.length - window.prevhollidays) === 1 && Response.length !== 0) {
			window.i++
			console.log("ninininini!")
		Response.forEach( function() {
			eval("window.responses" + window.i + " = " + "Response[" + window.i + "]");
		})
		setTimeout( function() {
		fillcont();}, 1);}
		console.log("hai")	
		window.prevhollidays = Response.length
		
		
		}});}, 1000);
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