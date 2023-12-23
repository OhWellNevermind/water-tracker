import { UserLMWrapper } from "./UserLogoModal.styled";
import { SettingsIcon, LogOutIcon } from "../icons/SettingsIcon";
import { colors } from "../../constants";
export const UserLogoModal = () => {
  return (
    <UserLMWrapper>
      <div>
        <button>
          <SettingsIcon width={16} heidht={16} stroke={colors.BLUE} />
          <p>Setting</p>
        </button>
        <button>
          <LogOutIcon width={16} heidht={16} stroke={colors.BLUE} />
          <p>Log out</p>
        </button>
      </div>
    </UserLMWrapper>
  );
};
