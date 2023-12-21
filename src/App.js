import './App.css';
import Root from "./routes/root"
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>
    }
])

function App() {
  return (
      <ChakraProvider>
          <RouterProvider router={router}/>
      </ChakraProvider>
  );
}

export default App;
