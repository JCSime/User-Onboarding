import * as yup from 'yup';
const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'Username has to be three characters!'),
    email: yup
    .string()
    .email('Gotta be a valid email')
    .required('Email required!'),
    password: yup
    .string()
    .required('make a password'),
    termsOfService: yup
    .boolean()
    .oneOf([true, false], 'Must accept TOS'),
})

export default formSchema;