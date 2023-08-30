//if文について
let ok = false;
let maybeOk = true;
if (ok) {
  //console.log('OK!');
} else if (maybeOk) {
  //console.log('maybe OK ...');
} else {
  //console.log('NO!');
}

//if文で使う演算子
ok = 1 === 1; // 同値演算子
ok = 'hello' === 'hello';
ok = 1 !== 2;
ok = 1 == 1; // 等値演算子(基本的に使うべきではない)

const coffee1 = { name: 'Cafe Latte' }; //オブジェクト同士は内容が同じでも別々のものとして扱われる
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1;
ok = coffee1 === coffee2; // false
ok = coffee1 === coffee3; // true
ok = coffee1.name === coffee2.name; //オブジェクト内の文字列を比べてるだけなのでtrue

//比較演算子
ok = 1 > 0;
ok = 1 <= 0;
ok = 'a' < 'b';

ok = 0; //falsy
ok = {}; //truthy
if (ok) {
  // console.log('OK!');
} else {
  console.log('NO!');
}
//&&は左側がtruthyであれば右側を返し、左側がfalsyだったら左側の値を返す
//||はその逆
ok = true && false; //両方がtrueだった場合true
ok = false || true; //両方がfalseの時false
ok = 0 || 'hi';
//例
const userInput = ''; //userが何も入力していない場合(falsy)
const userName = userInput || 'User'; //userが何かを入力していなければ’User’を返す。
console.log(userName);

const x = 15;
ok = x > 10 && x < 20;
ok = x === 10 || (x > 12 && userName);

if (ok) {
  console.log('OK!');
} else {
  console.log('NO!');
}

ok = !'true';
ok = !'hello';
ok = !x;
ok = !!x; //データ型を真偽値型に変更した時に!!を二つつける。
console.log(ok);

//ブロック文(複数の文を一つにまとめるもの)
//例
{
  const hello = 'hello2';
  {
    //console.log(hello); //デッドゾーン
    const hello = 'hello1';
  }
}

//三項演算子
ok = '';
ok = ok ? 'OK' : 'NO'; //okがtruthyであれば?の横の値を返し、falsyであれば：の横の値を返す
/*　上の式と同じ意味だが少し長くなってしまうの一行で書ける時は一行でかく
if (ok) ok = 'OK';
else ok = 'NO';
*/

//switch文を使って条件分岐をする方法
function vegitableColor(vegitable) {
  switch (vegitable) {
    case 'tomato': {
      const message = `${vegitable} is red!`;
      console.log(message);
      break;
    }
    case 'carrot':
    case 'pumpkin': {
      const message = `${vegitable} is orange!`;
      console.log(message);
      break;
    }
    case 'onion': {
      const message = `${vegitable} is white!`;
      console.log(message);
      break;
    }
    default: {
      const message = 'not found';
      console.log(message);
    }
  }

  // if (vegitable === 'tomato') {
  //   console.log('tomato is red!');
  // } else if (vegitable === 'pumpkin') {
  //   console.log('pumpkin is orange!');
  // } else if (vegitable === 'onion') {
  //   console.log('onion is white');
  // }
}
// vegitableColor('carrot');

//while文を使ってループさせる方法
let count = 100;
//()内の式がtrueなら隣のブロック文を実行し、もう一度()内の式を見てまだtrueならばもう一度ブロック文を実行するということを繰り返す！
while (count < 10) {
  console.log('while:', count);
  count += 1;
}
//do　while文
//まず{}のブロック文を実行してから()内の式を見てtrueならもう一度ブロック文を実行するということを繰り返す！
let tomatoCount = 100;
do {
  console.log('do-while:', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);
//for文を使ってわかりやすくループする
//まず(;;)内の一つ目で最初に一度だけ実行される処理をかく、二つ目には条件式をかく、三つ目にはループで処理を行った最後に行う処理を書く
//この三つの部分は省略することができる　例(x;)
// for (let pumpkinCount = 0; pumpkinCount < 10; pumpkinCount += 1) {
//   console.log(pumpkinCount);
// }

//カンマ演算子を使って複雑な式をまとめる方法
const a = 'a',
  b = 'b',
  c = 'c';
console.log(a, b, c);

for (
  let pumpkinCount = 0, i = 0;
  pumpkinCount < 10;
  pumpkinCount += 1, i += 1
) {
  // console.log(pumpkinCount, i);
}

//for-ofループ
const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits[i]);
// }
for (const fruit of fruits) {
  console.log(fruit);
}

//for-inループ
const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true,
};
// for (const key in coffee) {
//   console.log(key);
//   console.log(coffee[key]);
// }

//break文を使用してループを終了させる
// for (const key in coffee) {
//   console.log(key);
//   console.log(coffee[key]);
//   if (key === 'size') {
//     break;
//   }
// }

//continue文はそのターンをスキップするということ
for (const key in coffee) {
  if (key === 'size') {
    //sizeが来るとスキップして次のループにいく
    console.log('continue!');
    continue;
  }
  console.log(key);
  console.log(coffee[key]);
}

//try catch文・try-catch文はエラーが起きそうだけどそのエラーを防げないかもしれない場合のみに使う
try {
  console.log(chocolate); //ここの中の記述がエラーを出したもここの記述は無視される・ただし、実行時のエラーのみにしか対応しておらず、構文エラーなどは無視されません。
} catch {
  console.log('hello'); //上の記述にエラーが出るとこの中の記述が実行される・もし上の記述にエラーがなかったら実行されない
}

//try-catch-finally
function logChocolate() {
  try {
    console.log('try'); //ここの中の記述がエラーを出したもここの記述は無視される・ただし、実行時のエラーのみにしか対応しておらず、構文エラーなどは無視されません。
    return 'hello';
    // console.log(chocolate);
  } catch {
    console.log('catch'); //上の記述にエラーが出るとこの中の記述が実行される・もし上の記述にエラーがなかったら実行されない
  } finally {
    console.log('finally'); //どんな理由があれここは実行される
    return 'hi';
  }
}
console.log(logChocolate());

//throw文
throw 'error';