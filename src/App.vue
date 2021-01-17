<template>
  <div class="container">
    <div class="card">
      <h2>Разговор про директивы</h2>
      <div class="form-control">
        <label for="id1">Активный по умолчанию</label>
        <input v-focus type="text" id="id1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        el.focus;
      },
    },
  },
};
</script>
