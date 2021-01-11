<template>
  <div class="card" v-if="people.length > 0">
    <h1>Person list</h1>

    <div class="card" v-for="person in people" :key="person">
      {{ person }}
    </div>
  </div>
  <div class="card" v-else>
    <h4>Людей пока нет</h4>
    <button class="btn center" @click="$emit('loadPeopleList')">
      Загрузить список
    </button>
  </div>
</template>

<script>
export default {
  name: "AppPeopleList",
  props: ["people"],
  emits: ["loadPeopleList"],
};
</script>

<style scoped></style>
