/*asp wants this stuff
homepage giant text saying -CUCK-
pages
Home Media About
*/
var Page = {
Head: "<head><title>ASP_SERPENT Website</title><link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"><link rel=\"icon\" type=\"image/jpg\" href=\"https://images.mixer.com/64x64/https://uploads.mixer.com/avatar/awvvsuuf-1632056.jpg\"><script src=\"script.js\"></script>",
Chat: "<iframe class=\"sidebar\" allowfullscreen=\"true\" src=\"https://mixer.com/embed/chat/1114958\"></iframe>",
  NavBar: "<div style=\'position: sticky;\'><ul class=\"navul\"><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'home\');\">Home</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'media\')\">Watch</a></li><li class=\"navli\"><a class=\"nava\" onclick=\"loadPage(\'about\')\">About</a></li><li class=\'navli\'><a class=\'nava\' onclick=\"loadPage(\'staff\');\">Our Staff</a></li><li class=\'navli\'><a class=\'nava\' onclick=\"loadPage(\'FfAQ\');\">FAQ</a></li><li class=\'navli\'><a class=\'nava\' href=\'https://mixer.com/ASP_SERPENT\' target=\'_blank\'>Go To Stream</a></li></ul></div><br>",
Home: "<div class=\"CenterHor CenterVert absolute\"><h1 style=\"color: red;\">CUCK</h1></div>",
Media: "<iframe class=\"vide\" allowfullscreen=\"true\" src=\"https://mixer.com/embed/player/1114958\"></iframe><br><iframe src=\"https://discordapp.com/widget?id=310954900823474177&theme=dark\" class=\"disc\" allowtransparency=\"true\" frameborder=\"0\"></iframe>",
About: "<h1>Rule #1 <br>No Spoilers<br>Rule #2<br> There are no other rules</h1><br><h2>ASP_SERPENT mostly does Dark Souls 3,<br> but sometimes you can catch him playing<br> Rainbow Six: Siege, and For Honor</h2><div>Site put together by clockdaddy</div>",
Staff: "<h1>Our Staff</h1><br><h2>ASP_SERPENT - Streamer<br>ClockDaddy - Moderator / Web Master<br>StOnEr_SlOtH_66 - Moderator<br>DeadShot999X - Moderator<br>tykodey - Moderator<br>",
FfAQ: "<div style=\'width:75vw;\'><h1>Q: when do you stream?<br><br><br>A: generaly everyday in the later hours of the day around 6:00 Central <br>but thats not a set time<br> its just when the stream usualy begins around sometimes later sometimes earlier<br><br><br><br>Q: who is ChatDaddy?<br><br><br>A: He is our wonderful bot please dont hurt his feelings.<br><br><br><br>Q: why am I watching your content?<br><br><br>A: IDK you tell me IDK why anyone would watch this...<br><br><br><br>Q: Am I an idiot?<br><br><br>A: Yes.<br><br><br><br>Q: what games do you play?<br><br><br>A: Mostly Darksouls but sometimes I stream other games such as<br>For Honor<br>borderlands<br>Rainbow six seige<br></div>"
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
    case "staff":
      pageconts = pageconts + Page.Staff + "</body>";
      break;
    case "FfAQ":
      pageconts = pageconts + Page.FfAQ + "</body>";
      break;
  }
  document.getElementById("bdy").innerHTML = pageconts;
};
