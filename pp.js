var 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(e) {
  // 이름찾기('철수'); 라고 쓰면 콘솔창에 '있어요'라는 글자가 떠야합니다.
  // 이름찾기('명수'); 라고 쓰면 콘솔창에 아무 글자도 뜨지 않아야합니다.
  //여기다 코드 짜십쇼
  //   출석부.forEach(function (a, i) {
  //     if (e == 출석부[i]) {
  //       console.log("있어요");
  //     } else if (e != 출석부[i]) {
  //       console.log("");
  //     }
  //   });
  for (var i = 0; i < 출석부.length; i++) {
    if (e == 출석부[i]) {
      console.log("있어요");
    } else if (e != 출석부[i]) {
      console.log("");
    }
  }
}

function 구구단(ee) {
  for (var l = 1; l < 10; l++) {
    console.log(l * ee);
  }
}
for (var q = 2; q < 10; q++) {
  for (w = 1; w < 10; w++) {
    console.log(q * w);
  }
}

function 함수(score, r) {
  var m = 0;
  score.forEach(function (e, i) {
    m = m + e;
  });
  m = m / score.length;
  if (m < r) {
    console.log(`평균보다 ${r - m} 점이 올랐네요`);
    e = 0;
  } else if (m > r) {
    console.log(`평균보다 ${m - r} 점이 떨어졌네요 재수추천`);

    m = 0;
  }
}
