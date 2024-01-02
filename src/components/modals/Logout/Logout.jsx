import {
  Container,
  H2,
  ButtonClose,
  ButtonLogout,
  Question,
  Wrap,
  Topic,
  StyleClosePlus,
  ButtonClosePlus,
  WrapDelete,
} from "./Logout.styled";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/user/operations";
import { CirclePlus } from "../../icons/CirclePlus";

const Logout = ({ onClose, isDelete, isLogout }) => {
  const dispatch = useDispatch();

  const logoutButton = (user) => {
    dispatch(logout(user));
  };

  const closeModal = () => {
    onClose(false);
  };

  return (
    <BaseModalWrap onClose={closeModal}>
      <Container>
        <Topic>
          {isDelete && <H2>Delete entry</H2>}
          {isLogout && <H2>Log out</H2>}
          <ButtonClosePlus onClick={() => onClose()}>
            <StyleClosePlus>
              <CirclePlus />
            </StyleClosePlus>
          </ButtonClosePlus>
        </Topic>
        {isDelete && (
          <Question> Are you sure you want to delete the entry?</Question>
        )}
        {isLogout && <Question>Do you really want to leave?</Question>}
        {isDelete && (
          <WrapDelete>
            <ButtonClose onClick={closeModal}>Cancel</ButtonClose>
            <ButtonLogout onClick={logoutButton}>Delete</ButtonLogout>
          </WrapDelete>
        )}
        {isLogout && (
          <Wrap>
            <ButtonClose onClick={closeModal}>Cancel</ButtonClose>
            <ButtonLogout onClick={logoutButton}>Log out</ButtonLogout>
          </Wrap>
        )}
      </Container>
    </BaseModalWrap>
  );
};

export default Logout;
