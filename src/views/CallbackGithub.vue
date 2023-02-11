<template>
	<h1>Github 로그인</h1>
</template>

<script>
	import axios from 'axios';
	import router from '@/router';
	import { useRoute } from 'vue-router';
	import { onMounted } from '@vue/runtime-core';
	import { useUserStore } from '@/stores/user';

	export default {
		setup() {
			const route = useRoute();
			const userStore = useUserStore();
			const oAuthCode = route.query.onMounted(async () => {
				const { data } = await axios.post('https://github.com/login/oauth/access_token', {
					client_id: process.env.VUE_APP_GITHUB_CLIENT_ID,
					client_secret: process.env.VUE_APP_GITHUB_CLIENT_SECRET,
					code: oAuthCode,
				});
				alert(data);
				//userStore.setUserInfo(data);
				//router.replace({ name: 'Home' });
			});

			return {
				oAuthCode,
			};
		},
	};
</script>

<style></style>
