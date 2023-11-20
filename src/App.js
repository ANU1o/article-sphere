import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Write from "./pages/Write";
import BlogPage from "./pages/BlogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import WriteButton from "./components/WriteButton";
import Explore from "./pages/Explore";

function App() {
  const [show, setShow] = useState(true);
  // eslint-disable-next-line
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div className="App d-flex flex-column min-vh-100 bg-body-secondary user-select-none">
      <Header displayVal={show ? "d-block" : "d-none"} setIsAuth={setIsAuth} />
      <Routes>
        <Route
          path="/"
          element={<Landing setIsAuth={setIsAuth} showStat={setShow} />}
        />
        {/* <Route
          path="/Register"
          element={<Landing showStat={setShow} Register />}
        /> */}
        <Route path="/Home" element={<Home showStat={setShow} />} />
        {/* <Route
          path="/Profile"
          element={
            <Profile setIsAuth={setIsAuth} showStat={setShow} />
          }
        /> */}
        <Route path="/Write" element={<Write showStat={setShow} />} />
        <Route path="/Page/:id" element={<BlogPage showStat={setShow} />} />
        {/* <Route
          path="/Explore"
          element={<Explore showStat={setShow} />}
        
        /> */}
      </Routes>
      <Footer displayVal={show ? "d-block" : "d-none"} />
      <WriteButton displayVal={show ? "d-flex" : "d-none"} />
    </div>
  );
}

export default App;
