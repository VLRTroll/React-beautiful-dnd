import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

export default function Task({ id, index, data }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          aria-roledescription="Anything"
        >
          {data.content}
        </Container>
      )}
    </Draggable>
  );
}
