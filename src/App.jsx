import './App.css'
import ArticleDetails from './pages/ArticleDetails'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;