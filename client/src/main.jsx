import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
//import './index.css';
//import { AuthContextProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AuthContextProvider> */}
  </StrictMode>,
)
