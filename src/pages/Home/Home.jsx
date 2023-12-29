import { useState } from "react";
import { colors } from "../../constants";
import { Header } from "../../components/Header/Header";
import { UserModal } from "../../components/modals/UserModal/UserModal";
import { TodayListModal } from "../../components/modals/TodayListModal/todayListModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/user/operations";
import { Container } from "../../components/Container/Container";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <Container>Home</Container>;

};
