import * as yup from "yup";

export const registrationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  company: yup.string(),
});
