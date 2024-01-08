import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledContainer } from "../Container/Container.styled";

export const HeaderContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 0 20px;
  margin: 0 auto;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoText = styled.h2`
  text-transform: uppercase;
  color: #407bff;
  font-size: 12px;
  font-weight: 700;
  width: 58px;
`;

export const SignInButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #407bff;
  font-size: 16px;
  line-height: 1.25;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
`;

export const HeaderUserIcon = styled.div`
  width: 28px;
  height: 28px;
`;

export const UserLogo = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 8px;
  margin-right: 4px;
  border-radius: 50%;
  object-fit: contain;
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.33; /* 133.333% */
`;

export const NoImageWrapper = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 8px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: #d7e3ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoImageText = styled.p``;
