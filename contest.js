var product =[]

$.get("./store.json").then(function(data){
    product = data.products
    product.forEach((a,i) => {
    var temp = `<div class="card-column">
    <img src="${product[i].photo}">
    <h4 class="tt">${product[i].title}</h4>
    <p>${product[i].brand}</p>
    <h5>가격: ${product[i].price}</h5>
</div>`
    $(".row").append(temp)
    console.log(i);
})});

$(".form-control").on("input",function(){
    
    // 그 상자 안의 값이 상품의 타이틀에 포함되어 있으면 현재의 리스트를 지우고 그 상품만 나타내기
    // 포함된 글자를 노란색으로 표시하기
// 포함된 글자를 찾아서 변수 안에 넣고
    // var search1 = $(".form-control").on()
// 현재 리스트를 지우고
    // $(".card-column").html("")
// 포함된 글자의 타이틀을 표시
    // $(".card-column").append(``)
// 만약 검색 상자가 비어있으면 원래 리스트 표시
})