import * as yup from 'yup'

export const basicSchema = yup.object().shape({
    first_name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),
    email: yup.string().email("Please enter a valid email").required("Please enter an email"),
    message: yup.string().required('Please enter a message'),
    terms_and_condition: yup.boolean()
})
 