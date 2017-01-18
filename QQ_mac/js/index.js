$(function(){
  var index=0;
  var timer=null;
  var gps=$(".gps li");

  gps.click(function(event) {
    index=$(this).index();
    change(index);
    special(index);
  });

  $(window).mousewheel(function(e,d){
    clearTimeout(timer);
    timer=setTimeout(function(){
    index-=d;
    if(index > gps.length-1 || index<0){
      index=0;
    }
    change(index);
    special(index);
    },500)
  })


  function special(index){
    if(index==0){
      $(".logo2").hide();
      $(".scroll").show();
    }else{
      $(".logo2").show();
      $(".scroll").hide();
    }
  }

  function change(index){
    gps.eq(index).addClass('cur').siblings().removeClass('cur');
    $("section").eq(index).show().siblings("section").hide();
    setTimeout(function(){
      $("section").eq(index).removeClass('current').siblings('section').addClass('current')
    },50)
  }
})
