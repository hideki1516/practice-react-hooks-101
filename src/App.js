import React , { useState } from 'react';

const App = props => {
  // オブジェクトをuseStateの引数に設定できる
  const [state, setState] = useState(props);

  // 初期化処理を1つにまとめられる
  // const reset = () => setState(props);

  // state. を省略するために分割代入
  const { name, price } = state;

  // const [name, setName] = useState(props.name);
  // const [price, setPrice] = useState(props.price);

  // const reset = () => {
  //   setPrice(props.price);
  //   setName(props.name);
  // };
  
  return (
    <>
      <p>現在の『{name}』は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

// * setState({...state, name: e.target.value})
// オブジェクトが代入された変数stateをスプレッド構文で展開した上で、
// 上書きされる値だけ取得する

// * state変数にpropsオブジェクトを代入
// → state.name , state.priceで表示できる

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
