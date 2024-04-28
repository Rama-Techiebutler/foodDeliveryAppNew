import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainProps {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return (
    <Container sx={{ p: "0 !important" }} maxWidth="xl">
      <Box sx={{ background: "white", minHeight: "100vh", width: "100%" }}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default Main;
