var changeVal;
function nickel(){
	if(document.getElementById("payVal")){
		var value = document.getElementById("payVal").innerHTML.slice(1);
		value = value - 0.05;
		document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			pay();
		}
	}
	else if (document.getElementById("fundVal")){
		var value = document.getElementById("fundVal").innerHTML.slice(1);
		value = value - 0.05;
		document.getElementById("fundVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			fund(value);
		
		}
	}
}

function dime(){
	if(document.getElementById("payVal")){
		var value = document.getElementById("payVal").innerHTML.slice(1);
		//window.alert(value);
		value = value - 0.10;
		document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			pay();
		}
	}
	else if (document.getElementById("fundVal")){
		var value = document.getElementById("fundVal").innerHTML.slice(1);
		value = value - 0.10;
		document.getElementById("fundVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			fund(value);
		
		}
	}
}

function quarter(){
	if(document.getElementById("payVal")){
		var value = document.getElementById("payVal").innerHTML.slice(1);
		value = value - 0.25;
		document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			pay();
		}
	}

	else if (document.getElementById("fundVal")){
		var value = document.getElementById("fundVal").innerHTML.slice(1);
		value = value - 0.25;
		document.getElementById("fundVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			fund(value);
		
		}
	}
}

function loonie(){
	if(document.getElementById("payVal")){
		var value = document.getElementById("payVal").innerHTML.slice(1);
		value = value - 1;
		document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			pay();
		}
	}
	else if (document.getElementById("fundVal")){
		var value = document.getElementById("fundVal").innerHTML.slice(1);
		value = value - 1;
		document.getElementById("fundVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			fund(value);
		
		}
	}
}


function toonie(){
	if(document.getElementById("payVal")){
		var value = document.getElementById("payVal").innerHTML.slice(1);
		value = value - 2;
		document.getElementById("payVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			pay(value);
		
		}
	}
	else if (document.getElementById("fundVal")){
		var value = document.getElementById("fundVal").innerHTML.slice(1);
		value = value - 2;
		document.getElementById("fundVal").innerText = '$' + value.toFixed(2);	
		if(value <= 0){
			fund(value);
		
		}
	}
	
}

function pay(value){
	changeVal = value.toFixed(2).slice(1);
	window.location = 'paymentSuccessful.html';
	localStorage.setItem("pay", changeVal);
}

function fund(value){
	changeVal = value.toFixed(2).slice(1);
	window.location = 'fundsAdded.html';
	localStorage.setItem("fund", changeVal);	
}

function change(){
	if(document.getElementById("paySucc")){
		var value = document.getElementById("paySucc").innerHTML;
		document.getElementById("paySucc").innerText = 'Change Due: $' + localStorage.getItem("pay") ;
	}
	else if(document.getElementById("fundsAdded")){
		var fund = document.getElementById("fundsAdded").innerHTML;
		document.getElementById("fundsAdded").innerText = 'Change Due: $' + localStorage.getItem("fund") ;
	}

}

//window.addEvent(window, "load", change, false);
