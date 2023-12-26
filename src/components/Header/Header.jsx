import { LogoIcon } from "../icons/LogoIcon";
import { UserIcon } from "../icons/UserIcon";
import { ChevronDownIcon } from "../icons/ChevronDownIcon";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { useState } from "react";

import {
  HeaderSection,
  LogoText,
  HeaderWrapper,
  HeaderBtn,
  HeaderLink,
  UserName,
  UserLogo,
  Span,
} from "./Header.styled";
import { colors } from "../../constants";

export const Header = () => {
  const [isModalopened, setIsModalOpened] = useState(false);

  function toggleModal() {
    setIsModalOpened((value) => !value);
    console.log(isModalopened);
  }

  const defaultName = "V";
  return (
    <div>
      <HeaderSection>
        <HeaderLink to="/">
          <LogoIcon width={40} heidht={48} />
          <LogoText>
            tracker<br></br>of water
          </LogoText>
        </HeaderLink>

        <HeaderWrapper onClick={() => toggleModal()}>
          <UserLogoModal isModalopened={isModalopened} />
          <UserName>{defaultName}</UserName>
          <UserLogo />
          <ChevronDownIcon width={16} height={16} stroke={colors.BLUE} />
        </HeaderWrapper>

        <HeaderLink to="/signin">
          <HeaderWrapper>
            <HeaderBtn type="button">
              <Span>Sign in</Span>
            </HeaderBtn>
            <div>
              <UserIcon width={40} heidht={48} stroke={colors.GRAY} />
            </div>
          </HeaderWrapper>
        </HeaderLink>
      </HeaderSection>
    </div>
  );
};
