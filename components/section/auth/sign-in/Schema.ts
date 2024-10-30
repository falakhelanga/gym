import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .required()
    .matches(/(?=.*[0-9])/, "Password must contain a number")
    .matches(/(?=.*[A-Z])/, "Password must contain an uppercase letter")
    .matches(/(?=.*[a-z])/, "Password must contain a lowercase letter")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain a special character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
