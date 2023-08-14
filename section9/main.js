//プロトタイプチェーン
// const obj = {
//   a: 1,
//   b: 2,
//   // [[Prototype]]: p1  //すべてのオブジェクトが内部的に持っているもの
// };
// const p1 = {
//   c: 3;
//   [[Prototype]]: p2  //すべてのオブジェクトが内部的に持っているもの
// }
// const p2 = {
//   c: 4;
//   [[Prototype]]: null  //すべてのオブジェクトが内部的に持っているもの
// }
// obj.a
// //1
// obj.b
// //2
// obj.c
// //3
// obj.d
// //4
// obj.e
// //undefined

// プロトタイプを変更する方法
// obj.__proto__ = {
//   c: 3,
// };
// Object.setPrototypeOf(obj, {
//   c: 3,
// });
const obj = Object.create({ c: 3 });
obj.a = 1;
obj.b = 2;
// Object.getPrototypeOf(obj); // プロトタイプを見るためのメソッド
console.log(obj);

//for inループはプロトタイプまで遡ってループする
for (const key in obj) {
  console.log(key);
}
//for ofループはプロトタイプはループしない(＝こちらの方がよく使われる)
for (const key of Object.keys(obj)) {
  console.log(key);
}
//　クラス
// const user1 = {
//   name: 'Ryuji',
//   age: 31,
//   greeting() {},
// };
// const user2 = {
//   name: 'Yoshipi',
//   age: 32,
//   greeting() {},
// };
// const user3 = {
//   name: 'Yoshiko',
//   age: 33,
//   greeting() {},
// };
//ファクトリ関数
const userPrototype = {
  greeting() {
    return `Hi this is ${this.name}. I'm ${this.age}`;
  },
};
const UserFactory = (name, age) => {
  const user = Object.create(userPrototype);
  user.name = name;
  user.age = age;
  return user;
};
// const user1 = UserFactory('Ryuji', 30);
// const user2 = UserFactory('Yoshipi', 31);
// const user3 = UserFactory('Tom', 32);

// コンストラクタ関数
const UserConstructor = function (name, age) {
  // // this = Object .create (UserCOnstructor .prototype)
  // if (new.target === undefined) return new UserConstructor(name, age);
  this.name = name;
  this.age = age;
  // this.greeting = greeting;
  return 'hello'; // オブジェクト以外は無視され、thisが優先される
  // return this;
};
UserConstructor.prototype.greeting = function () {
  return `Hi this is ${this.name}. I'm ${this.age}`;
};
const user1 = new UserConstructor('Ryuji', 30);
const user2 = new UserConstructor('Yoshipi', 31);
const user3 = new UserConstructor('Tom', 32);
console.log(user1);
console.log(user2);
console.log(user3);

// hasOwnPropertyはこう使う
let o = new Object({ hi: 'hi' });
Object.prototype.hello = 'hello';
o = {
  a: 1,
};
console.log(o);
console.log(o.hasOwnProperty('hello')); //in演算子のようなものだがプロトタイプまでは見ない
console.log(Object.prototype.hasOwnProperty.call(o, 'a'));
console.log('hello' in o);
