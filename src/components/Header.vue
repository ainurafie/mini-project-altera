<template>
  <section>
      <v-layout column align-center justify-center class="blacks--text header">
        <h1
          class="white--text mb-2 display-1 text-xs-center"
          style="font-weight: 900; text-shadow: 3px 2px #000000"
        >
          The social network for epic content
        </h1>
        <div
          class="white--text subheading mb-3 text-xs-center"
          style="font-weight: 900; text-shadow: 2px 2px #000000"
        >
          Unlesh your creativity without limitations
        </div>
        <v-btn class="pa-4 secondary text-no-wrap rounded-pill" dark large href="/">
          Get Started
        </v-btn>
      </v-layout>
  </section>
</template>

<script>
export default {};
</script>

<style scope>
.header {
    background-image: url('../assets/bg.jpg');
    background-size: cover;
    object-fit: cover;
    height: 100vh;
}
</style>