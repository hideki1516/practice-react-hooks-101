import React , { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0); // setCount = 変数countを操作するための関数
  // console.log(typeof count); // useStateの初期値が入っている
  // console.log(typeof setCount); // 関数が入っている

  // * increment
  const increment = () => {
    return setCount(count + 1);
  };
  // countを変更するにはsetCount関数を使用するしかない
  // onClickで関数が発火
  // → setCount関数によってcountの状態を変更
  // → レンダリング内容に変更を加える指示をReactする（再レンダリング）

  // * decrement
  const decrement = () => setCount(count - 1);

  // * increment2
  const increment2 = () => setCount(previousCount => previousCount + 1);
  // setCount関数の引数に「関数」を渡すこともできる ... その関数に状態を変えさせることもできる
  // 関数の引数には現時点の値（previousCount）に＋1 というロジックを引数に渡す

  // * decrement2
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  // * reset
  // const reset = () => setCount(previousCount => previousCount = 0);
  const reset = () => setCount(0) // ↑↑の前の値を利用するパターンと同じ

  // * double
  const double = () => setCount(count * 2);

  // * divisionByThird パターン①
  // const divedByThird = () => setCount(previousCount => {
  //   if(previousCount % 3 === 0) {
  //     return setCount(previousCount / 3);
  //   } else {
  //     return previousCount;
  //   }
  // });

  // * divisionByThird パターン② 三項演算子
  // const divedByThird = () => setCount(previousCount => {
  //   return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
  // });

  // * divisionByThird パターン③ 三項演算子 省略版
  const divedByThird = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  );

  // * divisionByTwice
  // const divisionByTwice = () => setCount((previousCount) => {
  //   if (previousCount % 2 === 0) {
  //     return setCount(previousCount / 2);
  //   } else {
  //     return previousCount 
  //   }
  // });

  const divisionByTwice = () => setCount((previousCount) => 
    previousCount % 2 === 0 ? previousCount / 2 : previousCount
  );

  // * divisionByTwice2 
  const divisionByTwice2 = () => setCount((previousCount) => 
    previousCount % 2 === 0 ? previousCount = '2の倍数だよ' : previousCount
  );

  // 以下にレンダリング内容を記載
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divedByThird}>3の倍数の時だけ3で割る</button>
        <button onClick={divisionByTwice}>2の倍数の時だけ2で割る</button>
        <button onClick={divisionByTwice2}>2の倍数の時だけメッセージを表示</button>
      </div>
    </>
  );
}

export default App;
