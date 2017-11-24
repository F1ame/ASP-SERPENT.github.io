/*asp wants this stuff
homepage giant text saying -CUCK-
pages
Home Media About
*/
var Page = {
Head: "<head><title>ASP_SERPENT Website</title><link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"><link rel=\"icon\" type=\"image/jpg\" href=\"https://images.mixer.com/64x64/https://uploads.mixer.com/avatar/awvvsuuf-1632056.jpg\"><script src=\"script.js\"></script>",
Chat: "<iframe class=\"sidebar\" allowfullscreen=\"true\" src=\"https://mixer.com/embed/chat/1114958\"></iframe>",
  NavBar: "<ul class=\"navul\"><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'home\');\">Home</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'media\')\">Media</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'about\')\">About</a></li></ul><br>",
Home: "<div class=\"CenterHor CenterVert absolute\"><h1 style=\"color: red;\">CUCK</h1></div>",
Media: "<iframe class=\"vide\" allowfullscreen=\"true\" src=\"https://mixer.com/embed/player/1114958\"></iframe><br><iframe src=\"https://discordapp.com/widget?id=310954900823474177&theme=dark\" class=\"disc\" allowtransparency=\"true\" frameborder=\"0\"></iframe>",
About: "<h1><a href=\"https://discord.gg/Sr3bT8J\">ASP_SERPENT Discord Server</a></h1><div>Site put together by clockdaddy</div>"
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
