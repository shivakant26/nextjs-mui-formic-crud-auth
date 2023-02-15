import * as Yup from "yup";

export const roleValidation = Yup.object().shape({
    roleLabel: Yup.string().required("Required*"),
    roleKey: Yup.string().required("Required*"),
  });