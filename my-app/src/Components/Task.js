import { React, Component } from "react";

class Task extends Component {
   constructor(props) {
      super(props)
      this.remove = this.remove.bind(this);
   }

   remove() {
      console.log('Вызываем функцию удаления из таск')
      this.props.removeTask(this.props.task)
   }

   render() {
      return (
         <div className="block__list">
            <div>
               <span>{this.props.number}.</span>
               <span>{this.props.task.nameTask}</span>
               <span>{this.props.task.priority}</span>
            </div>
            <div className="btn">
               <button className="remove" onClick={this.remove}>Delete</button>
            </div>
         </div>
      )
   }
}

export default Task;