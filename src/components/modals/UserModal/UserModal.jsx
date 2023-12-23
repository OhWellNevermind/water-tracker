import BaseModalWrap from "../ModalWrap/ModalWrap";
import { ModalContainer } from "./UserModal.styled";
import { UploadIcon } from "../../icons/UploadIcon";

export const UserModal = ({ setIsOpen }) => {
  return (
    <BaseModalWrap onClose={() => setIsOpen(false)}>
      <ModalContainer>
        <h2>Settings</h2>
        <div>
          <h3>Your photo</h3>
          <div>
            <img src="" alt="" />
            <button>
              <UploadIcon />
              <p>Upload photo</p>
            </button>
          </div>
          <form>
            <h3>Your gender identity</h3>
            <div>
              <label>
                Male
                <input type="radio" name="gender" />
              </label>
              <label>
                Female
                <input type="radio" name="gender" />
              </label>
            </div>
            <h3>Your gender identity</h3>
            <label>
              Your name
              <input type="text" name="name" />
            </label>
            <label>
              E-mail
              <input type="email" name="email" />
            </label>
            <h3>Password</h3>
            <label>
              Outdated password:
              <input type="password" name="outdatedPassword" />
            </label>
            <label>
              New Password:
              <input type="password" name="newPassword" />
            </label>
            <label>
              Repeat new password:
              <input type="password" name="repeatNewPassword" />
              <button type="submit">Save</button>
            </label>
          </form>
        </div>
      </ModalContainer>
    </BaseModalWrap>
  );
};
