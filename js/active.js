var activeArray = [];
var active = {
    id: "test1",
    img: "img/protfolio-1.jpg",
    title: "聖誕跨年晚會",
    content: "迎接即將到來的2017年，從聖誕一直到跨年，期間有不少好玩有趣的活動等著大家。最重要的，還是今年最後一天的跨年晚會、跨年煙火、元旦曙光！想知道全台灣各縣市鄉鎮有辦哪些活動嗎？多達53個活動任君選擇喔！",
    date: "2018/01/01",
    video: "JwjBbWQs71k"
};


$(document).ready(function(){
    var activeListHtml = "";
    var divClass = "content";
    for ( var i = 0 ; i < 5 ; i++) {
        if ( i%2 === 0) {
            divClass = "content2";
        }
        else {
            divClass = "content";
        }
        activeListHtml = activeListHtml + 
        '<div class = "' + divClass + '" onclick = "clickActive('+ i +')">' + 
        '<img class = "activeImg" src = "'+ active.img +'" />' +
        '<h1>' + active.title + '</h1>' +
        '<h3>活動日期 : ' + active.date + '</h3>' + 
        '<p>' + active.content + '</p>' +
        '</div>';
    }
    $(".right").html(activeListHtml);
})

function clickActive(i) {
    console.log(active);
}