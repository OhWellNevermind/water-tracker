import { useState } from "react";
import { colors } from "../../constants";
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
