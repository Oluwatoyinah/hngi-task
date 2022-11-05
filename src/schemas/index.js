import * as yup from "yup";

export const basicSchema = yup.object().shape({
  first_name: yup.string(),
  last_name: yup.string(),
  email: yup.string().email("Please enter a valid email").required('Please provide an email'),
  message: yup.string().required("Please enter a message"),
  terms_and_condition: yup.boolean().oneOf([true], "You must agree to the condition"),
});
