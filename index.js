var imagearray =["car1.png","car2.png","car3.png"]

$(document).ready(function(){
for(var i=0; i<imagearray.length;i++){
  console.log(i)
  var imagetemp = `<img src="${imagearray[i]}" draggable="false">`
  $(".slide-box").eq(i).append(imagetemp)
}
});


let 시작좌표 =0
  let 확인 = false
  $(".slide-box").eq(0).on("mousedown",function(e){
    시작좌표 = e.clientX;
    확인 = true
  })
    $(".slide-box").eq(0).on("mousemove", function(e){
        if(확인 == true && e.clientX - 시작좌표 <0) {
        console.log(e.clientX - 시작좌표);
        $(".slide-container").css("transform", `translateX(${e.clientX - 시작좌표}px)`)
        }});
        $(".slide-box").eq(0).on("mouseup", function(e){
            확인 = false;
            if(e.clientX - 시작좌표 <-100) {
              $(".slide-container")
              .css("transition", "all 0.5s")
              .css("transform", "translateX(-100vw)")
            }

            else {
              $(".slide-container")
              .css("transition", "all 0.5s")
              .css("transform", "translateX(0vw)")
            }
            
        });
        setTimeout(function(){
          $(".slide-container").css("transition",500)
        })
        // 아래는 모바일 환경. mouse-down,up, move 대신에 touch - start,end,move 써야 되고 좌표도 조금씩 다르게 설정해야 함.
        // 이런거 바꿔주는 것이 hammer.js 라이브러리라고 하니 찾아보고 추가하는 것을 추천한다함
        $(".slide-box").eq(0).on("touchstart",function(e){
          시작좌표 = e.touches[0].clientX;
          확인 = true
        })
          $(".slide-box").eq(0).on("touchmove", function(e){
              if(확인 == true) {
              console.log(e.touches[0].clientX - 시작좌표);
              $(".slide-container").css("transform", `translateX(${e.clientX - 시작좌표}px)`)
              }});
              $(".slide-box").eq(0).on("touchend", function(e){
                  확인 = false;
                  if(e.changedTouches[0].clientX - 시작좌표 <-100) {
                    $(".slide-container")
                    .css("transition", "all 0.5s")
                    .css("transform", "translateX(-100vw)")
                  }
      
                  else {
                    $(".slide-container")
                    .css("transition", "all 0.5s")
                    .css("transform", "translateX(0vw)")
                  }
                  
              });
              setTimeout(function(){
                $(".slide-container").css("transition","none"),500
              })

// 다른 사진도 드래그하면 넘기기
imagearray.forEach((a,i) => {
$(".slide-box").eq(i).on("mousedown",function(e){
  시작좌표 = e.clientX
  확인 = true
})
$(".slide-box").eq(i).on("mousemove", function(e){
  if (확인== true) {
    console.log(e.clientX - 시작좌표);
  $(".slide-container").css("transform", `translateX(calc(${e.clientX - 시작좌표}px-${i*100}vw))`)
  
}})
$(".slide-box").eq(i).on("mouseup", function(e){
  확인 = false;
  if(e.clientX - 시작좌표<-200) {
    console.log(i)
    $(".slide-container").css("transition", "all 0.5s").css("transform", `translateX(-${(i+1)*100}vw)`)
  } else if (e.clientX - 시작좌표>200) {
    console.log(i)
    $(".slide-container").css("transition", "all 0.5s").css("transform",`translateX(-${(i-1)*100}vw)`)
  } else {
    console.log(i)
    $(".slide-container").css("transition", "all 0.5s").css("transform", `translateX(-${i*100}vw)`)
  }
})
setTimeout(function(){
  $(".slide-container").css("transition", "none"),500
});
});













// $(".slide-box").eq(1).on("mousedown",function(e){
//   시작좌표 = e.clientX;
//    확인 = true
// })
// $(".slide-box").eq(1).on("mousemove", function(e){
//  if(확인 == true) {
//    console.log(e.clientX - 시작좌표);
//      $(".slide-container").css("transition","all 0.5s").css("transform", `translateX(calc(${e.clientX - 시작좌표}px-100vw))`)
//    }});
// $(".slide-box").eq(1).on("mouseup", function(e){
//     확인 = false;
//    if(e.clientX - 시작좌표 <-100) {
//      $(".slide-container")
//        .css("transition", "all 0.5s")
//        .css("transform", `translateX(-200vw)`)
//       } else if (e.clientX - 시작좌표>100){
//          $(".slide-container")
//            .css("transition", "all 0.5s")
//            .css("transform", `translateX(0vw)`)
//       } else {
//          $(".slide-container")
//           .css("transition", "all 0.5s")
//           .css("transform", `translateX(-100vw)`)
//           }
//       });
// setTimeout(function(){
//  $(".slide-container").css("transition","none"),500})
                
  
//   $('.slide-box').eq(0).on('mousedown', function(e){
//     시작좌표 = e.clientX;
//   });

//   $('.slide-box').eq(0).on('mousemove', function(e){
//     console.log(e.clientX - 시작좌표)
    // $('.slide-container').css('transform', `translateX( ${e.clientX - 시작좌표}px )`)
//   });


  var car2 = { name : '소나타', price : [50000, 7000, 500] }
document.getElementById("shouhin").innerText= car2["name"];
// document.getElementById("nedan").innerHTML= car2.price[0];
document.getElementById("nedan").innerHTML= car2["price"][0];




// 스크롤바 100px 내리면 로고 폰트 사이즈 작게
window.addEventListener("scroll", function(){
  var 스크롤내린양 = $(window).scrollTop();
  // 자바스크립트 var 스크롤내린양 = window.scrollY 
  if(스크롤내린양 >= 100) {
    $(".navbar-brand").css("font-size",20);
  }
  else if(스크롤내린양 < 100) {
    // document.querySelector(".navbar-brand").style.fontSize="30px";
    $(".navbar-brand").css("font-size",30);
  
}})


// div의 스크롤바 내린 양 + 눈에 보이는 div높이 == div 의 실제 높이

var d = 0;

$(".lorem").on("scroll", function(){
    // 스크롤 바 내린 양
  var a = document.querySelector(".lorem").scrollTop;
  // div 실제 높이
  var b = document.querySelector(".lorem").scrollHeight;
// 눈에 보이는 div 높이
  var c = document.querySelector(".lorem").clientHeight;
  if (b-c-a<10) {
    if(d == 0) {
      alert("다 읽으셨습니다");
      d = 1;

    }
  }
  }
    
)
$(window).on("scroll",function(){
  // document.querySelector("html") == document.documentElement
  var 웹페높 = document.querySelector("html").scrollHeight
  var 웹페롤 = document.querySelector("html").scrollTop
  var 웹페보 = document.querySelector("html").clientHeight
  var 퍼센트 = 웹페롤/(웹페높-웹페보) *100
  $(".prg").width(퍼센트+"%")
})

  // document.querySelector(".slide-2").addEventListener("click", function(){
  //   document.querySelector(".slide-container").style.transform="translateX(-100vw)";
  // })
  // document.querySelector(".slide-3").addEventListener("click", function(){
  //   document.querySelector(".slide-container").style.transform="translateX(-200vw)";
  // })
  // document.querySelector(".slide-1").addEventListener("click", function(){
  //   document.querySelector(".slide-container").style.transform="translateX(0vw)";
  // }) 바닐라 자바스크립트. 아래는 jQuery
  var slide =1;

  $(".slide-2").on("click", function(){
    $(".slide-container").css("transform", "translateX(-100vw)");
    slide =2;
  })
  $(".slide-3").on("click", function(){
    $(".slide-container").css("transform", "translateX(-200vw)");
  slide =3;
  })
  $(".slide-1").on("click", function(){
    $(".slide-container").css("transform", "translateX(0vw)");
  slide=1;
  })

  $(".next").on("click", function(){
    if (slide >2){
$(".slide-container").css("transform", "translateX(-00vw)");
slide=0}
    $(".slide-container").css("transform", "translateX(-" + slide + "00vw)");
slide +=1;
}
)

$(".before").on("click", function(){
  if (slide == 1){
    $(".slide-container").css("transform", "translateX(-200vw)");
    slide = 3;
  }
  else { slide -=1
    $(".slide-container").css("transform", "translateX(-"+(slide-1)+"00vw");
}
})

var timecount = 5
var 타이머 = setInterval(알림창,1000);
타이머
function 알림창(){
  timecount = timecount -1;
 if(timecount>=0) {document.getElementById("tt").innerHTML=timecount};
if(timecount == 0){
$(".alert").hide()
clearTimeout(타이머)
};
}
document.getElementById("conf").addEventListener("click", function(){ 
    var money = document.getElementById("mm").value
    var 년수 = document.getElementById("yy").value
    if (money >= 50000) {
          var 미래예금액 = 0
            var rate =0.2
    미래예금액 = money * Math.pow((1+rate),년수)
    }
    else {
      var money = document.getElementById("mm").value
    var 년수 = document.getElementById("yy").value
          var 미래예금액 = 0
            var rate =0.2
      var rate =0.15
    미래예금액 = money * Math.pow((1+rate),년수)
    };
    
    console.log(Math.round(미래예금액))});
    
    
    
          var count = 1;
          $(".badge").on("click", function () {
            count += 1;
    
            if (count % 2 == 1) {
              $(".badge").html("Light🔄");
              $("#fst").removeClass("dark");
            } else {
              $(".badge").html("Dark🔄");
              
              $("#fst").addClass("dark");
            }
          });

          document.querySelector("form").addEventListener("submit", function (e) {
            if (document.getElementById("email").value == "") {
              alert("아이디를 입력하세요");
              e.preventDefault();
            } 
           
            
            else if (document.getElementById("pw").value == "") {
              alert("비번을 입력하세요");
              e.preventDefault();
            } else if (document.getElementById("pw").value.length < 6) {
              alert("더 긴 비번이 필요합니다.");
              e.preventDefault();
            }
            if(/\S+\@\S+\.\S+/.test(document.getElementById("email").value) == false) {          
              alert("이메일 형식이 아닙니다")
              e.preventDefault();
            } 
            if(/[A-Z]/.test(document.getElementById("pw").value)==false){
              alert("1개 이상의 대문자를 포함하세요")
              e.preventDefault();
            }
            
    
          });
          document.getElementById("pw").addEventListener("input", function () {
            if (document.getElementById("pw").value.length < 6) {
              document.getElementById("cf").innerHTML = "비번이 너무 짧습니다";
            } else if (document.getElementById("pw").value.length >= 6) {
              document.getElementById("cf").innerHTML = " ";
            }
          });
    
              
          document.getElementById("cc").addEventListener("click", 합격했냐);
          function 합격했냐() {
          var a = parseInt(document.getElementById("min").value)
          var b = parseInt(document.getElementById("hung").value)
          
            if(a>100) {
            alert("점수는 100점 이하입니다");
            return;
            }
          if (b>100) {
            alert("점수는 100점 이하입니다");
            return;
            }
          if (
              a < 40 ||
              b < 40 
              ) {
              alert("불합격")
            }
              else if(a+b >=120){
                alert("합격")
              }
              else {
                alert("불합격")
              }}
            
            document.getElementById("close2").addEventListener("click", function(){
              document.getElementsByClassName("modal")[0].style.display = "none";
            })
            document.getElementById("cls").addEventListener("click", function(){
              document.getElementsByClassName("modal")[1].style.display = "none";
            })
            $(".navbar-toggler").on("click", function () {
                $(".list-group").toggleClass("show-list");
              });
          
      // Modal을 가져옵니다.
      var modals = document.getElementsByClassName("modal");
      // Modal을 띄우는 클래스 이름을 가져옵니다.
      var btns = document.getElementsByClassName("view_more");
      // Modal을 닫는 close 클래스를 가져옵니다.
      var spanes = document.getElementsByClassName("close");
      var funcs = [];
       
      // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
      function Modal(num) {
        return function() {
          // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
          btns[num].onclick =  function() {
              modals[num].style.display = "block";
              console.log(num);
          };
       
          // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
          spanes[num].onclick = function() {
              modals[num].style.display = "none";
          };
        };
      } 
      
      // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
      for(var i = 0; i < btns.length; i++) {
        funcs[i] = Modal(i);
      }
       
      // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
      for(var j = 0; j < btns.length; j++) {
        funcs[j]();
      }
       
       
      //Modal 영역 밖을 클릭하면 Modal을 닫습니다.
      // window.onclick = function(event) {
      //   if (event.target.className == "modal") {
      //       event.target.style.display = "none";
      //   }
      // };
      
      // 모달창 검은 부분 누르면 창 닫히게
      
      for (let t=0; t<2; t++) {
      document.querySelectorAll(".modal")[t].addEventListener("click", function(e){
        if(e.target.className =="modal"){
          e.target.style.display = "none";
          document.querySelectorAll(".modal")[t].style.display="none"
      }});
      }
      