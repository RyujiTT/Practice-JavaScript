'use strict';
///高度なobjectの使い方
const interests = 'interests';
const person = {
  name: 'Ryuji',
  age: 30,
  greeting: function () {},
  const: 'const', // 予約語を使える
  'current city': 'Tokyo', // 文字列が使える
  3: 3, //数字が使える
  3.1: 3.1,
  [interests]: ['music', 'travel'],
};
//文字列や数字のプロパティにアクセスする方法
console.log(person[interests]); //[]を使う

for (const key in person) {
  // console.log(typeof key); // keyはすべて文字列として認識される
}

// object.keysとobject.valuesとobject.entires
for (const key of Object.keys(person)) {
  // console.log(key);
}
console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

//keyの順番
// const person = {
//   name: 'Ryuji',
//   age: 30,
//   greeting: function () {},
//   const: 'const', // 予約語を使える
//   'current city': 'Tokyo', // 文字列が使える
//   0: 0,  //まず整数を集めて順番に表示させ、あとは記述順に表示させる
//   1: 1,
//   2: 2,
//   3: 3,
//   3.1: 3.1,
//   [interests]: ['music', 'travel'],
// };

//delete演算子でプロパティを削除する
person.name = 'jack';
person.gender = 'man';
delete person.age; //[]でも可
console.log(person);

//プロパティの省略記法
const name = 'Espresso';
const size = 350;
const coffee = {
  name, //name: nameと同じ意味になる
  size,
  nutritions: {
    calories: 5,
    sugars: 0,
  },
};
console.log(coffee);

//スプレッド構文を使ってobjectをコピーする方法
const coffee2 = {
  ...coffee,
  isHot: true,
  name: 'Latte',
  nutirions: {
    ...coffee.nutritions,
  },
};
console.log(coffee2 == coffee);
console.log(coffee2);

//Object.assign
const o1 = { a: 1 };
const o2 = { a: 2, b: 2 };
const o3 = { a: 3, b: 3, c: 3 };
Object.assign(o1, o2, o3); //o1にo2の内容を合体させる(変数名が同じ場合右側のobjectの変数が優先される: o1<o2<o3)
console.log(o1);

//分割代入
const book = {
  title: 'JavaScript course',
  price: 9.99,
  author: {
    firstName: 'Ryuji',
    lastName: 'Tanabe',
  },
};
// const title = book.title;
const sayBook = ({ title: bookTitle, price, author: { firstName } }) => {
  console.log(bookTitle, price, firstName);
};
sayBook(book);

//in演算子(objectの中に指定してkeyがあるかどうか)
console.log('title' in book);

//Optional Chaining(？.の前の式がnullもしくはundefinedならその後の式は評価せずすぐにundefinedを返す)
let user = undefined;
console.log(user?.address);
console.log(user?.['address']);
delete user?.address;
// user?.address = 'hello'; //Optional Chainingを' = 'の左側に持ってくるのはNG

// le - (global)
// - global object
// - this: global object

console.log(this);
let sayThis = () => {
  console.log(this);
};
// le
// outerEnv: global
// this: strict ? undefined : global object
sayThis();

//メソッドの中のthis
// le - (car.sayThis())
// - outerEnv: global
// - this: car
const car = {
  color: 'red',
  sayThis,
  changeColor: function (color) {
    this.color = color; //自分の変数の中で自分の変数名(car)を指したいときはthisを使う方が好ましい
  },
};
const car2 = { ...car };
car2.changeColor('white');
console.log(car2);
console.log(car);

//アロー関数でのthis(他の関数ではthisは必ず存在していたが、アロー関数の時は存在しない)
// le - (car.sayThis())
// - outerEnv: global
car.sayThis();
let logging = (cb) => {
  console.log(cb());
};
// const car3 = {
//   color: 'red',
//   sayThis,
//   changeColor: function (color) {
//     logging(() => {
//       return this.color;
//     });
//     this.color = color;
//   },
// };
// le - (logging())
// - outerEnv: global
// car3.changeColor('white'); // thisがないのでエラーが出る

// applyとcall
sayThis = function (a, b) {
  console.log(this, a, b);
};
// sayThis.call({ hello: 'hello' }, 1, 2);
// sayThis.apply({ hello: 'hello' }, 1, 2);

//bind
sayThis = sayThis.bind({ hello: 'hello' }, 1, 2);
sayThis();

//メソッドの省略記法
const car3 = {
  color: 'red',
  sayThis,
  changeColor(color) {
    // functionという部分を省略できる
    logging(() => {
      return this.color;
    });
    this.color = color;
  },
};

// getterを使って関数をプロパティのように扱う
const pastCaluculator = {
  servingSize: 60,
  member: 4,
  // // total: pastCaluculator.servingSize * pastCaluculator.member,  自分の変数の中のプロパティは持ってこれない
  // get total() {
  //   //関数をプロパティにアクセスする方法でアクセスできるようにする
  //   return this.servingSize * this.member;
  // },
  // set total(newValue) {
  //   this.member = newValue / this.servingSize;
  // },
};
// pastCaluculator.total = 600;
// console.log(pastCaluculator);

// propertyDescriptorを使って、高度な設定をする
console.log(Object.getOwnPropertyDescriptor(pastCaluculator, 'servingSize'));
Object.defineProperty(pastCaluculator, 'servingSize', { value: 30 }); //書き換え方
// writableをfalseにすると値を変えることができなくなる(definePropertyは書き換えられる)
// numerableをfalseにすると表示されなくなる
// configurableをfalseにすると上記のものを変更することができなくなる(valueは書き換えられる・trueからfalseには変えられる・delete演算子も使えない)
Object.defineProperty(pastCaluculator, 'children', {
  value: 2,
  configurable: true,
  numerable: true,
  writable: true,
}); // 新しくプロパティを追加する場合はすべて設定しないとfalseになる
console.log(Object.getOwnPropertyDescriptor(pastCaluculator, 'children'));
Object.defineProperties(pastCaluculator, {
  servingSize: {
    value: 20,
    numerable: true,
  },
  children: {
    value: 2,
  },
});

console.log(Object.getOwnPropertyDescriptors(pastCaluculator));

// getterとsetterをdefinePropertyを使って定義する
Object.defineProperty(pastCaluculator, 'total', {
  configurable: true,
  enumerable: true,
  get() {
    return this.servingSize * this.member;
  },
  set(newValue) {
    this.member = newValue / this.servingSize;
  },
});
console.log(Object.getOwnPropertyDescriptor(pastCaluculator, 'total'));

const blog = {
  title: 'How to make cake',
  author: 'Ryuji',
};

Object.preventExtensions(blog); //一切プロパティを追加できない
Object.isExtensible(blog); //指定したobjectが拡張可能かどうか見ることができる
Object.seal(blog); //preventExtensionsと同じ機能を持ち、かつconfigurableがすべてfalseになる
Object.isSealed(blog); // sealされているかどうか確認する
Object.freeze(blog); // preventExtensionsと同じ機能持ち、かつconfigurableとwritableがすべてfalseになる
Object.isFrozen(blog); // freezeされているかどうか確認する
