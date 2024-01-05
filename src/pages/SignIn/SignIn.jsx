import {
  SignInForm,
  Label,
  Input,
  SignInButton,
  Link,
  Title,
  StyledBackground,
  Bottle,
  InputContainer,
  IconButton,
  AuthMain,
  ErrorMessageStyled,
} from "./SignIn.styled";
import { HiddenIcon } from "../../components/icons/HiddenIcon";
import { useState } from "react";
import { VisibleIcon } from "../../components/icons/VisibleIcon";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user/operations";

const AddSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols"),
});

export const SignIn = () => {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: AddSchema,
    onSubmit: (user) => {
      dispatch(login(user));
    },
  });

  return (
    <AuthMain>
      <StyledBackground />
      <Bottle />
      <SignInForm onSubmit={formik.handleSubmit}>
        <Title>Sign In</Title>
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

        <Label>Enter your password</Label>
        <InputContainer>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }
            required
          />
          <IconButton
            type="button"
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {isPasswordVisible ? (
              <>
                <VisibleIcon width={16} height={16} stroke={"blue"} />
              </>
            ) : (
              <>
                <HiddenIcon width={16} height={16} stroke={"blue"}></HiddenIcon>
              </>
            )}
          </IconButton>
          {formik.touched.password && (
            <ErrorMessageStyled>{formik.errors.password}</ErrorMessageStyled>
          )}
        </InputContainer>

        <SignInButton type="submit">Sign In</SignInButton>
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgot-password">Forgot your password?</Link>
      </SignInForm>
    </AuthMain>
  );
};
