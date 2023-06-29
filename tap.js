// 버튼0 누르면 실행
//  - 모든 버튼에 붙은 오렌지 태그 없애기
//  - 누른 버튼에 오랜지 태그 붙이기
//  - 설명 태그에 show 없애기
//  - 누른 버튼에 show 붙이기

// let j = $(".tab-button").length;
// for (let i = 0; i < j; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }
$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
});

function 탭열기(구멍) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(구멍).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(구멍).addClass("show");
}
