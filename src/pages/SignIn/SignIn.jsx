import {
  FormContent,
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
      //   const new = {
      //     ...contact,
      //   };
      //   addNewContact(newContact);
      console.log(user);
      // console.log(values);
    },
  });
  //   const [password, setPassword] = useState("");

  //   const togglePasswordVisibility = () => {
  //     setShowPassword(!showPassword);
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <SignInForm onSubmit={formik.handleSubmit}>
      <StyledBackground />
      <Title>Sign In</Title>
      <FormContent>
        <Label>Enter your email</Label>
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        ></Input>
        <Label>Enter your password</Label>
        <InputContainer>
          <Input
            // type="password"
            type={isPasswordVisible ? "text" : "password"}
            // value={password}
            placeholder="Password"
            name="password"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
          ></Input>
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
        <Link href="">Sign Up</Link>
        {/* <img
          src="/src/assets/images/mobile/BottleForSigninMobile-min.png"
          alt="Bottle"
        /> */}
        <Bottle />
      </FormContent>
    </SignInForm>
  );
};
