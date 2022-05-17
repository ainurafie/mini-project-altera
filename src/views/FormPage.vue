<template>
  <v-container max-width="400" pt="100">
    <v-form @submit.prevent="submit">
      <v-expansion-panels>
        <v-toolbar-title class="d-flex align-center justify-center">
          Form Pengaduan</v-toolbar-title
        >
        <v-expansion-panel>
          <v-expansion-panel-header> PENGADU </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container
              class="d-flex align-center justify-center"
              fluid
              fill-height
            >
              <v-card width="50%">
                <validation-observer ref="observer">
                  <validation-provider
                    v-slot="{ errors }"
                    name="NamePengadu"
                    rules="required|max:25"
                  >
                    <v-text-field
                      v-model="NamePengadu"
                      :counter="25"
                      :error-messages="errors"
                      label="Nama Lengkap"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumberPengadu"
                    :rules="{
                      required: true,
                      digits: 13,
                      regex: '^(62)\\d{11}$',
                    }"
                  >
                    <v-text-field
                      v-model="phoneNumberPengadu"
                      :counter="13"
                      :error-messages="errors"
                      label="Phone Number"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="emailPengadu"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="emailPengadu"
                      :error-messages="errors"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </validation-provider>
                </validation-observer>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> KORBAN </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container
              class="d-flex align-center justify-center"
              fluid
              fill-height
            >
              <v-card width="50%">
                <validation-observer ref="observer">
                  <validation-provider
                    v-slot="{ errors }"
                    name="NameKorban"
                    rules="required|max:25"
                  >
                    <v-text-field
                      v-model="NameKorban"
                      :counter="25"
                      :error-messages="errors"
                      label="Nama Lengkap"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="IdNumberKorban"
                    :rules="{
                      required: true,
                      digits: 16,
                      regex: '^(33)\\d{14}$',
                    }"
                  >
                    <v-text-field
                      v-model="IdNumberKorban"
                      :counter="16"
                      :error-messages="errors"
                      label="NIK"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumberKorban"
                    :rules="{
                      required: true,
                      digits: 13,
                      regex: '^(62)\\d{11}$',
                    }"
                  >
                    <v-text-field
                      v-model="phoneNumberKorban"
                      :counter="13"
                      :error-messages="errors"
                      label="Phone Number"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="emailKorban"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="emailKorban"
                      :error-messages="errors"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="agamaKorban">
                    <v-select
                      v-model="agamaKorban"
                      :items="agama"
                      :error-messages="errors"
                      label="Agama"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                  <v-textarea
                    name="AlamatKorban"
                    v-model="AlamatKorban"
                    label="Alamat Lengkap"
                    hint=""
                  ></v-textarea>
                </validation-observer>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header> TERADU </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container
              class="d-flex align-center justify-center"
              fluid
              fill-height
            >
              <v-card width="50%">
                <validation-observer ref="observer">
                  <validation-provider
                    v-slot="{ errors }"
                    name="NameTeradu"
                    rules="required|max:25"
                  >
                    <v-text-field
                      v-model="NameTeradu"
                      :counter="25"
                      :error-messages="errors"
                      label="Nama Akun"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="sosmedTeradu">
                    <v-select
                      v-model="sosmedTeradu"
                      :items="sosmed"
                      :error-messages="errors"
                      label="Platform"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                </validation-observer>
              </v-card>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-form>
    <v-textarea name="kronologi" label="Kronologi" hint="" v-model="kronologi">
    </v-textarea>
    <v-file-input
      accept="image/*"
      label="File input"
      @input="handleFileUpload($event)"
      multiple
    ></v-file-input>
    <router-link to="#" class="text-decoration-none">
      <div class="d-flex align-center justify-center">
        <v-btn class="mr-4" type="button" v-on:click="showAlert()">
          submit
        </v-btn>
      </div>
    </router-link>
  </v-container>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import axios from "axios";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    info: [],
    agama: ["Islam", "Kristen", "Katolik", "Konghucu", "Budha", "Hindu"],
    sosmed: [
      "Facebook",
      "Twitter",
      "Instagram",
      "Whatsapp",
      "Tiktok",
      "Youtube",
    ],
    select: null,
    checkbox: null,
    alamat: "",
    IdNumber: "",
    radios: null,
    files: null,
    AlamatKorban: "",
    kronologi: "",
    uploadBukti: "gambar.jpg",
    sosmedTerbaru: "",
    phoneNumberPengadu: "",
    emailPengadu: "",
    NamePengadu: "",
    phoneNumberKorban: "",
    emailKorban: "",
    NameKorban: "",
    agamaKorban: "",
    IdNumberKorban: "",
    sosmedTeradu: "",
    NameTeradu: "",
  }),

  methods: {
    // submitFile() {
    //   /*
    //             Initialize the form data
    //         */
    //   let formData = new FormData();
    //   /*
    //             Add the form data we need to submit
    //         */
    //   formData.append("file", this.file);
    //   /*
    //       Make the request to the POST http://127.0.0.1:8000/api/pengaduan URL
    //     */
    //   axios
    //     .post("http://127.0.0.1:8000/api/pengaduan", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.error) {
    //         console.log(res.data.data);
    //         this.$swal({
    //           icon: "success",
    //           title: "Selamat",
    //           text: res.data.data,
    //         });
    //       }

    //       if (res.data.success) {
    //         console.log(res.data.message);
    //         this.$swal({
    //           icon: "success",
    //           title: "Selamat",
    //           text: res.data.message,
    //         });
    //       }
    //     })
    //     .catch(function () {
    //       console.log("FAILURE!!");
    //     });
    // },

    /*
        Handles a change on the file upload
      */
    handleFileUpload(event) {
      this.uploadBukti = event.target.files[0].name;
    },
    showAlert() {
      // Use sweetalert2
      this.$swal({
        title: "yakin untuk upload ?",
        text: "Pastikan sudah sesuai !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit",
      }).then((result) => {
        if (result.isConfirmed) {
          // masukin fungsi axios post data dengan form-data

          const formData = new FormData();
          // ini data form nya
          formData.append("name_pengadu", this.NamePengadu);
          formData.append("email_pengadu", this.emailPengadu);
          formData.append("phone_pengadu", this.phoneNumberPengadu);
          formData.append("nama_korban", this.NameKorban);
          formData.append("nik_korban", this.IdNumberKorban);
          formData.append("phone_korban", this.phoneNumberKorban);
          formData.append("email_korban", this.emailKorban);
          formData.append("agama_korban", this.agamaKorban);
          formData.append("alamat_korban", this.AlamatKorban);
          formData.append("account", this.NameTeradu);
          formData.append("platform", this.sosmedTeradu);
          formData.append("kronologi", this.kronologi);
          formData.append("bukti", this.uploadBukti);
          axios
            .post("http://127.0.0.1:8000/api/pengaduan", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              if (res.data.error) {
                console.log(res.data.data);
                this.$swal({
                  icon: "success",
                  title: "Selamat",
                  text: res.data.data,
                });
              }

              if (res.data.success) {
                console.log(res.data.message);
                this.$swal({
                  icon: "success",
                  title: "Selamat",
                  text: res.data.message,
                });
              }
            })
            //this.$swal({icon: 'success', title: 'Selamat', text: response.data.message}))
            .catch((error) =>
              this.$swal("Galat nih !", error.message, "error")
            );
          //this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>

<style>
</style>