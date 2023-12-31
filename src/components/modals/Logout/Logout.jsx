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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/user/operations";
import { CirclePlus } from "../../icons/CirclePlus";
import { deleteEntry } from "../../../redux/waterTracker/operations";
import { selectTodayWaterData } from "../../../redux/waterTracker/selectors";

const Logout = ({ onClose, isDelete, isLogout }) => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectTodayWaterData);
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
          {isDelete && (
            <ButtonLogout
              onClick={() => {
                dispatch(deleteEntry(id));
                onClose();
              }}
            >
              Delete
            </ButtonLogout>
          )}
          {isLogout && (
            <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>
          )}
        </ButtonsWrap>
      </Container>
    </BaseModalWrap>
  );
};

export default Logout;
