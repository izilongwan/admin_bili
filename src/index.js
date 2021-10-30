import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@/assets/styles/resets.css';
import '@/assets/styles/common.css';
import '@/assets/styles/fonts.css';
import App from './App';
import store from './store';

module && module.hot && module.hot.accept()

ReactDOM.render(
  <Provider store={ store }>
    <ConfigProvider locale={ zhCN }>
      <App />
    </ConfigProvider>
  </Provider>,

  document.getElementById('root')
);
