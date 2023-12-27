import { LogoIcon } from "../icons/LogoIcon";
import { UserIcon } from "../icons/UserIcon";
import {
  LogoContainer,
  LogoText,
  SignInButton,
  StyledHeader,
} from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer to="/">
        <LogoIcon width={40} height={48} />
        <LogoText>Tracker of water</LogoText>
      </LogoContainer>
      <div>
        <SignInButton to="signin">
          <span>Sign in</span>
          <UserIcon width={28} height={28} stroke="#2F2F2F" />
        </SignInButton>
      </div>
    </StyledHeader>
  );
};
