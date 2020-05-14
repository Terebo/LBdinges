function start() {
	button = document.getElementById("sendbutton");
	button.style.borderBottomColor = "#387002";
	
	bericht = document.getElementById("bericht");
	naam = document.getElementById("naam");
	
	var xhr = new XMLHttpRequest(),
    jsonArr,
    method = "GET",
    jsonRequestURL = "backend/";

	xhr.open(method, jsonRequestURL, true);
	xhr.onreadystatechange = function()
	{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
		console.log(xhr.responseText)
        jsonArr = JSON.parse(xhr.responseText);
		messages = jsonArr.messages;
		berichtedit = bericht.value.replace("\n", "<br>")
        messages.push( {"naam": naam.value, "bericht": bericht.value});

        xhr.open("POST", jsonRequestURL, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("jsonTxt="+JSON.stringify(jsonArr));
		
		setTimeout(function() {
		Cookies.set('naam', naam.value);
		Cookies.set('bericht', berichtedit);
		window.location.assign("dankje/");}, 200)
    }
	};
	xhr.send(null);
	return;
	
}
