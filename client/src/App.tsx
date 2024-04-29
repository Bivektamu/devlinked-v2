import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Toast from './components/ui/Toast'
import { useSelector } from 'react-redux'
import { removeToast, toasts } from './store/slices/toastSlice'
import DashboardRoot from './pages/DashBoard/DashboardRoot'
import PrivateRoute from './components/auth/PrivateRoute'
import DashbardMessages from './pages/DashBoard/DashbardMessages'
import DashbardTasks from './pages/DashBoard/DashbardTasks'
import Dashboard from './pages/DashBoard'
import { useEffect } from 'react'
import { useStoreDispatch } from './store'
import { auth, getAuthStatus } from './store/slices/authSlice'

function App() {
  const all_toasts = useSelector(toasts)
  const dispatch = useStoreDispatch()

  const authState = useSelector(auth)

  
  useEffect(()=>{
    dispatch(getAuthStatus())
  }, [])
  useEffect(()=>{
    console.log(authState);
    
  }, [authState])

  useEffect(()=> {
    if(all_toasts.toasts.length > 0) {
      setTimeout(()=>dispatch(removeToast()), 1000)
    }
  }, [all_toasts])
  return (
    <main className='flex'>
      <Router>
        {all_toasts.toasts.length > 0 && <Toast alerts={all_toasts} />}
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/dashboard' element={<PrivateRoute Component={Dashboard} />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
