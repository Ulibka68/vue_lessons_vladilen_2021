<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>
    <div class="form-control" :class="{ invalid: eErorr }">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur" />
      <small v-if="eErorr">{{ eErorr }}</small>
    </div>

    <div class="form-control" :class="{ invalid: pError }">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" @blur="pBlur" />
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button
      class="btn primary"
      type="submit"
      :disabled="isSubmitting || isTooManyAttempts"
    >
      Войти
    </button>
    <div class="text-danger" v-if="isTooManyAttempts">
      Вы слишком часто пытаетесь войти в систему, попробуйте позже
    </div>
  </form>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { computed, watch } from "vue";
import { defineComponent } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  name: "Auth",
  setup() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();

    const { value: email, errorMessage: eErorr, handleBlur: eBlur } = useField(
      "email",
      yup
        .string()
        .trim()
        .required("Пожалуйста введите email")
        .email("Введите корректный адрес электронной почты")
    );
    const {
      value: password,
      errorMessage: pError,
      handleBlur: pBlur,
    } = useField(
      "password",
      yup
        .string()
        .trim()
        .required()
        .min(2, "Пароль не может быть менее 2 символов")
    );

    const isTooManyAttempts = computed(() => submitCount.value >= 3);

    watch(isTooManyAttempts, (val) => {
      if (val) {
        setTimeout(() => {
          submitCount.value = 0;
        }, 1500);
      }
    });

    // eslint-disable-next-line no-unused-vars
    const onSubmit = handleSubmit((values) => {});

    return {
      email,
      password,
      eErorr,
      eBlur,
      pError,
      pBlur,
      onSubmit,
      isSubmitting,
      isTooManyAttempts,
    };
  },
});
</script>

<style scoped></style>
