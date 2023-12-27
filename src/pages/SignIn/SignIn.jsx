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
  FormContainer,
} from "./SignIn.styled";
import { HiddenIcon } from "../../components/icons/HiddenIcon";
import { useState } from "react";
import { VisibleIcon } from "../../components/icons/VisibleIcon";
import * as Yup from "yup";
import { useFormik } from "formik";

const AddSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min("Password must contain minimum 8 symbols")
    .max("Password must contain maximum 64 symbols"),
});

export const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: AddSchema,
    onSubmit: (user) => {
      console.log(user);
    },
  });

  return (
    <FormContainer>
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
          required
        />

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
        </InputContainer>

        <SignInButton type="submit">Sign In</SignInButton>
        <Link href="/src/pages/SignUp/SignUp.jsx">Sign Up</Link>
      </SignInForm>
    </FormContainer>
  );
};
