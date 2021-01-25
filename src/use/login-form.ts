import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { computed, watch } from "vue";

export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const { value: email, errorMessage: eErorr, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Пожалуйста введите email")
      .email("Введите корректный адрес электронной почты")
  );
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
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
}
