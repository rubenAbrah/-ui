import React from 'react';

import Gantt, {
  Tasks, Dependencies, Resources, ResourceAssignments, Column, Editing,
} from 'devextreme-react/gantt';
 
function GanttComponent({tasks}) {
  return (
    <Gantt
      taskListWidth={400}
      scaleType="days"
      height={500}
      rootValue={-1}
      >

      <Tasks dataSource={tasks} />  
      <Column dataField="title" caption="Subject" width={200} />
      <Column dataField="start" caption="Start Date" />
      <Column dataField="end" caption="End Date" />
 
    </Gantt>
  );
}

export default GanttComponent;
