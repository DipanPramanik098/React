import AddTodo from "./components/AddTodo"
import AppList from "./components/AppList"
import AppName from "./components/AppName"


function App() {
  return <center class='todo-container'>
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div class="items-container">
    <AppList></AppList>
    <AppList></AppList></div>
  </center>
}

export default App
