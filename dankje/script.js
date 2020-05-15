function start() {
	var berichtout = document.getElementById("bericht");
	berichtout.innerHTML = sessionStorage.getItem('bericht');
}