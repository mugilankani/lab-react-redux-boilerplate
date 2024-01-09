import React, { useEffect, useState } from 'react';
import store from './redux/LikeCounter';
import { incrementCount, decrementCount } from './redux/Actions';

function App() {
  const [count, setCount] = useState(store.getState().count);

 
    const handleStoreChange = () => {
      setCount(store.getState().count);
    };

    store.subscribe(handleStoreChange);

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={() => store.dispatch(incrementCount())}>Like</button>
      <button onClick={() => store.dispatch(decrementCount())}> Unlike</button>
    </div>
  );
}

export default App;
