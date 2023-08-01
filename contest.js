var product =[]

$.get("./store.json").then(function(data){
    product = data.products
    product.forEach((a,i) => {
    var temp = `<div class="card-column" draggable="true" data-id="${a.id}">
    <img src="${product[i].photo}">
    <h4 class="tt">${product[i].title}</h4>
    <h4${product[i].brand}</h4>
    <h5>가격: ${product[i].price}</h5>
    <button data-id="${a.id}">담기</button>
</div>`
    $(".row").append(temp)
    })

    $(".form-control").on("input", function(){
    var gul = $(".form-control").val();
    var djqt = product.filter(function(a){
        return a.title.includes(gul) || a.brand.includes(gul)
    });    
    djqt.forEach((a,i) => {
    var temq = `<div class="card-column">
    <img src="${a.photo}">
    <h4 class="tt">${a.title}</h4>
    <h4>${a.brand}</h4>
    <h5>가격: ${a.price}</h5>
    <button data-id="${a.id}">담기</button>
</div>`
        console.log(djqt);
        $(".row").html("");
        $(".row").append(temq);
       
    });
    
    $('.card-column h4').each(function(a, b){
        let title = b.innerHTML;
        title = title.replace(gul, `<span style="background : yellow">${gul}</span>`);
        console.log(title);

        b.innerHTML = title;
      })
})
});    