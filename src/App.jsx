import { Route, Routes } from "react-router"
import DetailsPage from "./components/DetailsPage"
import Homepage from "./components/Homepage"

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
