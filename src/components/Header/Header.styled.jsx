import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 8px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 767px) {
    padding: 16px 20px 0 20px;
  }

  @media (min-width: 1439px) {
    padding: 12px 112px 0 112px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h2`
  text-transform: uppercase;
  color: #407bff;
  font-size: 12px;
  font-weight: 700;
  margin-left: 4px;
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
