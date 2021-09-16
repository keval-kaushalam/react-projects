import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from "axios"

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const apiurl = "https://www.redefinesolutions.com";
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=> {
      const getTasks = () => {
        const data = axios.get('https://www.redefinesolutions.com/api/Access/users').then((response)=>{
          setTasks(response.data)
        })
      }
      getTasks()
  }, [])


  //Fetch Tasks
  const fetchTasks = async() => {
    const res = await fetch('https://www.redefinesolutions.com/api/Access/users')
    console.log(res)
    const data = await res.json()

    // const data = axios.get('https://www.redefinesolutions.com/api/Access/users')
    // return data
    // return data
  }

  //Fetch Task
  const fetchTask = async(id) => {
    const res = await fetch(`https://www.redefinesolutions.com/api/Access/users/${id}`)
    const data = await res.json()

    return data
  }

  //Delete Task 
  const deleteTask = async (id) => {
    // await fetch(`https://www.redefinesolutions.com/api/Access/users/delete/${id}`)
    axios.get(`https://www.redefinesolutions.com/api/Access/users/delete/${id}`)

    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder }

    // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(updateTask)
    // })

    // setTasks(
    //   tasks.map(
    //     (task)=> task.id === id ? {...task, reminder: !task.reminder} : task
    //     )
    // )
  }

  //Add Task 

  const addTask = async (task) => {

    const res = axios.post('https://www.redefinesolutions.com/api/Access/users/add',task).then((response)=>{
      const data = response.data
      setTasks([...tasks, data])
    }).catch((error)=>{
      console.log(error)
    })

    // const res = await fetch('https://www.redefinesolutions.com/api/Access/users/add',{
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })

    // // const data = await res.json()
    // const data = await res.json()
    // setTasks([...tasks, data])
  }

  return (
    <Router>
      <div className="container">
        <Header title='Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <hr />
        <Route path="/" exact render={(props) => 
          (
          <>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
          </>
          )} />
        <Route path="/about" component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Class Based Component</h1>
//   }
// }

export default App;
