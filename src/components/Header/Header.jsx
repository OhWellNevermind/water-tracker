import { useSelector } from "react-redux";
import { LogoIcon } from "../icons/LogoIcon";
import { UserIcon } from "../icons/UserIcon";
import {
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  LogoText,
  SignInButton,
  UserLogo,
  UserName,
} from "./Header.styled";
import { selectIsLoggedIn } from "../../redux/user/selectors";
import { UserLogoModal } from "../modals/UserLogoModal/UserLogoModal";
import { useState } from "react";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";
import { colors } from "../../constants";
import { useAuth } from "../../hooks/useAuth";

export const Header = ({ setModalName }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { user } = useAuth();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  console.log(user);
  const toogleModal = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <header>
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoIcon width={40} height={48} />
          <LogoText>Tracker of water</LogoText>
        </LogoContainer>
        {isLoggedIn ? (
          <HeaderWrapper onClick={() => toogleModal()}>
            <UserLogoModal
              setModalName={setModalName}
              isModalOpened={isPopUpOpen}
            />
            <UserName>{user.username}</UserName>
            <UserLogo src={user.avatarURL} />
            <ChevronDownIcon width={16} height={16} stroke={colors.BLUE} />
          </HeaderWrapper>
        ) : (
          <SignInButton to="signin">
            <span>Sign in</span>
            <UserIcon width={28} height={28} stroke="#2F2F2F" />
          </SignInButton>
        )}
      </HeaderContainer>
    </header>
  );
};
