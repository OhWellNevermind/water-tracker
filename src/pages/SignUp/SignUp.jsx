import { HiddenIcon } from "../../components/icons/HiddenIcon";
import {
  // FormContent,
  SignUpForm,
  Label,
  Input,
  SignUpButton,
  Link,
  Title,
  StyledBackground,
  IconButton,
  InputContainer,
  FormContainer,
  Bottle,
} from "./SignUp.styled";

export const SignUp = () => {
  return (
    <FormContainer>
      <StyledBackground />
      <Bottle />
      <SignUpForm>
        <Title>Sign Up</Title>
        {/* <FormContent> */}
        <Label>Enter your email</Label>
        <Input type="email" placeholder="E-mail" name="email" required></Input>

        <Label>Enter your password</Label>
        <InputContainer>
          <Input
            type="password"
            placeholder="Password"
            name="psw"
            required
          ></Input>
          <IconButton>
            <HiddenIcon width={16} height={16} stroke={"blue"}></HiddenIcon>
          </IconButton>
        </InputContainer>

        <Label>Repeat password</Label>
        <InputContainer>
          <Input
            type="password"
            placeholder="Repeat password"
            name="psw-repeat"
            required
          ></Input>
          <IconButton>
            <HiddenIcon width={16} height={16} stroke={"blue"}></HiddenIcon>
          </IconButton>
        </InputContainer>

        <SignUpButton>Sign Up</SignUpButton>
        <Link href="">Sign In</Link>
        {/* </FormContent> */}
      </SignUpForm>
    </FormContainer>
  );
};
