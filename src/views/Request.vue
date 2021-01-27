<template>
  <AppLoader v-if="loading" />
  <AppPage v-else-if="request" title="Заявка" back>
    <p><strong>Имя владельца</strong>: {{ request.fio }}</p>
    <p><strong>Телефон</strong>: {{ request.phone }}</p>
    <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
    <p><strong>Статус</strong>: <app-status :type="request.status" /></p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="canceled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
  </AppPage>
  <h3 v-else class="text-center text-white">Заявки с id {{ id }} нет</h3>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore, statusArr } from "@/store";
import AppPage from "@/components/ui/AppPage.vue";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";

import { currency } from "@/utils/currency-formatter";

export default defineComponent({
  name: "Request",
  components: { AppLoader, AppPage, AppStatus },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const loading = ref(false);
    const store = useStore();
    const request = ref({ status: statusArr[1] });
    const status = ref<string>("");

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadById", route.params.id);

      status.value = (request.value as any)?.status;
      loading.value = false;
    });
    const hasChanges = computed(
      () => (request.value as any).status !== status.value
    );

    const remove = async () => {
      await store.dispatch("request/remove", route.params.id);
      router.push("/");
    };

    const update = async () => {
      const data = {
        ...request.value,
        status: status.value,
        id: route.params.id,
      };
      await store.dispatch("request/update", data);
      (request.value as any).status = status.value;
    };

    return {
      loading,
      request,
      id: route.params.id,
      currency,
      status,
      hasChanges,
      remove,
      update,
    };
  },
});
</script>

<style scoped></style>
