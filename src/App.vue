<template>
	<nav style="display: flex; justify-content: space-between">
		<div>
			<router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
			<a :href="googleLoginUrl" v-if="!userStore.userInfo.email">Google Login</a>
			<router-link to="" v-else @click="userStore.logout">Logout</router-link>
		</div>
		<div>
			<span>{{ userStore.userInfo.email }}</span>
		</div>
	</nav>
	<router-view />
</template>

<script>
	import { computed } from '@vue/runtime-core';
	import { useUserStore } from './stores/user';
	export default {
		setup() {
			const userStore = useUserStore();

			const googleLoginUrl = computed(() => {
				return `https://accounts.google.com/o/oauth2/v2/auth?
					scope=https%3A//www.googleapis.com/auth/userinfo.email&
					access_type=offline&
					include_granted_scopes=true&
					response_type=code&
					state=state_parameter_passthrough_value&
					redirect_uri=${window.location.origin}/callback&
					client_id=${process.env.VUE_APP_GOOGLE_CLIENT_ID}`;
			});

			return {
				userStore,
				googleLoginUrl,
			};
		},
	};
</script>
