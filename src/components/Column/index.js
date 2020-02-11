import React from 'react';

import { Container, Title } from './styles';
import TaskList from '../TaskList';
import { Draggable } from 'react-beautiful-dnd';

export default function Column({ id, index, data }) {
  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>{data.title}</Title>

          <TaskList id={id} tasks={data.tasks} />
        </Container>
      )}
    </Draggable>
  );
}
