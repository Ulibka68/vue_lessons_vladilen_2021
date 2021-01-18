<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi,
      cumque ea laborum laudantium nostrum odio quis soluta sunt velit?
    </p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>
    <h4>Выберите письмо</h4>
  </div>
</template>

<script>
export default {
  inject: ["emails"],
  props: ["mailId"],
  computed: {
    email2() {
      return this.emails.find((e) => e.id === this.mailId);
    },
    email() {
      const mId = this.mailId;
      const curemail = this.emails.find((oneEmail) => oneEmail.id === mId);
      const curemail2 = this.emails.find((e) => e.id === 1);
      console.log(this.emails);
      console.log(
        " curemail:",
        curemail,
        "this.mailId",
        this.mailId,
        " mId:",
        mId
      );
      console.log(" curemail2:", curemail2);
      return curemail;
    },
  },
};
</script>

<style scoped></style>
