import { React, Component } from "react";

class FormAddTask extends Component {
   constructor(props) {
      super(props)

      this.state = { task: "", priority: "" }

      this.press = this.press.bind(this);
      this.changeTask = this.changeTask.bind(this);
      this.changePriority = this.changePriority.bind(this);

   }

   press() {
      console.log(this.state.task);
   }

   changeTask(e) {
      this.setState({ task: e.target.value });
   }

   changePriority(e) {
      this.setState({ priority: e.target.value });
   }

   render() {
      return (
         <div className="form__task">
            <input className="task__new" onChange={this.changeTask} value={this.state.task} type="text" />
            <input className="priority__new" onChange={this.changePriority} value={this.state.priority} type="text" />
            <button onClick={this.press}>Добавить</button>
         </div>
      )
   }
}

export default FormAddTask;