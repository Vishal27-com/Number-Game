import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Play from '../Pages/Play'
import Leaderboard from '../Pages/Leaderboard'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/play' element={<Play />} />
    <Route path='/leaderboard' element={<Leaderboard />} />
    </Routes>
  )
}

export default AllRoutes