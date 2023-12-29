import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 320px;

  @media (min-width: 767px) {
    max-width: 768px;
  }

  @media (min-width: 1439px) {
    max-width: 1440px;
  }
`;
