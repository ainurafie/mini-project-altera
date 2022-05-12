<template>
  <v-card class="mx-auto" max-width="344">
      
    <v-img
    class="d-flex justify-center mb-6"
      src=""
      height="200px"
    ></v-img>

    <v-card-title >  </v-card-title>

    <v-card-subtitle>  </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Edit Status </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>

<style>
</style>