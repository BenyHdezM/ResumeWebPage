import Header from "./components/header"
import Resume from "./components/resume"

import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route
        path="/Home"
        element={<Resume />}
      />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
