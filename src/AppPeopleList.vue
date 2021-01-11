<template>
  <div class="card" v-if="people.length > 0">
    <h1>Person list</h1>

    <div class="card inline" v-for="person in people" :key="person.id">
      {{ person.firstName }}
      <button class="btn danger" @click="$emit('remove', person.id)">
        Удалить
      </button>
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
  emits: ["loadPeopleList", "remove"],
};
</script>

<style scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
