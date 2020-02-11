import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 300px;
  background: #fff;

  border: 2px solid rgba(73, 73, 73, 0.4);
  border-radius: 7px;

  padding: 12px;
  margin: 10px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 10px 5px; /* vertical horizontal */
  text-align: center;
  font-style: italic;
`;

export const TaskList = styled.div`
  flex-grow: 1;
  border-radius: 7px;
  padding: 8px;

  ${props =>
    props.isDraggingOver &&
    css`
      background: rgba(123, 123, 123, 0.1);
    `}
`;
