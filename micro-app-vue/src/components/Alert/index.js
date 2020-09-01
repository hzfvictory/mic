import Alerts from './src/main';

Alerts.install = function (Vue) {
  Vue.component(Alerts.name, Alerts);
};

export default Alerts;
