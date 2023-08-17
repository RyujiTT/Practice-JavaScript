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
//　クラス  (似たようなオブジェクトを作るための設計図)
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
// const user1 = new UserConstructor('Ryuji', 30);
// const user2 = new UserConstructor('Yoshipi', 31);
// const user3 = new UserConstructor('Tom', 32);
// console.log(user1);
// console.log(user2);
// console.log(user3);

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

class User {
  // フィールド宣言文
  id = 120;
  birthday = '1990/1/4';
  // プライベートフィールド
  #age = 0;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  static greeting() {}
  post() {}
}
const user1 = new User('Yoshipi', 30);
console.dir(user1);

// extendsを使ったクラスの継承(class 子クラス(サブクラス) extends 親クラス(スーパークラス))
// class Animal {
//   age = 0;
//   constructor(age) {
//     this.fly();
//     this.age = age;
//   }
//   eat() {
//     console.log('eat from animal');
//   }
// }
// // Bird.__proto__ = Animal
// // Bird.prototype.__proto__ = Animal.prototype
// class Bird extends Animal {
//   // age = 0;
//   name = 'bird';
//   constructor(age, name) {
//     super(age);
//     this.name = name;
//   }
//   eat() {
//     super.eat();
//     console.log('eat from bird');
//   }
//   fly() {
//     console.log('fly');
//   }
// }
// const bird = new Bird(3, 'pi');
// console.log(bird);
// bird.eat();
const animalObj = {
  age: 0,
  eat() {
    console.log('eat from animal obj');
  },
  name: 'name',
};

const birdObj = {
  age: 1,
  eat() {
    super.name = 'pi'; // this.nameと同じ意味
    console.log('eat from bird obj');
    console.log(super.name); // birdObj.__proto__.name === super.name
  },
};
birdObj.__proto__ = animalObj;
birdObj.eat();
console.log(birdObj);

// コンポジション
class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat() {
    console.log('eat from animal');
  }
  static foo() {
    console.log('foo');
  }
}
// Bird.__proto__ = Animal
// Bird.prototype.__proto__ = Animal.prototype
class Bird {
  // age = 0;
  name = 'bird';
  constructor(age, name) {
    this.animal = new Animal(age);
    this.name = name;
  }
  eat() {
    this.animal.eat();
    console.log('eat from bird');
  }
  static fly() {
    Animal.foo();
    console.log('fly');
  }
}
const bird = new Bird(3, 'pi');
console.log(bird.animal.age);
bird.animal.eat();
Bird.fly();

// instanceof演算子とisPrototypeOf()
class Car {}
const car = new Car();
class Taxi extends Car {}
const taxi = new Taxi();
const prius = Object.create(Car.prototype);
// Car.prototype === taxi.__proto__
console.log(prius instanceof Car);
console.log(Car.prototype.isPrototypeOf(prius));
