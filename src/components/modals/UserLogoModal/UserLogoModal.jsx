import {
  UserLMWrapper,
  UserLMDiv,
  UserLMBtn,
  UserLMText,
} from "./UserLogoModal.styled";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { LogOutIcon } from "../../icons/LogOutIcon";
import { colors } from "../../../constants";
import { UserModal } from "../UserModal/UserModal";
import { useState } from "react";

export const UserLogoModal = ({ isModalOpened }) => {
  const [isUserModOpened, setIsUserModOpened] = useState(false);

  return isModalOpened ? (
    <UserLMWrapper onClick={() => setIsUserModOpened(false)}>
      <UserLMDiv>
        <UserLMBtn type="button" onClick={() => setIsUserModOpened(true)}>
          <SettingsIcon width={16} heidht={16} stroke={colors.BLUE} />
          <UserLMText>Setting</UserLMText>
        </UserLMBtn>
        <UserLMBtn type="button">
          <LogOutIcon width={16} heidht={16} stroke={colors.BLUE} />
          <UserLMText>Log out</UserLMText>
        </UserLMBtn>
      </UserLMDiv>
      {isUserModOpened && (
        <UserModal
          onClose={() => {
            setIsUserModOpened(false);
          }}
        />
      )}
    </UserLMWrapper>
  ) : null;
};
