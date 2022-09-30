import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="upload" element={<Upload />} />
        <Route path="video/:videoId" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
