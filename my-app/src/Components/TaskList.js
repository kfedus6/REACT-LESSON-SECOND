import { React, Component } from "react";
import Task from "./Task"

class TaskList extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      console.log('Передаем функцию удаления из такс лист в таск')
      if (this.props.tasksList.length == 0) {
         return <div>Постон нету</div>
      }
      let tasks = this.props.tasksList.map((taskObject, index) => {
         return <Task key={index} removeTask={this.props.removeTask} number={index + 1} task={taskObject} />
      })
      return (
         <div className="main__task">
            {tasks}
         </div>
      );
   }
}

export default TaskList;