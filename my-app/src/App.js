import { React, Component } from "react";
import FormAddTask from "./Components/FormAddTask";
import TaskList from "./Components/TaskList";

import './Main.css'

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         tasks: [
            { nameTask: "Помыть посуду", priority: 'Н' },
            { nameTask: "Пропылососить", priority: 'В' },
            { nameTask: "Вытрать пыль", priority: 'В' },
            { nameTask: "Вынести мусор", priority: 'Н' },
            { nameTask: "Помыть пол", priority: 'Н' },
         ]
      }
      this.removeTask = this.removeTask.bind(this)
   }

   removeTask(task) {
      console.log('Вызов ремов в апп')
      const new_tasks = this.state.tasks.filter(t => t.nameTask !== task.nameTask)
      this.setState({ tasks: new_tasks })
   }


   addTasks(task) {
      this.setState(task);
   }

   render() {
      console.log('Передаем функцию удаления в таск лист')
      return <>
         <FormAddTask tasksList={this.state.tasks} />
         <TaskList removeTask={this.removeTask} tasksList={this.state.tasks} />
      </>
   }
}

export default App; 