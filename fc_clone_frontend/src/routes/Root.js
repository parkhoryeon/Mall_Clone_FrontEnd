import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header"

function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}

export default Root;
