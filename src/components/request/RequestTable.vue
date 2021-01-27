<template>
    <h4 v-if="request.length == 0" class="text-center">Заявок пока нет</h4>
    <table v-else class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(r, idx) in request" :key="r.id">
                <td>{{ idx + 1 }}</td>
                <td>{{ r.fio }}</td>
                <td>{{ r.phone }}</td>
                <td>{{ currency(r.amount) }}</td>
                <td><AppStatus :type="r.status" /></td>

                <td>
                    <router-link v-slot="{ navigate }" custom :to="{ name: 'Request', params: { id: r.id } }">
                        <button class="btn primary" @click="navigate">Открыть</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { currency } from "@/utils/currency-formatter";
    import AppStatus from "@/components/ui/AppStatus.vue";

    export default defineComponent({
        name: "RequestTable",
        props: ["request"],
        components: { AppStatus },
        setup() {
            return { currency };
        },
    });
</script>

<style scoped></style>
