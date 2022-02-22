import React, { useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from '../components/EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    // useContextを使用することで...
    // 1. propsとして受け取る余計な引数がなくなる
    // 2. 配下コンポーネントに伝播する責任から解放される

    // 配下コンポーネントに「state」「dispatch」をpropで渡していた
    // ↓↓
    // providerにstate,dispatchを渡す（state...状態、dispatch...状態を変える手段）
    
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
