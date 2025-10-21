<script setup>
import { onMounted } from 'vue';

import MenuBar from '@/components/MenuBar.vue';
import PagHome from '@/components/PagHome.vue';
import FooterBar from '@/components/FooterBar.vue';

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    if (authToken) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});



</script>

<template>
<MenuBar/>
<PagHome />
<FooterBar />
</template>

<style scoped>

</style>
