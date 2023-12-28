import { LogoIcon } from "../icons/LogoIcon";
import { UserIcon } from "../icons/UserIcon";
import {
  HeaderContainer,
  LogoContainer,
  LogoText,
  SignInButton,
} from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoIcon width={40} height={48} />
          <LogoText>Tracker of water</LogoText>
        </LogoContainer>
        <SignInButton to="signin">
          <span>Sign in</span>
          <UserIcon width={28} height={28} stroke="#2F2F2F" />
        </SignInButton>
      </HeaderContainer>
    </header>
  );
};
