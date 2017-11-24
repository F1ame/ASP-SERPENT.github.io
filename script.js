/*asp wants this stuff
homepage giant text saying -CUCK-
pages
Home Media About
*/
var Page = {
Head: "<head><title>ASP_SERPENT Website</title><link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"><link rel=\"icon\" type=\"image/jpg\" href=\"https://images.mixer.com/64x64/https://uploads.mixer.com/avatar/awvvsuuf-1632056.jpg\"><script src=\"script.js\"></script>",
Chat: "<div class=\"sidebar\"><iframe allowfullscreen=\"true\" src=\"https://mixer.com/embed/chat/1114958\"></iframe></div>",
  NavBar: "<ul class=\"navul\"><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'home\');\">Home</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'media\')\">Media</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'about\')\">About</a></li></ul><br>",
Home: "<div class=\"CenterHor CenterVert absolute\"><h1 style=\"color: red;\">CUCK</h1></div>",
Media: "<div></div>",
About: "<div>Page put together by clockdaddy</div>"


}
loadPage = function(pagename) {
  pageconts = Page.Head + Page.NavBar + Page.Chat + "</head><body>";
  switch(pagename) {
    case "home":
      pageconts = pageconts + Page.Home + "</body>";
    break;
    case "media":
      pageconts = pageconts + Page.Media + "</body>";
      break;
    case "about":
      pageconts = pageconts + Page.About + "</body>";
      break;
  }
  document.getElementById("bdy").innerHTML = pageconts;
};
