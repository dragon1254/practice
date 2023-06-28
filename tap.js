// 버튼0 누르면 실행
//  - 모든 버튼에 붙은 오렌지 태그 없애기
//  - 누른 버튼에 오랜지 태그 붙이기
//  - 설명 태그에 show 없애기
//  - 누른 버튼에 show 붙이기

$(".tab-button").eq(0).on("click", 실행1);
$(".tab-button").eq(1).on("click", 실행2);
$(".tab-button").eq(2).on("click", 실행3);

function 실행1() {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(0).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(0).addClass("show");
}

function 실행2() {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(1).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(1).addClass("show");
}

function 실행3() {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(2).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(2).addClass("show");
}
