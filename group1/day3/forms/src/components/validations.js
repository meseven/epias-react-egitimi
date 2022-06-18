import { object, string } from "yup";

const validations = object({
  name: string().required(),
  email: string().email().required(),
  message: string().min(5).required(),
});

export default validations;
