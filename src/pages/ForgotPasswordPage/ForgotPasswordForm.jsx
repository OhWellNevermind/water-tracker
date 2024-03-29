import {
  RenewPasswordForm,
  Label,
  Input,
  SubmitButton,
  Link,
  Title,
  StyledBackground,
  Bottle,
  AuthMain,
  ErrorMessageStyled,
} from "./ForgotPasswordForm.styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { sendForgotEmail } from "../../redux/user/operations";
import toast from "react-hot-toast";

const AddSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      "Incorret email"
    )
    .required("Required"),
});

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: AddSchema,
    onSubmit: (data) => {
      dispatch(sendForgotEmail(data.email));
      const notify = () => toast("Successfully send! Check your e-mail");
      notify();
    },
  });

  return (
    <AuthMain>
      <StyledBackground />
      <Bottle />
      <RenewPasswordForm onSubmit={formik.handleSubmit}>
        <Title>Renew your password</Title>
        <Label>Enter your email</Label>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={
            formik.touched.email && formik.errors.email ? "input-error" : ""
          }
          required
        />
        {formik.touched.email && (
          <ErrorMessageStyled>{formik.errors.email}</ErrorMessageStyled>
        )}

        <SubmitButton type="submit">Send</SubmitButton>
        <Link to="/signin">Sign in</Link>
      </RenewPasswordForm>
    </AuthMain>
  );
};
