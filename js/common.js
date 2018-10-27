$(function() {
  function showSkillList() {
    $('#content2 ul li').each(function(i) {
      $(this).delay(300 * i).show().animate({
        opacity: "1"
      }, 500);
    });
  }
  var winHeight;
  $(window).on('load', function() {
    $('#contents, #top h1').addClass('show');
  }).on('load resize', function() {
    winHeight = $(window).height();
    $('#contents,.content').css({
      minHeight: winHeight
    });
    $('#top').height(winHeight);
    $('#navigation').addClass('matrix');
  });
  $('#navi-btn').on('click',function(){
    $('#navigation').slideToggle();
    $('#navi-btn').toggleClass('active');
  });
  //ナビゲーションクリック時のアクション
  $('a[href^=#]').click(function() {
    $('a[href^=#]').removeClass('active');
    $(this).addClass('active');
    if (window.matchMedia('(max-width:959px)').matches) {
      $('#navigation').slideToggle();
      $('#navi-btn').toggleClass('active');
    }
    var speed = 400,
    href = $(this).attr("href"),
    target = $(href == "#" || href == "" ? 'html' : href),
    position = target.offset().top;
    $('body,html').stop().animate({
      scrollTop: 'position'
    },speed,'swing');
    $('.content').each(function(){
      $(this).removeClass('show-conts sort-conts');
      var thisId = $(this).attr('id');
      if(href.match(thisId)) {
        $(this).addClass('show-conts sort-conts');
      }
      if(href=='#content2') {
        showSkillList();
      }
    });
    return false;
  });
});
