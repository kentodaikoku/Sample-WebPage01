$(function() {
  $('.nav_btn').on('click', function() {
    if ($('header').hasClass('open')) {
      $('header').removeClass('open')
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', () => {
    $('header').removeClass('open');
  });
});

function showNext() {
  let html = '<li>' + '<a href="item.html?item=13">' +
                '<img src="img/item13.jpeg" alt="">' +
                '<p>プロダクトタイトル</p>' +
                '<p>&yen;99,999 +tax</p>' + '</a>' + 
              '</li>' +
              '<li>' + '<a href="item.html?item=14">' +
                '<img src="img/item14.jpeg" alt="">' +
                '<p>プロダクトタイトル</p>' +
                '<p>&yen;99,999 +tax</p>' + '</a>' + 
              '</li>' +
              '<li>' + '<a href="item.html?item=15">' +
                '<img src="img/item15.jpeg" alt="">' +
                '<p>プロダクトタイトル</p>' +
                '<p>&yen;99,999 +tax</p>' + '</a>' + 
              '</li>' +
              '<li>' + '<a href="item.html?item=16">' +
                '<img src="img/item16.jpeg" alt="">' +
                '<p>プロダクトタイトル</p>' +
                '<p>&yen;99,999 +tax</p>' + '</a>' + 
              '</li>';

  $('.product-list').html(html);

}

