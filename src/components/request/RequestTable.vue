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
            <tr>
                <td>1</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "RequestTable",
        props: ["request"],
    });
</script>

<style scoped></style>
