function userIDURL()
{

var userID = document.getElementById("textField").value;

var url = "https://training.wp.nau.edu/"
var locationURL = url+userID+"-sandbox";

location.assign(locationURL);

}


function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('submitUID').click();
        return false;
    }
    return true;
}

$('br', "#userIDform).remove();
