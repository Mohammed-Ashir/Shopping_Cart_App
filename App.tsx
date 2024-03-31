import React from 'react';
import {Provider} from 'react-redux';
import {mystore} from './src/redux/MyStore';
import Main from './src/features/Main';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};
export default App;
