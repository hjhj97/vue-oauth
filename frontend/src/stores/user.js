import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		userInfo: {},
	}),
	actions: {
		setUserInfo(payload) {
			this.userInfo = payload;
		},
		logout() {
			this.userInfo = {};
		},
	},
});
