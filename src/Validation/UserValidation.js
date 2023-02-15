import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const UserValidation = Yup.object().shape({
    name: Yup.string().required("Required*"),
    email: Yup.string().email('Must be a valid email').required("Required*"),
    userName: Yup.string().required("Required*"),
    mobile: Yup.number().min(10).required("Required*"),
    roleKey: Yup.string().required("Required*"),
    password: Yup.string().required("Required*"),
  });