import {
  Box,
  TextField,
  Card,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import "./LoginFormStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "./Navbar";

const LoginForm = (props) => {
  const { setDatas } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const navigate = useNavigate();
  // const [loginData, setLoginData] = useState({
  //   name: "",
  //   password: "",
  // });
  const onSubmit = (data) => {
    const storedInputdata = JSON.parse(localStorage.getItem("userList"));
    // console.log(data);
    console.log(storedInputdata);
    let ismatch = false;
    storedInputdata.map((key) => {
      if (key.firstName == data.name && key.password == data.password) {
        ismatch = true;
      }
    });
    if (ismatch == true) {
      console.log("successfully login");
      setDatas(data.name);
      sessionStorage.setItem("logInfo", data.name);
      localStorage.setItem("logInfo", data.name);

      navigate("/");
    } else {
      alert("invalid user");
    }
  };
  // const loginClick = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "550px",
        }}
      >
        <Card
          sx={{
            height: 400,
            width: 350,
            background: "#f9fafd",
            boxShadow: "1px -1px 5px #3c3e4f",
          }}
          variant="outlined"
        >
          <Box sx={{ ml: 6 }}>
            <h1>Login</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ width: 240 }}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              {...register("name", { required: "This is required" })}
              helperText={errors?.name?.message}
              error={errors?.name}
              // value={loginData.name}
              // error = {errors.}
              // onChange={(e) => {
              //   setLoginData({ ...loginData, name: e.target.value });
              // }}
            />
            <br />
            <TextField
              sx={{ width: 240 }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              helperText={errors?.password?.message}
              error={errors?.password}
              {...register("password", { required: "This is required" })}

              // value={loginData.password}
              // onChange={(e) => {
              //   setLoginData({ ...loginData, password: e.target.value });
              // }}
            />
            <Box
              sx={{
                display: "flex",
                width: 250,
              }}
            >
              <Checkbox />
              <h3>Required</h3>
            </Box>
          </Box>
          <Box sx={{ ml: 7 }}>
            <Button
              type="submit"
              sx={{
                width: 90,
                background: "#da6517",
                color: "black",
                "&:hover": {
                  background: "#e6d9cf",
                },
              }}
              // onClick={loginClick}
            >
              Login
            </Button>
          </Box>
          <br />
          <Box sx={{ ml: 7 }}>
            <Box>
              Not a Member?{"  "}
              <Typography
                sx={{
                  color: "#4f36a8",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                variant="subtitle1"
                component="span"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </form>
  );
};

export default LoginForm;
