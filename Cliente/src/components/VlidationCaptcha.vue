<template>
  <div>
    <h1>Hola</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Nombre: </label>
      <input type="text" id="name" v-model="formData.name" required />
      <br />
      <div ref="container" class="frc-captcha" data-sitekey="FCMU8145NO81PCM7" data-lang="es"></div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { WidgetInstance } from "friendly-challenge";
import { ref } from "vue";
import ServiceCaptcha from "../services/ServiceCaptcha"

export default {
  data() {
    return {
      formData: {
        name: "",
        captchaToken: null,
      },
      widget: null,
    };
  },
  async verifyCaptcha(solution) {
    let response = await ServiceCaptcha.verificarCaptcha(solution);
    console.log(response);
  },
  methods: {
    submitForm() {
    },
    doneCallback(solution) {
      console.log("Captcha was solved. The form can be submitted.");
      console.log(solution);
      this.formData.captchaToken = solution.token;
    },
    errorCallback(err) {
      console.log("There was an error when trying to solve the Captcha.");
      console.log(err);
    },
  },
  mounted() {
    if (this.$refs.container) {
      this.widget = new WidgetInstance(this.$refs.container, {
        startMode: "auto",
        doneCallback: this.doneCallback,
        errorCallback: this.errorCallback
      });
    }
  },
  beforeDestroy() {
    if (this.widget) {
      this.widget.destroy();
    }
  },
};
</script>
