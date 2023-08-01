const hello = 'hello';
//alert(hello);

let count = 0;
let string = 'Hello';
string = `Hello 
Ryu`; //バッククォートを使うと改行できる

const userInput = '10.9';
let calcResult;
//文字列を数字型にするNumber()/parseInt()/parseFloat()/+
calcResult = Number(userInput) + 10;
calcResult = parseInt(userInput) + 10; //parseIntは整数を表示する
calcResult = parseFloat(userInput) + 10;
calcResult = +userInput + 10;
//数字を文字列に変換するString()/.toString()
const tenNumber = 10;
calcResult = '10' + String(tenNumber);
calcResult = '10' + tenNumber.toString();

//真偽値
let boolean = true;
boolean = false;

let array = ['apple', 'banana', 'grape'];
array = [1, 2, 3];
array = [1, 'apple', true, array];
array = ['apple', 'banana', 'grape'];
// 配列にデータを入れる方法.push()
array = [];
array.push('apple');
console.log(array);

//オブジェクト(まとまったデータを表す方法)
const coffee = {
  name: 'Chocolate Mocha', //nameがkeyでChocolate Mochaがvalue・keyとvalueをセットでプロパティと呼ぶ
  size: 350, //sizeプロパティ
  isHot: true, //isHotプロパティ
  toppings: ['Cinnamon', 'Cramael'], //toppingsプロパティ
  nutritions: {
    calories: 430,
    sugars: 53,
  },
};
console.log(coffee.nutritions.sugars);
coffee.isHot = false;
coffee.barista = 'Ryuji';
console.log(coffee.barista);

//nullとundefinedの違い
let userInfo = null; //nullは何もないことを表すときに明示的に使う
userInfo = undefined; //undefinedはこのように基本的に明示的に使うものではない

//関数(何度も呼び出すことができるコードの塊)
function add() {
  console.log(1 + 2);
}
//パラメータと引数
function add(num1, num2) {
  console.log(num1 + num2); //num1やnum2のことをパラメータと呼ぶ
}
add(3, 5); //受け渡している3や５という値を引数と呼ぶ

//戻り値について
function add(num1, num2) {
  return num1 + num2;
  console.log('hello'); //returnより下の記述は無視される
}

//scopeについて
const newValue = 'hello'; //JavaScript内であればどこでも参照できる変数(Global変数)
function add(num1, num2) {
  console.log(newValue); //関数の中で関数の外の定数や変数を参照することはできる
  const value = num1 + num2; //特定の場所でしか参照できない変数(ローカル変数)
  return value;
}
const returnedValue = add(2, 5);
//console.log(value); 関数の中の定数や変数を参照することはできない
