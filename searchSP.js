function searchSP()
{


    var patt = /\<(.*?)\>/i; // Regex to remove all but the list item


    var input = document.getElementById('searchbar').value
    input=input.toLowerCase();


    let x = document.getElementsByClassName('searchableItem');

    for (i = 0; i < x.length; i++)
    {



        if (!x[i].innerHTML.toLowerCase().replace(patt,'').includes(input))
        {
            x[i].style.display="none";
        }
        else
        {
            x[i].style.display="list-item";
        }


    }
}
