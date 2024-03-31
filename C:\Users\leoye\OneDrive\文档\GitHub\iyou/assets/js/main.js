simpleCart({

  checkout: {
    // type: "PayPal",
    // email: "you@yours.com",
  },

  // tax: 0.075,
  // currency: "THB",

  cartStyle: "table",

  cartColumns: [
    { attr: "name", label: "產品名稱" },
    { attr: "type", label: "類型" },
    { attr: "date", label: "預訂日期" }, // 新增送貨日期欄位設定
    { attr: "session", label: "場次" },
    { view: "decrement", label: false, text: "▼" },
    { attr: "quantity", label: "數量" },
    { view: "increment", label: false, text: "▲" },
    { attr: "total", label: "小計", view: 'currency' },
    { view: "remove", text: "✖", label: "刪除" },
  ]

});

//讓價格隨種類變化，其中"價格"是關鍵詞
simpleCart.ready(function () {
  simpleCart.bind('beforeAdd', function (item) {
    var selectElement = document.querySelector('.item_type'); // 获取 select 元素
    var selectedOption = selectElement.options[selectElement.selectedIndex]; // 获取选定的选项元素
    var optionText = selectedOption.textContent.trim(); // 获取选项文本内容

    // 使用正则表达式提取数字部分
    var price = parseInt(optionText.match(/NT\$(\d{1,3}(,\d{3})*(\.\d+)?)/)[1].replace(',', ''), 10);//取出NT$後面的數字

    item.price(price); // 设置商品价格

    var type = optionText.split('價格')[0]; // 使用 '價格' 进行字符串分割，获取数字前面的部分

    item.set('type', type); // 设置商品类型
  });
});


// simpleCart.currency({
// code: "THB",
// name: "Thai Baht",
// symbol: "&#3647;",
// delimiter: " ",
// decimal: ",",
// after: true,
// accuracy: 0
// });



//* Refresh cart once simpleCart is ready to listen.
simpleCart.ready(function () {
  simpleCart.update();
});



