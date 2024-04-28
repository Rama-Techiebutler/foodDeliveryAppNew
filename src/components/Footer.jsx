// import React from "react";

// const Footer = () => {
//   return <div>Footer</div>;
// };

// export default Footer;

import React from "react";
// import Font from "../../assets/Font";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
// import img from "../logo.png";
import PlayStoreLogo from "../asserts/PlayStoreLogo.png";
import AppStoreLogo from "../asserts/AppStoreLogo.png";

// import ShareIcon from "../../assets/Image/ShareIcon.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 7, pb: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { sm: "85%", md: "100%", lg: "100%" },
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          alignItems: "center",
          gap: { xs: 3, sm: 0 },
        }}
      >
        {/* 1st box  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { sm: "none", md: "space-around" },
            alignItems: { xs: "center", sm: "flex-start" },
            width: { xs: "90%", md: "50%" },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* 1st part  */}
          <Box>
            {/* <Box component="img" src={img} alt="..." sx={{ height: "40px" }} /> */}

            <Typography
              variant="h6"
              sx={{ my: { xs: 1, md: 1.5 }, fontWeight: "600" }}
            >
              Address
            </Typography>

            <Typography variant="body1">
              789 Queensberry Street, North
              <Typography>Melbourne VIC 3051, Dubai.</Typography>
            </Typography>
          </Box>

          {/* 2nd part */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Popular Search
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // color: color.Quaternary,
                gap: { md: 1 },
                mt: { xs: 1, md: 1.5 },
              }}
            >
              <Typography variant="body1">Apartment for Sale</Typography>
              <Typography variant="body1">Apartment for Rent</Typography>
              <Typography variant="body1">Offices for Sale</Typography>
              <Typography variant="body1">Offices for Rent</Typography>
            </Box>
          </Box>
        </Box>
        {/* 2nd box  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column-reverse", md: "row" },
            justifyContent: { sm: "none", md: "space-around" },
            alignItems: { xs: "center", sm: "flex-start" },
            width: { md: "50%" },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* 1st part  */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Quick Links
            </Typography>
            <Box
              sx={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                gap: { md: 1 },
                mt: { xs: 1, md: 1.5 },
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Terms of Use
              </Typography>
              <Typography
                variant="body1"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/privacy-policy")}
              >
                Privacy Policy
              </Typography>
              <Typography variant="body1">Pricing Plans</Typography>
              <Typography variant="body1">Our Services</Typography>
            </Box>
          </Box>

          {/* 2nd part */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              Keep Yourself Up to Date
            </Typography>
            <TextField
              required
              color="primary"
              id="outlined-required"
              placeholder="Your email"
              // size={isMobile ? "small" : "medium"}
              sx={{
                // width: 240,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1px solid gray", // Change this to the desired color
                  },
                  "&:hover fieldset": {
                    borderColor: "gray", // Change this to the desired hover color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray", // Change this to the desired focus color
                  },
                },
              }}
              // InputProps={{
              //   style: { padding: "0px 7px 0px 0px", borderRadius: "30px" },
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <IconButton>
              //         <Box
              //           component="img"
              //           src={ShareIcon}
              //           sx={{ height: { xs: "38px", md: "36px" } }}
              //         />
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={PlayStoreLogo}
                sx={{ width: "125px" }}
              ></Box>
              <Box
                component="img"
                src={AppStoreLogo}
                sx={{ width: "112px" }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
