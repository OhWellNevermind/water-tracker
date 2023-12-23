import { LogoIcon } from "../icons/LogoIcon";
import { UserIcon } from "../icons/UserIcon";

import {
  HeaderSection,
  LogoText,
  HeaderWrapper,
  HeaderBtn,
  HeaderLink,
} from "./Header.styled";
import { colors } from "../../constants";
export const Header = () => {
  //   const defaultName = "V";
  return (
    <div>
      <HeaderSection>
        <HeaderLink to="/">
          <LogoIcon width={40} heidht={48} />
          <LogoText>
            tracker<br></br>of water
          </LogoText>
        </HeaderLink>

        <HeaderLink to="/signin">
          <HeaderWrapper>
            <HeaderBtn type="button">Sign in</HeaderBtn>
            <div>
              <UserIcon width={40} heidht={48} stroke={colors.GRAY} />
            </div>
          </HeaderWrapper>
        </HeaderLink>
      </HeaderSection>
    </div>
  );
};
