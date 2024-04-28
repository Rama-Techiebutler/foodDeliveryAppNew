import {
  Box,
  TextField,
  Card,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Typography,
  CardContent,
} from "@mui/material";
import "./LoginFormStyle.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const navigate = useNavigate();
  // const [inputData, setInputData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  // });
  const onSubmit = (data) => {
    if (data.confirmPassword !== data.password) {
      alert("Passwords don't match");
    } else {
      let storedData = JSON.parse(localStorage.getItem("userList")) || [];
      storedData.push(data);
      localStorage.setItem("userList", JSON.stringify(storedData));
      console.log(storedData);
      alert("success");
      navigate("/login");
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  // const signupClick = () => {

  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Card
          sx={{
            minHeight: 300,
            width: 500,
            background: "#f9fafd",
            boxShadow: "1px -1px 5px 0px #3c3e4f",
            padding: 2,
            // margin: 6,
          }}
          variant="outlined"
        >
          <Box sx={{ ml: 2 }}>
            <h1>Sign up</h1>
          </Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <TextField
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="FirstName"
                variant="outlined"
                // value={inputData.firstname}
                helperText={errors?.firstName?.message}
                error={errors?.firstName}
                {...register("firstName", {
                  required: "This is required",
                })}
                // onChange={(e) => {
                //   setInputData({ ...inputData, firstname: e.target.value });
                // }}
              ></TextField>
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                helperText={errors?.lastName?.message}
                error={errors?.lastName}
                // value={inputData.lastname}
                {...register("lastName", {
                  required: "This is required",
                })}
                // onChange={(e) => {
                //   setInputData({ ...inputData, lastname: e.target.value });
                // }}
              ></TextField>
              <TextField
                sx={{ mb: 2 }}
                id="outlined-basic"
                label="MobileNumber"
                variant="outlined"
                helperText={errors?.mobileNumber?.message}
                error={errors?.mobileNumber}
                {...register("mobileNumber", {
                  required: "This is required",
                  pattern: {
                    type: Number,
                    value: /^(0|91)?[6-9][0-9]{9}$/,
                    message: "Please enter valid 10-digit number",
                  },
                })}
              ></TextField>
              <TextField
                id="outlined-basic"
                label="EmailId"
                variant="outlined"
                helperText={errors?.emailId?.message}
                error={errors?.emailId}
                {...register("emailId", {
                  required: "This is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "please enter valid email",
                  },
                })}
              ></TextField>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                helperText={errors?.password?.message}
                error={errors?.password}
                {...register("password", {
                  required: "This is required",
                })}
                // value={inputData.password}
                // onChange={(e) => {
                //   setInputData({ ...inputData, password: e.target.value });
                // }}
              ></TextField>
              <TextField
                id="outlined-basic"
                label="ConfirmPassword"
                variant="outlined"
                helperText={errors?.confirmPassword?.message}
                error={errors?.confirmPassword}
                {...register("confirmPassword", {
                  required: "This is required",
                })}
                // value={inputData.confirmpassword}
                // onChange={(e) => {
                //   setInputData({ ...inputData, confirmpassword: e.target.value });
                // }}
              ></TextField>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Box sx={{ mt: 2, fontSize: 20, fontWeight: "bold" }}>
                Gender :
              </Box>
              <Box>
                {/* <RadioGroup> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  Value="female"
                  // helperText={errors?.Gender?.message}
                  // error={errors?.Gender}
                  // {...register("Gender", {
                  //   required: "This is required",
                  // })}
                >
                  <Box sx={{ display: "flex" }}>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </Box>
                </RadioGroup>
                {/* </RadioGroup> */}
              </Box>
            </Box>
            <Box sx={{ ml: 2, mt: 1 }}>
              <Button
                sx={{ width: 90, background: "#da6517", color: "black" }}
                // onClick={signupClick}
                type="submit"
              >
                Sign Up
              </Button>
            </Box>

            <Box sx={{ ml: 2, mt: 1.5 }}>
              Already have an account?{"  "}
              <Typography
                sx={{
                  color: "#4f36a8",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                variant="subtitle1"
                component="span"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
};

export default SignUp;
