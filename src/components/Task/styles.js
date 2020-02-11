import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: rgba(73, 73, 73, 0.2);
  padding: 8px;
  margin-bottom: 8px;

  border: 1px solid lightgray;
  border-radius: 5px;

  ${props =>
    props.isDragging &&
    css`
      background: lightgreen;
    `}
`;
