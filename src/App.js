import Header from "./components/header"
import Home from "./components/home"

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route
        path="/home"
        element={<Home />}
      />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
