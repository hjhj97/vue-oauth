import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
	{
		path: '/callback',
		name: 'Callback',
		component: () => import(/* webpackChunkName: "about" */ '../views/Callback.vue'),
	},
	{
		path: '/callback_github',
		name: 'CallbackGithub',
		component: () => import(/* webpackChunkName: "about" */ '../views/CallbackGithub.vue'),
	},
	{
		path: '/callback_naver',
		name: 'CallbackNaver',
		component: () => import(/* webpackChunkName: "about" */ '../views/CallbackNaver.vue'),
	},
	{
		path: '/callback_kakao',
		name: 'CallbackKakao',
		component: () => import(/* webpackChunkName: "about" */ '../views/CallbackKakao.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
