import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AiSoftware from './Pages/AiSoftware';
import Blog from './Pages/Blog';
import ContactUs from './Pages/ContactUs';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='/industries' element={<Home />} /> */}
      <Route path="/aisoftware" element={<AiSoftware />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
}

export default AllRoutes;
