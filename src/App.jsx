import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import PagenotFound from "./Components/PagenotFound";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      {/* <RouterProvider router={route}/> */}
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<PagenotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
