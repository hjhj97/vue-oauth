<template>
	<h1>구글 로그인</h1>
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
			const oAuthCode = route.query.code;

			onMounted(async () => {
				const { data: res } = await axios
					.post('https://oauth2.googleapis.com/token', {
						code: oAuthCode,
						client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
						client_secret: process.env.VUE_APP_GOOGLE_CLIENT_SECRET,
						grant_type: 'authorization_code',
						redirect_uri: 'http://localhost:8080/callback',
					})
					.catch((fail) => console.log(fail));

				if (res) {
					const { data } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
						params: {
							access_token: res.access_token,
						},
					});
					userStore.setUserInfo(data);
					router.replace({ name: 'Home' });
				}
			});

			return {
				oAuthCode,
			};
		},
	};
</script>

<style></style>
