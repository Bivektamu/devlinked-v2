import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.scss'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

function App() {

  return (
    <main className='flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
