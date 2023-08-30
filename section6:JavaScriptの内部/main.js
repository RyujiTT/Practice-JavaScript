// 'use strict'; //ブロック文の中の関数を参照できるというような曖昧なルールをより厳しいルールに変更するためのもの
console.log(globalThis);
parseInt('30');
// varとletの四つの違い
var hello = 'hello';
var hello = 'hi'; // 1. 再宣言時にもvarとつけてもエラーにならない
console.log(hello);

{
  // var tomato = 'tomato'; // 2. ブロック文の中の変数もvarで宣言すると外から参照可能になる(関数の中のvar変数は参照できない)
}
// console.log(tomato);

console.log(apple); // 4.varで宣言した変数は関数宣言文のように巻き上げられるが初期値は巻き上げられず、変数のみが巻き上げられる。

var apple = 'apple'; // 3. globalThis.apple = 'apple'と同じ意味になる(関数内は例外)
console.log(globalThis);

// use strict
console.dir(sayTomato);
{
  function sayTomato() {
    var tomato = 'tomato';
  }
}
sayTomato();

//primitiveとobject(object以外のものは全てprimitive)
// primitiveなものはメモリに直接データを下記のような形で保存している。
// let x = 3;
// let y = 4;
// x = y;
// //objectはxやyは保存されるが変数の中身は同じメモリ内の違う場所に保存されそれを呼び出すための番地が割り振られる。そして変数の中にはその番地が入っている状態になる。
// let x = { x: 0 };
// let y = { x: 0 };
// x = y;

const coffee = {
  name: 'Caffe Latte',
};
const coffee2 = coffee; //coffeeとcoffee２は同じ番地を指している状態。
coffee2.name = 'Espresso';  //このようにobjectはconstで定義しても値は変わってしまう。これをnewtableと呼ぶ
const coffee3 = {
  name: 'Caffe Latte',
};
console.log(coffee === coffee3); //objectの変数には番地が入っているだけなのでこれはfalseになる



