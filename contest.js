let product =[];
let cart =[];
let 합 =0
let 합1 = 0
let 합2 =0
let 합3 =0
let 합4 =0

$.get("./store.json").then(function(data){
    product = data.products
    product.forEach((a,i) => {
    var temp = `<div class="card-column" draggable="true" data-id="${a.id}" ondragstart="drag(event)">
    <img src="${product[i].photo}" data-id="${a.id}">
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


// 담기 버튼 눌렀을 때 장바구니에 추가하기
// 담기 버튼 누르면 그 누른 타겟의 dataset.id를 따서 cart에 product[]로 추가하고 
// 그 cart에 담긴 것을 장바구니쪽에 추가해줌

$(".add").on("click", function(e){
    let lwrma = e.target.dataset.id;
    
    //let cart에 상품이 이미있는지 찾고 없으면 let cart에 {}추가, 있으면 수량만 ++;
    //    이 부분 복습 체크
    // !!
    let 있나 = cart.findIndex((a) => {return a.id == lwrma})
    if(있나 == -1){
        let 현재상품 = product.find(function(a){
            return a.id == lwrma
        })
    현재상품.count =1
        cart.push(현재상품);
    } else {
        cart[있나].count++
    }

    console.log(cart);


    $(".backet").html("")
    
    cart.forEach((a,i) => {
    var temp = `<div class="card-column" draggable="true" data-id="${a.id}" ondragstart="drag(event)">
    <img src="${a.photo}">
    <h4 class="tt">${a.title}</h4>
    <h4${a.brand}</h4>
    <h5>가격: ${a.price}</h5>
    <input type="number" class="inp" value="${a.count}">
    <p></p>
    </div>`
    $(".backet").append(temp)
    if (a.id ==0) {
        합1 = a.price * a.count
    } else if (a.id ==1) {
        합2 = a.price * a.count
    } else if (a.id ==2) {
        합3 = a.price * a.count
    } else if (a.id ==3) {
        합4 = a.price * a.count
    }
    합 =0
    합 = 합1+합2+합3+합4
    $(".sum").html(``)
    $(".sum").append(`<p>합계 ${합}원</p>`)

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
    ev.dataTransfer.setData("text", ev.target.dataset.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var dat = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));


    let 있나 = cart.findIndex((a) => {return a.id == dat})
    if(있나 == -1){
        let 현재상품 = product.find(function(a){
            return a.id == dat
        })
    현재상품.count =1
        cart.push(현재상품);
    } else {
        cart[있나].count++
    }
    

    $(".backet").html("")

    cart.forEach((a,i) => {
    var temp = `<div class="card-column" draggable="true" data-id="${a.id}" ondragstart="drag(event)">
    <img src="${a.photo}">
    <h4 class="tt">${a.title}</h4>
    <h4${a.brand}</h4>
    <h5>가격: ${a.price}</h5>
    <input type="number" class="inp" value="${a.count}">
    <P></P>
</div>`
    $(".backet").append(temp)

    
            if (a.id ==0) {
                합1 = a.price * a.count
            } else if (a.id ==1) {
                합2 = a.price * a.count
            } else if (a.id ==2) {
                합3 = a.price * a.count
            } else if (a.id ==3) {
                합4 = a.price * a.count
            }
            합 =0
            합 = 합1+합2+합3+합4
            $(".sum").html(``)
            $(".sum").append(`<p>합계 ${합}원</p>`)
        

    })
}

// 아래는 html에 ondrop, ondragover, ondragstart 없을 때 함수쓰는 것일듯
// $(".card-column").on("dragstart", function(e){
//     e.originalEvent.dataTransfer.setData('id', e.target.dataset.id)
// });
// $(".backet").on("dragover",function(e){
// e.preventDefault();
// });
// $(".backet").on("drop", function(e){
//     let productId = e.originalEvent.dataTransfer.getData('id');
//         console.log(productId)
// })

// 담기버튼 누르면 그 누른 아이디 받아와서 새 배열에 저장, 그 저장된 배열만큼 그 카드 html을 장바구니쪽에 재생성



$(".clr").on("click", function(){
    console.log("1");
    $(".backet").html(``)
    $(".backet").html(`<div class="backet" ondrop="drop(event)" ondragover="allowDrop(event)">
    <span>장바구니(드래그 가능)</span>
    <P></P>
    </div>`)
})