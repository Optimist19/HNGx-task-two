import { Route, Routes } from "react-router-dom"
import Movie from "./Movies/Movie"
import CardDynamicComp from "./Movies/CardDynamicComp"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="movieDetails/:id"  element={<CardDynamicComp />}>
           
        </Route>
      </Routes>
    </>
  )
}

export default App
