<template>
  <div>
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
                    name="IdNumber"
                    :rules="{
                      required: true,
                      digits: 16,
                      regex: '^()\\d{14}$',
                    }"
                  >
                    <v-text-field
                      v-model="IdNumber"
                      :counter="16"
                      :error-messages="errors"
                      label="NIK"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Gender"
                    :rules="{
                      required: true,
                    }"
                  >
                    <v-container fluid>
                      <p>Gender</p>
                      <v-radio-group
                        v-model="radios"
                        mandatory
                        :error-messages="errors"
                      >
                        <v-radio label="Laki-laki" value="radio-1"></v-radio>
                        <v-radio label="Perempuan" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-container>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                      required: true,
                      digits: 12,
                      regex: '^(62)\\d{10}$',
                    }"
                  >
                    <v-text-field
                      v-model="phoneNumber"
                      :counter="12"
                      :error-messages="errors"
                      label="Phone Number"
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
                  <validation-provider v-slot="{ errors }" name="select">
                    <v-select
                      v-model="select"
                      :items="agama"
                      :error-messages="errors"
                      label="Agama"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                  <v-textarea
                    name="input-7-1"
                    label="Alamat Lengkap"
                    hint=""
                  ></v-textarea>
                  <div class="d-flex align-center justify-center">
                    <v-btn class="mr-4" type="submit" :disabled="invalid">
                      submit
                    </v-btn>
                  </div>
                </form>
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
                    name="IdNumber"
                    :rules="{
                      required: true,
                      digits: 16,
                      regex: '^()\\d{14}$',
                    }"
                  >
                    <v-text-field
                      v-model="IdNumber"
                      :counter="16"
                      :error-messages="errors"
                      label="NIK"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Gender"
                    :rules="{
                      required: true,
                    }"
                  >
                    <v-container fluid>
                      <p>Gender</p>
                      <v-radio-group
                        v-model="radios"
                        mandatory
                        :error-messages="errors"
                      >
                        <v-radio label="Laki-laki" value="radio-1"></v-radio>
                        <v-radio label="Perempuan" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-container>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                      required: true,
                      digits: 12,
                      regex: '^(62)\\d{10}$',
                    }"
                  >
                    <v-text-field
                      v-model="phoneNumber"
                      :counter="12"
                      :error-messages="errors"
                      label="Phone Number"
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
                  <validation-provider v-slot="{ errors }" name="select">
                    <v-select
                      v-model="select"
                      :items="agama"
                      :error-messages="errors"
                      label="Agama"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                  <v-textarea
                    name="input-7-1"
                    label="Alamat Lengkap"
                    hint=""
                  ></v-textarea>
                  <div class="d-flex align-center justify-center">
                    <v-btn class="mr-4" type="submit" :disabled="invalid">
                      submit
                    </v-btn>
                  </div>
                </form>
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
                    name="IdNumber"
                    :rules="{
                      required: true,
                      digits: 16,
                      regex: '^()\\d{14}$',
                    }"
                  >
                    <v-text-field
                      v-model="IdNumber"
                      :counter="16"
                      :error-messages="errors"
                      label="NIK"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Gender"
                    :rules="{
                      required: true,
                    }"
                  >
                    <v-container fluid>
                      <p>Gender</p>
                      <v-radio-group
                        v-model="radios"
                        mandatory
                        :error-messages="errors"
                      >
                        <v-radio label="Laki-laki" value="radio-1"></v-radio>
                        <v-radio label="Perempuan" value="radio-2"></v-radio>
                      </v-radio-group>
                    </v-container>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="phoneNumber"
                    :rules="{
                      required: true,
                      digits: 12,
                      regex: '^(62)\\d{10}$',
                    }"
                  >
                    <v-text-field
                      v-model="phoneNumber"
                      :counter="12"
                      :error-messages="errors"
                      label="Phone Number"
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
                  <validation-provider v-slot="{ errors }" name="select">
                    <v-select
                      v-model="select"
                      :items="agama"
                      :error-messages="errors"
                      label="Agama"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider>
                  <v-textarea
                    name="input-7-1"
                    label="Alamat Lengkap"
                    hint=""
                  ></v-textarea>
                  <div class="d-flex align-center justify-center">
                    <v-btn class="mr-4" type="submit" :disabled="invalid">
                      submit
                    </v-btn>
                  </div>
                </form>
              </validation-observer>
            </v-card>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-textarea name="input-7-1" label="Kronologi" hint=""> </v-textarea>
    <v-file-input
      v-model="files"
      placeholder="Upload your documents"
      label="Upload Bukti"
      multiple
      prepend-icon="mdi-paperclip"
    >
      <template v-slot:selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
    <div class="d-flex align-center justify-center">
      <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
    </div>
  </div>
</template>
<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
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
    agama: ["Islam", "Kristen", "Katolik", "Konghucu", "Budha", "Hindu"],
    select: null,
    checkbox: null,
    alamat: "",
    IdNumber: "",
    radios: null,
    files: [],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style>
</style>