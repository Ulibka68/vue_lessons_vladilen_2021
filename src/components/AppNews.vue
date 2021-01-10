<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <AppButton @action="open" :text="isOpenLocal ? 'Закрыть' : 'Открыть'" />

    <AppButton
      v-if="wasRead"
      @action="$emit('unmark', id)"
      color="danger"
      text="Отметить не прочитанной"
    />

    <div v-if="isOpenLocal">
      <hr />
      <p>Lorem ipsum dolor sit amet.</p>

      <AppButton v-if="!wasRead" color="primary" @action="readed">
        Прочесть новость
      </AppButton>
      <AppNewsList :news="news" />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import AppNewsList from "@/components/AppNewsList";
export default {
  // props: ["title"],
  components: { AppButton, AppNewsList },
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
    news: Array,
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
