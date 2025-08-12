import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import StudentTable from './components/StudentTable'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'
import ViewDetails from './components/ViewDetails'

function App() {
 

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<StudentTable/>}></Route>
  <Route path='/student/create' element={<CreateStudent/>}></Route>
  <Route path='/student/edit/:studentid' element={<EditStudent/>}></Route>
  <Route path='/student/view/:studentid' element={<ViewDetails/>}></Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App
