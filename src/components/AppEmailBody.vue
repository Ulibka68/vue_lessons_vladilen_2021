<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi,
      cumque ea laborum laudantium nostrum odio quis soluta sunt velit?
    </p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>Выберите письмо</div>
</template>

<script>
export default {
  name: "AppEmailBody",
  props: ["mailId"],
  inject: ["emails"],
  computed: {
    email() {
      const mId = this.mailId;
      const curemail = this.emails.find((el) => el.id === mId);
      const curemail2 = this.emails.find((el) => el.id === 1);
      console.log(
        "this.mailId",
        this.mailId,
        " mId:",
        mId,
        " curemail2:",
        curemail2,
        " curemail:",
        curemail
      );
      return curemail;
    },
  },
  updated() {
    console.log("AppEmailBody ", this.mailId);
  },
};
</script>

<style scoped></style>
