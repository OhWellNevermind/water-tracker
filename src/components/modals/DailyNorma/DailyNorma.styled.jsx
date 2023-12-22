import styled from 'styled-components';
import { colors } from '../../../constants';

export const Window = styled.div`
  width: 280px;
  border-radius: 10px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${colors.WHITE};
`;

export const Title = styled.h2`
font-size: 26px;
font-weight: 500;
line-height: 1.23;
`;