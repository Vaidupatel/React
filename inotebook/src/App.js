import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import NoteState from "./context/notes/NotesState";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
