import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import appStore from "./utils/appStore";

const App = () => {
  //authentication
  const [datas, setDatas] = useState(null);
  // const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("LogInfo"));
    console.log(datas, "datas");
    console.log(setDatas, "setDatassss");
    if (isLoggedIn) {
      datas(isLoggedIn);
      navigate("/");
    }
  }, []);
  return (
    <Provider store={appStore}>
      <Router>
        {/* <Provider store={appStore}> */}
        <div className="app">
          <Navbar datas={datas} setDatas={setDatas} />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />

            {/* Pass handleLogin function as a prop to LoginForm */}
            <Route path="/login" element={<LoginForm setDatas={setDatas} />} />
            <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
        {/* </Provider> */}
      </Router>
    </Provider>
  );
};
export default App;
