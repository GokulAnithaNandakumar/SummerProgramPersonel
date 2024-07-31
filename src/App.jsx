import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Common/Header';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

import HomePage from './pages/homePage';

import ServicesPage from './pages/servicesPage';
import ProjectPage from './components/ProjectPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route exact path="/projects" element={<ServicesPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  )
}

export default App