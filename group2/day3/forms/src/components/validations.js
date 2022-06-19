import * as yup from "yup";

const messages = {
  required: "Bu alan zorunlu.",
  email: "Geçerli bir email belirtin.",
  min: "En az 5 karakter giriniz.",
};

const validations = yup.object({
  name: yup.string().required(messages.required),
  email: yup.string().email(messages.email).required(messages.required),
  message: yup.string().min(5, messages.min).required(messages.required),
  campaigns: yup.string().required(messages.required),
  weeklyOrMonthly: yup.string().when("campaigns", {
    is: "1",
    then: yup.string().required("Zorunlu"),
  }),
});

export default validations;
