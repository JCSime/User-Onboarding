import * as yup from 'yup';
const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .trim()
    .required(`Can't let you in without a first name`)
    .min(3, `Your name isn't shorter than 3 letters, is it?`),
    password: yup
    .string()
    .password()
    .required(`You're not gonna make this easy, huh? Make up a password`),
    termsOfService: yup
    .string()
    .oneOf(['Yes', 'No'], 'TOS Yes or No? Ya gotta pick'),
})

export default formSchema;