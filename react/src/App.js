import Navbar from "./components/landingpage/navbar";
import Home from "./components/landingpage/home";
import Feature from "./components/landingpage/feature";
import Slide from "./components/landingpage/slide";
import Contact from "./components/landingpage/contact";
import Footer from "./components/landingpage/footer";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/crud/header";
import PictureList from "./components/crud/PictureList";
import AddPicture from "./components/crud/AddPictures";
import EditPicture from "./components/crud/EditPictures";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <Feature />
          <Slide />
          <Contact />
          <Footer />
        </>} />

        <Route path="/pictures/*" element={<>

          <Routes>
            <Route path="/" element={<>
              <Header />
              <PictureList />
            </>} />
            <Route path="add" element={<AddPicture/>} />
            <Route path="edit/:id" element={<EditPicture />} />
          </Routes>
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
