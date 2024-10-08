import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from "./Pages/Home"
import MyProfile from './Pages/MyProfile'
import RegisterProfile from './Pages/RegisterProfile'
import SearchMovie from './Pages/SearchMovie'
import WatchList from './Pages/WatchList'

const App = () => {

  return (
    <>
       <BrowserRouter>
      <nav className='navBar'>
        <Link to="/">Home</Link>
        <Link to="/myProfile">My Profile</Link>
        <Link to="/registerProfile">Register</Link>
        <Link to="/searchMovie">Movie Search</Link>
        <Link to="/watchList">Watch List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myProfile" element={<MyProfile />}></Route>
        <Route path="/registerProfile" element={<RegisterProfile />}></Route>
        <Route path="/searchMovie" element={<SearchMovie />}></Route>
        <Route path="/watchList" element={<WatchList />}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App