import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import store from '@/shared/store';
import * as serviceWorker from './serviceWorker';

/**
 * 渲染函数
 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
 */
function render(props) {
  const { container, basePath } = props;

  if (props.store) {
    // 注入redux 实例
    store.setStore(props.store);
  }

  ReactDOM.render(
    <ConfigProvider autoInsertSpaceInButton={true} locale={zhCN}>
      <App basePath={basePath} />
    </ConfigProvider>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  function createEvent(params, eventName = 'emit') {
    return new CustomEvent(eventName, { detail: params });
  }

  window.cEvt = createEvent({
    handelData: () => console.warn('不能运行'),
    jumpUrl: () => console.warn('不能运行'),
  });
  render({});
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('reactMicroApp bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log('reactMicroApp mount', props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}

serviceWorker.unregister();
