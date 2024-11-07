// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './Navbar/Navbar'
// import Footer from './Footer/Footer'
// import Signup from './SignUp/Signup'
// import About from './About/About'
// import Contact from './Contact/Contact'
// import Jobs from './Jobs/Jobs'
import MyRoutes from '../MyRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <Navbar/>
      <Signup/>
      <About/>
      <Contact/>
      <Jobs/>
      <div className="flex flex-col min-h-screen">
      <Footer/>
      </div> */}
      <MyRoutes/>
    </div>
  )
}

export default App
