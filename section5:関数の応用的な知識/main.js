//関数宣言文
console.log(add(3, 4)); //関数宣言文は巻き上げられるため関数宣言文の上にこのような記述をしてもエラーが出ない
function add(a, b) {
  return a + b;
}
console.dir(add);
console.log(add.name);
console.log(add.length);
const newAdd = add;
console.log(newAdd(3, 4));
//名前付き関数（関数式は巻き上げられないため関数式より下で呼び出さないとエラーが出てしまう)
let sayHi = function hi() {
  //関数式 (変数を作り出さずオブジェクトのみを作っている)
  return 'hi';
};
//無名関数
sayHi = function () {
  return 'hi';
};
// console.log(sayHi());

//メソッドについて(オブジェクトのvalueの関数のことをメソッドと呼ぶ)
const person = {
  name: 'Yoshipi',
  sayHi: /*メソッド*/ function () {
    return {
      a: 'a',
      sayHello: function () {
        return 'hello';
      },
    };
  },
};
console.log(person.sayHi().sayHello());

//アロー関数について
/*
sayName = fucntion (name) {
  return `Hi ${name}`
}
*/
//アロー関数(上記の記述と同じ意味)
sayName = (name) => `Hi ${name}`; //一つの式しか無い場合は{}やreturnを省略できる
console.log(sayName('Ryuji'));

//デフォルトパラメータ(変数が複数ある場合は最後の変数に設定しないと冗長的になる)
sayHi = (name, message = 'I like cakes.') => `Hi ${name} ${message}`;
console.log(sayHi('Ryuji'));

//レストパラメータで無限個の引数を扱う
let sum = (a, b, ...nums) => {
  //...とつけると配列にしなくても配列のように呼び出せる
  console.log(nums);
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 3, 5, 3, 4, 5, 3, 3, 3, 3, 4));
//argumentsオブジェクト(古いやり方で実際には使用しない)
// let sum = function () {
//   console.log(arguments);
// let total = 0;
// for (num of nums) {
//   total += num;
// }
// return total;
// };

//コールバック関数
// let subtract = (a, b, callback) => {
//   let result = a - b;
//   callback(result);
// };
// subtract(10, 3, (result) => {
//   console.log(result);
// });

// subtract(10, 4, (result) => {
//   alert(result);
// });

//無名関数と名前付き関数式の違い
let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};
//エラーが表示される時名前付き関数式は関数名がエラー文に表示されわかりやすい
subtract(10, 3, function showResult(result) {
  console.log(chocolate);
  console.log(result);
});
