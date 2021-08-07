import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Intro";
import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'

import Portfolio from "./components/Portfolio";
import BlogLists from "./components/BlogLists";
import OtherPagesNav from "./components/Navbar/OtherPagesNav";
import NoMatch from "./components/NoMatch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Navbar />
          <Hero/>
          <Introduction/>
          <Portfolio/>
         <Blogs />
         <Contact/>
        </Route>
        <Route path="/blogs/:id" exact>
        <OtherPagesNav />
          <BlogPost/>
        </Route>
        <Route path="*">
        <OtherPagesNav/>
          <NoMatch/>
        </Route>
        </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
