import Header from './components/Header'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }
    
    getTasks()

  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(
      'http://localhost:5000/tasks'
    )
    const data = await res.json()


    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`
    )
    const data = await res.json()


    return data
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)

 
    })

    const data = await res.json()
  
    setTasks([...tasks, data])
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,
    reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
    })
    
    const data = await res.json()
    
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
     
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} title = "Header" 
      showAdd = {showAddTask}/> 
      <Routes>
      <Route path ='/react-task-tracker' 
      element ={<>
         {showAddTask && <AddTask onAdd = {addTask}/> }
      {tasks.length > 0 ? <Tasks tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}/> : 'No tasks to show'}
        </>}
      render = {(props) => {
        
      }}/>
      <Route path ='react-task-tracker/about' element = {<About/>} />
      </Routes>
      <Footer />
      </div>

  </Router>

  )
}


export default App;
