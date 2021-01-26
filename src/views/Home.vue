<template>
    <AppPage title="Список заявок">
        <template #header>
            <button class="btn primary" @click="modal = true">Создать</button>
        </template>
        <RequestTable :request="[]" />

        <teleport to="body">
            <AppModal v-if="modal" title="Создать заявку" @close="modal = false">
                <RequestModal />
            </AppModal>
        </teleport>
    </AppPage>
</template>

<script lang="ts">
    // eslint-disable-next-line no-unused-vars
    import { defineComponent, ref, Ref } from "vue";
    import AppPage from "@/components/ui/AppPage.vue";
    import AppModal from "@/components/ui/AppModal.vue";
    import RequestTable from "@/components/request/RequestTable.vue";
    import RequestModal from "@/components/request/RequestModal.vue";

    export default defineComponent({
        name: "Home",
        components: { AppPage, RequestTable, AppModal, RequestModal },
        setup() {
            const modal = ref(false);
            return {
                modal,
            };
        },
    });
</script>
