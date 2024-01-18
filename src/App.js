import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Course,
  Testimonial,
  OurTeams,
  Error,
} from "./pages/page.js";
import Header from "./components/Header";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="teams" element={<OurTeams />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
