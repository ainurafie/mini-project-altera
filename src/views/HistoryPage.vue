<template>
  <v-main>
    <v-app>
      <Navbar />
      <h1
        class="mb-2 display-1 text-xs-center"
        style="font-weight: 900; text-align: center; padding-bottom: 10px"
      >
        History
      </h1>
      <v-card class="d-flex mx-auto">
        <v-container>
          <v-img src="../assets/bg.jpg" height="200" width="500px"></v-img>
        </v-container>
        <v-container>
          <v-card-title> Judul</v-card-title>

          <v-card-subtitle>
            jadifjaikanfjkanfjkanfjandfjadfnajnfajfajdfa dajdf ajf aa
            fajfanfjandkjajdakdjadf adnadad a dad dakdnakjdnakdnajda
            dafadjadnajdnajf fafafjafasfasjfa fafafa
          </v-card-subtitle>

          <v-card-actions>
            <v-container fluid>
              <v-row align="center">
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select :items="items" label="Standard" v-model="status"></v-select>
                </v-col>
              </v-row>
              <h3>Status Pengajuan</h3>
              <p>{{status}}</p>
            </v-container>
          </v-card-actions>
        </v-container>
      </v-card>
      <v-btn @click="ambildata()"> test </v-btn>
      <p>{{ history.data }}</p>
    </v-app>
  </v-main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data: () => ({
    show: false,
    history: [],
    items: ["On Progress", "Done"],
    status: "",
  }),
  methods: {
    ambildata() {
      axios
        .get("http://127.0.0.1:8000/api/pengaduan")
        .then((response) => (this.history = response.data));
    },
  },
};
</script>

<style>
</style>