import React from 'react';
import Task from '../Task';
import { Droppable } from 'react-beautiful-dnd';

import { Container, Title, TaskList } from './styles';

export default function Column({ id, data }) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {data.tasks.map((task, i) => (
              <Task key={task.id} id={task.id} index={i} data={task} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
