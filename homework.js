var 버튼들 = document.querySelectorAll('.butto');
var 모달창들 = document.querySelectorAll('div');

        // 숙제1
        var 사람 = {
  name: '손흥민',
  sayHi: function(){
    console.log("안녕 나는 "+this.name)
  }
};

// 숙제2
var sum=0;
var 자료 = { 
  data : [1,2,3,4,5] 
};

자료.전부더하기 = function (){
    자료.data.forEach(function(a,i){
    sum = sum + a
});
console.log(sum);};

// 숙제3
document.getElementById('버튼').addEventListener('click', function(){
    setTimeout(()=>{console.log(this.innerHTML)},1000)
  });
// 변수 연습문제 4번
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;
console.log(a + b);

// 변수 연습문제 5번

// for (var i = 1; i < 6; i++) { 
//   setTimeout(function() { console.log(i); }, i*1000 ); 
// }
// i=1
// setTimeout(function() { console.log(i); }, 1000 ); 
// i=2
// setTimeout(function() { console.log(i); }, 2000 ); 
// i=3
// setTimeout(function() { console.log(i); }, 3000 ); 
// i=4
// setTimeout(function() { console.log(i); }, 4000 ); 
// i=5
// setTimeout(function() { console.log(i); }, 5000 ); 
// i=6


for (let i = 1; i < 6; i++) { 
  setTimeout(function(){console.log(i)} , i*1000 ); 
}

// 변수 연습문제 6번

for (let k = 0; k < 3; k++){
  버튼들[k].addEventListener('click', function(){
    모달창들[k].style.display = 'block'
  });
}

// Template literals / tagged literals 연습문제 2개와 풀이

// var 변수 = '손흥민';

// function 해체분석기1(문자들, 변수들){
//   console.log(문자들);
//   console.log(변수들);
// }
// 해체분석기1`안녕하세요 ${변수} 입니다`;

// var pants = 20
// var socks = 100
// function 해체분석기2(문자들,변수들1,변수들2){
// console.log(문자들[1]+변수들1+문자들[0]+변수들2);
// };
// 해체분석기2` 바지 ${pants}양말 ${socks}`

var pants = 0
var socks = 100
function 해체분석기(문자들,변수들1,변수들2){
if(변수들1 ==0){
  console.log(문자들[0]+"안팔아요 "+문자들[1]+변수들2)
}
}

해체분석기` 바지 ${pants}양말 ${socks}`

var 어레이 = ['hello', 'world'];
console.log(어레이);
console.log(...어레이);

var 문자 = 'hello';
console.log(문자);
console.log(...문자);

var aa= [1,2,3]
var bb = [...aa,4]
console.log(bb)

var person = {
    인사 : function(){
      console.log(this.name + '안녕')
    }
}
  
var person2 = {
    name : '손흥민'
}
function 일함수(...rst){
for(let ii =0; ii<rst.length;ii++){
  console.log(rst[ii]);
}
}
일함수(1,2,3,4,5,6,7,8)


// Object에 값 추가하는 것 눈여겨보기

let alpha ={};
var k = 0;
function 글자세기(글자){
  [...글자].forEach((a) => {
    if (alpha[a]>0){
alpha[a]++
    } else {
      alpha[a] =1
    }
  });
  
  console.log(alpha);
}
글자세기("aabbbccdeeeee")

// var 학생1 = { 
//   name : 'Kim', 
//   age : 15 ,
//   sayH2: function(){
//     console.log("안녕하세요"+this.name+"입니다")
//   } 
// };

function 기계(이름,나이){
  this.name = 이름;
  this.age = 나이;
  this.sayH2 = function(){
    console.log("안녕하세요"+this.name+"입니다")
}
}

var 학생1 = new 기계("kim",15);

학생1.sayH2()



function Product(nn,pp){
  this.name = nn;
  this.price = pp;
  this.부가세 = function(){
    console.log(this.price*0.1)
  }
};

var product1 = new Product("shirts",50000);
var product2 = new Product("pants", 60000);
var product3 = new Product("underwear", 40000);

function making(na,ag){
  this.name = na;
  this.age = ag;
  this.sayHi = function(){
    console.log("안녕 나는 "+this.name+"이야")
  }
}

var 학생1 = new making("Kim",20)
var 학생2 = new making("Park",21)
var 학생3 = new making("Lee",22)

class 부모 {
  constructor(이름,나이){
    this.name = 이름;
    this.age = 나이;
  }
  sayHello(){
    console.log("hello")
  }
}

var 자식 = new 부모("lee",30)

var arr = [1,2,3];
Array.prototype.remove3 = function(){
  for (let i = 0; i<this.length; i++){
    if(this[i] ==3){
      this.splice(i,1)
    }
  }
}

arr.remove3();

console.log(arr);

var 사람 = {
  name : 'Kim',
  age : 30,
  get nextAge(){
    return this.age +1
  },
  // getter, setter은 함수를 하지 않게 함 () 안 넣게함
  // getter은 파라미터 안 넣어야 함. setter은 파라미터 1개 넣어야 함
  set setAge(나이1){
    this.age = parseInt(나이1)
  }
}

class 강아지 {
  constructor(타입, 색){
    this.type = 타입;
    this.color = 색;
  }
  get 한살먹기(){
    if(this instanceof 고양이){
    return this.age + 1
  } else{
    console.log("error")
  }}
}
var 강아지1 = new 강아지("말티즈","white")
class 고양이 extends 강아지 {
  constructor(타입, 색,나이){
    super(타입, 색)
    this.age = 나이
  }
  
}
var 고양이1 = new 고양이("러시안블루","파랑",3)

class Unit {
  constructor(공 =5, 체 = 100){
    this.공격력 = 공;
    this.체력 = 체;
  }
  get battlepoint(){
    return this.공격력 + this.체력
  }
  set heal(힐){
    this.체력 = this.체력 + 힐
  }
}

var marine = new Unit


var data = {
  odd : [],
  even : [],
  분류(...숫자){
for(let i =0; i<숫자.length; i++){
  if (숫자[i] %2 ==1){
    this.odd.push(숫자[i]);
  }
  else{
    this.even.push(숫자[i]);
  }
}
console.log(data);
  },
  정렬(){
    return [...this.odd,...this.even].sort((a,b)=>a-b)
  }
}
var des = [2,3,4]
var [aa,bb,cc] =des

des[0] =5


let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};
let {body:{height,weight},size:[cccc,dddd]} = 신체정보


var clk=0
document.querySelector(".countclk").addEventListener("click",function(){
  clk++;
  document.querySelector("#countt").innerHTML =clk;
})
var chek = new Promise(function(suc,rej){
document.querySelector("#test").addEventListener("load", function(){
  suc()
})
document.querySelector("#test").addEventListener("error", function(){
  rej()
})
})
chek.then(function(){
  console.log("로딩 성공");
}).catch(function(){
  console.log("로딩 실패");
})


// $.get('https://codingapple1.github.io/hello.txt').done(function(결과){
//   console.log(결과)
// });

// 프로미스는 성공실패 분류함. 변수로 새로운 프로미스 만들고 
// 그 프로미스가 성공이면 변수.then으로, 실패이면 변수.catch로 써서 각각 함수를 실행시킴
var hi = new Promise(function(succ,reje){
  // 아래는 데이터 추출하는데 성공하면 succ으로 -> 변수.then으로 
$.get("https://codingapple1.github.io/hello.txt").done(function(결과){
  succ(결과)
})

  // 아래는 데이터 추출하는데 실패하면 reje으로 -> 변수.catch로 
$.get("https://codingapple1.github.io/hello.txt").fail(function(안됨){
  reje(안됨)
})
})
// 데이터 추출에 성공하여 .then으로 왔고 여기에서 다시 새로운 데이터 추출하기 위해 새 변수 지정
hi.then(function(결과){
  console.log(결과);
var hi2 = new Promise(function(succe,rejec){
  $.get(" https://codingapple1.github.io/hello2.txt").done(function(결과2){
    succe(결과2);
  })
});
// 아직 새 변수 안임. 새 promise 변수 만들기 위해 실패쪽도 만들어주는 중임
  $.get(" https://codingapple1.github.io/hello2.txt").fail(function(){
    rejec()
  })
// 변수 만들고 닫아준 후 hi.then의 결과에 return을 써서 hi2를 넣어줌
// 그러면 이제 hi.then.then을 h2.then으로 변환할 수 있음(then.then은 없는 문법이기 때문에 변환)
  return hi2;
}).then(function(결과2){
  console.log(결과2);
})
  .catch(function(){
  console.log("로딩 실패함");
})
// async,await 쪽 예제임. 맞았는데 작동원리가 좀 애매함. Promise쪽 나중에 다시보기
async function 클릭(){
  var 클릭하기 = new Promise(function(a,b){
    document.querySelector("#any").addEventListener("click",function(){
      a();
    });
  });
  try { var 결과 = await 클릭하기;
  console.log("성공했어요");
}
  catch {console.log("실패했어요")}
}
클릭()


// for in 반복문은 위를 써서 descriptor 했더니 enuerable이 true인 것만 출력함
// 부모의 prototype도 반복함
// for in 반복문은 오브젝트 내 내용들 뽑을 때 사용
// for of  반복문은 array, 스트링 등일 때 사용

var objectt = { name: "kim", age: 30}

for (var key in objectt) {

  console.log(objectt[key])
}
Object.getOwnPropertyDescriptor(objectt,"name")

// 이건 그냥 for of 이용한 구구단 연습문제
// let 데이터 = [1,2,3,4,5,6,7,8,9] 

// for (var 구구단1 of 데이터) {
//   for (var 구구단2 of 데이터) {
//   console.log(구구단1*구구단2);
//   }
// }

var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
]; 
let newKeys;
let newValue;

for(var itemm of products){
  for(var keys in itemm){
  // 오브젝트 안의 마지막 문자가 숫자이면 숫자 없애기
  if(isNaN(parseInt(keys.slice(-1))) == false){
    let newValue = itemm[keys];   // slice는 원본을 훼손하지 않으므로 원본 데이터를 따로 저장하고
    let newKeys = keys.slice(0,-1); // 문자부분만 slice로 잘라내기
    itemm[newKeys] = newValue;   // 새 key 값도 저장하여 오브젝트안에 새로 넣기
    delete itemm[keys]; //새로key와 value를 저장했으니 기존것 삭제
  }
  }
}
console.log(products)

// for (let item of products){
//   for(let keys in item){
//     if(isNaN(parseInt(keys.slice(-1)))==false){}
//   }
// }
