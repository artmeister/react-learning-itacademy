import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.scss';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>
);