function userIDURL()
{

var userID = document.getElementById("textField").value;

var url = "https://training.wp.nau.edu/"
var locationURL = url+userID+"-sandbox";

location.assign(locationURL);

}
