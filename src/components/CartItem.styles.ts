import styled from 'styled-components';

export const Wrapper = styled.aside`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;

  .container {
    flex: 1;
  }

  .buttons,
  .info {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 1rem;
  }
`;
