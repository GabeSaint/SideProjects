  function searchSP()
{


    var patt = /\<(.*?)\>/i; // Regex to remove all but the list item


    var input = document.getElementById('searchbar').value
    input=input.toLowerCase();

    if (input != "")
    {

      var header6 = document.getElementsByClassName('departmentHeader');
      var backButton = document.getElementsByClassName('back');
      document.getElementById('letters').style.display = 'none';

      for (var i = 0; i < header6.length; i++)
      {
      header6[i].style.display = 'none';
      backButton[i].style.display = 'none';
      }

    }
    else{
      var header6 = document.getElementsByClassName('departmentHeader');
      var backButton = document.getElementsByClassName('back');
      document.getElementById('letters').style.display = 'block';

      for (var i = 0; i < header6.length; i++)
      {
      header6[i].style.display = 'block';
      backButton[i].style.display = 'block';
      }

    }


    let x = document.getElementsByClassName('searchableItem');

    for (i = 0; i < x.length; i++)
    {


        if (!x[i].innerHTML.toLowerCase().replace(patt,'').includes(input))
        {
            x[i].style.display="none";
        }
        else
        {
            var j = 0;

            x[i].style.display="list-item";
            j = j+1;

        }


    }

    if (j == undefined)
    {
      document.getElementById("errorMess").innerHTML = "We couldn't find any forms with those key words, try another keyphrase";
    }
    else
    {
      document.getElementById("errorMess").innerHTML = "";
    }

}
