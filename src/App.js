import React, { useState } from 'react';
import ApiData from './services/api';
import Column from './components/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import produce from 'immer';

function App() {
  const [data, setData] = useState(ApiData);
  const { columns, columns_order, tasks } = data;

  const onDragEnd = result => {
    const { draggableId, source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

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
      {columns_order.map(colId => {
        const col_tasks = columns[colId].tasks.map(taskId => tasks[taskId]);
        const content = { ...columns[colId], tasks: col_tasks };
        return <Column key={colId} id={colId} data={content} />;
      })}
    </DragDropContext>
  );
}

export default App;
