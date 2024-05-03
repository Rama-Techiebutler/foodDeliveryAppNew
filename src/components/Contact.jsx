// import img from "../asserts/foodImg.jpeg";
import img from "../asserts/foodImg.png";
import { useForm } from "react-hook-form";
import { Box, TextField, Card, Button } from "@mui/material";
let Contact = () => {
  const onSubmit = (data, e) => {
    let storedData = JSON.parse(localStorage.getItem("contactusData")) || [];
    storedData.push(data);
    localStorage.setItem("contactusData", JSON.stringify(storedData));
    console.log(storedData);
    alert("success");
    e.target.reset();
    // navigate("/login");
  };
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: 560,
          width: "100%",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          mt: 2,
          // opacity: 0.8,
        }}
      >
        <Box
          sx={
            {
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // height: "200px",
            }
          }
        >
          <Box
            sx={{
              textAlign: "center",
              fontSize: "30px",
              color: "whitesmoke",
              // fontFamily: "cursive",
              // mt: ,
            }}
          >
            Contact Us
            <Box
              sx={{
                fontSize: "20px",
                mt: 2,
                // fontFamily: "monospace",
              }}
            >
              Want to get in touch? we'd love to hear from you. Here how you can
              reach us...
            </Box>
          </Box>
        </Box>
        <Card
          sx={{
            minHeight: 300,
            width: 400,
            background: "White",
            boxShadow: "1px -1px 5px 0px #3c3e4f",
            padding: 2,
            mt: 5,
          }}
          variant="outlined"
        >
          <Box sx={{ ml: 5 }}>
            <h2>Send Message</h2>
          </Box>
          <Box
            sx={{
              ml: 6,
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{
                width: 300,
                mb: 2,
              }}
              id="standard-basic"
              label="Full Name"
              variant="standard"
              helperText={errors?.fullName?.message}
              error={errors?.fullName}
              {...register("fullName", {
                required: "This is required",
              })}
            />
            <TextField
              sx={{
                width: 300,
                mb: 2,
              }}
              id="standard-basic"
              label="Email"
              variant="standard"
              helperText={errors?.email?.message}
              error={errors?.email}
              {...register("email", {
                required: "This is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "please enter valid email",
                },
              })}
            />
            <TextField
              sx={{
                width: 300,
                // mb: 5,
              }}
              id="standard-basic"
              label="Type Your Message"
              variant="standard"
              helperText={errors?.typeMessage?.message}
              error={errors?.typeMessage}
              {...register("typeMessage", {
                required: "This is required",
              })}
            />
            <Button
              type="submit"
              sx={{ width: 90, background: "#da6517", color: "black", my: 4 }}
              // onClick={loginClick}
            >
              Send
            </Button>
          </Box>
        </Card>
        {/* <Box sx={{ textAlign: "center" }}><h1>Contact Us</Box> */}
      </Box>
    </form>
  );
};

export default Contact;
