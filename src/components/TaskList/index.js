import React from 'react';

import { Container } from './styles';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task';

export default function TaskList({ id, tasks }) {
  return (
    <Droppable droppableId={id} type="TASK">
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          {tasks.map((task, i) => (
            <Task key={task.id} id={task.id} index={i} data={task} />
          ))}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}
