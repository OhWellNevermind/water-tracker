import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/user/operations";
import { Container } from "../../components/Container/Container";

export const Home = ({ setModalName }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <div>Home</div>
      <button
        onClick={() => {
          setModalName("settings");
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          setModalName("logout");
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          setModalName("addWater");
        }}
      >
        Open
      </button>
      <button
        onClick={() => {
          setModalName("delete");
        }}
      >
        Open
      </button>
    </Container>
  );
};
