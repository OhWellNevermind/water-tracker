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
// import { VisibleIcon } from "../../components/icons/VisibleIcon";

export const SignIn = () => {
  //   const [password, setPassword] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);

  //   const togglePasswordVisibility = () => {
  //     setShowPassword(!showPassword);
  //   };
  return (
    <SignInForm>
      <Title>Sign In</Title>
      <StyledBackground />
      <FormContent>
        <Label>Enter your email</Label>
        <Input type="email" placeholder="E-mail" name="email" required></Input>

        <InputContainer>
          <Input
            type="password"
            // type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="psw"
            required
          ></Input>
          <IconButton>
            <HiddenIcon width={16} height={16} stroke={"blue"}></HiddenIcon>
          </IconButton>
        </InputContainer>

        <SignInButton>Sign In</SignInButton>
        <Link href="">Sign Up</Link>
        {/* <img
          src="/src/assets/images/mobile/BottleForSigninMobile-min.png"
          alt="Bottle"
        /> */}
        <Bottle></Bottle>
      </FormContent>
    </SignInForm>
  );
};
