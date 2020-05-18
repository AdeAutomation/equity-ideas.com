




/**
This function validates that the password field on login page only accepts alphanumeric inputs
**/
function alphanumeric() {
	var regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$/;
	var password = document.getElementById("password").value;

	if (password.match(regex)) {
		return true;
	} else {
		alert("Your password must be between 8 and 10 characters, contains at least one digit and one alphabet, and must not contain special characters. If your password is correct, ensure that your username is also correct");
		return false;
	}
}

/**
This function identifies invalid login credentials throws an error
**/
function loginPageLoad() {
	var url_string = window.location.href;
	var params = window.location.search.substring(1);
	var paramKeyValue = params.split("&")[0];
	var paramKey = decodeURIComponent(paramKeyValue.split("=")[0]);
	var paramValue = decodeURIComponent(paramKeyValue.split("=")[1]);
	if (paramKey === 'invalidCredentials' && paramValue === 'true') {
		$('.error').show();
		$('.success').hide();
		$('.info').hide();
	}
	
	if (paramKey === 'firstname' && paramValue !== '') {
		$('#registerSuccessMessage').html('Welcome ' + paramValue + ', Please check your email inbox to complete your registration.');
		$('.error').hide();
		$('.success').hide();
		$('.info').show();
	}
}




/**
This function validates registration form inputs
 **/

function validateForm() {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;

	if (firstname == "" || lastname == "" || email == "") {
		alert("Please ensure you have entered your names and a valid email address");
		return false;
	}

	var tel = document.getElementById("tel").value;
	var regex = /^\d{10}$/;
	if (tel.match(regex)) {
		return true;
	} else {
		alert("Please enter a valid mobile number");
		return false;
	}

}



/**
 This function validates that the expected login credentials are submitted
 **/
function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
