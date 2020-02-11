import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import produce from 'immer';

import ApiData from '../../services/api';
import Column from '../Column';
import { Container } from './styles';

export default function Board() {
  const [data, setData] = useState(ApiData);
  const { columns, columns_order, tasks } = data;

  const onDragEnd = result => {
    const { source, destination, type } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'COLUMN') {
      moveColumn(result);
    } else {
      moveTask(result);
    }
  };

  const moveColumn = result => {
    const { draggableId, source, destination } = result;
    setData(
      produce(data, draft => {
        draft.columns_order.splice(source.index, 1);
        draft.columns_order.splice(destination.index, 0, draggableId);
      })
    );
  };

  const moveTask = result => {
    const { draggableId, source, destination } = result;
    const { droppableId: srcId, index: srcIdx } = source;
    const { droppableId: destId, index: destIdx } = destination;
    setData(
      produce(data, draft => {
        const getTasks = id => draft.columns[id].tasks;
        getTasks(srcId).splice(srcIdx, 1);
        getTasks(destId).splice(destIdx, 0, draggableId);
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {columns_order.map((colId, index) => {
              const col_tasks = columns[colId].tasks.map(
                taskId => tasks[taskId]
              );
              const content = { ...columns[colId], tasks: col_tasks };
              return (
                <Column key={colId} id={colId} index={index} data={content} />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}
