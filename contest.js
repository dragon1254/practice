let product =[];
let cart =[];

$.get("./store.json").then(function(data){
    product = data.products
    product.forEach((a,i) => {
    var temp = `<div class="card-column" draggable="true" data-id="${a.id}" ondragstart="drag(event)">
    <img src="${product[i].photo}">
    <h4 class="tt">${product[i].title}</h4>
    <h4${product[i].brand}</h4>
    <h5>가격: ${product[i].price}</h5>
    <button class="add" data-id="${a.id}">담기</button>
</div>`
    $(".row").append(temp)
    })

// 검색 기능

    $(".form-control").on("input", function(){
    var gul = $(".form-control").val();
    var djqt = product.filter(function(a){
        return a.title.includes(gul) || a.brand.includes(gul)
    });    
    djqt.forEach((a,i) => {
    var temq = `<div class="card-column" draggable="true" data-id="${a.id}" ondragstart="drag(event)">
    <img src="${a.photo}">
    <h4 class="tt">${a.title}</h4>
    <h4>${a.brand}</h4>
    <h5>가격: ${a.price}</h5>
    <button class="add" data-id="${a.id}">담기</button>
</div>`
        console.log(djqt);
        $(".row").html("");
        $(".row").append(temq);
       
    });
    // each 문법 체크하기
    $('.card-column h4').each(function(a, b){
        let title = b.innerHTML;
        title = title.replace(gul, `<span style="background : yellow">${gul}</span>`);
        console.log(title);

        b.innerHTML = title;
      })
})
});    

// 장바구니 드래그

// 각 물건 카드를 드래그하여 장바구니에 넣는다
// 물건 카드에는 드래그 이벤트
// 장바구니에는 드롭 이벤트

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


$(".card-column").on("dragstart", function(e){
    e.originalEvent.dataTransfer.setData('id', e.target.dataset.id)
});
$(".basket").on("dragover",function(e){
e.preventDefault();
});
$(".basket").on("drop", function(e){
    let productId = e.originalEvent.dataTransfer.getData('id');
        console.log(productId)
})

// 담기버튼 누르면 그 누른 아이디 받아와서 새 배열에 저장, 그 저장된 배열만큼 그 카드 html을 장바구니쪽에 재생성

$(".add").on("click", function(e){
    let lwrma = e.target.dataset.id;
    console.log(lwrma);
    let 몇번째 = cart.findIndex(function(a){
        return a.id == lwrma
    })
})