/*asp wants this stuff
homepage giant text saying -CUCK-


pages
Home Media About
*/
var Page = {
Head: "<!doctype html><html><head><title>ASP_SERPENT Website</title><link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"><link rel=\"icon\" type=\"image/jpg\" href=\"https://images.mixer.com/64x64/https://uploads.mixer.com/avatar/awvvsuuf-1632056.jpg\"><script src=\"script.js\"></script>",
NavBar: "<ul class=\"navul\"><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'home\');\">Home</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'media\')\">Media</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'about\')\">About</a></li></ul><br>",
Home: "<div class=\"CenterHor CenterVert absolute\"><h1 style=\"color: red;\">CUCK</h1></div>",
Media: "<div></div>",
About: "<div>Page put together by clockdaddy</div>"


}
loadPage = function(pagename) {
  pageconts = Page.Head + Page.NavBar + "</head><body>";
  switch(pagename) {
    case "home":
      pageconts = pageconts + Page.Home + "</body></html>";
    break;
    case "media":
      pageconts = pageconts + Page.Media + "</body></html>";
      break;
    case "about":
      pageconts = pageconts + Page.About + "</body></html>";
      break;
  }
  document.write(pageconts);
};
