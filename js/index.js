function nowDateTime(){
	return new Date().toLocaleDateString();
}

function getTime(){
	var date = document.getElementById('dataTime');
	var time = nowDateTime();
	console.log(time);
	date.innerHTML=time;
}

getTime();
setInterval(getTime,1000);