<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control" :class="{ invalid: fError }">
            <label for="fio">ФИО</label>
            <input type="text" id="fio" v-model="fio" @blur="fBlur" />
            <small v-if="fError">{{ fError }}</small>
        </div>
        <div class="form-control" :class="{ invalid: pError }">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" @blur="pBlur" />
            <small v-if="pError">{{ pError }}</small>
        </div>
        <div class="form-control" :class="{ invalid: aError }">
            <label for="amount">Суммы</label>
            <input type="number" id="amount" v-model.number="amount" @blur="aBlur" />
            <small v-if="aError">{{ aError }}</small>
        </div>
        <div class="form-control">
            <label for="status">Статус</label>
            <select id="status" v-model="status">
                <option value="done">Завершен</option>
                <option value="canceled">Отменен</option>
                <option value="active">Активен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>

        <button type="submit" class="btn primary" :disabled="isSubmitting">Создать заявку</button>
    </form>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { useRequestForm } from "@/use/request-form";

    export default defineComponent({
        name: "RequestModalBody",
        emits: ["created"],
        // eslint-disable-next-line no-unused-vars
        setup(_, { emit }) {
            // eslint-disable-next-line no-unused-vars
            const submit22 = async (values: any, arg2: any) => {
                console.log("Вызвана submit22 из модуля RequestModal.vue");
                console.log(values);
                // emit("created");
                return true;
            };

            return {
                ...useRequestForm(submit22),
            };
        },
    });
</script>

<style scoped></style>
