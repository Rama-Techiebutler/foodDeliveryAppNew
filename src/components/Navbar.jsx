import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../asserts/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyle.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const { datas, setDatas } = props;
  console.log(datas);
  // const [btnName, setBtnNameReact] = useState("Login");
  const [isNavOpen, setNavOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const [getUser, setGetUser] = useState(null);

  const getUserDetials = () => {
    const item = localStorage.getItem("logInfo");
    // console.log(item);
    item ? setGetUser(item) : setGetUser(null);
  };
  // console.log(getUser);

  useEffect(() => {
    getUserDetials();
    // console.log("calling on getuser change");
  }, [datas]);

  // const { loggedInUser } = useContext(UserContext);
  // console.log(getUser);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  // subscribing to store using a
  const cartItem = useSelector((store) => store.cart.items);
  // const addItem = useSelector((store))
  console.log(cartItem.length);
  // const btnClick = () => {
  //   setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"));
  // };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navbar-toggle" onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`nav-item ${isNavOpen ? "active" : ""}`}
        onClick={toggleNav}
      >
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart-({cartItem.length})</Link>
          </li>
          <li>
            {!datas ? (
              <Link to="/login">
                <button>
                  <FaUserAlt />
                  Login
                </button>
              </Link>
            ) : (
              <li className="user">
                <FaUserAlt />
                <div className="username">{getUser}</div>
              </li>
            )}
          </li>
          {datas && (
            <li>
              <button
                onClick={() => {
                  // localStorage.clear();
                  localStorage.removeItem("logInfo");
                  setGetUser(null);
                  setDatas(null);
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
