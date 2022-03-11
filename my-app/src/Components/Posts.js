import { React, Component } from "react";

class Posts extends Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.getPosts()
   }

   async getPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      console.log(data)
   }

   render() {
      return <h1>test</h1>
   }
}

export default Posts

   //1 создается дом разметка с нашим компонентом
   //2 задаются состояния, добавляются значения
   //3 очистка данных