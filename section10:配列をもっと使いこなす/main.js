let fruits = ['apple', 'lemon'];
fruits[2] = 'grape';
fruits['hello'] = 'hello';
fruits.length = 2;
fruits = ['apple', , 'orange', 'grape'];
fruits = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(fruits[(1)[2]]);

// new Arrayを使った配列の作り方
fruits = new Array('apple', 'orange', 'grape');
fruits = new Array(1, 2, 3);
fruits = new Array(1); // 数字が一つだけだとlengthだけが指定された配列になる(中身はempty)

// newは省略できる
fruits = Array('apple', 'orange', 'grape');
fruits = Array(1, 2, 3);
fruits = Array(1);

// staticメソッドを使える
fruits = Array.of('apple', 'orange', 'grape');
fruits = Array.of(1, 2, 3);
fruits = Array.of(1); //lengthしてにならず配列にちゃんとなる

// スプレッド構文を使って展開する方法
fruits = ['apple', 'orange', 'grape'];
const newFruits = [...fruits];
fruits.push('banana');
console.log(newFruits, fruits);

const yoshipi = ['yoshipi', 20, 'man'];
let [, , gender] = yoshipi;
console.log(gender);
