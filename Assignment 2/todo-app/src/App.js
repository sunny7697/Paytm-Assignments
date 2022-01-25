import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddTask from "./components/AddTask/AddTask";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken } from "./components/features/todos/todosSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      const response = await axios
        .get("https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609")
        .catch((err) => console.log("Err: ", err));

      dispatch(addToken(response.data));
    };
    fetchToken();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddTask dispatch={dispatch} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
