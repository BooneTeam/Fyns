$(document).ready(function() {

if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {

  if (mq.matches) {
    console.log('bigger than 500px');
  }
  else {
    $(".top_login_box a")[0].href = "http://m.bookiemarket.com";
    $(".top_login_box a")[1].href = "http://m.bookiemarket.com";
    // window width is less than 500px
  }

}

    // var featured_list = "";
    // $.get("http://www.sportsinsights.com/feed/", function (data) {
      // $(data).find("item").each(function () { // or "item" or whatever suits your feed
          // var el = $(this);
          // var link        = el.find("link").text();
          // var title       = el.find("title").text();
          // var pubdate     = el.find("pubDate").text();
          // var category    = el.find("category").last().text();
          // var description = el.find("description").text();
        //  '<a href="'+hyperLink[i].url+'">'+hyperLink[i].text+'</a>'
          // featured_list += '<li><a class=post-title href="'+ link +'">'+ title +'</a></li><div class="meta-date"><span class="ico_cat">'+category+'</span>'+pubdate+'</div>';
      // });
      // $(".featured_list ul").html(featured_list);
    // });
    // var football = "";
    // var footballList = [];
    // $.ajax({
    //   url: "http://www.scorespro.com/rss2/live-baseball.xml",
    //   success: function (data) {
    //     debugger;
    //     $(data).find("item").each(function () { // or "item" or whatever suits your feed
    //       var el = $(this);
    //       var link        = el.find("link").text();
    //       var title       = el.find("title").text();
    //       var pubdate     = el.find("pubDate").text();
    //       var category    = el.find("category").last().text();
    //       var description = el.find("description").text();
    //       // '<a href="'+hyperLink[i].url+'">'+hyperLink[i].text+'</a>'
    //       $(".featured_post.meta-date").innerText(pubdate);
    //       // football += '<li><a class=post-title href="'+ link +'">'+ title +'</a></li><div class="meta-date"><span class="ico_cat">'+category+'</span>'+pubdate+'</div>';
    //       // $(".featured_list ul").html(featured_list);
    //     });
    //   }
    // });

    // script(type="text/javascript")
      $(window).load(function () {
      var slider = $('#slider1').bxSlider({
      controls: false,
      mode: 'vertical',
      speed: 500,
      pause: 7000,
      easing: 'easeOutCubic',
      auto: true,
      autoHover: true,
      });
      $('#go-prev').click(function(){
      slider.goToPreviousSlide();
      return false;
      });
      $('#go-next').click(function(){
      slider.goToNextSlide();
      return false;
      });
      });

    $.preloadCssImages();

    $(".dropdown ul").parent("li").addClass("parent");
    $(".dropdown li:first-child, .pricing_box li:first-child").addClass("first");
    $(".dropdown li:last-child, .pricing_box li:last-child").addClass("last");
    $(".dropdown li:only-child").removeClass("last").addClass("only");
    $(".dropdown .current-menu-item, .dropdown .current-menu-ancestor").prev().addClass("current-prev");

    $("ul.tabs").tabs("> .tabcontent", {
      tabs: 'li',
      effect: 'fade'
    });

  $(".recent_posts li:odd").addClass("odd");
  $(".popular_posts li:odd").addClass("odd");
  $(".widget-container li:even").addClass("even");

// cols
  $(".row .col:first-child").addClass("alpha");
  $(".row .col:last-child").addClass("omega");


// toggle content
  $(".toggle_content").hide();

  $(".toggle").toggle(function(){
    $(this).addClass("active");
    }, function () {
    $(this).removeClass("active");
  });

  $(".toggle").click(function(){
    $(this).next(".toggle_content").slideToggle(300,'easeInQuad');
  });

  $(".table-pricing tr:even").addClass("even");

// gallery
  $(".gl_col_2 .gallery-item::nth-child(2n)").addClass("nomargin");

// pricing
  $(".pricing_box li.price_col").css('width',$(".pricing_box ul").width() / $(".pricing_box li.price_col").size());

// buttons
  if (!$.browser.msie) {
    $(".button_styled, .btn-share").hover(function(){
      $(this).stop().animate({"opacity": 0.85});
    },function(){
      $(this).stop().animate({"opacity": 1});
    });
  }

});
// scroll to top
$(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() != 0) {
             $('.link-top').fadeIn();
         } else {
             $('.link-top').fadeOut();
         }
     });
     $('.link-top').click(function () {
         $('body,html').animate({
             scrollTop: 0
         },
         1500);
     });
 });
// search field animation
//$(function(){
//    var input = $('.top_search input#s');
//    var divInput = $('.top_search .input');
//    var width = divInput.width();
//    var outerWidth = divInput.parent().width() - (divInput.outerWidth() - width) - 28;
//    var submit = $('#searchSubmit');
//    var txt = input.val();
//
//    input.bind('focus', function() {
//        if(input.val() === txt) {
//            input.val('');
//        }
//        $(this).animate({color: '#6d6d6d'}, 300); // text color
//        $(this).parent().animate({
//            width: outerWidth + 'px',
//            backgroundColor: '#e9e9e9', // background color
//            paddingRight: '10px'
//        }, 300, function() {
//            if(!(input.val() === '' || input.val() === txt)) {
//                if(!($.browser.msie && $.browser.version < 9)) {
//                    submit.fadeIn(300);
//                } else {
//                    submit.css({display: 'none'});
//                }
//            }
//        }).addClass('focus');
//    }).bind('blur', function() {
//        $(this).animate({color: '#646464'}, 300); // text color
//        $(this).parent().animate({
//            width: width + 'px',
//            backgroundColor: '#000', // background color
//            paddingRight: '10px'
//        }, 300, function() {
//            if(input.val() === '') {
//                input.val(txt)
//            }
//        }).removeClass('focus');
//        if(!($.browser.msie && $.browser.version < 9)) {
//            submit.fadeOut(100);
//        } else {
//            submit.css({display: 'none'});
//        }
//    }).keyup(function() {
//        if(input.val() === '') {
//            if(!($.browser.msie && $.browser.version < 9)) {
//                submit.fadeOut(300);
//            } else {
//                submit.css({display: 'none'});
//            }
//        } else {
//            if(!($.browser.msie && $.browser.version < 9)) {
//                submit.fadeIn(300);
//            } else {
//                submit.css({display: 'none'});
//            }
//        }
//    });
//});
