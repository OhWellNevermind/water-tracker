import styled from "styled-components";

export const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  min-width: 320px;
  @media (min-width: 320px) {
    padding: 24px 20px;
  }
  @media (min-width: 768px) {
    padding: 40px 32px;
  }
`;
