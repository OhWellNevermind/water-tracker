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
import { selectIsLoggedIn, selectUser } from "../../redux/user/selectors";
import { UserLogoModal } from "../modals/UserLogoModal/UserLogoModal";
import { useState } from "react";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";
import { colors } from "../../constants";

export const Header = ({ setModalName }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

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
            <UserName>{user.name}</UserName>
            <UserLogo src={user.avatarUrl} />
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
