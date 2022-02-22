import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const APP_KEY = 'appWithRedux';

const App = () => {
  // getItemでlocalStorageの内容を取り出す ... appState変数にstringを保持
  const appState = localStorage.getItem(APP_KEY);
  // 文字列が入っている場合は採用する
  // そうでない場合はevents,operationLogsに空配列（初期化のstate）
  // JSON.parse() ... 文字列から元々のstateの形（配列）に戻す
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // JSON.stringify() : localStorageに保存するには文字列化させる
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  },[state])

  // stateの変更のたびにuseEffectを実行させる
  // useEffect : 第1引数にコールバック関数、第2引数に監視する状態を指定

  return (    
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
