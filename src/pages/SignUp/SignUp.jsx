import { FormContainer } from "../SignIn/SignIn.styled";
import {
  // FormContent,
  SignUpForm,
  Label,
  Input,
  Button,
  Link,
  Title,
  StyledBackground,
} from "./SignUp.styled";

export const SignUp = () => {
  return (
    <FormContainer>
      <StyledBackground />
      <SignUpForm>
        <Title>Sign Up</Title>
        {/* <FormContent> */}
        <Label>Enter your email</Label>
        <Input type="email" placeholder="E-mail" name="email" required></Input>

        <Label>Enter your password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="psw"
          required
        ></Input>

        <Label>Repeat Password</Label>
        <Input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        ></Input>
        <Button>Sign Up</Button>
        <Link href="">Sign In</Link>
        {/* <img
            src="/src/assets/images/mobile/BottleForSigninMobile-min.png"
            alt="Bottle"
          /> */}
        {/* </div> */}
        {/* </FormContent> */}
      </SignUpForm>
    </FormContainer>
  );
};
