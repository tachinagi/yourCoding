$(function(){
//  ハンバーガーメニューのボタン
  $('.nav-btn').click(function(){
    $(this).toggleClass('active');
    $('.top-menu').toggleClass('active');
  });

  $('a[href^="#"]').click(function(){
    $('.top-menu').toggleClass('active');
    $('.nav-btn').toggleClass('active');
  });

//  アコーデオン
  $('.faq-q').click(function(){
    $(this).next('.faq-a').slideToggle();
    $(this).toggleClass("open");
  });

});

//スワイパー
  var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      slidesPerView: 3.9,
      spaceBetween: 56,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      breakpoints: {
        1080: {
          slidesPerView: 3.9,
          spaceBetween: 56,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 56,
        },
        375: {
          slidesPerView: 1.9,
          spaceBetween: 20,
        }
      }
    });

//スムーススクロール
var scroll = new SmoothScroll('a[href*="#"]', {
  header: '#header',
  speed: 700
});

//バリデーションチェック

$(function(){
  $('.alert').hide();
});
//テキストの入力チェック
$('.required').on('blur', function(){
  var error;

  if($(this).val() === '') {
    error = true;
  }

  if(error) {
    $(this).prev('.alert').show();
  }else{
    $(this).prev('.alert').hide();
  }


//  全て入力されてないと送信できない
  var $submitBtn = $('#contact-btn')

  $('#form input,#form textarea').on('change', function () {
    if(
      $('#form input[type="text"]').val() !== "" &&
      $('#form #message').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
    }else{
      $submitBtn.prop('disabled', true);
    }
  });
});

$(function(){
  //  送信が完了したら送信ボタンを消しメッセージを出す
  $('#form').submit(function(event){
    var formData = $('#form').serialize();

    $("#checkboxSection .alert").hide();

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdA0tC02GIzqwS3pN2IkGt-B4mKLsbvKNnDMm5JC4EDolntUQ/formResponse",
      data: formData,
      type: "POST",
      dataType:"xml",
      statusCode: {
        0:function(){
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200:function(){
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});

//スクロールアニメーション
AOS.init()














