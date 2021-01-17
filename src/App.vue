<template>
  <div class="container">
    <div class="card">
      <h2>Плагины</h2>
      <h2>{{ $i18n("app.title") }}</h2>

      <button class="btn" @click="changeLang">
        {{ $i18n("app.btnTitle") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLang() {
      this.changeI18N("en");
      this.$forceUpdate();
    },
  },
  inject: ["changeI18N"],
};
</script>
