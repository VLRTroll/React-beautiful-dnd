import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  border-radius: 7px;
  padding: 8px;

  ${props =>
    props.isDraggingOver &&
    css`
      background: rgba(123, 123, 123, 0.2);
    `};
`;
