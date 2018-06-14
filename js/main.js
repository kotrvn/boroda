$(document).ready( function() {

  // SLICK SLIDER
  $('.directions-blocks').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3
        }
      },
    ]
  });

  // Меню

  var menuBtn = $('.top-nav__btn');
  var sidebarBtn = $('.left-sidebar__btn');
  var sidebarMenu = $('.left-sidebar__menu');
  var menu = $('.top-nav__menu');

  menuBtn.on('click', function(event) {
    event.preventDefault();
    menu.toggleClass('top-nav__menu--active');
  });
    sidebarBtn.on('click', function(event) {
    event.preventDefault();
    sidebarMenu.toggleClass('left-sidebar__menu--active');
  });

  $('[data-target="modal"]').on('click', function(event) {
    event.preventDefault();
    $('.modal').show();
  });
  $('.close').on('click', function(event) {
    event.preventDefault();
    $('.modal').hide();
  });


  // Ползунок
  var elem = document.querySelector('.calc-range');
  var init = new Powerange(elem, { 
    min: 100000, 
    max: 3000000, 
    start: 100000,
    step: 100000,
    hideRange: true
  });

  
  var per,
      month,
      total,
      monthly,
      result;

  var money = +$('.calc-range').val();

  $('input[name="programms"]').on('change', function(event) {
    month = +$(this).attr('data-month');
    per = +$(this).attr('data-per');
    result = Math.round(per / 12 * month * money);
    total = result + money
    monthly = parseInt(result / month);
    $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('#month').text(month);
  });

  $('.calc-range').on('change', function(event) {
    $('.calc-summ__num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    var radio = $('input[name="programms"]:checked');
    money = +$(this).val();
    month = +radio.attr('data-month');
      per = +radio.attr('data-per');
   result = Math.round( per / 12 * month * money );
    total = result + money
  monthly = parseInt(result / month);
    $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });

});