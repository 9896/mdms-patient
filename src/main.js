import Vue from 'vue'
import App from './App.vue'

import VuePageTransition from 'vue-page-transition'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetAlert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import vuetify from './plugins/vuetify'
import CKEditor from '@ckeditor/ckeditor5-vue2';

import { MainLayout } from "@/App/Common/Helpers/Layout";
import router from './router';
import store from './store';
require("./App/Common/Helpers/Axios/axios");
import Authentication from "@/App/Common/Mixins/Authentication";
import SymptomDataService from "@/App/Common/Services/SymptomDataService"



Vue.config.productionTip = false

Vue.component('main-layout', MainLayout);

Vue.use(VuePageTransition);
Vue.use(Loading, {
  color: '#000000',
  width: 64,
  height: 64,
  backgroundColor: '#ffffff',
  opacity: 0.8,
  zIndex: 999,
  //isFullPage: true,
});
Vue.use(VueSweetAlert2);
Vue.use( CKEditor );

Vue.mixin( Authentication );
Vue.mixin( SymptomDataService );

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
