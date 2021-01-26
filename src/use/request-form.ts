import { SubmissionHandler, useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useRequestForm(fn: any) {
    const { isSubmitting, handleSubmit } = useForm({
        initialValues: { status: "active" },
    });
    const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField("fio", yup.string().trim().required());
    const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField("phone", yup.string().trim().required());
    const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
        "amount",
        yup.number().required("Введите сумму").min(0, "Сумма не может быть 0")
    );
    const { value: status } = useField("status");

    const onSubmit = () => {
        console.log("onSubmit - handleSubmit(fn)", fn);
        handleSubmit(fn);
    };

    return {
        status,
        isSubmitting,
        onSubmit,
        fio,
        phone,
        amount,
        fBlur,
        fError,
        pError,
        pBlur,
        aError,
        aBlur,
    };
}
