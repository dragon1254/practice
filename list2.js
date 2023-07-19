var products = [
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

for (i = 0; i < products.length; i++) {
  var temp = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5> ${products[i].title} </h5>
  <p>가격 : ${products[i].price}</p>`;
  $(".row").append(temp);
}
