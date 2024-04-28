import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: JSON.parse(localStorage.getItem("userList")),
  //   const storedInputdata = JSON.parse(localStorage.getItem("userList"));
});

export default UserContext;
