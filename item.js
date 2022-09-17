$(function() {
  // itempページにて該当商品を表示する実装（パラメータをもとに）
  let param = location.search.substring(1);
  let params = param.split("=");
  console.log(param);
  console.log(params);
  console.log(params[1]);
  let param_num = params[1];
  let img_ver = '';
  if (param_num < 9) {
    img_ver = '.jpg';
  } else {
    img_ver = '.jpeg';
  }

  let html = '<img src="img/item' + param_num + img_ver + '" alt="">';
  $('.item-img').html(html);
})

// $(function() {
//   $('.products-link').on('click', function() {
//     if (param_num >= 9) {
//       showSecond();
//     }
//   })
// })