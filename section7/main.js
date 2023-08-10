//Environment Record
let outerFunc = () => {
  let mango = 'mango';
  return () => {
    let orange = 'orange';
    console.log(mango); //グローバルオブジェクトのinnerFuncのEnvironmentを参照してからmangoのレキシカル環境にいく
  };
};
let innerFunc = outerFunc();
innerFunc();

let fruit = 'apple';
let sayFruit = () => {
  console.log(fruit);
};
fruit = 'banana';
sayFruit();

let generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age += 1;
      return age;
    },
  };
};
const ryuji = generatePerson('ryuji');
console.log(ryuji.getAge());
ryuji.incrementAge();
ryuji.incrementAge();
console.log(ryuji.getAge());
console.log(ryuji.getName());

//IIFE(即時実行関数式)
const counter = (() => {
  let count = 0;
  return () => {
    count += 1;
    // debugger;
    return count;
  };
})();
counter();

//再帰関数
let factorial = (n) => {
  // if (n === 0) return 1;
  return n === 0 ? 1 : n * factorial(n - 1);
};
console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(123));
