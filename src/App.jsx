import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ResumeGerator from './pages/ResumeGerator'
import User from './pages/User'
import History from './pages/Histroy'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from './pages/ViewResume'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGerator />} />
        <Route path='/form' element={<User />} />
        <Route path='/history' element={<History />} />
        <Route path='/resume/:id/view' element={<ViewResume />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
