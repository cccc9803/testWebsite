var navList = ['活動資訊', '活動影片', '作品集', '聯絡我們'];
var navHypList = ['active.html', 'active_video.html', 'protfolio.html', 'contact.html'];

$(document).ready(function(){
    var navListHtml = "";
    $("footer").html('<p>Copyright © 2017 軸 於 空 間 — 保留所有權利。</p>' + 
    '<ul class = "iconUl">' + 
    '<li><img src = "img/if_Instagram_1298747.png"></li>' +
    '<li><img src = "img/if_square-facebook_317727.png"></li>' +
    '<li><img src = "img/if_youtube_317714.png"></li>' +
    '</ul');

    $("header").html('<img class = "logo" src = "img/logo.png"/><hr>')

    for (var list in navList) {
        console.log(navList[list]);
        navListHtml = navListHtml + "<a class='btn btn-2' href = '" + navHypList[list]+ "'><h1>" + navList[list] + "</h1></a>";
    }
    console.log(navListHtml);
    $("nav").html(navListHtml);
})
