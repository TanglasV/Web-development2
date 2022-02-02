//toggling on/off delivery button
function hideDeliveryAd() {
 document.getElementById('dad').style.visibility = "hidden";	
}
function showDeliveryAd() {
 document.getElementById('dad').style.visibility = "visible";	
}

//toggling on/off online payment button
function hideCred() {
	document.getElementById('cardInfo').style.visibility = "hidden";	
}
function showCred() {
	document.getElementById('cardInfo').style.visibility = "visible";
}

//making card number maximum length dynamic
function clickVisa() {
	document.getElementById('credentials').maxLength = "16";
}
function clickMcard() {
	document.getElementById('credentials').maxLength = "16";
}
function clickAexpress() {
	document.getElementById('credentials').maxLength = "15";
}

//enabling filling up billing address from delivery address
function colData() {
	var dsa = document.getElementById("dStreetAddress");
	var dp = document.getElementById("Dpostcode");
	var bsa = document.getElementById("bStreetAddress");
	var bp = document.getElementById("Bpostcode");
	var sameAs = document.getElementById('sameAs');
	var err = ''
	var done = true
	if((dsa.value != '')&&(dp.value != '')) {
		bsa.value = dsa.value;
		bp.value = dp.value;
	}
	if ((dsa.value == '')||(dp.value == '')) {
		err += "Please fill in delivery address first";
	}
	if (err != "") {
		alert (err);
		sameAs.checked = false;
		done = false;
	} 
	return done;
}

//validating entire form
function validateOrderForm() {
	var dp = document.getElementById("Dpostcode").value;
	var bp = document.getElementById("Bpostcode").value;
	var dsa = document.getElementById("dStreetAddress").value;
	var bsa = document.getElementById("bStreetAddress").value;
	var contact = document.getElementById("contact").value;
	var mail = document.getElementById("mail").value;
	var cred = document.getElementById("credentials").value;
	var del = document.getElementById('delivery').checked;
	var pick = document.getElementById('pickup').checked;
	var opay = document.getElementById('Opay').checked;
	var ppay = document.getElementById('Ppay').checked;
	var visa = document.getElementById('visa').checked;
	var mcard = document.getElementById('mastercard').checked;
	var aexpress = document.getElementById('aexpress').checked;
	var cred = document.getElementById('credentials').value;
	var dpLen = dp.length;
	var bpLen = bp.length;
	var error = "";
	var complete = true;
	if ((del == '')&&(pick == '')) {
		error += "Please select a delivery type\n";
	}
	if (del != '') {
		if ((dsa == '')||(bsa == '')) {
			error += "Please enter delivery & billing street address\n";
		}
		if ((dp == '')||(bp == '')) {
			error += "Please enter delivery & billing postcode\n";
		}
	}
	else {
		if (bsa == '') {
			error += "Please enter billing street address\n";
		}
		if (bp == '') {
			error += "Please enter billing postcode\n";
		}
	}
	if (contact == '') {
		error += "Please enter a contact number\n";
	}
	if (mail == '') {
		error += "Please enter an email to collect receipt\n";
	}
	if ((bpLen < 4) || (dpLen < 4)) {
		error += "Both postcode must be of at least 4 digits\n";
	}
	if ((opay == '')&&(ppay == '')) {
		error += "Please select a payment method\n"
	}
	if (opay != '') {
		if ((visa == '')&&(mcard == '')&&(aexpress == '')) {
			error += "Please select a card type\n";
		}
		if (cred == '') {
			error += "Please enter card number\n";
		}
	}
	if (error != "") {
		alert (error);
		complete = false;
	} 
	return complete;	
}

//creating initiate function
function initOrd() {

	var orderForm = document.getElementById("orderform");
	orderForm.onsubmit = validateOrderForm;
}

//loading initiate function
window.onload = initOrd;