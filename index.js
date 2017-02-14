$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});

var divs = $('div[id^="content-"]').hide(),
    i = Math.floor(Math.random() * 252) + 1;
    divs.eq(i + 30 % 252).show()

 $(window).click(function cycle() { 
    divs.hide().eq(i).show()
    i = Math.floor(Math.random() * 252) + 1;
})();
