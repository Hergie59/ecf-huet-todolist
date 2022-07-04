// import './App.css'
import ToDoList from './components/ToDoList'
import AddTask from './components/AddTask'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <ToDoList />
      <AddTask /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}

export default App
