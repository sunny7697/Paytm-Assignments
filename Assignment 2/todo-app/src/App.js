import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddTask from "./components/AddTask/AddTask";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home dispatch={dispatch} />} />
          <Route path="/login" element={<Login dispatch={dispatch} />} />
          <Route path="/add" element={<AddTask dispatch={dispatch} />} />
          <Route path="/edit/:id" element={<AddTask dispatch={dispatch} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
