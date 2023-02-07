import Header from "./components/header";
import Resume from "./pages/resume";
import About from "./pages/about";


import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route
        path="/"
        element={<Resume />}
      />
      <Route
        path="/aboutMe"
        element={<About />}
      />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
