import React from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import img from "../asserts/foodImg.png";
import OurMissonImg from "../asserts/ourMissonImg.svg";
// import OurMissonImg from "../asserts/ourmissionImg.svg";
import emilyJohnsonImg from "../asserts/emily.png";
import danielMartinezImg from "../asserts/danielMartinezImg.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// import color from "../../common/color";
// import duolingoLogo from '../asserts/duo.png'
// import CodecovLogo

import logo from "../asserts/logo.jpg";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* what we are  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 1,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            width: "70%",
            //   background: "pink",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "600", mt: 3, color: "white" }}
          >
            Who We Are?
          </Typography>
          <Box sx={{ mt: 0.5, width: "25%" }}>
            <Divider sx={{ border: "2px solid #3E8370" }} />
          </Box>
          <Typography sx={{ width: { sm: "80%" }, mt: 4, color: "white" }}>
            Food delivery website was founded in [year] with a vision to
            revolutionize the real estate industry by providing innovative
            solutions for property showcasing and appointment management. Since
            our inception, we have been committed to empowering real estate
            professionals and property owners to showcase their listings with
            ease and efficiency.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 5,
              justifyContent: "space-around",
              gap: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom , #E4B779, #A0713D)", // Adjusted property name
                WebkitBackgroundClip: "text", // WebKit browsers
                backgroundClip: "text", // Standard syntax
                color: "transparent", // Make text transparent
              }}
            >
              250+
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "600", color: "white" }}>
              Collaboration
            </Typography>
          </Box>

          {/* <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Box
                component="img"
                src={duolingoLogo}
                sx={{ width: { xs: "80px", sm: "100px", md: "130px" } }}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Box
                component="img"
                src={CodecovLogo}
                sx={{ width: { xs: "80px", sm: "100px", md: "130px" } }}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Box
                component="img"
                src={userTestingLogo}
                sx={{ width: { xs: "90px", sm: "100px", md: "130px" } }}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={3}>
              <Box
                component="img"
                src={magicLeapLogo}
                sx={{ width: { xs: "90px", sm: "100px", md: "130px" } }}
              />
            </Grid>
          </Grid> */}
        </Box>
      </Box>
      {/* Our Mission */}
      <Box
        sx={{
          width: { xs: "80%", sm: "90%" },
          mt: 10,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", sm: "none" },
          gap: { xs: 0, sm: 5 },
        }}
      >
        <Box>
          <Box
            component="img"
            src={OurMissonImg}
            sx={{ width: { xs: "100%", sm: "350px" } }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.5, sm: 2.5 },
            p: 3,
            width: { xs: "100%" },
            boxShadow: {
              xs: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
              sm: "none",
            },
            borderRadius: "15px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Our Mission
          </Typography>
          <Typography>
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </Typography>
          <Typography>
            We strive to provide cutting-edge technology solutions that
            streamline the real estate experience for both customers and
            potential dealers.
          </Typography>
          <Box sx={{ display: "flex", gap: { xs: 2, sm: 5 } }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                19k+
              </Typography>
              <Typography>Satisfied Customer</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                25K+
              </Typography>
              <Typography>Years of Experience</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                120k+
              </Typography>
              <Typography>Property Collections</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Our Values  */}
      <Box
        sx={{
          width: { xs: "80%", sm: "90%" },
          mt: 10,
          display: "flex",

          flexDirection: "column",

          textAlign: "center",
        }}
      >
        {/*  Our Values description  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // gap: 1.5,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Our Values
          </Typography>
          <Typography sx={{ width: { xs: "100%", sm: "65%" } }}>
            Food delivery apps make lives easier for customers, as they can
            simply order food from the comfort of their home. For businesses
            operating in the food and beverage sector, having a mobile app helps
            them establish a global presence, adapt to evolving market demands,
            and gather user feedback to improve their offerings
          </Typography>
        </Box>
        {/* Our Values card  */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: { sm: "center", md: "space-between" },
            flexWrap: "wrap",
            gap: 3,
            mt: 5,
          }}
        >
          {/* Excellence card */}
          <Box
            sx={{
              width: { sm: "45%", md: "30%", lg: "30%" },
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card
              sx={{
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    py: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Excellence
                  </Typography>
                  <Typography variant="body1">
                    Committed to excellence, we deliver top-tier services,
                    surpassing client expectations and setting new industry
                    standards.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/* Integrity card */}
          <Box
            sx={{
              width: { sm: "45%", md: "30%", lg: "28%" },
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Card
              sx={{
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    py: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Integrity
                  </Typography>
                  <Typography variant="body1">
                    We conduct business with honesty, transparency, and ethical
                    integrity, building trust with our clients, partners, and
                    colleagues.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
          {/* Customer Focus card */}
          <Box
            sx={{
              width: { sm: "45%", md: "30%", lg: "28%" },
              display: "flex",
              textAlign: "center",
            }}
          >
            <Card
              sx={{
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    py: 3,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Customer Focus
                  </Typography>
                  <Typography variant="body1">
                    We are dedicated to understanding their needs, anticipating
                    their challenges, and delivering solutions that add value to
                    their businesses.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      {/* Daniel Martinez  */}
      <Box
        sx={{
          width: { xs: "80%", sm: "90%" },
          mt: 10,
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          gap: 5,
          // gap: { xs: 0, sm: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.5, sm: 2.5 },
            p: 3,
            width: { xs: "100%", sm: "50%" },
            boxShadow: {
              xs: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
              sm: "none",
            },
            borderRadius: "15px",
          }}
        >
          <Typography sx={{ color: "#da6517" }}>Founder & CEO</Typography>
          <Typography variant="h2">Daniel Martinez</Typography>
          <Typography>
            Daniel Martinez founded InstaShow with a vision to revolutionize
            property showcasing. With a passion for innovation and a drive for
            excellence, Daniel leads the InstaShow team in delivering
            cutting-edge solutions that redefine industry standards. With his
            expertise and leadership, InstaShow continues to push boundaries,
            exceeding client expectations and driving progress in the real
            estate industry.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 5 },
            }}
          >
            <Typography sx={{ color: "#da6517" }}>
              <FacebookIcon />
            </Typography>
            <Typography sx={{ color: "#da6517" }}>|</Typography>

            <Typography sx={{ color: "#da6517" }}>
              <InstagramIcon />
            </Typography>
            <Typography sx={{ color: "#da6517" }}>|</Typography>

            <Typography sx={{ color: "#da6517" }}>
              <YouTubeIcon />
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: { sm: "flex-end" } }}>
          <Box
            component="img"
            src={danielMartinezImg}
            sx={{ width: { xs: "100%", sm: "350px" } }}
          />
        </Box>
      </Box>
      {/* Emily Johnson  */}
      <Box
        sx={{
          width: { xs: "80%", sm: "90%" },
          mt: 10,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          gap: 5,
          // gap: { xs: 0, sm: 10 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Box
            component="img"
            src={emilyJohnsonImg}
            sx={{ width: { xs: "100%", sm: "350px" } }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1.5, sm: 2.5 },
            p: 3,
            width: { xs: "100%", sm: "50%" },
            boxShadow: {
              xs: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0px",
              sm: "none",
            },
            borderRadius: "15px",
          }}
        >
          <Typography sx={{ color: "#da6517" }}>Marketing Manager</Typography>
          <Typography variant="h2">Emily Johnson</Typography>
          <Typography>
            Dedicated to shaping the future of real estate, Daniel Martinez
            founded InstaShow with a vision to revolutionize property
            showcasing. Alongside Daniel, Emily Johnson serves as the Marketing
            Manager at InstaShow, leveraging her expertise to craft strategic
            marketing initiatives. With a focus on driving brand awareness and
            enhancing client engagement, Emily plays a pivotal role in
            positioning InstaShow as a leader in the real estate industry.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 5 },
            }}
          >
            <Typography sx={{ color: "#da6517" }}>
              <FacebookIcon />
            </Typography>
            <Typography sx={{ color: "#da6517" }}>|</Typography>

            <Typography sx={{ color: "#da6517" }}>
              <InstagramIcon />
            </Typography>
            <Typography sx={{ color: "#da6517" }}>|</Typography>

            <Typography sx={{ color: "#da6517" }}>
              <YouTubeIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
