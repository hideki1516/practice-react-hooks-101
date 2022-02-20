import React, { useReducer, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Event from '../components/Event';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState(''); // titleの状態管理
  const [body, setBody] = useState(''); // bodyの状態管理

  const addEvent = e => {
    e.preventDefault(); // 画面が更新（リロード）されるのを防ぐ
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
      });

    // イベント作成のボタンをクリックしたらinput内に空文字を渡す
    setTitle('');
    setBody('');
  }
  
  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
        <button className='btn btn-danger'>全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
};

// htmlFor と　id を一致させることでlabelにもフォーカスが当たる

// イベントハンドラーで状態を変える：onChange={e => setTitle(e.target.value)
// inputタグの中身が変わるたびに、新たな状態をstateとして反映する
// e.target.valueは慣用句

// Each child in a list should have a unique "key" prop.
// エラー：ユニークなkeyを持たせないといけないよ
// mapで<tr>を繰り返す → 他にも<tr>があったら困る! → だから独自の'key'を設定する必要がある
// mapの第2引数にはユニークな属性としてindexが渡ってくる → ユニークなkeyを属性に与える <tr key={index}>


export default App;
