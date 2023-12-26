import {
  UserLMWrapper,
  UserLMDiv,
  UserLMBtn,
  UserLMText,
} from "./UserLogoModal.styled";
import { SettingsIcon } from "../icons/SettingsIcon";
import { LogOutIcon } from "../icons/LogOutIcon";
import { colors } from "../../constants";
import { UserModal } from "../modals/UserModal/UserModal";
import { useState } from "react";

export const UserLogoModal = ({ isModalopened }) => {
  const [isUserModOpened, setIsUserModOpened] = useState(false);
  function toggleModal() {
    setIsUserModOpened((value) => !value);
    console.log(isUserModOpened);
  }

  return isModalopened ? (
    <UserLMWrapper onClick={() => toggleModal()}>
      <UserLMDiv onClick={(e) => e.stopPropagation()}>
        <UserLMBtn type="button" onClick={() => toggleModal()}>
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
            toggleModal();
          }}
        />
      )}
    </UserLMWrapper>
  ) : null;
};
