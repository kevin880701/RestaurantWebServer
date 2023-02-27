
var myIndex = 0;
carousel();
creatMenuItem();

function carousel() {
  var x = document.getElementsByClassName("slideshow-picture");
  if(myIndex == 0){
    for(var i=0;i<x.length;i++){
      x[i].style.opacity = "1"
    }
  }
  x[myIndex].style.opacity = "0"
  myIndex++;
  if (myIndex == x.length) {
    x[0].style.opacity = "1"
    myIndex = 0
  }
  setTimeout(carousel, 3000);
}

function creatMenuItem(){
  var a = $(".menu-content-wrapper ul:first");
  var b = $(".menu-content-wrapper li:first").html();
  var c = "<li>\n"
      + "          <div class=\"list-item\">\n"
      + "            <img src=\"images/dish.jpg\">\n"
      + "            <div class=\"content-wrapper\">\n"
      + "              <div class=\"title\">原味月亮</div>\n"
      + "              <div class=\"price\">$350</div>\n"
      + "              <div class=\"introduction\">每份月亮都經過 108\n"
      + "                道用心料理步驟，真材實料、口口酥脆鮮美，一直是瓦城銷售排行第一名！\n"
      + "              </div>\n"
      + "            </div>\n"
      + "          </div>\n"
      + "        </li>"
  for (var i=0;i<15;i++){
    a.append(c)
  }
}

/**
 * 菜單選擇菜色種類
 */
$('.chooser-wrapper a').on('click', function(){
  $('.dishes-title').text($(this).text())
  $('.chooser-wrapper a').css('color','gray')
  $(this).css('color','black')
});

/**
 * 菜單滑鼠移上圖文切換
 */
$('.list-item').on('mouseenter', function(){
  $(this).children('img').css('opacity', '1')
  $(this).children('.content-wrapper').css('opacity', '0')
}).on('mouseleave', function() {
  $(this).children('img').css('opacity', '0')
  $(this).children('.content-wrapper').css('opacity', '1')
});


/**
 * 點選商品跳頁
 */
$('.list-item').on('click', function(){
  $(window).attr('location','ProductDescription.html');
});

$("#header").load("header.ejs");
$("#gotop").load("goTop.html");
$("#footer").load("footer.ejs");

