var data = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 물품 카드 생성
// 물품 카드를 html에서 생성하는 것이 아니라 하나 추가 될때 마다 카드 생성
// 그 물품 카드에 products의 내용 집어 넣고

// for (var i = 0; i < products.length; i++) {
//   let child = document.createElement("div");
//   let child2 = document.createElement("img");
//   let child3 = document.createElement("h5");
//   let child4 = document.createElement("p");
//   child2.src = "https://via.placeholder.com/400";

//   document.querySelector(".row").appendChild(child);
//   document.querySelectorAll(".row div")[i].className = "col-sm-4";
//   var caldiv = document.querySelectorAll(".col-sm-4")[i];
//   caldiv.appendChild(child2);
//   caldiv.appendChild(child3);
//   caldiv.appendChild(child4);
//   caldiv.querySelector("h5").innerHTML = products[i].title;
//   caldiv.querySelector("p").innerHTML = `가격: ${products[i].price} 원`;
// }

for (i = 0; i < data.length; i++) {
  var temp = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5> ${data[i].title} </h5>
  <p>가격 : ${data[i].price}</p>`;
  $(".row").append(temp);
}

// data.forEach(function(a,i){
// var xo = `<div class="col-sm-4">
//     <img src="https://via.placeholder.com/600" class="w-100">
//     <h5>${data[i].title}</h5>
//     <p>가격 : ${data[i].price}</p>
//     </div>`
//     $(".row").append(xo)
// })

var k = function (data) {
  data.forEach((a, i) => {
    var temp = `<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100" />
<h5> ${data[i].title} </h5>
<p>가격 : ${data[i].price}</p>`;
    $(".row").append(temp);
  });
};

var count = 0;
document.querySelector("#more").addEventListener("click", () => {
  count++;
  if (count == 1) {
    $.get("https://codingapple1.github.io/js/more1.json").done(k);
  } else if (count == 2) {
    $.get("https://codingapple1.github.io/js/more2.json").done(k);
    $("#more").css("display", "none");
  }
});

//   다나가순 정렬 버튼 누르면 다나가순으로 정렬
//   - 처음것 지우고 다나가순으로 정렬해서 다시 html에 출력
var 어레이 = ["다", "가", "나"];
var 어레이2 = [7, 3, 5, 2, 40];
어레이.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
});
console.log(어레이);

$("#ary").click(function () {
  data.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    } else if (a.title < b.title) {
      return 1;
    }
  });
  $(".row").html("");

  // for (i = 0; i < data.length; i++) {
  //     var temp = `<div class="col-sm-4">
  //     <img src="https://via.placeholder.com/600" class="w-100" />
  //     <h5> ${data[i].title} </h5>
  //     <p>가격 : ${data[i].price}</p>`;
  //     $(".row").append(temp);
  //   };
  data.forEach(function (a, i) {
    var temp = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5> ${data[i].title} </h5>
    <p>가격 : ${data[i].price}</p>`;
    $(".row").append(temp);
  });
});

$("#sixx").click(function () {
  var ndata = data.filter((a) => a.price <= 60000);
  $(".row").html("");
  ndata.forEach(function (b, i) {
    var temp = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5> ${ndata[i].title} </h5>
    <p>가격 : ${ndata[i].price}</p>`;
    $(".row").append(temp);
  });
});
