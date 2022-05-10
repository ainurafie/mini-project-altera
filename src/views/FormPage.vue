<template>
  <v-container class="d-flex align-center justify-center" fluid fill-height>
    <v-card width="50%">
      <v-toolbar-title class="d-flex align-center justify-center">
        Form Pengaduan</v-toolbar-title
      >
      
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:25"
            >
              <v-text-field
                v-model="name"
                :counter="25"
                :error-messages="errors"
                label="Nama Lengkap"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
                required: true,
                digits: 13,
                regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="7"
                :error-messages="errors"
                label="Nomor HP"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="select"
              rules="required"
            >
              <v-select
                v-model="select"
                :items="items"
                :error-messages="errors"
                label="Select"
                data-vv-name="select"
                required
              ></v-select>
            </validation-provider>
            <v-textarea
              name="input-7-1"
              label="Default style"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              hint="Hint text"
            ></v-textarea>
            <v-file-input
              v-model="files"
              color="deep-purple accent-4"
              counter
              label="File input"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            >
            </v-file-input>
            <div class="d-flex align-center justify-center">
              <v-btn class="mr-4" type="submit" :disabled="invalid">
                submit
              </v-btn>
            </div>
          </form>
        </validation-observer>
      
    </v-card>
  </v-container>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style>
</style>