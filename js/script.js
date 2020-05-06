
//declare an array for my names
var femaleAkanNames = [
	"Akosua",
	"Adwoa",
	"Abenaa",
	"Akua",
	"Yaa",
	"Afua",
	"Ama"
];
var maleAkanNames = [
	"Kwasi",
	"Kwadwo",
	"Kwabena",
	"Kwaku",
	"Yaw",
	"Kofi"

];

var daysWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
//calling functions
function getAkanName() {
	var year = parseInt(document.getElementById("year").value);
	var month = parseInt(document.getElementById("month").value);
	var day = parseInt(document.getElementById("day").value);
	var male = document.getElementById("male");
	var female = document.getElementById("female");

	//validate date
	if (day <= 0 || day >= 32) {
		alert(
			"invalid day"
		);
	}
	if (month <= 0 || month >= 13) {
		alert(
			"invalid month"
		);
	}
	var day = new Date(year + "/" + month + "/" + day);
	//storing date in variable date of birth
	var dateOfBirth = day.getDay();
	if (male.checked == true) {
		document.getElementById("alert1").style.display = "block";
	
		document.getElementById("span2").innerHTML =
			"your Akan Name is " + maleAkanNames[dateOfBirth];
	} else if (female.checked == true) {
		document.getElementById("alert1").style.display = "block";

		document.getElementById("span2").innerHTML = "your Akan name is " +femaleAkanNames[dateOfBirth];
	}
}
