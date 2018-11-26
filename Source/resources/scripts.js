var changeVal;
function nickel(){
	var value = document.getElementById("payVal").innerHTML.slice(1);
	//window.alert(value);
	value = value - 0.05;
	document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
	if(value <= 0){
		changeVal = value.toFixed(2).slice(1);
		window.location = 'paymentSuccessful.html';
		localStorage.setItem(1, changeVal);
	}
}

function dime(){
	var value = document.getElementById("payVal").innerHTML.slice(1);
	//window.alert(value);
	value = value - 0.10;
	document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
	if(value <= 0){
		changeVal = value.toFixed(2).slice(1);
		window.location = 'paymentSuccessful.html';
		localStorage.setItem(1, changeVal);
	}
}

function quarter(){
	var value = document.getElementById("payVal").innerHTML.slice(1);
	//window.alert(value);
	value = value - 0.25;
	document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
	if(value <= 0){
		changeVal = value.toFixed(2).slice(1);
		window.location = 'paymentSuccessful.html';
		localStorage.setItem(1, changeVal);
	}
}

function loonie(){
	var value = document.getElementById("payVal").innerHTML.slice(1);
	//window.alert(value);
	value = value - 1;
	document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
	if(value <= 0){
		changeVal = value.toFixed(2).slice(1);
		window.location = 'paymentSuccessful.html';
		localStorage.setItem(1, changeVal);
	}
}


function toonie(){
	var value = document.getElementById("payVal").innerHTML.slice(1);
	//window.alert(value);
	value = value - 2;
	document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
	if(value <= 0){
		changeVal = value.toFixed(2).slice(1);
		window.location = 'paymentSuccessful.html';
		localStorage.setItem(1, changeVal);
	
	}
}

function change(){
		
		var value = document.getElementById("paySucc").innerHTML;
		document.getElementById("paySucc").innerText = 'Change Due: $' + localStorage.getItem(1) ;

}

//window.addEvent(window, "load", change, false);
