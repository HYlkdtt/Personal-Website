import SideNav from './components/SideNav'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <>
      <SideNav />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
