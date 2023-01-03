
import { useState } from 'react';
import './App.css';
import ListNotes from './Components/ListNotes';
import NewNote from './Components/NewNote';
function App() {


  const [tasks, setTasks] = useState([])

  const addNewTask = (newTask)=>{
   
    // const temp = tasks
    // temp.push(newTask)
    // setTasks(temp)
   
    setTasks(tasks.concat(newTask))
  }
  const deleteTask = (id) =>{

        const deletedTasks = tasks.filter((task) => task.id!==id)

        setTasks(deletedTasks)

  }


  
  return (
    <>
     <h1>Note Taker</h1>

      <NewNote addNewTask={addNewTask}/>
      <ListNotes tasks={tasks}  deleteTask={deleteTask}/>

    </>
  );
}

export default App;
