$.get("store.json").done(function(data){
    console.log(data);
})

$(document).ready(function(){
    data.forEach((a,i) => {
        
    
    var temp = `<div class="card-column">
    <img src="${data[i].photo}">
    <h4 class="tt">${data[i].title}</h4>
    <p>${data[i].brand}</p>
    <h5>가격: ${data[i].price}</h5>
</div>`
    $(".row").append(temp)
})});