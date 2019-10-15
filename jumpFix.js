//<a href="javascript:corJump('A')">A</a>

function corJump(letter)
{

          // Jump to Anchor
          jump(letter);

          // Small wait, fix screen position
          setTimeout(scrollWinAlpha, 5) //

}

function jump(letter)
{
location.href = "#"+letter;
}

function scrollWinAlpha() 
{
  window.scrollBy(0, -150);
}
