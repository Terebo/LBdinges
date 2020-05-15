function start() {
	bericht = document.getElementById("bericht");
	naam = document.getElementById("naam");
	if (bericht.value === "" && naam.value === "") {
		bericht.style.borderBottomColor = "#C43D3D";
		naam.style.borderBottomColor = "#C43D3D";
		setTimeout( function() {
		bericht.style.borderBottomColor = "";
		naam.style.borderBottomColor = "";}, 2000);
		return;
	}
	
	
	if (bericht.value === "" && naam.value !== "") {
		bericht.style.borderBottomColor = "#C43D3D";
		naam.style.borderBottomColor = "#C43D3D";
		setTimeout( function() {
		bericht.style.borderBottomColor = "";
		naam.style.borderBottomColor = "";}, 2000);
		return;
	}
	
	if (naam.value === "" && bericht.value !== "") {
		naam.style.borderBottomColor = "#C43D3D";
		naam.style.borderBottomColor = "#C43D3D";
		setTimeout( function() {
		naam.style.borderBottomColor = "";
		naam.style.borderBottomColor = "";}, 2000);
		return;
	}
		
	
	button = document.getElementById("sendbutton");
	button.style.borderBottomColor = "#387002";
	
	var xhr = new XMLHttpRequest(),
    jsonArr,
    method = "GET",
    jsonRequestURL = "backend/";

	xhr.open(method, jsonRequestURL, true);
	xhr.onreadystatechange = function()
	{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        jsonArr = JSON.parse(xhr.responseText);
		messages = jsonArr.messages;
		berichtedit = bericht.value.replace(/(?:\r\n|\r|\n)/g, "<br>")
		
        messages.push( {"naam": naam.value, "bericht": berichtedit});
		
        xhr.open("POST", jsonRequestURL, false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("jsonTxt="+JSON.stringify(jsonArr));
		sessionStorage.setItem('bericht', berichtedit);
		setTimeout(function() {
		console.log(berichtedit);
		window.location.assign("dankje/");}, 10 * bericht.value.length)
    }
	};
	xhr.send(null);
	return;
	
}
