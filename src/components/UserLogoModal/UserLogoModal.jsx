import {
  UserLMWrapper,
  UserLMDiv,
  UserLMBtn,
  UserLMText,
} from "./UserLogoModal.styled";
import { SettingsIcon } from "../icons/SettingsIcon";
import { LogOutIcon } from "../icons/LogOutIcon";
import { colors } from "../../constants";

export const UserLogoModal = () => {
  return (
    <UserLMWrapper>
      <UserLMDiv>
        <UserLMBtn type="button">
          <SettingsIcon width={16} heidht={16} stroke={colors.BLUE} />
          <UserLMText>Setting</UserLMText>
        </UserLMBtn>
        <UserLMBtn type="button">
          <LogOutIcon width={16} heidht={16} stroke={colors.BLUE} />
          <UserLMText>Log out</UserLMText>
        </UserLMBtn>
      </UserLMDiv>
    </UserLMWrapper>
  );
};
