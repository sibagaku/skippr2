$(function(){
  $(".jquery").on("click", function(){
    $(this).css("color", "red");
  });
  $(".jquery").mouseout(function(){
    $(".jquery").css("color", "black");
  });
});

$(function(){
  $("#box-list").skippr({
    transition: "fade",
    speed: 1000,
    easing: "easeOutQuart",
    navType: "bubble",
    childrenElementType: "div",
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 5000,
    keyboradOnAlways: true,
    hidePrevios: false,
  });
});