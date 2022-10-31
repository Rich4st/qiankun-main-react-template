import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { registerMicroApps, start } from 'qiankun';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* 配置qiankun子应用 */
registerMicroApps([
  {
    name: 'vue-app',
    entry: 'http://localhost:3001/',
    container: '#sub-app',
    activeRule: '/sub',
    props: {
      routerBase: '/sub',
    },
  },
])
start()

