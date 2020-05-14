function start() {
	var berichtout = document.getElementById("bericht");
	berichtout.innerHTML = Cookies.get('bericht');
}