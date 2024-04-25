import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Toast from './components/ui/Toast'
import { useSelector } from 'react-redux'
import { errors } from './components/store/slices/errorSlice'
import DashboardRoot from './pages/DashBoard/DashboardRoot'
import PrivateRoute from './components/auth/PrivateRoute'
import DashbardMessages from './pages/DashBoard/DashbardMessages'
import DashbardTasks from './pages/DashBoard/DashbardTasks'
import Dashboard from './pages/DashBoard'

function App() {
  const all_errors = useSelector(errors)
  return (
    <main className='flex'>
      <Router>
        {all_errors.errors.length > 0 && <Toast alerts={all_errors} />}

        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/dashboard' element={<PrivateRoute Component={Dashboard} />}>
            <Route path='' element={<DashboardRoot />} />
            <Route path='messages' element={<DashbardMessages />} />
            <Route path='tasks' element={<DashbardTasks />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App
