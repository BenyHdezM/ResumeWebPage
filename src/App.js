import Header from "./components/header";
import Resume from "./pages/resume";
import About from "./pages/about";
import ContactMe from "./pages/contact";
import Projects from "./pages/projects";
import Videos from "./pages/videos";



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
      <Route
        path="/contact"
        element={<ContactMe />}
      />
      <Route
        path="/projects"
        element={<Projects />}
      />
      <Route
        path="/videos"
        element={<Videos />}
      />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
