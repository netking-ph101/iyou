// 获取当前日期并格式化为 YYYY-MM-DD
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // 月份是从 0 开始的
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// 设置当前日期为日期输入框的值
var currentDateInput = document.getElementById('currentDate');
currentDateInput.value = today;

// 设置最小日期为今天

currentDateInput.min = today;









