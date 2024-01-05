import {
  Container,
  H2,
  ButtonClose,
  ButtonLogout,
  Question,
  Topic,
  StyleClosePlus,
  ButtonClosePlus,
  ButtonsWrap,
} from "./Logout.styled";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/user/operations";
import { CirclePlus } from "../../icons/CirclePlus";

const Logout = ({ onClose, isDelete, isLogout }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <BaseModalWrap onClose={onClose}>
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
        <ButtonsWrap>
          <ButtonClose onClick={onClose}>Cancel</ButtonClose>
          {isDelete && <ButtonLogout onClick={() => {}}>Delete</ButtonLogout>}
          {isLogout && (
            <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>
          )}
        </ButtonsWrap>
      </Container>
    </BaseModalWrap>
  );
};

export default Logout;
