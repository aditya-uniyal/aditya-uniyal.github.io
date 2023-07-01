import './App.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const applicationBasename =
  process.env.PUBLIC_URL + (process.env.PUBLIC_URL.endsWith('/') ? '' : '/')

function App() {
  return (
    <>
      <BrowserRouter basename={applicationBasename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
