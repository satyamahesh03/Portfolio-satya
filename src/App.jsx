import React from 'react';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import RecentWork from "./components/recentWork/recentWork";
import Services from "./components/services/services";
import Skills from './components/skills/skills';
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Education from './components/education/education';

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Education />
        <RecentWork />
        <Services />
        <Contact />
        <Footer />
    </>
  )
}

export default App;