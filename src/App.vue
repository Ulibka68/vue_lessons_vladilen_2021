<template>
  <div class="container">
    <div class="card">
      <h2 v-color="myColor">Разговор про директивы</h2>
      <div class="form-control">
        <label for="id1">Активный по умолчанию</label>
        <input v-focus type="text" id="id1" />
      </div>

      <button class="btn" @click="myColor = 'blue'">Сделать синим</button>
    </div>
  </div>
</template>

<script>
import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
  data() {
    return {
      myColor: "darkred",
    };
  },
};
</script>
