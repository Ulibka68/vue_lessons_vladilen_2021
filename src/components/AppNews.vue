<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isOpenLocal ? "Закрыть" : "Открыть" }}
    </button>
    <button v-if="wasRead" @click="$emit('unmark', id)" class="btn danger">
      Отметить не прочитанной
    </button>
    <!--    <button class="btn">Открыть</button>-->
    <div v-if="isOpenLocal">
      <hr />
      <p>Lorem ipsum dolor sit amet.</p>
      <button v-if="!wasRead" class="btn primary" @click="readed">
        Прочесть новость
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["title"],
  props: {
    title: { type: String, required: true },
    id: Number, // Proxy, Array, Promise
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      // eslint-disable-next-line no-unused-vars
      // validator(value) {
      //   return true;
      // },
    },
    wasRead: Boolean,
  },
  data() {
    return {
      // isOpenLocal: false,
      isOpenLocal: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isOpenLocal = !this.isOpenLocal;
      this.isOpenLocal && this.$emit("open-news", 55, 66);
    },
    readed() {
      this.isOpenLocal = false;
      this.$emit("read-news", this.id);
    },
  },
  // кастомные события которые компонент отдает наверх
  // emits: ["open-news"],
  emits: [
    {
      // Валидация события
      "open-news"(num) {
        if (num) {
          return true;
        }
        console.warn("Не переданы дополнительные данные");
        return false;
      },
    },
    {
      "read-news"(id) {
        if (id) return true;
        console.warn("Нет id");
        return false;
      },
    },
    "unmark",
  ],
};
</script>
