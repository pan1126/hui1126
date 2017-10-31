
import Vue from 'vue';


import App from './App.vue';

import vueRouter from 'vue-router';
Vue.use(vueRouter);

import home from './components/home.vue'

import news from './components/news/news-one.vue'

import info from './components/news/news-two.vue'

import photolist from './components/photo/photolist.vue'



 var routers = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
			{path:'/',redirect:'/home'},
			{path:'*',redirect:'./home'},
			{path:'/home',component:home},
			{path:'/news/newslist',component:news},
			{path:'/news/newsinfo:id',component:info},
				{path:'/photo/photolist',component:photolist}
		
	]
	});
 
 
 import '../statics/mui/css/mui.css'
 
 import '../statics/css/site.css'
 
 import 'mint-ui/lib/style.min.css'
  
 import mintUI from 'mint-ui'
 
 Vue.use(mintUI)
 
 import resouce from 'vue-resource'
 
 Vue.use(resouce)
 
 import moment from 'moment'
 
 Vue.filter('datafor',function(input,fmtstring){
	 return moment(input).format(fmtstring);
 })
 
 
new Vue({
	el:'#app',
	router:routers,
	render:c=>c(App)  
});