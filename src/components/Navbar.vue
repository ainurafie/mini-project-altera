<template>
  <v-app-bar app color="#6ca0d1" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <img src="../assets/SANCYBU.png" alt="" width="100" />
      </router-link>
    </div>

    <v-spacer></v-spacer>
    <router-link to="/login" class="text-decoration-none" v-if="$route.name === 'LandingPage'">
      <v-btn href="" text>
        <span class="mr-2">LOGIN</span>
      </v-btn>
    </router-link>

   <router-link to="/" class="text-decoration-none" v-else>
      <v-btn href="" text>
        <span class="mr-2">LOG OUT</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>