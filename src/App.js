import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Intro";
import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'

import Portfolio from "./components/Portfolio";
import HomeNav from "./components/Navbar/HomeNav";
import OtherPagesNav from "./components/Navbar/OtherPagesNav";
import NoMatch from "./components/NoMatch";
import Contact from "./components/Contact";

function App() {
  const scrollToTop = () => window.scrollTo(0, 0);
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Navbar scrollToTop={scrollToTop}/>
          <Hero/>
          <Introduction/>
          <Portfolio/>
         <Blogs />
         <Contact/>
        </Route>
        <Route path="/blogs/:id" exact>
        <OtherPagesNav scrollToTop={scrollToTop}/>
          <BlogPost/>
        </Route>
        <Route path="/contact" exact>
        <OtherPagesNav scrollToTop={scrollToTop}/>
          <Contact/>
        </Route>
        <Route path="*">
        <OtherPagesNav scrollToTop={scrollToTop}/>
          <NoMatch/>
        </Route>
        </Switch>

    </Router>
  );
}

export default App;
