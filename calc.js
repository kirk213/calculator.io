var numbtn = $(".num");
var dis1 = $("#display .text1");
var dis2 = $("#display .text2");
var dec = $("#dec");
var eq = $("#eq");
var ac = $("#ac");

var decflg = false;  //小数点が使える状況かどうかを判断するフラグ
var second = false;  //一度計算を行った後かどうか確認するフラグ
var number1,number2;  //計算に使う数字を格納する変数
var calc;  //計算式のタイプを格納する変数（1=足し算、2=引き算、3=掛け算、4=割り算）
var op;  //演算子を格納する変数
var result;  //計算結果を格納する変数

//すべての表示と取得した数字をリセットする
function allclear(){
    dis1.text('');
    dis2.text('');
    number1 = number2 = calc = '';
}

//#displayに数字を表示する
function output1(i){
    var j = dis1.text();
    dis1.text(j+i);
}
function output2(i){
    var j = dis2.text();
    dis2.text(j+i);
}

//表示されている数字を変数number1に保存して液晶表示をけす
function save(){
    number1 = dis2.text();
    dis2.text('');
}

//数字ボタンをクリックした時の処理
numbtn.click(function(){
  let num = $(this).text();  //numにボタンの値を代入
  moji(num); //処理部分のmoji関数にnumを引数で呼び出し
});
 
//小数点ボタンを押した時の処理
dec.click(function(){
  if(decflg == false) {  //小数点フラグがfalseの場合
    let num = $(this).text();
    moji(num); //処理部分のmoji関数にnumを引数で呼び出し
    decflg = true;
  }
});

//数字ボタン、小数点ボタンの処理部分
function moji(num){
  if(second == true) {  //2回目以降の計算の場合
    allclear();  //表示をクリアー
    second = false;  //secondフラグの無効化
  }
  var moji = num;  //クリックしたボタンの値をmojiに格納
  console.log(num);
    output1(moji);  //.text1へ記憶した値を表示させる
    output2(moji);  //.text2へ記憶した文字を表示させる
}


//「＝」ボタンを押した時の処理
eq.click(function(){
  number2 = dis2.text();  //入力されている文字をnumber2へ保存
  if(calc == 1) {  //足し算ならば
    result = Number(number1) + Number(number2);
  } else if(calc == 2) {  //引き算ならば
    result = Number(number1) - Number(number2);
  } else if(calc == 3) {  //掛け算ならば
    result = Number(number1) * Number(number2);
  } else if(calc == 4) {  //割り算ならば
    result = Number(number1) / Number(number2);
  }
  dis2.text(result);  //計算結果をp.text2へ表示させる
  decflg = false;  //小数点フラグを無効化
  second = true;  //secondフラグをtrueへ
});

//「AC」ボタンを押した時の処理
ac.click(function(){
    allclear();  //全てクリアー
});

//演算子ボタンを押した時の処理
function edit(elem) {
    save();  //入力されている文字をnumber1へ保存
    op = $(elem).text();
    output1(op);   //opへ数式記号を保存
    calc = elem.value;  //演算子を記述
    second = decflg = false;  //secondフラグと小数点フラグを無効化
};