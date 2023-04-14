import App from './App'
import store from './store'
import commBnsConfig from "./commBns/commBnsConfig.js";
import commBnsUniHttpRequest from 'commBns/commBnsUniHttpRequest.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$adpid = "1111111111"
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.commBnsConfig = commBnsConfig;
Vue.prototype.commBnsUniHttpRequest=commBnsUniHttpRequest;
Vue.prototype.$token= {'value':''};
Vue.prototype.$uid= {'value':''};
App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.$adpid = "1111111111"
	app.config.globalProperties.$backgroundAudioData = {
		playing: false,
		playTime: 0,
		formatedPlayTime: '00:00:00'
	}
	app.config.globalProperties.commBnsConfig = commBnsConfig;
	app.config.globalProperties.commBnsUniHttpRequest=commBnsUniHttpRequest;
	app.config.globalProperties.$token= {'value':''};
	app.config.globalProperties.$uid= {'value':''};
	return {
		app
	}
}
// #endif
