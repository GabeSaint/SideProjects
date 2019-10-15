//<a href="javascript:corJump(letter)">A</a>

function corjump(letter)
{

          // Jump to Anchor
          jump(letter);

          // Small wait, fix screen position
          setTimeout(scrollWinAlpha, 5000) //

}

function jump(alpha)
{
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+alpha;                 //Go to the target element.
    //history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}

function scrollWinAlpha() 
{
  window.scrollTo(0, 150);
}
