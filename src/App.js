import React , { useState } from 'react';

const App = props => {

  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };

  // onClick{}にアロー関数を直接記入することもできる
  // const increment = () => setPrice(price + 1);

  return (
    <>
      <p>現在の『{name}』は、{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}

// defaultのPropsを指定する
App.defaultProps = {
  name: '',
  price: 1000
};

// onChange={e => setName(e.target.value)} はお決まりの作法
// onChangeが発火したときのインプットに入力されている文字列を拾う

export default App;
