<template>
  <v-main>
    <v-app>
      <div v-if="$route.name === 'Login'"></div>
      <div v-else><Navbar /></div>
      <router-view> </router-view>
    </v-app>
  </v-main>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { Navbar },
};
</script>
