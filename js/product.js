window.onload = function(){
    document.getElementById("option_detail[]").onchange = sum;
}
function sum(){
  // 옵션 가격을 더하기 전 상품가격 20000으로 가정, 여기 가격은 직접 넣어주세요.
  var originPrice = 0;
  var n = document.getElementById("option_detail[]").options.selectedIndex;
  var str = document.getElementById("option_detail[]").options[n].value;
  if (!str){
// 옵션이 null인경우 선택안함으로 원래 상품가격만 입력
        document.getElementById("price").value=originPrice;
} else {
var addPrice = str.split("|");
    // 배열의 갯수는 3이라고 알고 있기 때문에 따로 구하지 않음.
            addPrice = parseInt(addPrice[2]);
var totalPrice = originPrice+addPrice;
document.getElementById("price").value=totalPrice;
}
}