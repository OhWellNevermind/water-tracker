import { HiddenIcon } from "../../components/icons/HiddenIcon";
import { VisibleIcon } from "../../components/icons/VisibleIcon";
import {
  SignUpForm,
  Label,
  Input,
  SignUpButton,
  Link,
  Title,
  StyledBackground,
  IconButton,
  InputContainer,
  AuthMain,
  Bottle,
  ErrorMessageStyled,
} from "./SignUp.styled";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/user/operations";
import { selectUser } from "../../redux/user/selectors";

const AddSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: AddSchema,
    // onSubmit: (user) => {
    //   const newUser = {
    //     ...user,
    //   };
    //   createUser(newUser);
    // },
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  // const createUser = (newUser) => {
  //   const isUserExist = users.filter((user) => {
  //     return newUser.email === user.email;
  //   }).length;

  //   if (isUserExist) {
  //     alert(`${newUser.email} is already registered`);
  //     return;
  //   }
  //   dispatch(register({ ...newUser }));
  // };

  return (
    <AuthMain>
      <StyledBackground />
      <Bottle />
      <SignUpForm onSubmit={formik.handleSubmit}>
        <Title>Sign Up</Title>
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

        <Label>Repeat password</Label>
        <InputContainer>
          <Input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Repeat password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={
              formik.touched.password && formik.errors.password
                ? "input-error"
                : ""
            }
            required
          />
          <IconButton
            onClick={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            {isPasswordVisible ? (
              <>
                <VisibleIcon
                  width={16}
                  height={16}
                  stroke={"blue"}
                ></VisibleIcon>
              </>
            ) : (
              <>
                <HiddenIcon width={16} height={16} stroke={"blue"}></HiddenIcon>
              </>
            )}
          </IconButton>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <ErrorMessageStyled>
              {formik.errors.confirmPassword}
            </ErrorMessageStyled>
          )}
        </InputContainer>

        <SignUpButton type="submit">Sign Up</SignUpButton>
        <Link to="/signin">Sign In</Link>
      </SignUpForm>
    </AuthMain>
  );
};
