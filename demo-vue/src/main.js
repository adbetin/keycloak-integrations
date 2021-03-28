import Vue from 'vue'
import App from './App.vue'
import { generateStore } from './store'
import VueLogger from 'vuejs-logger';
const isProduction = process.env.NODE_ENV === 'production';

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);
Vue.config.productionTip = false

let initOptions = {
  url: 'http://localhost:8080/auth',
  realm: 'imaginemos',
  clientId: 'demo-vue',
  onLoad: 'login-required'
}

let _keycloakClass = window['Keycloak'];
let keycloak = _keycloakClass(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    Vue.$log.info("Authenticated");
    const store = generateStore(keycloak);
    new Vue({
      store,
      render: h => h(App, { props: { keycloak: keycloak } }),
    }).$mount('#app')
  }

  //Token Refresh
  setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        Vue.$log.info('Token refreshed' + refreshed);
      } else {
        Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      Vue.$log.error('Failed to refresh token');
    });
  }, 6000)

}).catch((err) => {
  console.log("error", err)
  Vue.$log.error("Authenticated Failed");
});