import styled from 'styled-components';
import { CircularProgress, IconButton } from '@material-ui/core';

export const Wrapper = styled.div`
  margin: 1rem;
`;

export const CircularProgressCustom = styled(CircularProgress)`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
`;

export const IconButtonStyled = styled(IconButton)`
  position: fixed !important;
  z-index: 100;
  color: palegoldenrod !important;
  right: 20px;
  top: 20px;
`;
